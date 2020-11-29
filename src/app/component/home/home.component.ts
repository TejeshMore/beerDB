import { Component, OnInit } from '@angular/core';
import { RestService, AppService } from 'src/app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   beerSchema = [
    {
      name: "Name : ",
      keyname: "name"
    },
    {
      name: "Style : ",
      keyname: "style"
    },
    {
      name: "Ounces : ",
      keyname: "ounces"
    },
    {
      name: "abv : ",
      keyname: "abv"
    },
    {
      name: "ibu : ",
      keyname: "ibu"
    },
    {
      name: "id : ",
      keyname: "id"
    }];
  beerData;
  imageData;
  currentPage = 1;
  brandname;
  loading = true;

  constructor(
    private restService: RestService,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getBeerDatawithImages();
  }

  getBeerDatawithImages() {
    this.restService
      .get(this.appService.getConfigParam("Beercraft_API"))
        .subscribe((beerdata: any) => {
         this.beerData  = beerdata;
         this.restService
            .get(this.appService.getConfigParam("Beerimages_API"))
               .subscribe( (imagedata: any) => {
                  this.imageData = imagedata;
                  this.loading = false;
               });
        });
  }
}
