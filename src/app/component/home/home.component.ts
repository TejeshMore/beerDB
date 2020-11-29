import { Component, OnInit } from '@angular/core';
import { RestService, AppService } from 'src/app/core/services';
import { FormGroup, FormControl, Validators, FormBuilder,  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  beerData = [
   {
      "abv":"0.05",
      "ibu":"",
      "id":1436,
      "name":"Pub Beer",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2265,
      "name":"Devils Cup",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2264,
      "name":"Rise of the Phoenix",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2263,
      "name":"Sinister",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2262,
      "name":"Sex and Candy",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2261,
      "name":"Black Exodus",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2260,
      "name":"Lake Street Express",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2259,
      "name":"Foreman",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2258,
      "name":"Jade",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2131,
      "name":"Cone Crusher",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2099,
      "name":"Sophomoric Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2098,
      "name":"Regional Ring Of Fire",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2097,
      "name":"Garce Selé",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1980,
      "name":"Troll Destroyer",
      "style":"Belgian IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":1979,
      "name":"Bitter Bitch",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2318,
      "name":"Ginja Ninja",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2170,
      "name":"Cherried Away",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2169,
      "name":"Rhubarbarian",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1502,
      "name":"BrightCider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1593,
      "name":"He Said Baltic-Style Porter",
      "style":"Baltic Porter",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1592,
      "name":"He Said Belgian-Style Tripel",
      "style":"Tripel",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"92",
      "id":1036,
      "name":"Lower De Boom",
      "style":"American Barleywine",
      "ounces":8.4
   },
   {
      "abv":"0.07",
      "ibu":"45",
      "id":1024,
      "name":"Fireside Chat",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":976,
      "name":"Marooned On Hog Island",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":876,
      "name":"Bitter American",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":802,
      "name":"Hell or High Watermelon Wheat (2009)",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":801,
      "name":"Hell or High Watermelon Wheat (2009)",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":800,
      "name":"21st Amendment Watermelon Wheat Beer (2006)",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":799,
      "name":"21st Amendment IPA (2006)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":797,
      "name":"Brew Free! or Die IPA (2008)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":796,
      "name":"Brew Free! or Die IPA (2009)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"52",
      "id":531,
      "name":"Special Edition: Allies Win The War!",
      "style":"English Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"94",
      "id":432,
      "name":"Hop Crisis",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":353,
      "name":"Bitter American (2011)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"45",
      "id":321,
      "name":"Fireside Chat (2010)",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":173,
      "name":"Back in Black",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":11,
      "name":"Monks Blood",
      "style":"Belgian Dark Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":10,
      "name":"Brew Free! or Die IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":9,
      "name":"Hell or High Watermelon Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"82",
      "id":2519,
      "name":"Bimini Twist",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2518,
      "name":"Beach Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2517,
      "name":"Rod Bender Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"11",
      "id":2545,
      "name":"Passion Fruit Prussia",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":2544,
      "name":"Send Help",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2324,
      "name":"Cast Iron Oatmeal Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2288,
      "name":"Reprise Centennial Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2287,
      "name":"Alter Ego",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2286,
      "name":"Divided Sky",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2285,
      "name":"Resurrected",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":1870,
      "name":"Contact High",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2603,
      "name":"Galaxyfest",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2602,
      "name":"Citrafest",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2220,
      "name":"Barn Yeti",
      "style":"Belgian Strong Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2219,
      "name":"Scarecrow",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"50",
      "id":2218,
      "name":"Ironman",
      "style":"English Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":2217,
      "name":"Honey Kolsch",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":2216,
      "name":"Copperhead Amber",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"75",
      "id":972,
      "name":"Rude Parrot IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":866,
      "name":"British Pale Ale (2010)",
      "style":"English Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":48,
      "name":"British Pale Ale",
      "style":"English Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"82",
      "id":47,
      "name":"Ballz Deep Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":1583,
      "name":"Wolfmans Berliner",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":1165,
      "name":"Colorado Native",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":431,
      "name":"Colorado Native (2011)",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"52",
      "id":516,
      "name":"Jockamo IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"13",
      "id":515,
      "name":"Purple Haze",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":514,
      "name":"Abita Amber",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"68",
      "id":2540,
      "name":"Citra Ass Down",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2539,
      "name":"The Brown Note",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"68",
      "id":2686,
      "name":"Citra Ass Down",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.12",
      "ibu":"80",
      "id":2685,
      "name":"London Balling",
      "style":"English Barleywine",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"25",
      "id":2684,
      "name":"35 K",
      "style":"Milk / Sweet Stout",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":2683,
      "name":"A Beer",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":2682,
      "name":"Rules are Rules",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"21",
      "id":2681,
      "name":"Flesh Gourdn",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"13",
      "id":2680,
      "name":"Shonuff",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":2679,
      "name":"Bloody Show",
      "style":"American Pilsner",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"68",
      "id":2678,
      "name":"Rico Sauvin",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"38",
      "id":2677,
      "name":"Coq de la Marche",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2676,
      "name":"Kamen Knuddeln",
      "style":"American Wild Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2675,
      "name":"Pile of Face",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2674,
      "name":"The Brown Note",
      "style":"English Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1594,
      "name":"Maylanis Coconut Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1162,
      "name":"Oatmeal PSA",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":1137,
      "name":"Pre Flight Pilsner",
      "style":"American Pilsner",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":2403,
      "name":"P-Town Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":2402,
      "name":"Klickitat Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"103",
      "id":2401,
      "name":"Yellow Wolf Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1921,
      "name":"Freeride APA",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1920,
      "name":"Alaskan Amber",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2501,
      "name":"Hopalicious",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1535,
      "name":"Kentucky Kölsch",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1149,
      "name":"Kentucky IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1474,
      "name":"Dusty Trail Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1473,
      "name":"Damnesia",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"43",
      "id":837,
      "name":"Desolation IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2592,
      "name":"Liberty Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2578,
      "name":"IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2577,
      "name":"Summer Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2103,
      "name":"California Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2102,
      "name":"Brotherhood Steam",
      "style":"California Common / Steam Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2291,
      "name":"Blood Orange Gose",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1818,
      "name":"Keebarlin Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1738,
      "name":"the Kimmie, the Yink and the Holy Gose",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1563,
      "name":"Fall Hornin",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"13",
      "id":1520,
      "name":"Barney Flats Oatmeal Stout",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"4",
      "id":1350,
      "name":"Summer Solstice",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":1327,
      "name":"Hop Ottin IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1326,
      "name":"Boont Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"13",
      "id":1221,
      "name":"Barney Flats Oatmeal Stout",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1217,
      "name":"El Steinber Dark Lager",
      "style":"Vienna Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":811,
      "name":"Boont Amber Ale (2010)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"4",
      "id":753,
      "name":"Summer Solstice Cerveza Crema (2009)",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"13",
      "id":572,
      "name":"Barney Flats Oatmeal Stout (2012)",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"6",
      "id":523,
      "name":"Winter Solstice",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":367,
      "name":"Hop Ottin IPA (2011)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":78,
      "name":"Boont Amber Ale (2011)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"4",
      "id":77,
      "name":"Summer Solstice (2011)",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":76,
      "name":"Poleeko Gold Pale Ale (2009)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2337,
      "name":"Charlies Rye IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":410,
      "name":"River Pig Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":409,
      "name":"Oakys Oatmeal Stout",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1294,
      "name":"Angry Orchard Apple Ginger",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1293,
      "name":"Angry Orchard Crisp Apple",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1292,
      "name":"Angry Orchard Crisp Apple",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2207,
      "name":"Golden One",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2040,
      "name":"Arjuna",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2039,
      "name":"Uroboros",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2511,
      "name":"Long Leaf",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"19",
      "id":2510,
      "name":"Honey Badger Blonde",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"23",
      "id":2509,
      "name":"Porter (a/k/a Black Gold Porter)",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":413,
      "name":"Sky High Rye",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"17",
      "id":390,
      "name":"Whitsun",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":735,
      "name":"On-On Ale (2008)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"50",
      "id":1333,
      "name":"Quakertown Stout",
      "style":"American Double / Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1332,
      "name":"Greenbelt Farmhouse Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":1172,
      "name":"Mos Gose",
      "style":"Gose",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"45",
      "id":1322,
      "name":"Green Bullet Organic India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"27",
      "id":550,
      "name":"Rocket Girl",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":429,
      "name":"Ninja Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":428,
      "name":"Shiva IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1640,
      "name":"Aslan Kölsch",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1639,
      "name":"Aslan IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1638,
      "name":"Aslan Amber",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":597,
      "name":"This Seasons Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"67",
      "id":596,
      "name":"Independence Pass Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1580,
      "name":"Trolley Stop Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"138",
      "id":980,
      "name":"Bitter Bitch Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":979,
      "name":"Poop Deck Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":978,
      "name":"Old Red Beard Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"115",
      "id":2503,
      "name":"Hop A-Peel",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":2502,
      "name":"Vanilla Java Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2495,
      "name":"Michelada",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":534,
      "name":"Dirty Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"62",
      "id":528,
      "name":"Grand Circus IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":527,
      "name":"Atwaters Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1409,
      "name":"Heavy Machinery IPA Series #1: Heavy Fist",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":343,
      "name":"Fire Eagle IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":342,
      "name":"Peacemaker",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":341,
      "name":"Pearl-Snap",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":340,
      "name":"Black Thunder",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2589,
      "name":"Raja",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2546,
      "name":"Perzik Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":146,
      "name":"Avery Joe’s Premium American Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":108,
      "name":"White Rascal",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":107,
      "name":"Avery India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":106,
      "name":"Ellie’s Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"17",
      "id":1620,
      "name":"Pumpkin Beast",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"22",
      "id":1579,
      "name":"OktoberBeast",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"23",
      "id":1228,
      "name":"Mad Beach",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":705,
      "name":"Hog Wild India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"5",
      "id":704,
      "name":"Devils Tramping Ground Tripel",
      "style":"Tripel",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"41",
      "id":702,
      "name":"Hot Rod Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2058,
      "name":"Palate Mallet",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1483,
      "name":"Back East Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1426,
      "name":"Back East Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1132,
      "name":"Misty Mountain IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1131,
      "name":"Back East Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1876,
      "name":"Truck Stop Honey Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"43",
      "id":1875,
      "name":"Naked Pig Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":966,
      "name":"Topcutter India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"38",
      "id":965,
      "name":"Field 41 Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2593,
      "name":"Grapefruit Sculpin",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"40",
      "id":2105,
      "name":"Even Keel",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":1401,
      "name":"Ballast Point Pale Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":1400,
      "name":"Big Eye India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1019,
      "name":"Longfin Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1018,
      "name":"Sculpin IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1776,
      "name":"All Nighter Ale",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1644,
      "name":"Banner American Rye",
      "style":"Rye Beer",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"45",
      "id":1643,
      "name":"Banner American Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"46",
      "id":2618,
      "name":"Thai.p.a",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":2005,
      "name":"Barrio Blanco",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1343,
      "name":"Barrio Tucson Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":2404,
      "name":"Hop in the ‘Pool Helles",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":2323,
      "name":"Ultra Gnar Gnar IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"62",
      "id":2189,
      "name":"In-Tents India Pale Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2188,
      "name":"Lost Meridian Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2187,
      "name":"Celestial Meridian Cascadian Dark Lager",
      "style":"Euro Dark Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1966,
      "name":"Wagon Party",
      "style":"California Common / Steam Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1965,
      "name":"Sky-Five",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":1964,
      "name":"Stargrazer",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"48",
      "id":1963,
      "name":"Wonderstuff",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1855,
      "name":"Tarnation California-Style Lager",
      "style":"California Common / Steam Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"42",
      "id":1778,
      "name":"On the Count of 3 (2015)",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1209,
      "name":"Summer Swelter",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":954,
      "name":"Phantom Punch Winter Stout",
      "style":"Foreign / Export Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":910,
      "name":"Hayride Autumn Ale",
      "style":"Rye Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":707,
      "name":"Celsius Summer Ale (2012)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":533,
      "name":"Amber Road",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":183,
      "name":"Pamola Xtra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":182,
      "name":"Stowaway IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"108",
      "id":1806,
      "name":"Hoptopus Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":2435,
      "name":"Watermelon Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2423,
      "name":"Fenway American Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"85",
      "id":2420,
      "name":"Back Bay IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":2419,
      "name":"Bunker Hill Blueberry Ale ",
      "style":"Other",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2494,
      "name":"Oberon",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2325,
      "name":"Smitten",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2022,
      "name":"Winter White",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1989,
      "name":"Oberon",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1988,
      "name":"Two Hearted",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1955,
      "name":"Best Brown",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"44",
      "id":2558,
      "name":"Moar",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2557,
      "name":"Uber Lupin Schwarz IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":2556,
      "name":"Nordic Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2496,
      "name":"Cold Press",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"87",
      "id":2410,
      "name":"Harness the Winter",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":1902,
      "name":"14° ESB ",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"68",
      "id":1901,
      "name":"Bent Hop Golden IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"34",
      "id":1261,
      "name":"Bent Paddle Black Ale",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"38",
      "id":1253,
      "name":"Venture Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1900,
      "name":"Lost Sailor IPA",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1317,
      "name":"Steel Rail Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1158,
      "name":"La Frontera Premium IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1157,
      "name":"Tejas Lager",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1156,
      "name":"Number 22 Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1155,
      "name":"Big Bend Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1154,
      "name":"Terlingua Gold",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"17",
      "id":2104,
      "name":"Aprè Shred",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"104",
      "id":1762,
      "name":"Hemlock Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1422,
      "name":"West Portal Colorado Common Summer Ale",
      "style":"California Common / Steam Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"85",
      "id":1067,
      "name":"Disconnected Red",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1003,
      "name":"Big Elm IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1002,
      "name":"Gerry Dog Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1001,
      "name":"413 Farmhouse Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"54",
      "id":2639,
      "name":"Dark Star",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2469,
      "name":"Ryecoe",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2586,
      "name":"Blueberry Blonde",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":2585,
      "name":"Galaxy IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":643,
      "name":"Big River Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":632,
      "name":"House Brand IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1714,
      "name":"Big Sky IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1713,
      "name":"Scape Goat Pale Ale",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1712,
      "name":"Montana Trout Slayer Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":1711,
      "name":"Moose Drool Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1456,
      "name":"Powder Hound Winter Ale",
      "style":"English Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":767,
      "name":"Moose Drool Brown Ale (2011)",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":766,
      "name":"Montana Trout Slayer Ale (2012)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":579,
      "name":"Big Sky IPA (2012)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":168,
      "name":"Summer Honey",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":159,
      "name":"Scape Goat Pale Ale (2010)",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":35,
      "name":"Montana Trout Slayer Ale (2009)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":34,
      "name":"Moose Drool Brown Ale (2009)",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"81",
      "id":2096,
      "name":"Arcus IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"38",
      "id":2095,
      "name":"Wavemaker",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"43",
      "id":1257,
      "name":"Jack Pine Savage",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":1256,
      "name":"Forest Fire Imperial Smoked Rye",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"76",
      "id":1255,
      "name":"Bad Axe Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":986,
      "name":"Morning Wood",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"50",
      "id":985,
      "name":"Bark Bite IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2508,
      "name":"Jalapeno Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1441,
      "name":"Blown Out Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1413,
      "name":"Single Hop Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1411,
      "name":"Sawtooth Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2620,
      "name":"Saucy Intruder",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":2412,
      "name":"Deception",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"35",
      "id":1898,
      "name":"Blackmarket Rye IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"8",
      "id":1897,
      "name":"Black Market Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"44",
      "id":1896,
      "name":"Aftermath Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"83",
      "id":1850,
      "name":"American India Red Ale",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"45",
      "id":1849,
      "name":"American Red Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"34",
      "id":1848,
      "name":"American Red Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"44",
      "id":1847,
      "name":"Colorado Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":2485,
      "name":"Saddle Bronc Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":2484,
      "name":"Bomber Mountain Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2449,
      "name":"Flying Sailor",
      "style":"Rye Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"47",
      "id":2634,
      "name":"Nordskye ",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":2153,
      "name":"North Third Stout",
      "style":"Foreign / Export Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1953,
      "name":"Honey Lav",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1496,
      "name":"Coconut Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"51",
      "id":1481,
      "name":"51K IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1480,
      "name":"Grand Rabbits",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1564,
      "name":"1800 Big Log Wheat (2012)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1541,
      "name":"Double Play Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1321,
      "name":"Brewerhood Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1320,
      "name":"Last Call Imperial Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1319,
      "name":"Pernicious Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1303,
      "name":"6-4-3 Double Play Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1025,
      "name":"N Street Drive-In 50th Anniversary IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1012,
      "name":"467 Ethans Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":942,
      "name":"1335 Wicked Snout",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":937,
      "name":"543 Skull Creek Fresh Hopped Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":888,
      "name":"1327 Pods ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":886,
      "name":"1327 Pods ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":612,
      "name":"1327 Pods ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":611,
      "name":"834 Happy As Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1372,
      "name":"Yellow Collar",
      "style":"Mead",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1371,
      "name":"Green Collar",
      "style":"Mead",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"80",
      "id":1812,
      "name":"Quarter Mile Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":1547,
      "name":"Full Nelson Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":1546,
      "name":"Steel Wheels ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":1545,
      "name":"Blue Mountain Classic Lager",
      "style":"Euro Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":119,
      "name":"Full Nelson Pale Ale (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":1408,
      "name":"Kölsch 151",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2490,
      "name":"Professor Black",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2489,
      "name":"Little Boss",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2488,
      "name":"Van Dayum!",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2487,
      "name":"Spirit Animal",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":939,
      "name":"Toxic Sludge",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"40",
      "id":692,
      "name":"Blue Point White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":667,
      "name":"Blue Point Summer Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":665,
      "name":"Toasted Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1607,
      "name":"Bohemian Export Lager",
      "style":"Dortmunder / Export Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1597,
      "name":"Altus Bohemes Altbier",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":344,
      "name":"Cherny Bock",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":89,
      "name":"Czech Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":88,
      "name":"Viennese Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1569,
      "name":"Mad Manatee IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1568,
      "name":"Killer Whale Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1188,
      "name":"Dukes Cold Nose Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1891,
      "name":"Longhop IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"34",
      "id":1890,
      "name":"Lucky Buck",
      "style":"Irish Dry Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":577,
      "name":"Bomb Lager (New Recipe)",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"27",
      "id":513,
      "name":"Bomb Lager (Old Recipe)",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"72",
      "id":2422,
      "name":"Firestarter India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"22",
      "id":1727,
      "name":"Kilt Dropper Scotch Ale",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1614,
      "name":"Wood Splitter Pilsner",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":1613,
      "name":"Gyptoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"94",
      "id":1549,
      "name":"Farmer Wirtz India Pale Ale",
      "style":"English India Pale Ale (IPA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1548,
      "name":"Slow & Steady Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1517,
      "name":"Pink-I Raspberry IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1500,
      "name":"Moes Original Bar B Que Bama Brew Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1421,
      "name":"Live Local Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"38",
      "id":1360,
      "name":"Screaming Eagle Special Ale ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1184,
      "name":"Dirtbag Dunkel",
      "style":"Munich Dunkel Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":1183,
      "name":"Kindler Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1023,
      "name":"Mistress Winter Wheat",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":998,
      "name":"Tent Pole Vanilla Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":997,
      "name":"Awry Rye Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":996,
      "name":"Demshitz Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":931,
      "name":"Wood Splitter Pilsner (2012)",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":798,
      "name":"Brush Creek Blonde",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"72",
      "id":633,
      "name":"Firestarter India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"16",
      "id":2062,
      "name":"Noche Dulce",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":1830,
      "name":"Porch Rocker",
      "style":"Radler",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":1629,
      "name":"Rebel IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1601,
      "name":"Cold Snap",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1427,
      "name":"Samuel Adams Winter Lager",
      "style":"Bock",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1349,
      "name":"Boston Lager",
      "style":"Vienna Lager",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1310,
      "name":"Boston Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1281,
      "name":"Samuel Adams Octoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"7",
      "id":1144,
      "name":"Samuel Adams Summer Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1143,
      "name":"Boston Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":1395,
      "name":"Hazed & Infused",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":808,
      "name":"Hoopla Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":81,
      "name":"Hazed & Infused (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"80",
      "id":2596,
      "name":"Heavy Lifting",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2300,
      "name":"1492",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2299,
      "name":"Mango Ginger",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2298,
      "name":"Passenger",
      "style":"English Dark Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"52",
      "id":2107,
      "name":"Plum St. Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"52",
      "id":1573,
      "name":"Plum St. Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":1289,
      "name":"Bozone HopZone IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"25",
      "id":1288,
      "name":"Bozone Hefe Weizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":470,
      "name":"Bozone Select Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2167,
      "name":"Evil Owl",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2204,
      "name":"Post Time Kölsch",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":1522,
      "name":"Agave Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":397,
      "name":"SummerBright Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"68",
      "id":193,
      "name":"Lucky U IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"19",
      "id":83,
      "name":"Avalanche Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1802,
      "name":"Youre My Boy, Blue",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1801,
      "name":"Last Stop IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":1800,
      "name":"Rollin Dirty Red Ale",
      "style":"Irish Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":1799,
      "name":"Are Wheat There Yet?",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2619,
      "name":"Insert Hop Reference",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2468,
      "name":"Manitou Amber",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2637,
      "name":"Belfort",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2636,
      "name":"Star Runner",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2598,
      "name":"Tart Side of the Barrel",
      "style":"American Double / Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2597,
      "name":"Linnaeus Mango IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2548,
      "name":"Beasts ABurnin",
      "style":"Rauchbier",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2542,
      "name":"Verdun",
      "style":"Bière de Garde",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2541,
      "name":"Barrel Aged Triomphe",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2504,
      "name":"Cherry Doppelbock",
      "style":"Doppelbock",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2500,
      "name":"Tropical Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2499,
      "name":"Beach Patrol",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2498,
      "name":"Nuit Serpent",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2481,
      "name":"Paris",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2476,
      "name":"The Grand Army",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2467,
      "name":"Acidulated Trip",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2466,
      "name":"Root Stock",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2465,
      "name":"Mind Games",
      "style":"Dunkelweizen",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2433,
      "name":"Sous Chef",
      "style":"Belgian Strong Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2418,
      "name":"Dubbelicious",
      "style":"Dubbel",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2416,
      "name":"Psychopomp",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2382,
      "name":"Fat Paczki",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2381,
      "name":"Earth-Like Planets",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2290,
      "name":"Ski Patrol",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2241,
      "name":"Viking Ice Hole",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2240,
      "name":"Rye Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2137,
      "name":"Wizard Burial Ground",
      "style":"Quadrupel (Quad)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2101,
      "name":"Smoky Wheat",
      "style":"Rauchbier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2092,
      "name":"BRIPA",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2091,
      "name":"Mela",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2086,
      "name":"W.I.P.A Snappa",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2023,
      "name":"Pepper in the Rye",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2006,
      "name":"Moe Lasses",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1997,
      "name":"Pumpkin Tart",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1977,
      "name":"Undertaker",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1976,
      "name":"Undertaker (2014)",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1974,
      "name":"Coq DOr",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1973,
      "name":"North French",
      "style":"Bière de Garde",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1959,
      "name":"Agent a Deux",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1958,
      "name":"Belgian Wit",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1949,
      "name":"Pothole Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1947,
      "name":"Tree Bucket",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1785,
      "name":"Le Flaneur Ale",
      "style":"American Wild Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1651,
      "name":"Maize & Blueberry",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1443,
      "name":"Trebuchet Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1352,
      "name":"Contemplation",
      "style":"Bière de Garde",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1267,
      "name":"Black Rabbit",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1266,
      "name":"Zaison",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1178,
      "name":"Vivant Tripel",
      "style":"Tripel",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1136,
      "name":"Tart Side of the Moon",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1044,
      "name":"Big Red Coq",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1033,
      "name":"Hubris Quadrupel Anniversary Ale",
      "style":"Quadrupel (Quad)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1031,
      "name":"Plow Horse Belgian Style Imperial Stout",
      "style":"American Double / Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":909,
      "name":"Escoffier Bretta Ale",
      "style":"American Wild Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":873,
      "name":"Contemplation (2012)",
      "style":"Bière de Garde",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":860,
      "name":"Vivant Belgian Style Imperial Stout (2012)",
      "style":"Russian Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":677,
      "name":"Big Red Coq (2012)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":671,
      "name":"Zaison (2012)",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":670,
      "name":"Vivant Tripel (2012)",
      "style":"Tripel",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":669,
      "name":"Trebuchet Double IPA (2012)",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":627,
      "name":"Kludde",
      "style":"Belgian Strong Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":387,
      "name":"Farm Hand",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":385,
      "name":"Solitude",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":384,
      "name":"Triomphe",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1096,
      "name":"Tampa Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1095,
      "name":"Orange Grove Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2456,
      "name":"Broad Brook Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":921,
      "name":"Northern Lights Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":920,
      "name":"Polar Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":919,
      "name":"Chugach Session Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"64",
      "id":648,
      "name":"Fairweather IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"47",
      "id":1279,
      "name":"East India Pale Ale",
      "style":"English India Pale Ale (IPA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":756,
      "name":"Brooklyn Summer Ale",
      "style":"English Pale Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"47",
      "id":566,
      "name":"East India Pale Ale",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":328,
      "name":"Brooklyn Summer Ale (2011)",
      "style":"English Pale Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":66,
      "name":"Brooklyn Lager (16 oz.)",
      "style":"American Amber / Red Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":65,
      "name":"Brooklyn Lager (12 oz.)",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":538,
      "name":"Tour de Nez Belgian IPA (Current)",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":504,
      "name":"Roler Bock (Current)",
      "style":"Maibock / Helles Bock",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":383,
      "name":"Black Adder IBA (Current)",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":29,
      "name":"Very Noddy Lager (Current)",
      "style":"Schwarzbier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"42",
      "id":28,
      "name":"Tule Duck Red Ale (Current)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":27,
      "name":"Original Orange Blossom Ale (Current)",
      "style":"Herbed / Spiced Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":26,
      "name":"Black Noddy Lager (Current)",
      "style":"Schwarzbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1627,
      "name":"Cleveland Beer Week 2013",
      "style":"Munich Helles Lager",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2552,
      "name":"Painted Turtle",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"40",
      "id":2125,
      "name":"1836",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":2124,
      "name":"Summers Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"118",
      "id":2123,
      "name":"More Cowbell",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2608,
      "name":"Wrath of Pele",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2607,
      "name":"Black Beerd",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2606,
      "name":"Mr. Tea",
      "style":"Fruit / Vegetable Beer",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2478,
      "name":"Pale Alement",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"115",
      "id":2471,
      "name":"Hopkick Dropkick",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2470,
      "name":"Kreamed Corn",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2464,
      "name":"Coconoats",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"16",
      "id":2160,
      "name":"Joey Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"86",
      "id":2158,
      "name":"3:33 Black IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2072,
      "name":"MCA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2054,
      "name":"Pale Alement",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"14",
      "id":2196,
      "name":"Couch Select Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":668,
      "name":"Mucho Aloha Hawaiian Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":52,
      "name":"Heinnieweisse Weissebier",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":51,
      "name":"Snapperhead IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":50,
      "name":"Moo Thunder Stout",
      "style":"Milk / Sweet Stout",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":49,
      "name":"Porkslap Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2657,
      "name":"Blackbeard",
      "style":"American Double / Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2656,
      "name":"Rye Knot",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2655,
      "name":"Dead Arm",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2654,
      "name":"32°/50° Kölsch ",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2653,
      "name":"HopArt",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2652,
      "name":"Boy King",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2252,
      "name":"Gran Sport",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":2214,
      "name":"Horny Toad Cerveza",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":2213,
      "name":"Native Amber",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"100",
      "id":1442,
      "name":"F5 IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":170,
      "name":"Native Amber (2013)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":169,
      "name":"Horny Toad Cerveza (2013)",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"100",
      "id":2315,
      "name":"Hopportunity Knocks IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1808,
      "name":"Pilot Rock Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1419,
      "name":"Caldera Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"16",
      "id":878,
      "name":"Lawnmower Lager",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":794,
      "name":"Ashland Amber Ale (2009)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"94",
      "id":793,
      "name":"Caldera IPA (2009)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"94",
      "id":792,
      "name":"Caldera IPA (2007)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":791,
      "name":"Caldera Pale Ale (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":790,
      "name":"Caldera Pale Ale (2009)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":789,
      "name":"Caldera Pale Ale (2005)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":788,
      "name":"Caldera Pale Ale (2007)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":38,
      "name":"Caldera Pale Ale (2011)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":37,
      "name":"Ashland Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"94",
      "id":36,
      "name":"Caldera IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2257,
      "name":"Remain in Light",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2256,
      "name":"Flower Child (2014)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":870,
      "name":"THP White (2006)",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":869,
      "name":"THP Amber (2006)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":868,
      "name":"THP Light (2006)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":867,
      "name":"THP Dark (2006)",
      "style":"English Dark Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"43",
      "id":2068,
      "name":"Imperial Pumpkin Stout",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"130",
      "id":2067,
      "name":"Dead-Eye DIPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"64",
      "id":2066,
      "name":"Fishermans IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2065,
      "name":"Fishermans Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2064,
      "name":"Fishermans Brew",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1928,
      "name":"Cape Cod Red",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"10",
      "id":1927,
      "name":"Beach Blonde",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"80",
      "id":2227,
      "name":"Dark Voyage Black IPA (2013)",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":2226,
      "name":"Wisconsin Amber",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":2225,
      "name":"Lake House",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1954,
      "name":"Ghost Ship White IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1910,
      "name":"Lake House",
      "style":"Munich Helles Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1177,
      "name":"Mutiny IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":840,
      "name":"Wisconsin Amber (1998)",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":180,
      "name":"Island Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":63,
      "name":"Wisconsin Amber (2013)",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":62,
      "name":"U.S. Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":61,
      "name":"Supper Club Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":784,
      "name":"Carolina Lighthouse (2007)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":783,
      "name":"Carolina Blonde (2006)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":782,
      "name":"Carolina Blonde Light (2005)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":2255,
      "name":"Santas Secret",
      "style":"Winter Warmer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":530,
      "name":"Flagship IPA",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":427,
      "name":"Sky Blue Golden Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"100",
      "id":2094,
      "name":"Epitome",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"9",
      "id":1941,
      "name":"Monkey Chased the Weasel",
      "style":"Berliner Weissbier",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":1940,
      "name":"077XX",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":1439,
      "name":"Boat Beer",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1465,
      "name":"Granny Smith Hard Apple Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1464,
      "name":"Dry Hard Apple Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1744,
      "name":"Farmer Teds Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1743,
      "name":"Firewater India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1742,
      "name":"White Zombie Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1719,
      "name":"King Winterbolt Winter Ale",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":638,
      "name":"White Zombie Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":507,
      "name":"Firewater India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":480,
      "name":"Farmer Teds Farmhouse Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":1882,
      "name":"Whitecap Wit",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"16",
      "id":1881,
      "name":"Seiche Scottish Ale",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2446,
      "name":"Peanut Butter Jelly Time",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2106,
      "name":"King Coconut",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"90",
      "id":2600,
      "name":"Gone A-Rye",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2210,
      "name":"Special Release",
      "style":"",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":2052,
      "name":"Dankosaurus",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1584,
      "name":"Scruffys Smoked Alt",
      "style":"Smoked Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":1182,
      "name":"Elliotts Phoned Home Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1050,
      "name":"The Lawn Ranger",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1219,
      "name":"All American Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1218,
      "name":"All American Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2377,
      "name":"Main St. Virginia Ale",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"24",
      "id":1839,
      "name":"Chin Music Amber Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1248,
      "name":"Main St. Virginia Ale",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":1247,
      "name":"Ray Ray’s Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1649,
      "name":"Chai Ale",
      "style":"Herbed / Spiced Beer",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":1648,
      "name":"Lucky Day IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"99",
      "id":1647,
      "name":"Terrace Hill Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"77",
      "id":1646,
      "name":"Catch 23",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2057,
      "name":"Stickin In My Rye",
      "style":"Rye Beer",
      "ounces":24.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":2056,
      "name":"Black Me Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":2055,
      "name":"Killer Kolsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":1933,
      "name":"Missile IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2019,
      "name":"Enlighten",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"8",
      "id":2018,
      "name":"Ale Cider",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2017,
      "name":"Pail Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2016,
      "name":"Englishman",
      "style":"English Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"69",
      "id":2080,
      "name":"8 Barrel",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2079,
      "name":"Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"58",
      "id":2380,
      "name":"IPA #11",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":2379,
      "name":"Blood Orange Honey",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2354,
      "name":"Lighthouse Amber",
      "style":"Altbier",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"126",
      "id":2440,
      "name":"Bay of Bengal Double IPA (2014)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"29",
      "id":567,
      "name":"Churchkey Pilsner Style Beer",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1342,
      "name":"First Press",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1341,
      "name":"Magic Apple",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":2349,
      "name":"Cubano Espresso",
      "style":"Bock",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2014,
      "name":"Operation Homefront",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"65",
      "id":2013,
      "name":"Wandering Pelican",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2012,
      "name":"Sugar Plum",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2011,
      "name":"Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2010,
      "name":"Puppys Breath Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2009,
      "name":"Happening Now",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1726,
      "name":"Hopped on the High Seas (Hop #529)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1725,
      "name":"Hopped on the High Seas (Calypso)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1695,
      "name":"Wiregrass Post-Prohibition Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1694,
      "name":"Dry-Hopped On The High Seas Caribbean-Style IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1693,
      "name":"Hopped on the High Seas (Citra)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1692,
      "name":"Hopped on the High Seas (Ahtanum)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1369,
      "name":"Gwar Beer",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1243,
      "name":"Tropical Heatwave",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1142,
      "name":"Humidor Series India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1141,
      "name":"Jai Alai IPA Aged on White Oak",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"65",
      "id":1140,
      "name":"José Martí American Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1139,
      "name":"Invasion Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1138,
      "name":"Maduro Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":571,
      "name":"Maduro Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":570,
      "name":"Hotter Than Helles Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":569,
      "name":"Tocobaga Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":546,
      "name":"Jai Alai IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":545,
      "name":"Florida Cracker Belgian Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2338,
      "name":"Shark Tracker Light lager",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1365,
      "name":"Pumple Drumkin",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1094,
      "name":"Grey Lady",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":657,
      "name":"Summer of Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":656,
      "name":"Indie Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":359,
      "name":"Sankaty Light Lager",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":56,
      "name":"Whales Tale Pale Ale",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":1772,
      "name":"Jacaranada Rye IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":1393,
      "name":"Cascadian Dark Ale",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"13",
      "id":893,
      "name":"Wheat the People",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":1407,
      "name":"Tybee Island Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":1406,
      "name":"Savannah Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"11",
      "id":2438,
      "name":"Rhode Island Blueberry",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2437,
      "name":"Newport Storm IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":751,
      "name":"Hurricane Amber Ale (2004)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":120,
      "name":"Hurricane Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2061,
      "name":"Big Blue Van",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":970,
      "name":"Des Moines IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":969,
      "name":"Capital Gold Golden Lager",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":968,
      "name":"Farmer Johns Multi-Grain Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2351,
      "name":"Behemoth",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1650,
      "name":"Arkansas Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1337,
      "name":"Core Oatmeal Stout",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1336,
      "name":"Core ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":737,
      "name":"Chesters Beer (2005)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":129,
      "name":"Heiner Brau Kölsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":716,
      "name":"Trigger Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"29",
      "id":659,
      "name":"Crabtree Oatmeal Stout",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"71",
      "id":556,
      "name":"Eclipse Black IPA",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"46",
      "id":2538,
      "name":"Neomexicanus Native",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"25",
      "id":2355,
      "name":"Old Soul",
      "style":"Belgian Strong Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1689,
      "name":"Snowcat Coffee Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1163,
      "name":"WinterWonderGrass Festival Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":940,
      "name":"Boohai Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":685,
      "name":"Lava Lake Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":613,
      "name":"Mountain Livin Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":356,
      "name":"Crazy Mountain Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2029,
      "name":"Tropicalia",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2028,
      "name":"Athena",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":2293,
      "name":"Aviator Raspberry Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1105,
      "name":"3 Picket Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1104,
      "name":"Rusty Nail Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2145,
      "name":"Red Water Irish Style Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1804,
      "name":"Mjöllnir",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1602,
      "name":"Bear Butte Nut Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1301,
      "name":"Easy Livin Summer Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":542,
      "name":"Canyon Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":272,
      "name":"Pile ODirt Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":271,
      "name":"11th Hour IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"31",
      "id":1057,
      "name":"South Ridge Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":681,
      "name":"Summertime Ale",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1789,
      "name":"Lost River Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1788,
      "name":"Monon Wheat",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1787,
      "name":"Floyds Folly",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1786,
      "name":"Half Court IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1763,
      "name":"Gearys Pale Ale",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1311,
      "name":"Gearys Summer Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2078,
      "name":"Stone of Arbroath",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1809,
      "name":"The Tradition",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":1263,
      "name":"El Hefe Speaks",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1092,
      "name":"Penn Quarter Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"115",
      "id":851,
      "name":"On the Wings of Armageddon",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"80",
      "id":186,
      "name":"The Corruption",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":185,
      "name":"The Citizen",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":184,
      "name":"The Public",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1224,
      "name":"Dank IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":964,
      "name":"Dank IPA (2012)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1623,
      "name":"Lift Off IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":110,
      "name":"BrewFarm Select Golden Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1735,
      "name":"Sprocket Blonde Ale (2006)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1734,
      "name":"Sprocket Pale Ale (2006)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"37",
      "id":1746,
      "name":"Dead Armadillo Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2371,
      "name":"Neato Bandito",
      "style":"Euro Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"33",
      "id":2251,
      "name":"Oak Cliff Coffee Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":2166,
      "name":"Dream Crusher Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1827,
      "name":"Deep Ellum Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1203,
      "name":"Double Brown Stout",
      "style":"Baltic Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":1202,
      "name":"Farmhouse Wit",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1161,
      "name":"Rye Pils Session Lager",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":946,
      "name":"Dallas Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":943,
      "name":"Deep Ellum IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"44",
      "id":1886,
      "name":"Thrasher Session India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":1885,
      "name":"Gutch English Style Mild Ale",
      "style":"English Pale Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1213,
      "name":"Chuli Stout",
      "style":"Irish Dry Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"46",
      "id":1159,
      "name":"Mother Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"71",
      "id":947,
      "name":"Twister Creek India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"46",
      "id":929,
      "name":"Single Engine Red",
      "style":"Irish Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1944,
      "name":"Incredible Pedal IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1943,
      "name":"Graham Cracker Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1210,
      "name":"Mirror Pond Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":2550,
      "name":"Weissenheimer",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":2505,
      "name":"Abbeys Single (2015- )",
      "style":"Abbey Single Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"76",
      "id":2025,
      "name":"Vertex IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":2021,
      "name":"Here Gose Nothin",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2015,
      "name":"Strawberry Blonde",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":1888,
      "name":"Hoperation Overload",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":1887,
      "name":"Abbeys Single Ale (Current)",
      "style":"Abbey Single Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"45",
      "id":2051,
      "name":"Bravo Four Point",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":1201,
      "name":"Striped Bass Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":924,
      "name":"Deadicated Amber",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":731,
      "name":"Kaleidoscope Collaboration 2012",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":730,
      "name":"California Sunshine Rye IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"12",
      "id":647,
      "name":"Full Boar Scotch Ale",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1773,
      "name":"12 Man Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"72",
      "id":1795,
      "name":"Filthy Hoppin IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":944,
      "name":"Dock Street Amber Beer (1992)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":524,
      "name":"Dolores River Hefeweizen",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":450,
      "name":"Dolores River ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":449,
      "name":"Snaggletooth Double Pale Ale",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":448,
      "name":"Dolores River Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":447,
      "name":"Dolores River Dry Stout",
      "style":"Irish Dry Stout",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":446,
      "name":"Dolores River Mild",
      "style":"English Dark Mild Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1246,
      "name":"Cranberry Blend",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":977,
      "name":"Orignal Blend",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"100",
      "id":881,
      "name":"Hop Abomination",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":880,
      "name":"Apricot Blonde",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":872,
      "name":"Dry Dock Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"49",
      "id":871,
      "name":"Dry Dock Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"64",
      "id":1685,
      "name":"Category 3 IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":457,
      "name":"Dundee Summer Wheat Beer",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1590,
      "name":"Pumpkin Patch Ale",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"74",
      "id":1382,
      "name":"Crank Yanker IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1110,
      "name":"River Runners Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1014,
      "name":"Pumpkin Patch Ale (2012)",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":911,
      "name":"Mountain Fairy Raspberry Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":680,
      "name":"Boater Beer",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"74",
      "id":395,
      "name":"Crank Yanker IPA (2011)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1642,
      "name":"Bleeding Buckeye Red Ale",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":673,
      "name":"Dottie Seattle Lager",
      "style":"American Amber / Red Lager",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1107,
      "name":"Nut Sack Imperial Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1039,
      "name":"Underachiever",
      "style":"American Adjunct Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2477,
      "name":"Lil Brainless Raspberries",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2008,
      "name":"Element 29",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2004,
      "name":"Hop Syndrome",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2003,
      "name":"Escape to Colorado",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"60",
      "id":2292,
      "name":"Little Sister India Style Session Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"80",
      "id":1504,
      "name":"Country Boy IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"23",
      "id":2604,
      "name":"Blonde Czich",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"61",
      "id":2432,
      "name":"White Reaper",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2431,
      "name":"Bobblehead",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2430,
      "name":"Lucky Dog",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2429,
      "name":"Voodoo",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"48",
      "id":1967,
      "name":"General George Patton Pilsner",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2283,
      "name":"Nomader Weiss",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2248,
      "name":"Molotov Lite",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1287,
      "name":"Hipster Ale (Two Roads Brewing)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.02",
      "ibu":"",
      "id":1286,
      "name":"Bikini Beer",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":640,
      "name":"Hipster Ale (Westbrook Brewing)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":1722,
      "name":"Iron Horse Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"19",
      "id":1435,
      "name":"Stones Throw IPA",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1434,
      "name":"Wood Chipper India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":2089,
      "name":"Trail Head",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":2088,
      "name":"Hop Stalker Fresh Hop IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"58",
      "id":1455,
      "name":"Sudice American Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1454,
      "name":"Parcae Belgian Style Pale Ale",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1453,
      "name":"Norns Roggenbier",
      "style":"Roggenbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1452,
      "name":"Laimas Kölsch Style Ale",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1451,
      "name":"Moirai India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"53",
      "id":2191,
      "name":"Loki Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1731,
      "name":"Peaches & Cream",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1022,
      "name":"Quaff India Style Session Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"53",
      "id":895,
      "name":"Loki Red Ale (2013)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":682,
      "name":"Mjolnir Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":112,
      "name":"Fearless Scottish Ale",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2289,
      "name":"Mastermind",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2027,
      "name":"Hyzer Flip",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"80",
      "id":1929,
      "name":"Second Fiddle",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1858,
      "name":"Hodad Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2591,
      "name":"Weiss Weiss Baby",
      "style":"Kristalweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2590,
      "name":"Czech Yo Self",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1968,
      "name":"FMB 101",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1981,
      "name":"Hardcore Chimera",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"80",
      "id":1664,
      "name":"Sobek & Set",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1663,
      "name":"Nuclear Winter",
      "style":"Belgian Strong Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":1662,
      "name":"Wet Hot American Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":941,
      "name":"Secret Stache Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"72",
      "id":935,
      "name":"Fascist Pig Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":809,
      "name":"Cut Throat Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":481,
      "name":"Threadless IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":351,
      "name":"Cut Throat Pale Ale (2011)",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":350,
      "name":"Golden Wing Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"47",
      "id":2569,
      "name":"Easy Jack",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2463,
      "name":"Union Jack",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2462,
      "name":"Pivo Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1957,
      "name":"805 Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1733,
      "name":"805",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2624,
      "name":"Deflator",
      "style":"Doppelbock",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":2284,
      "name":"Hinchtown Hammer Down",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"104",
      "id":1610,
      "name":"Half Cycle IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":520,
      "name":"Inclined Plane Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2554,
      "name":"Moped Traveler",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":608,
      "name":"Snake Dog IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":607,
      "name":"Underdog Atlantic Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2567,
      "name":"Flying Mouse 8",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":2566,
      "name":"Flying Mouse 4",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1899,
      "name":"La Ferme Urbaine Farmhouse Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":983,
      "name":"Backyahd IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":982,
      "name":"Raincloud Robust Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":981,
      "name":"Barstool American Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":2111,
      "name":"What the Butler Saw",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2110,
      "name":"1916 Shore Shiver",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2172,
      "name":"Quick WIT",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2171,
      "name":"The Optimist",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1911,
      "name":"Suicide Squeeze IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1803,
      "name":"Java the Hop",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1566,
      "name":"Next Adventure Black IPA",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1515,
      "name":"3-Way IPA (2013)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1214,
      "name":"Tender Loving Empire NWPA",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":674,
      "name":"Quick Wit Belgianesque Ale",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":562,
      "name":"Sunrise Oatmeal Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":552,
      "name":"Cavatica Stout",
      "style":"American Double / Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":319,
      "name":"1811 Lager",
      "style":"American Amber / Red Lager",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"97",
      "id":318,
      "name":"Vortex IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2322,
      "name":"Fort Pitt Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"19",
      "id":2661,
      "name":"Park",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":2660,
      "name":"Westfalia",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":2659,
      "name":"KSA",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"42",
      "id":2658,
      "name":"Villager",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"50",
      "id":2625,
      "name":"Dirty Bastard",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":1565,
      "name":"Centennial IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":1223,
      "name":"All Day IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"73",
      "id":1874,
      "name":"El Chingon IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1873,
      "name":"Block Party Robust Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1872,
      "name":"Local Buzz",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2613,
      "name":"Feel Like Maplin Love",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2612,
      "name":"Fathers Beer",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2611,
      "name":"The 26th",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"90",
      "id":2610,
      "name":"The Gadget",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1657,
      "name":"Leprechaun Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":2309,
      "name":"Sunbru Kölsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"21",
      "id":1635,
      "name":"Kilt Lifter Scottish-Style Ale",
      "style":"",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1616,
      "name":"Pumpkin Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":1585,
      "name":"Four Peaks Peach Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"47",
      "id":358,
      "name":"Hop Knot IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"21",
      "id":179,
      "name":"Kilt Lifter Scottish-Style Ale (2009)",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":178,
      "name":"Sunbru Kölsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2428,
      "name":"Four String Vanilla Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":2427,
      "name":"Suncaster Summer Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":2425,
      "name":"Brass Knuckle Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":2424,
      "name":"Big Star White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1998,
      "name":"Old Detroit",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":1556,
      "name":"Batch 69 IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1208,
      "name":"Twisted Helles Summer Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":2527,
      "name":"OktoberFiesta",
      "style":"",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"33",
      "id":2526,
      "name":"Texicali ",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2525,
      "name":"Pinata Protest",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":2524,
      "name":"Bat Outta Helles",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2523,
      "name":"Original",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"10",
      "id":2522,
      "name":"Rye Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"70",
      "id":2521,
      "name":"Soul Doubt",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"5",
      "id":2520,
      "name":"Yo Soy Un Berliner",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1174,
      "name":"77 Fremont Select Spring Session IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1116,
      "name":"Fremont Organic Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":994,
      "name":"Abominable Ale",
      "style":"English Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":901,
      "name":"Harvest Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":875,
      "name":"Fremont Summer Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":858,
      "name":"Universale Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"80",
      "id":857,
      "name":"Interurban IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":1300,
      "name":"Gateway Kolsch Style Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"24",
      "id":1260,
      "name":"Wee-Heavy-Er Scotch Ale",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":1259,
      "name":"13 Rebels ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"73",
      "id":2254,
      "name":"Salamander Slam",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1658,
      "name":"Cack-A-Lacky",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"50",
      "id":2077,
      "name":"No Wake IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":2076,
      "name":"Boathouse Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":2075,
      "name":"Cedar Point",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":2426,
      "name":"Clean Shave IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2045,
      "name":"Might As Well IPL",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1960,
      "name":"Saison Pamplemousse",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"74",
      "id":1777,
      "name":"2020 IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"70",
      "id":1698,
      "name":"Wolf Among Weeds IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"92",
      "id":1641,
      "name":"Better Weather IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":1490,
      "name":"Point the Way IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":1489,
      "name":"Golden Road Hefeweizen",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1399,
      "name":"Heal the Bay IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":1296,
      "name":"Point the Way IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1034,
      "name":"Cabrillo Kölsch",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":991,
      "name":"Get Up Offa That Brown",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"70",
      "id":750,
      "name":"Burning Bush Smoked IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"70",
      "id":749,
      "name":"Wolf Among Weeds IPA (2012)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":549,
      "name":"Point the Way IPA (2012)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":548,
      "name":"Golden Road Hefeweizen (2012)",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"11",
      "id":2587,
      "name":"Vanilla Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1109,
      "name":"Descender IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"18",
      "id":1108,
      "name":"Sweet As Pacific Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":1000,
      "name":"Good People Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"103",
      "id":312,
      "name":"Snake Handler Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"54",
      "id":311,
      "name":"Coffee Oatmeal Stout",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"64",
      "id":309,
      "name":"Good People IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":308,
      "name":"Good People American Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2205,
      "name":"Mountain Rescue Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":2198,
      "name":"Goose Island India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2457,
      "name":"312 Urban Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2202,
      "name":"312 Urban Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":2201,
      "name":"312 Urban Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1829,
      "name":"312 Urban Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":581,
      "name":"312 Urban Wheat Ale (2012)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"19",
      "id":1383,
      "name":"Beaver Logger",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":477,
      "name":"White Water Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":476,
      "name":"Grand Canyon American Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":143,
      "name":"Grand Canyon Sunset Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":142,
      "name":"Black Iron India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"21",
      "id":2129,
      "name":"Monarch Classic American Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"21",
      "id":2127,
      "name":"Sir Williams English Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2126,
      "name":"Lakefire Rye Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":2303,
      "name":"Beer Agent Re-Ignition",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1990,
      "name":"Cherry Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":1702,
      "name":"Bourbon Barrel Aged Coconut Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":1701,
      "name":"Great Crescent IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":1700,
      "name":"Aurora Lager",
      "style":"Dortmunder / Export Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":1699,
      "name":"Great Crescent Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":1269,
      "name":"Great Crescent Coconut Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":930,
      "name":"Great Crescent Oktoberfest Lager",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"36",
      "id":649,
      "name":"Great Crescent Brown Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":639,
      "name":"Cherry Ale (1)",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":626,
      "name":"Aurora Lager (2011)",
      "style":"Dortmunder / Export Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"25",
      "id":615,
      "name":"Frosted Fields Winter Wheat",
      "style":"American Dark Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"13",
      "id":478,
      "name":"Great Crescent Belgian Style Wit",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":455,
      "name":"Bourbons Barrel Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"66",
      "id":442,
      "name":"Great Crescent Stout",
      "style":"English Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":441,
      "name":"Great Crescent Coconut Porter (2012)",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":440,
      "name":"Great Crescent Dark Lager",
      "style":"Euro Dark Lager",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"26",
      "id":439,
      "name":"Great Crescent Mild Ale",
      "style":"English Dark Mild Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":436,
      "name":"Great Crescent IPA (2011)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":389,
      "name":"Great Crescent Blonde Ale (2011)",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2650,
      "name":"Denver Pale Ale (Artist Series No. 1)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2649,
      "name":"Hibernation Ale",
      "style":"Old Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2648,
      "name":"Whitewater",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2647,
      "name":"Rumble",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2646,
      "name":"Orabelle",
      "style":"Tripel",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2645,
      "name":"Lasso",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"75",
      "id":2644,
      "name":"Yeti  Imperial Stout",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2643,
      "name":"Colette",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2642,
      "name":"Titan IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":404,
      "name":"Black Star Double Hopped Golden Lager (24 oz.)",
      "style":"American Pale Lager",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":164,
      "name":"Black Star Double Hopped Golden Lager (12 oz.)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"49",
      "id":1923,
      "name":"Commotion APA",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1922,
      "name":"Southern Drawl Pale Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"5",
      "id":1604,
      "name":"Chickawawa Lemonale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"22",
      "id":1574,
      "name":"Barrel Aged Farmer",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1446,
      "name":"Great River Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1275,
      "name":"Dirty Blonde Chocolate Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1244,
      "name":"Dos Pistolas",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1064,
      "name":"Owney Irish Style Red Ale",
      "style":"Irish Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1028,
      "name":"Aaah Bock Lager",
      "style":"Vienna Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":865,
      "name":"Widespread Wit",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":864,
      "name":"Roller Dam Red Ale",
      "style":"Irish Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"48",
      "id":863,
      "name":"483 Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"99",
      "id":672,
      "name":"Hop A Potamus Double Dark Rye Pale Ale",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"22",
      "id":655,
      "name":"Farmer Brown Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":540,
      "name":"Big Cock IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":539,
      "name":"Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":517,
      "name":"40th Annual Bix Street Fest Copper Ale (Current)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"36",
      "id":371,
      "name":"Redband Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"48",
      "id":190,
      "name":"483 Pale Ale (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":189,
      "name":"Roller Dam Red Ale (2010)",
      "style":"Irish Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1106,
      "name":"Pablo Beach Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"44",
      "id":2314,
      "name":"Wild Trail Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"71",
      "id":2313,
      "name":"Mothman Black IPA",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2461,
      "name":"Autumn Winds Fest Beer",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"69",
      "id":2044,
      "name":"Captains Daughter",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1567,
      "name":"Autumn Winds",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"54",
      "id":1505,
      "name":"Flying Jenny Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1186,
      "name":"Hazy Day Belgian-Style Wit",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1185,
      "name":"Bring Back the Beach Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"34",
      "id":984,
      "name":"Leaning Chimney Smoked Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"54",
      "id":693,
      "name":"Flying Jenny Extra Pale Ale (2012)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":631,
      "name":"Flagship Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"6",
      "id":2375,
      "name":"Mr. Blue Sky",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2143,
      "name":"3 Scrooges",
      "style":"Winter Warmer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":2142,
      "name":"Screamin’ Pumpkin",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2141,
      "name":"Grand Trunk Bohemian Pils",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"25",
      "id":2140,
      "name":"El Rojo",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2139,
      "name":"Norms Raggedy Ass IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2138,
      "name":"Grind Line",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"55",
      "id":2007,
      "name":"Norms Gateway IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1570,
      "name":"Lemon Shandy Tripel",
      "style":"Tripel",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"43",
      "id":2339,
      "name":"Little Red Cap",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"67",
      "id":1857,
      "name":"Supergoose IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1440,
      "name":"Hales Pale American Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1753,
      "name":"Heyoka IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1448,
      "name":"Guest Lager",
      "style":"American Double / Imperial Pilsner",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1134,
      "name":"Pony Pilsner",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1066,
      "name":"Akari Shogun American Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":849,
      "name":"Meat Wave",
      "style":"English India Pale Ale (IPA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":352,
      "name":"Over Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":149,
      "name":"Gossamer Golden Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":148,
      "name":"Daisy Cutter Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"40",
      "id":2026,
      "name":"Pursuit",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1361,
      "name":"Half Full Bright Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":1016,
      "name":"Orange Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"14",
      "id":1015,
      "name":"Hangar 24 Helles Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1677,
      "name":"The Great Return",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1331,
      "name":"Hardywood Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1270,
      "name":"Capital Trail Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":2059,
      "name":"UFO Gingerland",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":1653,
      "name":"The Long Thaw White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1558,
      "name":"Honey Cider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":1380,
      "name":"Harpoon Summer Beer",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":1379,
      "name":"Harpoon IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1340,
      "name":"UFO Pumpkin",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1313,
      "name":"Harpoon Octoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":770,
      "name":"Harpoon IPA (2012)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":769,
      "name":"Harpoon Summer Beer (2012)",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"10",
      "id":610,
      "name":"UFO White",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":192,
      "name":"Harpoon Summer Beer (2010)",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":126,
      "name":"Harpoon IPA (2010)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":506,
      "name":"Great Falls Select Pale Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":181,
      "name":"Beltian White",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2183,
      "name":"Kauai Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2182,
      "name":"Sunset Amber",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2181,
      "name":"Hapa Brown Ale",
      "style":"American Brown Ale",
      "ounces":19.2
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2180,
      "name":"Hapa Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2179,
      "name":"Southern Cross",
      "style":"Flanders Red Ale",
      "ounces":19.2
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":1895,
      "name":"Groupe G",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"40",
      "id":1894,
      "name":"Pt. Bonita Rustic Lager",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"77",
      "id":1893,
      "name":"Hill 88 Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"45",
      "id":990,
      "name":"Loose Cannon",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":989,
      "name":"AARGHtoberfest!",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":988,
      "name":"Davy Jones Lager",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":1351,
      "name":"Grazias",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"86",
      "id":1346,
      "name":"Habitus IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":904,
      "name":"Ex Umbris Rye Imperial Stout",
      "style":"American Double / Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"21",
      "id":2295,
      "name":"The Golden One",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"68",
      "id":2294,
      "name":"The Power of Zeus",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":824,
      "name":"Tonganoxie Honey Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":616,
      "name":"Oregon Trail Unfiltered Raspberry Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":96,
      "name":"Annies Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"32",
      "id":1615,
      "name":"The 12th Can™",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"34",
      "id":889,
      "name":"Hilliards Pils",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":724,
      "name":"Hilliards Blonde",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":497,
      "name":"Hilliards Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":496,
      "name":"Hilliards Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1652,
      "name":"White Cap White IPA",
      "style":"American White IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":1835,
      "name":"Provision",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":1834,
      "name":"One Nut Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":1833,
      "name":"Hop Farm IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":2195,
      "name":"Double D Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1605,
      "name":"Festeroo Winter Ale",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1543,
      "name":"Proxima IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1390,
      "name":"Double D Blonde (2013)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"13",
      "id":1354,
      "name":"541 American Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"90",
      "id":1353,
      "name":"Alphadelic IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"90",
      "id":499,
      "name":"Alphadelic IPA (2011)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":498,
      "name":"Double D Blonde (2011)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1501,
      "name":"Green House India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1004,
      "name":"The One They Call Zoe",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":502,
      "name":"Alteration",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"50",
      "id":501,
      "name":"Pale Dog",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2357,
      "name":"Porter Culture",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2483,
      "name":"Hard Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.02",
      "ibu":"21",
      "id":2482,
      "name":"Totally Radler",
      "style":"Radler",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2400,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2399,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2398,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2397,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2396,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2395,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2394,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2393,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2392,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2391,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2390,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"20",
      "id":2389,
      "name":"Nonstop Hef Hop",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":2388,
      "name":"Rise Up Red",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2200,
      "name":"Survival Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2199,
      "name":"Hopworks IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":2193,
      "name":"Abominable Winter Ale",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":1398,
      "name":"Pigwar White India Pale Ale",
      "style":"American White IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":1085,
      "name":"Rise-Up Red (2014)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":916,
      "name":"Abominable Winter Ale (2012)",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":658,
      "name":"HUB Lager",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":653,
      "name":"Hopworks IPA (2012)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2385,
      "name":"Watermelon Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":2384,
      "name":"Laka Laka Pineapple",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2383,
      "name":"Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1251,
      "name":"Trail Maker Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1250,
      "name":"Action Man Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"90",
      "id":1903,
      "name":"Let It Ride IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"22",
      "id":1691,
      "name":"Stir Crazy Winter Ale",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":1555,
      "name":"Sweet Yamma Jamma Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"27",
      "id":1115,
      "name":"Shenanigans Summer Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"80",
      "id":729,
      "name":"Midnight Ryder",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":728,
      "name":"Day Tripper Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"32",
      "id":2350,
      "name":"Oklahoma Suks",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":2301,
      "name":"Power & Light",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":1904,
      "name":"White Rabbit ",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"58",
      "id":2609,
      "name":"Tribute",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2038,
      "name":"Infamous IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1774,
      "name":"Hijack",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":559,
      "name":"Jon Boat Coastal Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":558,
      "name":"I-10 IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":553,
      "name":"Peoples Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2376,
      "name":"Summer Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1784,
      "name":"Appreciation Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":2673,
      "name":"House Lager",
      "style":"Keller Bier / Zwickel Bier",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":2672,
      "name":"Leisure Time",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":2671,
      "name":"Excess IPL",
      "style":"American India Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2670,
      "name":"Hoponius Union",
      "style":"American India Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"45",
      "id":2669,
      "name":"Calyptra",
      "style":"American India Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1405,
      "name":"Helens Blend",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":823,
      "name":"Jacks Hard Cider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":1793,
      "name":"Thunder Ann",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2453,
      "name":"Razz Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2363,
      "name":"Hop Ryot",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":689,
      "name":"Mystic Mama IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":688,
      "name":"Firefly Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":687,
      "name":"Chomolungma Honey Nut Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2408,
      "name":"Welcome to Scoville",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2595,
      "name":"Bastian",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2480,
      "name":"Healani",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1525,
      "name":"Yabba Dhaba Chai Tea Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1524,
      "name":"A Capella Gluten Free Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1523,
      "name":"Casper White Stout",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1254,
      "name":"JPs Ould Sod Irish Red IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":2060,
      "name":"Weize Guy",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":469,
      "name":"Fox Tail Gluten Free Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"90",
      "id":468,
      "name":"Hop Box Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":467,
      "name":"Joseph James American Lager",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2163,
      "name":"Sucha Much IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"24",
      "id":2162,
      "name":"Lewbricator Wheat Dopplebock ",
      "style":"Doppelbock",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":2374,
      "name":"Weisse Versa (2012)",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1560,
      "name":"Mother in Lager",
      "style":"Munich Dunkel Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1557,
      "name":"Weekend Warrior Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1458,
      "name":"Karbachtoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1235,
      "name":"Love Street Summer Seasonal (2014)",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":1068,
      "name":"Barn Burner Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":666,
      "name":"Rodeo Clown Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"45",
      "id":465,
      "name":"Sympathy for the Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":464,
      "name":"Weisse Versa",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":463,
      "name":"Hopadillo India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"19",
      "id":1678,
      "name":"KelSo Nut Brown Lager",
      "style":"Euro Dark Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"64",
      "id":1572,
      "name":"KelSo India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":1348,
      "name":"KelSo Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1193,
      "name":"Skilak Scottish Ale",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1187,
      "name":"Peninsula Brewers Reserve (PBR)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":349,
      "name":"Sunken Island IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":348,
      "name":"Skilak Scottish Ale (2011)",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"11",
      "id":760,
      "name":"Cold Smoke Scotch Ale (2007)",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":759,
      "name":"Double Haul IPA (2009)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":758,
      "name":"Double Haul IPA (2006)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":87,
      "name":"Eddy Out Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":86,
      "name":"Double Haul IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"11",
      "id":85,
      "name":"Cold Smoke Scotch Ale",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2472,
      "name":"U. P. Witbier",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":779,
      "name":"November Gale Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":364,
      "name":"Olde Ore Dock Scottish Ale",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":60,
      "name":"Widow Maker Black Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":59,
      "name":"Lift Bridge Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":58,
      "name":"Pick Axe Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":57,
      "name":"Red Jacket Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2436,
      "name":"Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1706,
      "name":"King Street Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1667,
      "name":"King Street IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":1666,
      "name":"King Street Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1665,
      "name":"King Street Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2460,
      "name":"India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"11",
      "id":2459,
      "name":"Blackberry Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1274,
      "name":"Longboard Island Lager",
      "style":"American Amber / Red Lager",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1220,
      "name":"Longboard Island Lager",
      "style":"American Amber / Red Lager",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1070,
      "name":"Longboard Island Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":590,
      "name":"Longboard Island Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":781,
      "name":"Choc Beer (2003)",
      "style":"American Dark Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1637,
      "name":"Bellingham Beer Week 2013 Collaboration",
      "style":"Belgian Strong Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1741,
      "name":"A Slice of Hefen",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"100",
      "id":664,
      "name":"Elevated IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":392,
      "name":"Rumspringa Golden Bock",
      "style":"Maibock / Helles Bock",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":195,
      "name":"Lancaster German Style Kölsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2547,
      "name":"Beach Cruiser",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2493,
      "name":"I.P. Eh!",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2492,
      "name":"Schoolhouse Honey",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2491,
      "name":"10 Degrees of Separation",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":2108,
      "name":"Laughing Dog Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":1397,
      "name":"Two-One Niner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"66",
      "id":1396,
      "name":"Laughing Dog IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"95",
      "id":1675,
      "name":"Madra Allta",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"70",
      "id":1249,
      "name":"Duluchan India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1445,
      "name":"Lazy Monk Bohemian Pilsner",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":475,
      "name":"Yellowstone Golden Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":474,
      "name":"Tumbleweed IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":473,
      "name":"Lewis & Clark Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":472,
      "name":"Miners Gold Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":471,
      "name":"Back Country Scottish Ale",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2036,
      "name":"Getaway",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":1168,
      "name":"Farm Girl Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1832,
      "name":"Adams Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":1688,
      "name":"American Hero",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1687,
      "name":"Schweet Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":1686,
      "name":"Irregardless IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2434,
      "name":"Peach Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2332,
      "name":"Deadeye Jack",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2330,
      "name":"Pistols at Dawn",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"47",
      "id":2329,
      "name":"Peacemaker Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":2327,
      "name":"Shotgun Betty",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":2326,
      "name":"Sweet Josie",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":1926,
      "name":"Long Trail IPA",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1924,
      "name":"Long Trail Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"33",
      "id":1090,
      "name":"Double Bag",
      "style":"Altbier",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":574,
      "name":"Blackbeary Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":573,
      "name":"Long Trail Ale (1)",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":2584,
      "name":"Gose",
      "style":"Gose",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":2583,
      "name":"Vermont Pilsner",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2582,
      "name":"Mosaic Single Hop IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2581,
      "name":"Lost Galaxy",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1309,
      "name":"Face Plant IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1308,
      "name":"Rhino Chasers Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"29",
      "id":1571,
      "name":"Slow Hand Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1204,
      "name":"Hips Dont Lie",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1122,
      "name":"Ride Again Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":700,
      "name":"The Farmers Daughter",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"18",
      "id":2033,
      "name":"Pub Ale",
      "style":"English Dark Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"31",
      "id":2032,
      "name":"Ballistic Blonde",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2311,
      "name":"Knotty Pine",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1153,
      "name":"Lumberyard Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":355,
      "name":"Lumberyard IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":125,
      "name":"Lumberyard Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":962,
      "name":"Macs Highlander Pale Ale (2000)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":961,
      "name":"Macs Scottish Style Amber Ale (2000)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1475,
      "name":"Macon Progress Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1008,
      "name":"Macon History Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2454,
      "name":"Galaxy High",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":2209,
      "name":"Sol Drifter",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2133,
      "name":"Thunder Snow",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"18",
      "id":1994,
      "name":"The Great Pumpcan",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"11",
      "id":1816,
      "name":"LIFT",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1815,
      "name":"SPRYE",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1126,
      "name":"Psychopathy",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"32",
      "id":1125,
      "name":"Gnarly Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":1124,
      "name":"Happy Amber",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1813,
      "name":"#9",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"13",
      "id":1113,
      "name":"Elder Betty",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":360,
      "name":"#9",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":511,
      "name":"High Country Pilsner (Current)",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":75,
      "name":"Epic IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":74,
      "name":"Golden Trout Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":73,
      "name":"Real McCoy Amber Ale (Current)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1628,
      "name":"Festivus (1)",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1626,
      "name":"Manayunk Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"21",
      "id":1625,
      "name":"Belgian Style Session Ale",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1624,
      "name":"Manayunk IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1600,
      "name":"Yunkin Punkin",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1484,
      "name":"Summer Paradise",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"30",
      "id":1356,
      "name":"Monk from the Yunk",
      "style":"Tripel",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"14",
      "id":1355,
      "name":"Schuylkill Punch",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":1334,
      "name":"Dreamin Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"93",
      "id":1674,
      "name":"Chaotic Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"88",
      "id":1673,
      "name":"Manzanita IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"25",
      "id":1672,
      "name":"Riverwalk Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"49",
      "id":1671,
      "name":"Gillespie Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"44",
      "id":1670,
      "name":"Manzanita Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1262,
      "name":"Marble Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":845,
      "name":"Marble India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1783,
      "name":"Toughcats IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1717,
      "name":"Tug Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1716,
      "name":"Sexy Chaos",
      "style":"Russian Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1516,
      "name":"Ace Hole American Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":725,
      "name":"Cant Dog Imperial Pale Ale",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2308,
      "name":"River House",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"47",
      "id":2268,
      "name":"Pretzel Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2197,
      "name":"Rubberneck Red",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2120,
      "name":"The Imperial Texan",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1234,
      "name":"The Imperial Texan",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1233,
      "name":"Day Break 4-Grain Breakfast Beer",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1232,
      "name":"River House Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1231,
      "name":"There Will Be Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":1831,
      "name":"Our Legacy IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1359,
      "name":"Saranac Shandy",
      "style":"Shandy",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":1135,
      "name":"Our Legacy IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":960,
      "name":"Saranac Golden Pilsener (2003)",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":959,
      "name":"Saranac Adirondack Light (2002)",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":958,
      "name":"DAX Light (1998)",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":957,
      "name":"Saranac Traditional Lager (2000)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":956,
      "name":"Pomegranate Wheat (2008)",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":773,
      "name":"Blueberry Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":686,
      "name":"Saranac White IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":453,
      "name":"Saranac Summer Ale (2011)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":150,
      "name":"Saranac Pale Ale (12 oz.)",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":133,
      "name":"Saranac Pale Ale (16 oz.)",
      "style":"English Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1578,
      "name":"Lahaina Town Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1429,
      "name":"Pau Hana Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1271,
      "name":"Lemongrass Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":713,
      "name":"Aloha B’ak’tun",
      "style":"Belgian Strong Dark Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":712,
      "name":"Liquid Breadfruit",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"24",
      "id":690,
      "name":"Sobrehumano Palenaole",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":547,
      "name":"La Perouse White",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"68",
      "id":435,
      "name":"Flyin HI.P.Hay",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":313,
      "name":"Mana Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":33,
      "name":"Bikini Blonde Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":32,
      "name":"CoCoNut Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":31,
      "name":"Big Swell IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"34",
      "id":1237,
      "name":"Pit Stop Chocolate Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"21",
      "id":1236,
      "name":"Pace Setter Belgian Style Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"53",
      "id":1047,
      "name":"Back in the Saddle Rye Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1986,
      "name":"Bushwhacker Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1985,
      "name":"Weim-R-Iner",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1984,
      "name":"Cherry Bomb",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2186,
      "name":"Tsunami IPA",
      "style":"American IPA",
      "ounces":19.2
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":2185,
      "name":"Tsunami IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":2184,
      "name":"Humpback Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":2178,
      "name":"Hawaiian Crow Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":2177,
      "name":"Volcano Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":2176,
      "name":"Mauna Kea Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":1508,
      "name":"Shark Bait",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1507,
      "name":"Gator Tail Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"62",
      "id":1506,
      "name":"Miami Vice IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":1325,
      "name":"Big Rod Coconut Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":174,
      "name":"Mickey Finns Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"61",
      "id":2093,
      "name":"Pleasure Town",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"61",
      "id":1814,
      "name":"Pleasure Town IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":587,
      "name":"Snowshoe White Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":586,
      "name":"Kodiak Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"70",
      "id":434,
      "name":"Sockeye Red IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":2668,
      "name":"Habitus (2014)",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":2667,
      "name":"Solis",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"24",
      "id":2666,
      "name":"Jucundus",
      "style":"Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":2664,
      "name":"Habitus",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":2663,
      "name":"Grazias",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":2662,
      "name":"Claritas",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2535,
      "name":"Vinyl Frontier",
      "style":"American Double / Imperial IPA",
      "ounces":24.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2534,
      "name":"Disco Superfly",
      "style":"American IPA",
      "ounces":24.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2533,
      "name":"Misty Mountain Hop",
      "style":"American IPA",
      "ounces":24.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2532,
      "name":"One-Hit Wonderful",
      "style":"Belgian IPA",
      "ounces":24.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2531,
      "name":"En Parfaite Harmonie",
      "style":"Saison / Farmhouse Ale",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":2530,
      "name":"Daft Funk",
      "style":"Berliner Weissbier",
      "ounces":24.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2529,
      "name":"Love In An Ellavator",
      "style":"American IPA",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2528,
      "name":"Spin Doctor",
      "style":"American Pale Ale (APA)",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1612,
      "name":"Keeper (Current)",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1611,
      "name":"Better Half",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1273,
      "name":"SNO White Ale",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":365,
      "name":"BRIK Irish Red Ale",
      "style":"Irish Red Ale",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":273,
      "name":"AXL Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"80",
      "id":1884,
      "name":"Hop Freak",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":1272,
      "name":"Louies Demise Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"51",
      "id":1080,
      "name":"Hop Happy",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":932,
      "name":"Booyah Farmhouse Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":776,
      "name":"O-Gii",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":172,
      "name":"Flaming Damsel Lager (2010)",
      "style":"Vienna Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":171,
      "name":"Louie’s Demise Immort-Ale (2010)",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2361,
      "name":"Axe Head Malt Liquor",
      "style":"American Malt Liquor",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2359,
      "name":"Huber Bock (2014)",
      "style":"Bock",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2358,
      "name":"Minhas Light (2012)",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2282,
      "name":"Huber",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2281,
      "name":"Clear Creek Ice",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2280,
      "name":"Clear Creek Ice",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2279,
      "name":"Mountain Crest",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2278,
      "name":"Mountain Crest",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2277,
      "name":"Mountain Creek (2013)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2276,
      "name":"Boxer",
      "style":"American Adjunct Lager",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2275,
      "name":"Boxer Light",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2274,
      "name":"Boxer Ice",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2273,
      "name":"Boxer",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2442,
      "name":"Cortez Gold",
      "style":"Belgian Pale Ale",
      "ounces":32.0
   },
   {
      "abv":"0.06",
      "ibu":"66",
      "id":2441,
      "name":"Mission IPA",
      "style":"American IPA",
      "ounces":32.0
   },
   {
      "abv":"0.04",
      "ibu":"44",
      "id":1460,
      "name":"El Conquistador Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":32.0
   },
   {
      "abv":"0.09",
      "ibu":"75",
      "id":1459,
      "name":"Shipwrecked Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":32.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1476,
      "name":"Squeaky Bike Nut Brown Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":902,
      "name":"Dead Horse Amber",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":645,
      "name":"Rocket Bike American Lager",
      "style":"California Common / Steam Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":644,
      "name":"Johnnys American IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":337,
      "name":"Boneshaker Brown Ale",
      "style":"English Brown Ale",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":336,
      "name":"Iron Mike Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2236,
      "name":"Monkadelic",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":2159,
      "name":"City of the Sun",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2157,
      "name":"Booming Rollers",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":2156,
      "name":"Oneida",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2154,
      "name":"Aurora ",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1495,
      "name":"Lomaland",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"46",
      "id":1494,
      "name":"Fortunate Islands",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1493,
      "name":"Black House",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"115",
      "id":1492,
      "name":"Blazing World",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":327,
      "name":"Wapiti Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":719,
      "name":"Sweet Georgia Brown",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":718,
      "name":"Rich Mans IIPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":717,
      "name":"Monkey Paw Oatmeal Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":1907,
      "name":"Montauk Summer Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"49",
      "id":1906,
      "name":"Driftwood Ale",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1756,
      "name":"When Helles Freezes Over",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"24",
      "id":1617,
      "name":"Morgan Street Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"14",
      "id":1052,
      "name":"Honey Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"24",
      "id":1051,
      "name":"Black Bear Dark Lager",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1046,
      "name":"Golden Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":2413,
      "name":"Cali Creamin",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":419,
      "name":"Second Wind Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":408,
      "name":"Sunny Haze",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":2237,
      "name":"Towhead",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":2208,
      "name":"Lil Helper",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1952,
      "name":"Train Wreck",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":768,
      "name":"Full Moon Belgian White Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":625,
      "name":"Desert Magic IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":326,
      "name":"Up River Light",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":132,
      "name":"Full Moon Belgian White Ale (2007)",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":131,
      "name":"Dry Heat Hefeweizen (2006)",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1598,
      "name":"Mustang Sixty-Six",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":862,
      "name":"Mustang 33",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":699,
      "name":"Session 33 (2011)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":421,
      "name":"Mustang Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"14",
      "id":420,
      "name":"Washita Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"10",
      "id":2345,
      "name":"Gansett Light",
      "style":"Light Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2224,
      "name":"Bohemian Pils",
      "style":"American Pilsner",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1775,
      "name":"Autocrat Coffee Milk Stout",
      "style":"Milk / Sweet Stout",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":1291,
      "name":"Narragansett Bohemian Pilsner",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"24",
      "id":1093,
      "name":"Narragansett Summer Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":580,
      "name":"Narragansett Cream Ale",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"24",
      "id":403,
      "name":"Narragansett Summer Ale",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"22",
      "id":316,
      "name":"Narragansett Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"32",
      "id":315,
      "name":"Narragansett Bock",
      "style":"Bock",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":314,
      "name":"Narragansett Fest Lager",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1537,
      "name":"Undun Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1536,
      "name":"CuDa Cascadian Dark Ale",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"86",
      "id":1265,
      "name":"Old Grogham Imperial India Pale Ale",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"86",
      "id":747,
      "name":"Old Grogham Imperial India Pale Ale (2012)",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":746,
      "name":"CuDa Cascadian Dark Ale (2012)",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":654,
      "name":"Undun Blonde Ale (2012)",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"11",
      "id":1705,
      "name":"Wick For Brains",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1148,
      "name":"Nebraska India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"10",
      "id":1147,
      "name":"EOS Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":1146,
      "name":"Brunette Nut Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"29",
      "id":1145,
      "name":"Cardinal Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1758,
      "name":"County Line IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1757,
      "name":"Trauger Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"40",
      "id":2475,
      "name":"Slow Ride",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":2230,
      "name":"Ranger IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"29",
      "id":1987,
      "name":"Shift",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":1978,
      "name":"1554 Black Lager",
      "style":"Euro Dark Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1975,
      "name":"Blue Paddle",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1737,
      "name":"California Route",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1707,
      "name":"Snapshot",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1690,
      "name":"Sunshine Wheat Beer",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1586,
      "name":"Fat Tire Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"29",
      "id":952,
      "name":"Shift (1)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":748,
      "name":"Fat Tire Amber Ale (2011)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"29",
      "id":578,
      "name":"Shift",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":564,
      "name":"Ranger IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":563,
      "name":"Fat Tire Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":115,
      "name":"Ranger IPA (Current)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":72,
      "name":"Sunshine Wheat Beer (2009)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":71,
      "name":"Fat Tire Amber Ale (2008)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"6",
      "id":1417,
      "name":"Weiss Trash Culture",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":885,
      "name":"Sea Hag IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":884,
      "name":"Elm City Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":757,
      "name":"Atlantic Amber Ale (2004)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":568,
      "name":"668 Neighbor of the Beast12 oz.",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":320,
      "name":"Gandhi-Bot Double IPA (12 oz.)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":43,
      "name":"668 Neighbor of the Beast (16 oz.) (2010)",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":42,
      "name":"Gandhi-Bot Double IPA (16 oz.) (2010)",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":41,
      "name":"Elm City Lager (2007)",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":40,
      "name":"Atlantic Amber Ale (2007)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":39,
      "name":"Sea Hag IPA (Current)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2272,
      "name":"Rebirth Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1582,
      "name":"Irish Channel Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1114,
      "name":"MechaHopzilla",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":486,
      "name":"Hopitoulas IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":485,
      "name":"NOLA Brown Ale",
      "style":"English Dark Mild Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":484,
      "name":"NOLA Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2043,
      "name":"Skylight",
      "style":"Dunkelweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2042,
      "name":"Kadigan",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":2041,
      "name":"Dammit Jim!",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":646,
      "name":"Nut Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":165,
      "name":"White Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":2050,
      "name":"Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":915,
      "name":"Green Head IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":914,
      "name":"Plum Island Belgian White",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":913,
      "name":"Newburyport Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1811,
      "name":"Marblehead",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"31",
      "id":1622,
      "name":"Jam Session",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":1621,
      "name":"Hop Drop N Roll IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1307,
      "name":"Paleo IPA",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1306,
      "name":"Buck Snort Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1305,
      "name":"Station 33 Firehouse Red",
      "style":"Irish Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1304,
      "name":"Slimy Pebble Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"50",
      "id":2692,
      "name":"Get Together",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"26",
      "id":2691,
      "name":"Maggies Leap",
      "style":"Milk / Sweet Stout",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"19",
      "id":2690,
      "name":"Walls End",
      "style":"English Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"38",
      "id":2689,
      "name":"Pumpion",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"25",
      "id":2688,
      "name":"Stronghold",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"47",
      "id":2687,
      "name":"Parapet ESB",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1854,
      "name":"Blue Boots IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1227,
      "name":"Hoppy Bitch IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"42",
      "id":1226,
      "name":"Three Skulls Ale Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":541,
      "name":"Walters Premium Pilsener Beer",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":109,
      "name":"Floppin Crappie",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1917,
      "name":"Left of the Dial IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1190,
      "name":"Notch Session Pils",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1264,
      "name":"OFallon Pumpkin Beer",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"66",
      "id":1258,
      "name":"5 Day IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"7",
      "id":128,
      "name":"OFallon Wheach",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":2331,
      "name":"Watershed IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":1669,
      "name":"Oakshire Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":1668,
      "name":"Overcast Espresso Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":999,
      "name":"Watershed IPA (2013)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"25",
      "id":2247,
      "name":"Lake Monster",
      "style":"Baltic Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"27",
      "id":2071,
      "name":"London Homesick Ale",
      "style":"English Bitter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":2070,
      "name":"Luchesa Lager",
      "style":"Keller Bier / Zwickel Bier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":2069,
      "name":"Slow Ride",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2192,
      "name":"Occidental Hefeweizen",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1130,
      "name":"Occidental Dunkel",
      "style":"Dunkelweizen",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1129,
      "name":"Occidental Altbier",
      "style":"Altbier",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1081,
      "name":"Occidental Kölsch",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"72",
      "id":2335,
      "name":"Perpetual Darkness",
      "style":"Belgian Strong Dark Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"29",
      "id":2334,
      "name":"Clan Warrior",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":2333,
      "name":"Psycho Penguin Vanilla Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1721,
      "name":"Heliocentric Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1720,
      "name":"Ghose Drifter Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1431,
      "name":"Ghost Rider Pale Ale (2013)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1430,
      "name":"Helios Hefeweizen (2013)",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"19",
      "id":1059,
      "name":"The Hole in Hadrians Wall",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"26",
      "id":1058,
      "name":"33 Select Brown Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"29",
      "id":603,
      "name":"Midwest Charm Farmhouse Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":602,
      "name":"Boji Blue Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":601,
      "name":"Winter Games Select #32 Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":600,
      "name":"Boji Beach Golden Rye Ale",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1828,
      "name":"Hopsmith Pale Lager",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1487,
      "name":"Falling Down Brown Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1486,
      "name":"Resolution Rye Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1485,
      "name":"Plowshare Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1394,
      "name":"Old Forge Pumpkin Ale",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1381,
      "name":"Endless Sun Ale",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":900,
      "name":"Celestial Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":891,
      "name":"Overbite IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":509,
      "name":"T-Rail Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":508,
      "name":"Endless Summer Ale (2011)",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1530,
      "name":"Clems Gold",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1529,
      "name":"Lizzys Red",
      "style":"American Amber / Red Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1528,
      "name":"Orlison India Pale Lager",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1527,
      "name":"Brünette",
      "style":"Euro Dark Lager",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1526,
      "name":"Havanüther",
      "style":"Light Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2113,
      "name":"Lyric Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2112,
      "name":"Atalanta",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":2302,
      "name":"Pinner Throwback IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1883,
      "name":"Centennial State Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":19.2
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1859,
      "name":"Old Chub NITRO",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1796,
      "name":"The CROWLER™",
      "style":"",
      "ounces":32.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1790,
      "name":"CAND AID Foundation",
      "style":"",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1752,
      "name":"Icey.P.A.",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1751,
      "name":"One Nut Brown",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1750,
      "name":"Birth IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1444,
      "name":"Dales Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1252,
      "name":"Dales Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1167,
      "name":"Mamas Little Yella Pils",
      "style":"Czech Pilsener",
      "ounces":19.2
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":993,
      "name":"oSKAr the GRauch",
      "style":"American IPA",
      "ounces":19.2
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":992,
      "name":"oSKAr the GRauch",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":955,
      "name":"Dales Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":19.2
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":933,
      "name":"The Deuce",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":892,
      "name":"Dales Pale Ale (10 Year Anniversary)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":828,
      "name":"Dales Pale Ale (2012)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":806,
      "name":"Gordon Imperial Red (2010)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":755,
      "name":"Dales Pale Ale (2011)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":754,
      "name":"Dales Pale Ale (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":726,
      "name":"GKNIGHT (16 oz.)",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":720,
      "name":"15th Anniversary Abbey Ale (2012)",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":661,
      "name":"Chaka",
      "style":"Belgian Strong Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"70",
      "id":585,
      "name":"HGH (Home Grown Hops): Part Duh",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":565,
      "name":"Deviant Dales IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"60",
      "id":391,
      "name":"One Hit Wonder",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":388,
      "name":"GKNIGHT (12 oz.)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"98",
      "id":8,
      "name":"Ten Fidy Imperial Stout",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":7,
      "name":"Mamas Little Yella Pils",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"100",
      "id":6,
      "name":"GUBNA Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":5,
      "name":"Old Chub",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":4,
      "name":"Gordon Ale (2009)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1,
      "name":"Dales Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":805,
      "name":"Gordon (2005)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"98",
      "id":804,
      "name":"Ten Fidy Imperial Stout (2008)",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"98",
      "id":803,
      "name":"Ten Fidy Imperial Stout (2007)",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":787,
      "name":"Old Chub (2008)",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":786,
      "name":"Old Chub (2004)",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":785,
      "name":"Old Chub (2003)",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":745,
      "name":"Dales Pale Ale (2008)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":744,
      "name":"Dales Pale Ale (2006)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":743,
      "name":"Dales Pale Ale (2004)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":742,
      "name":"Dales Pale Ale (2003)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":741,
      "name":"Dales Pale Ale (2002)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":734,
      "name":"Leroy (2005)",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"60",
      "id":733,
      "name":"Gordon Beer (2006)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":1533,
      "name":"GKNIGHT",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"98",
      "id":1532,
      "name":"Ten Fidy",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":1328,
      "name":"Deviant Dales IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"35",
      "id":1175,
      "name":"Old Chub",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1166,
      "name":"Dales Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":19.2
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1065,
      "name":"Dales Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":1908,
      "name":"Fresh Slice White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1946,
      "name":"Overgrown American Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"39",
      "id":1961,
      "name":"Ozark American Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1684,
      "name":"Hula Hoppie Session IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":927,
      "name":"Dirty Hippie Dark Wheat",
      "style":"American Dark Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":1268,
      "name":"Rustic Red",
      "style":"Irish Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"48",
      "id":697,
      "name":"Stimulator Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":696,
      "name":"Old Town Ale",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":695,
      "name":"Car 21",
      "style":"English Bitter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":694,
      "name":"Cache La Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":1805,
      "name":"Rodeo Rye Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1048,
      "name":"Outlaw IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1043,
      "name":"North Fork Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":890,
      "name":"Payette Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":775,
      "name":"Mutton Buster",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1087,
      "name":"Side Kick Kölsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1931,
      "name":"Fresh Cut Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"61",
      "id":1930,
      "name":"Summer Session Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":2238,
      "name":"Lobo Lito",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":2144,
      "name":"Robert Earl Keen Honey Pils",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"77",
      "id":2175,
      "name":"Mound Builder IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"62",
      "id":2168,
      "name":"Amazon Princess IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1956,
      "name":"Farmers Daughter Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1794,
      "name":"Peoples Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":2633,
      "name":"Hotbox Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":2632,
      "name":"Gold",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2631,
      "name":"Black",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2630,
      "name":"98 Problems (Cuz A Hop Aint One)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2629,
      "name":"Veteran’s Pale Ale (VPA)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2628,
      "name":"Grapefruit IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1062,
      "name":"Petes ESP Lager (1998)",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1061,
      "name":"Petes Wicked Summer Brew (1995)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1060,
      "name":"Petes Wicked Bohemian Pilsner (1997)",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1056,
      "name":"Petes Wicked Pale Ale (1997)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1055,
      "name":"Petes Wicked Summer Brew (2002)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1054,
      "name":"Petes Wicked Summer Brew (1997)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1053,
      "name":"Petes Wicked Summer Brew (1996)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":2635,
      "name":"Sparkle",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1404,
      "name":"North 45 Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":1403,
      "name":"Horny Monk",
      "style":"Dubbel",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"74",
      "id":1402,
      "name":"Minds Eye PA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":2312,
      "name":"Camelback",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1636,
      "name":"Local 5 Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1518,
      "name":"Devils Head Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":1384,
      "name":"Elephant Rock IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1797,
      "name":"Black Bay Milk Stout",
      "style":"Milk / Sweet Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1437,
      "name":"Atom Splitter Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":1791,
      "name":"Hot Date Ale",
      "style":"Chile Beer",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1540,
      "name":"Masked Bandit IPA",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"24",
      "id":1491,
      "name":"Sweet Potato Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1335,
      "name":"Float Trip Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":847,
      "name":"Old Tom Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":846,
      "name":"Black Walnut Wheat",
      "style":"American Dark Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":521,
      "name":"McKinney Eddy Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":479,
      "name":"Missouri Mule India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2559,
      "name":"Blood of the Unicorn",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"51",
      "id":1760,
      "name":"GreyBeard™ IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"31",
      "id":1759,
      "name":"Pisgah Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1589,
      "name":"PONTO S.I.P.A.",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1457,
      "name":"Chronic Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1191,
      "name":"Swamis India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2336,
      "name":"New Cleveland Palesner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2553,
      "name":"Mazzie",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1909,
      "name":"Big Chuck Barleywine",
      "style":"American Barleywine",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":335,
      "name":"Ponderosa IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":64,
      "name":"Liquid Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"14",
      "id":2360,
      "name":"Morning Wood Wheat (Current)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"17",
      "id":1463,
      "name":"Hideout Helles",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"15",
      "id":1462,
      "name":"Dead Eye Dunkel",
      "style":"Munich Dunkel Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":1461,
      "name":"Peacemaker Pilsner",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"68",
      "id":711,
      "name":"Over the Rail Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":188,
      "name":"Pallavicini Pilsner (2009)",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"14",
      "id":130,
      "name":"Morning Wood Wheat (Current)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":399,
      "name":"Pyramid Hefeweizen (2011)",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":82,
      "name":"Haywire Hefeweizen (2010)",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":2031,
      "name":"Golden Fleece",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":2030,
      "name":"Smoking Mirror",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2269,
      "name":"Rahrs Blonde",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":2229,
      "name":"Pride of Texas Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"5",
      "id":2370,
      "name":"18th Anniversary Gose",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":2211,
      "name":"White (2015)",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":1861,
      "name":"BLAKKR",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":1718,
      "name":"Firemans #4 Blonde Ale (2013)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1290,
      "name":"The Sword Iron Swan Ale",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"52",
      "id":1091,
      "name":"Hans Pils (2015)",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"50",
      "id":1086,
      "name":"Four Squared (2015)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":830,
      "name":"Firemans #4 Blonde Ale (2015)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"55",
      "id":1021,
      "name":"Watership Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":938,
      "name":"Gangway IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":715,
      "name":"Long Day Lager",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":2516,
      "name":"Farmers Daughter Blonde",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2515,
      "name":"Pump House IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2514,
      "name":"Suicide Blonde IPA",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":2513,
      "name":"Vanilla Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":2512,
      "name":"Honey Rye",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1467,
      "name":"Happy Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"44",
      "id":945,
      "name":"Long Hammer IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"44",
      "id":583,
      "name":"Long Hammer IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":339,
      "name":"Copper Hook (2011)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1375,
      "name":"Nectar of the Hops",
      "style":"Mead",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1374,
      "name":"Sunshine Nectar",
      "style":"Mead",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1373,
      "name":"Black Raspberry Nectar",
      "style":"Mead",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":2087,
      "name":"Blood Orange Wit",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2414,
      "name":"Consilium",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"60",
      "id":1581,
      "name":"Hammer & Sickle",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"100",
      "id":1176,
      "name":"Redacted Rye IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"100",
      "id":1006,
      "name":"Elevation Triple India Pale Ale",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1005,
      "name":"5:00 OClock Afternoon Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"100",
      "id":636,
      "name":"Ryeteous Rye IPA (2012)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1538,
      "name":"Stout Ol Friend",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1075,
      "name":"Stout Ol Friend (2012)",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":710,
      "name":"Rye Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":709,
      "name":"Miners Gold",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":708,
      "name":"Vienna Lager",
      "style":"Vienna Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":706,
      "name":"Jessies Garage",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":220,
      "name":"Colorado Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":219,
      "name":"Miners Gold",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2576,
      "name":"Fist City",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1133,
      "name":"A Little Crazy",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":609,
      "name":"Rosa Hibiscus Ale",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"31",
      "id":418,
      "name":"Fistmas Ale",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":417,
      "name":"Oktoberfest Revolution",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"28",
      "id":416,
      "name":"Eugene Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":415,
      "name":"Anti-Hero IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"14",
      "id":414,
      "name":"Bottom Up Belgian Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":2452,
      "name":"Hustle",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":2451,
      "name":"Pure Fury",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":2132,
      "name":"Dad",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1993,
      "name":"Panther",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":1992,
      "name":"Franz",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"45",
      "id":1935,
      "name":"Zen",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":1852,
      "name":"Truth",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":1851,
      "name":"Cougar",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":2307,
      "name":"Smooth Operator",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":2580,
      "name":"Gose",
      "style":"Gose",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1807,
      "name":"Maine Island Trail Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1180,
      "name":"River North White Ale",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1179,
      "name":"River North Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1771,
      "name":"Lil SIPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":1654,
      "name":"Hop Bomber Rye Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"100",
      "id":2579,
      "name":"Jah Mon",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2373,
      "name":"Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2049,
      "name":"Headless Wylie",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2048,
      "name":"Dayman IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1880,
      "name":"All Aboard! Anniversary Stout",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1879,
      "name":"Hop Lace",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1878,
      "name":"OH-PA Session Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1877,
      "name":"Patricks Poison",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1764,
      "name":"Rudolphs Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1103,
      "name":"Babbling Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1102,
      "name":"Maxwells Scottish Ale",
      "style":"Scottish Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1101,
      "name":"Grateful White",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1100,
      "name":"RT Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1099,
      "name":"Old Wylies IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1098,
      "name":"Hala Kahiki Pineapple Beer",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1330,
      "name":"Track 1 Amber Lager",
      "style":"American Amber / Red Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2074,
      "name":"Pine Knob Pilsner",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1724,
      "name":"Cal and Co. Black Cherry Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1280,
      "name":"Lazy Daze Lager",
      "style":"American Adjunct Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":899,
      "name":"Rochester Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":363,
      "name":"Milkshake Stout",
      "style":"Milk / Sweet Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":158,
      "name":"Cornerstone IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":97,
      "name":"Lazy Daze Lager",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1860,
      "name":"Rogue American Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"78",
      "id":1577,
      "name":"12th Round",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":1576,
      "name":"RoughTail IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1575,
      "name":"Polar Night Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"36",
      "id":2304,
      "name":"Sundown",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2249,
      "name":"Sanctified",
      "style":"Belgian Strong Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2053,
      "name":"Fear of a Brett Planet",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1842,
      "name":"Original Slacker Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1841,
      "name":"Alpha Blackback",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1782,
      "name":"Kiss Off IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":1552,
      "name":"Dog Days Summer Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1479,
      "name":"1881 California Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"55",
      "id":1478,
      "name":"CAPT Black IPA",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":1370,
      "name":"Ruhstallers Gilt Edge Lager Beer",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"55",
      "id":883,
      "name":"CAPT Black IPA",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":882,
      "name":"1881 California Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1868,
      "name":"Saint Archer White Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"66",
      "id":1867,
      "name":"Saint Archer IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1865,
      "name":"Saint Archer Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":1864,
      "name":"Saint Archer Blonde",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":2599,
      "name":"Sex Panther",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"25",
      "id":2073,
      "name":"Winter Warmer (Vault Series)",
      "style":"Winter Warmer",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"99",
      "id":2063,
      "name":"Count Hopula (Vault Series)",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1995,
      "name":"Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1934,
      "name":"SunSpot Golden Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1329,
      "name":"I.W.A. (2011)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1299,
      "name":"Supermonk I.P.A.",
      "style":"Belgian IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1073,
      "name":"Epicenter Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1072,
      "name":"SanTan HefeWeizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":1071,
      "name":"Hop Shock IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"20",
      "id":852,
      "name":"Sex Panther (2014)",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":850,
      "name":"Devil’s Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":839,
      "name":"Rail Slide Imperial Spiced Ale",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":777,
      "name":"Mr. Pineapple",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":764,
      "name":"American Idiot Ale (2012)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":317,
      "name":"Hop Shock IPA (2010)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":286,
      "name":"SanTan HefeWeizen (2010)",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":285,
      "name":"Devil’s Ale (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":124,
      "name":"Epicenter Amber Ale (2010)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1392,
      "name":"Sanitas Saison Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1391,
      "name":"Sanitas Black IPA",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"88",
      "id":2002,
      "name":"Giant DIPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1683,
      "name":"Dread Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1362,
      "name":"Casinos IPA",
      "style":"English India Pale Ale (IPA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1519,
      "name":"Saison 88",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"95",
      "id":967,
      "name":"Black IPA",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":599,
      "name":"Santa Fe Irish Red Ale",
      "style":"Irish Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":307,
      "name":"Santa Fe Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":305,
      "name":"Imperial Java Stout",
      "style":"Russian Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":304,
      "name":"Freestyle Pilsner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":217,
      "name":"Happy Camper IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":1477,
      "name":"Oval Beach Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1503,
      "name":"Oak Aged Cider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1466,
      "name":"Ginger Cider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1245,
      "name":"Schilling Hard Cider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":1324,
      "name":"Schlafly Yakima Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1323,
      "name":"Schlafly Black Lager",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1078,
      "name":"Schlafly IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":1077,
      "name":"Schlafly American Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":588,
      "name":"Schlafly Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":53,
      "name":"Schlafly Summer Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":815,
      "name":"Sea Dog Wild Blueberry Wheat Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1302,
      "name":"Blur India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1416,
      "name":"Dry Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1415,
      "name":"Dry Hard Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"105",
      "id":918,
      "name":"Frankenlous IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"55",
      "id":917,
      "name":"Beckys Black Cat Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"40",
      "id":2250,
      "name":"Seventh Son of a Seventh Son",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1768,
      "name":"Stone Fort Brown Ale",
      "style":"English Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"40",
      "id":1767,
      "name":"Seventh Son Hopped Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"53",
      "id":1766,
      "name":"Humulus Nimbus Super Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"68",
      "id":1765,
      "name":"Golden Ratio IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2368,
      "name":"Black Hop IPA",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":738,
      "name":"Archers Ale (2004)",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1539,
      "name":"Monkey Fist IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":975,
      "name":"Shipyard Summer Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":814,
      "name":"Pumpkinhead Ale",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":727,
      "name":"Shipyard Export",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2474,
      "name":"Nooner",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":2239,
      "name":"Torpedo",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1919,
      "name":"Yonder Bock",
      "style":"Maibock / Helles Bock",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1918,
      "name":"CANfusion Rye Bock",
      "style":"Rye Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":1905,
      "name":"Sierra Nevada Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"26",
      "id":1338,
      "name":"Old Chico Crystal Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"28",
      "id":1295,
      "name":"Summerfest",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":426,
      "name":"Torpedo",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":400,
      "name":"Sierra Nevada Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2353,
      "name":"Sietsema Red Label",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":212,
      "name":"Bear Ass Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":161,
      "name":"Red Mountain Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":160,
      "name":"Ice Pick Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.1",
      "ibu":"52",
      "id":2574,
      "name":"4Beans",
      "style":"Baltic Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":2479,
      "name":"Jammer",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2443,
      "name":"Abigale",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"7",
      "id":2266,
      "name":"Rad",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"62",
      "id":2090,
      "name":"Bengali",
      "style":"American IPA",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"50",
      "id":1962,
      "name":"Sensi Harvest",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"111",
      "id":1696,
      "name":"Hi-Res",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":1608,
      "name":"Global Warmer",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"74",
      "id":1591,
      "name":"Autumnation (2013)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":1388,
      "name":"The Crisp",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"34",
      "id":1387,
      "name":"Sweet Action",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"57",
      "id":1386,
      "name":"Righteous Ale",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"62",
      "id":1385,
      "name":"Bengali Tiger",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":1020,
      "name":"3Beans",
      "style":"Baltic Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"47",
      "id":778,
      "name":"Brownstone",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":630,
      "name":"Apollo",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":629,
      "name":"Harbinger",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"103",
      "id":628,
      "name":"Resin",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":525,
      "name":"Diesel",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"48",
      "id":512,
      "name":"Autumnation (2011-12) (2011)",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"42",
      "id":425,
      "name":"The Crisp (2011)",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"34",
      "id":424,
      "name":"Sweet Action (2011)",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"57",
      "id":423,
      "name":"Righteous Ale (2011)",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"62",
      "id":422,
      "name":"Bengali Tiger (2011)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1942,
      "name":"Rudie Session IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1708,
      "name":"Tasters Choice",
      "style":"Doppelbock",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":1521,
      "name":"Modus Hoperandi",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1297,
      "name":"Estival Cream Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1192,
      "name":"Vernal Minthe Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1013,
      "name":"Hibernal Vinifera Stout",
      "style":"Foreign / Export Stout",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":774,
      "name":"Autumnal Molé Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":386,
      "name":"Mexican Logger",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":70,
      "name":"True Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":69,
      "name":"Euphoria Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"58",
      "id":68,
      "name":"ESB Special Ale",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":67,
      "name":"Modus Hoperandi",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"39",
      "id":1792,
      "name":"Iron Butt Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"92",
      "id":1609,
      "name":"Initial Point India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2537,
      "name":"Monkey Dancing On A Razor Blade",
      "style":"Belgian IPA",
      "ounces":24.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2536,
      "name":"Tripel Deke",
      "style":"Tripel",
      "ounces":24.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":30,
      "name":"Urban Wilderness Pale Ale",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":2305,
      "name":"Homefront IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":1588,
      "name":"Sly Fox Christmas Ale 2013",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1363,
      "name":"Grisette",
      "style":"Grisette",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1211,
      "name":"360° India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":1123,
      "name":"Helles Golden Lager",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":926,
      "name":"Sly Fox Christmas Ale 2012 (2012)",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"90",
      "id":894,
      "name":"Odyssey Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":166,
      "name":"Oktoberfest Lager",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"113",
      "id":24,
      "name":"113 IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":23,
      "name":"Dunkel Lager",
      "style":"Munich Dunkel Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":22,
      "name":"Royal Weisse Ale",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"44",
      "id":21,
      "name":"Pikeland Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":20,
      "name":"Phoenix Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"88",
      "id":2407,
      "name":"Rule G IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2406,
      "name":"Murphys Law",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"33",
      "id":2405,
      "name":"Alter Ego ",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2234,
      "name":"Monarch Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":1606,
      "name":"Snow King Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":617,
      "name":"Zonker Stout",
      "style":"Foreign / Export Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":407,
      "name":"OB-1 Organic Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":406,
      "name":"Snake River Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":402,
      "name":"Snake River Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":393,
      "name":"Pako’s EyePA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1798,
      "name":"Thanksgiving Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1655,
      "name":"Double Dagger Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"100",
      "id":1596,
      "name":"Dagger Falls IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"100",
      "id":1595,
      "name":"Dagger Falls IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1482,
      "name":"Socktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1447,
      "name":"Hopnoxious Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1425,
      "name":"Barrel Aged Seven Devils Imperial Stout",
      "style":"American Double / Imperial Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1424,
      "name":"Boise Co-Op Two Score Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1298,
      "name":"Sockeye Belgian Style Summer Ale",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1181,
      "name":"Sockeye Maibock",
      "style":"Maibock / Helles Bock",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"100",
      "id":1160,
      "name":"Old Devils Tooth",
      "style":"American Barleywine",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1152,
      "name":"Galena Golden",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":1151,
      "name":"Hell-Diver Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":1150,
      "name":"Woolybugger Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1076,
      "name":"Power House Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"90",
      "id":995,
      "name":"Winterfest",
      "style":"American Strong Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"100",
      "id":879,
      "name":"Dagger Falls IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"18",
      "id":1972,
      "name":"LuckenBock",
      "style":"Bock",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1971,
      "name":"Texas Pale Ale (TPA)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1970,
      "name":"6 String Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":1969,
      "name":"Kol Beer",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":2024,
      "name":"Montauk Light",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"32",
      "id":1283,
      "name":"Na Zdraví Pilsner",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"65",
      "id":1282,
      "name":"Nice Rack IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"72",
      "id":2362,
      "name":"2014 IPA Cicada Series",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"65",
      "id":2346,
      "name":"Sinister Minister Black IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":2320,
      "name":"Jack the Sipper",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":2297,
      "name":"Devils Harvest Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2296,
      "name":"Suzy B Dirty Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"80",
      "id":1745,
      "name":"Mississippi Fire Ant",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":1120,
      "name":"Hipster Breakfast",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1118,
      "name":"Suzy B Dirty Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"60",
      "id":1117,
      "name":"Devils Harvest Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":2387,
      "name":"Pine Belt Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2267,
      "name":"Walloon",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"23",
      "id":1740,
      "name":"Le Mort Vivant",
      "style":"Bière de Garde",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"110",
      "id":1728,
      "name":"Red Cockaded Ale",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"100",
      "id":1497,
      "name":"Valkyrie Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"110",
      "id":1011,
      "name":"Red Cockaded Ale (2013)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"40",
      "id":1010,
      "name":"Old Potentate",
      "style":"Old Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":856,
      "name":"Bombshell Blonde",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"100",
      "id":853,
      "name":"PRO-AM (2012) (2012)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":691,
      "name":"Walloon (2014)",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"23",
      "id":555,
      "name":"Le Mort Vivant (2011)",
      "style":"Bière de Garde",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"50",
      "id":46,
      "name":"Buried Hatchet Stout",
      "style":"Foreign / Export Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":45,
      "name":"Pine Belt Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":44,
      "name":"Bombshell Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":2486,
      "name":"Baby Daddy Session IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":763,
      "name":"Hopluia (2004)",
      "style":"English India Pale Ale (IPA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2271,
      "name":"Ball & Chain (2014)",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2206,
      "name":"Bitter Biker Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2136,
      "name":"God Damn Pigeon Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2135,
      "name":"Working for the Weekend",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2134,
      "name":"Angry Adam",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2109,
      "name":"Freedom Fries",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1821,
      "name":"Bitter Biker Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1820,
      "name":"Ghost Bike Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1819,
      "name":"Spiteful IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1634,
      "name":"Alley Time",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1633,
      "name":"Fat Badger",
      "style":"Irish Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1632,
      "name":"In the Weeds",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":855,
      "name":"Special Amber",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":445,
      "name":"Special Amber",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1587,
      "name":"Seven Gates Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2242,
      "name":"Gunga Din",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1544,
      "name":"Starr Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"52",
      "id":1205,
      "name":"Northern Lights India Pale Ale",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":369,
      "name":"Festie",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"52",
      "id":368,
      "name":"Northern Lights India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":2386,
      "name":"Third Eye Enlightened Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":92,
      "name":"Colorado Kölsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":91,
      "name":"Steam Engine Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":90,
      "name":"Third Eye Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":2366,
      "name":"Point Special (Current)",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":2365,
      "name":"Point Special",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":2270,
      "name":"Point Cascade Pale Ale (2013)",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":2228,
      "name":"Point Special",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"9",
      "id":2151,
      "name":"Onyx Black Ale",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"64",
      "id":2150,
      "name":"Beyond The Pale IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":2122,
      "name":"Point Special (2013)",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":2121,
      "name":"Point Special (2012)",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":2115,
      "name":"Point Special Lager",
      "style":"American Adjunct Lager",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1450,
      "name":"St. Benedicts Winter Ale",
      "style":"Winter Warmer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1357,
      "name":"Point Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"7",
      "id":1225,
      "name":"Point Nude Beach Summer Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"7",
      "id":816,
      "name":"Point Nude Beach Summer Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"7",
      "id":772,
      "name":"Point Nude Beach Summer Wheat (2011)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"",
      "id":684,
      "name":"Drop Dead Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"13",
      "id":650,
      "name":"Three Kings Ale",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":456,
      "name":"Point Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"32",
      "id":357,
      "name":"2012 Black Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"7",
      "id":141,
      "name":"Point Nude Beach Summer Wheat (2010)",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":140,
      "name":"Point Cascade Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"14",
      "id":139,
      "name":"Point Amber Classic",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"9",
      "id":138,
      "name":"Point Special Lager",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"31",
      "id":953,
      "name":"Wisco Disco",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1983,
      "name":"Brontide",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1631,
      "name":"Brontide",
      "style":"American Black Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1344,
      "name":"Classique",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":922,
      "name":"Sunsplash Golden Ale (2004)",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"25",
      "id":1410,
      "name":"Sand Island Lighthouse",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"30",
      "id":925,
      "name":"Lily Flagg Milk Stout",
      "style":"Milk / Sweet Stout",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"70",
      "id":637,
      "name":"Monkeynaut IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2369,
      "name":"Straub Beer (Current)",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":2233,
      "name":"American Lager",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"8",
      "id":2232,
      "name":"American Amber",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.03",
      "ibu":"13",
      "id":2231,
      "name":"American Light",
      "style":"Light Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"49",
      "id":2352,
      "name":"Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":2549,
      "name":"Make It So",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"55",
      "id":2473,
      "name":"Hopvale Organic Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":2415,
      "name":"Unchained #18 Hop Silo",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"29",
      "id":2605,
      "name":"Tip Off",
      "style":"Altbier",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2215,
      "name":"Java Mac",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":2164,
      "name":"Cowbell",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2085,
      "name":"Hop Up Offa That Brett (2014)",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"23",
      "id":2084,
      "name":"PV Muckle (2013)",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"36",
      "id":2083,
      "name":"Bourbon Barrel Batch 666: Sympathy for the Devil",
      "style":"Belgian Dark Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"30",
      "id":2082,
      "name":"Whip Fight",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":2081,
      "name":"Port Barrel Wee Mac ",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2001,
      "name":"Fistful Of Hops Red",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2000,
      "name":"Fistful of Hops Orange",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":1999,
      "name":"Fistful Of Hops Blue",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":1996,
      "name":"Fistful of Hops Green",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1948,
      "name":"30 Min Coma",
      "style":"Belgian IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"30",
      "id":1656,
      "name":"Wee Muckle",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":1599,
      "name":"Royal Brat",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"77",
      "id":1420,
      "name":"Grapefruit Jungle (GFJ)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":1389,
      "name":"Osiris Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"75",
      "id":1367,
      "name":"Bourbon Barrel Aged Timmie",
      "style":"Russian Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"23",
      "id":1366,
      "name":"Stupid Sexy Flanders",
      "style":"Flanders Oud Bruin",
      "ounces":16.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":1347,
      "name":"Bourbon Barrel Cowbell",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1314,
      "name":"Popcorn Pilsner",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"27",
      "id":1128,
      "name":"Ring of Dingle",
      "style":"Irish Dry Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":1127,
      "name":"Bourbon Barrel Wee Mac",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"60",
      "id":1049,
      "name":"Bourbon Barrel Johan",
      "style":"English Barleywine",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":934,
      "name":"The Deuce",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"24",
      "id":923,
      "name":"The Velvet Fog",
      "style":"Quadrupel (Quad)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":874,
      "name":"Sun King Oktoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":739,
      "name":"Indianapolis Indians Lager",
      "style":"Dortmunder / Export Lager",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"24",
      "id":698,
      "name":"Indians Victory Lager (2012)",
      "style":"Dortmunder / Export Lager",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":660,
      "name":"Chaka",
      "style":"Belgian Strong Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"91",
      "id":651,
      "name":"Isis",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"30",
      "id":584,
      "name":"Wee Muckle (2011)",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"77",
      "id":532,
      "name":"Grapefruit Jungle (GFJ) (2011)",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":526,
      "name":"Sun King Oktoberfest (2011)",
      "style":"Märzen / Oktoberfest",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"60",
      "id":394,
      "name":"Johan the Barleywine",
      "style":"English Barleywine",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"23",
      "id":213,
      "name":"Wee Mac Scottish-Style Ale",
      "style":"Scottish Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":55,
      "name":"Sunlight Cream Ale",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":54,
      "name":"Osiris Pale Ale (2010)",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1207,
      "name":"Dam Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1206,
      "name":"Red Clay IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2543,
      "name":"Todd the Axe Man",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2409,
      "name":"Doomtree",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"85",
      "id":1739,
      "name":"BLAKKR",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"69",
      "id":1112,
      "name":"Overrated! West Coast Style IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"90",
      "id":329,
      "name":"WET",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"37",
      "id":19,
      "name":"Bitter Brewer",
      "style":"English Bitter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"34",
      "id":18,
      "name":"SurlyFest",
      "style":"Rye Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":17,
      "name":"Coffee Bender",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":16,
      "name":"Bender",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"120",
      "id":15,
      "name":"Abrasive Ale",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":14,
      "name":"Hell",
      "style":"Keller Bier / Zwickel Bier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"33",
      "id":13,
      "name":"CynicAle",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"99",
      "id":12,
      "name":"Furious",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"50",
      "id":1242,
      "name":"Big Nose",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":1241,
      "name":"Cotton Mouth",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":1240,
      "name":"Stump Knocker Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"38",
      "id":1239,
      "name":"Midnight Oil",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"18",
      "id":1238,
      "name":"Wild Night",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1554,
      "name":"Bermuda Triangle Ginger Beer",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2568,
      "name":"Take Two Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2551,
      "name":"Waterkeeper",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1710,
      "name":"SweetWater IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1709,
      "name":"420 Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"95",
      "id":1229,
      "name":"Dodgy Knight Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1164,
      "name":"TailGate Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"44",
      "id":663,
      "name":"TailGate IPA",
      "style":"American IPA",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"44",
      "id":662,
      "name":"TailGate IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":623,
      "name":"TailGate Hefeweizen",
      "style":"Hefeweizen",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"19",
      "id":622,
      "name":"Blacktop Blonde",
      "style":"American Blonde Ale",
      "ounces":24.0
   },
   {
      "abv":"0.05",
      "ibu":"19",
      "id":362,
      "name":"Blacktop Blonde",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":361,
      "name":"TailGate Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"34",
      "id":2575,
      "name":"Wooden Rooster",
      "style":"Tripel",
      "ounces":16.9
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":2555,
      "name":"Ginger Peach Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":1736,
      "name":"Zombie Monkie",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1196,
      "name":"Wild Plum Farmhouse Ale",
      "style":"Saison / Farmhouse Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1063,
      "name":"Vanilla Bean Buffalo Sweat",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"110",
      "id":1017,
      "name":"Ethos IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"12",
      "id":1009,
      "name":"Tallgrass Pub Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"93",
      "id":912,
      "name":"Oasis",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":765,
      "name":"Buffalo Sweat",
      "style":"Milk / Sweet Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":676,
      "name":"Halcyon Unfiltered Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":595,
      "name":"8-Bit Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":537,
      "name":"Velvet Rooster",
      "style":"Tripel",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":412,
      "name":"Halcyon Unfiltered Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":105,
      "name":"Köld Lager (2010)",
      "style":"German Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"93",
      "id":104,
      "name":"Oasis (2010)",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":103,
      "name":"Tallgrass Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":102,
      "name":"Buffalo Sweat (2010)",
      "style":"Milk / Sweet Stout",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"60",
      "id":101,
      "name":"Tallgrass IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1433,
      "name":"Hat Trick Hop IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1432,
      "name":"Yard Sale Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":936,
      "name":"Loafin Bräu",
      "style":"Altbier",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"80",
      "id":544,
      "name":"Old Elephant Foot IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"35",
      "id":2640,
      "name":"Pecks Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2448,
      "name":"Reactor",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2447,
      "name":"Mr. Orange",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"22",
      "id":2601,
      "name":"Deduction",
      "style":"Dubbel",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":973,
      "name":"Face Down Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":827,
      "name":"Tempter IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":589,
      "name":"Bridal Veil Rye Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2155,
      "name":"Smittytown",
      "style":"Extra Special / Strong Bitter (ESB)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1982,
      "name":"Greenwood Beach",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1939,
      "name":"Gatecrasher",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":1082,
      "name":"RecreationAle",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2119,
      "name":"First Stand",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"23",
      "id":2118,
      "name":"Battle LIne",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":2117,
      "name":"Broken Bridge",
      "style":"Dunkelweizen",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"69",
      "id":2116,
      "name":"Brutus",
      "style":"English India Pale Ale (IPA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1916,
      "name":"Petit Mutant",
      "style":"American Wild Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":1915,
      "name":"The Crusher",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1914,
      "name":"Beelzebub",
      "style":"American Double / Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1810,
      "name":"Focal Banger",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"120",
      "id":1111,
      "name":"Heady Topper",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"120",
      "id":379,
      "name":"Heady Topper",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"20",
      "id":1200,
      "name":"Bomber Mountain Amber Ale (2013)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"75",
      "id":1199,
      "name":"Indian Paintbrush IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"16",
      "id":1198,
      "name":"Saddle Bronc Brown Ale (2013)",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"15",
      "id":1197,
      "name":"Wagon Box Wheat Beer",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1945,
      "name":"Birdhouse Pale Ale",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1079,
      "name":"Ozzy",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":94,
      "name":"Resurrection",
      "style":"Dubbel",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":1748,
      "name":"Bronx Summer Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"46",
      "id":1747,
      "name":"Bronx Black Pale Ale",
      "style":"American Black Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"50",
      "id":1037,
      "name":"Bronx Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"35",
      "id":2594,
      "name":"Surfrider",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2035,
      "name":"Kolschtal Eddy",
      "style":"Kölsch",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2034,
      "name":"South Bay Session IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"34",
      "id":1562,
      "name":"Grandmas Pecan",
      "style":"English Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"101",
      "id":1561,
      "name":"Double Trunk",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"45",
      "id":1749,
      "name":"Just IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2455,
      "name":"Lionshead",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":963,
      "name":"Manhattan Gold Lager (1990)",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2638,
      "name":"G. B. Russo’s Italian Pistachio Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1278,
      "name":"Northern Hawk Owl Amber",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1277,
      "name":"CEO Stout",
      "style":"American Stout",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1276,
      "name":"Will Power Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1732,
      "name":"Curious Traveler Shandy",
      "style":"Shandy",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":2347,
      "name":"Hunny Do Wheat",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1781,
      "name":"Three Way Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1780,
      "name":"Rise to the Top",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1779,
      "name":"Lost Trout Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"11",
      "id":2421,
      "name":"Watermelon Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":2319,
      "name":"Knotty Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"40",
      "id":2317,
      "name":"Fivepine Chocolate Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"82",
      "id":2316,
      "name":"Hoodoo Voodoo IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":1913,
      "name":"Hydraulion Red",
      "style":"Irish Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"50",
      "id":1912,
      "name":"40 Mile IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"64",
      "id":2617,
      "name":"Citra Faced",
      "style":"American Pale Wheat Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"31",
      "id":2616,
      "name":"Pole Barn Stout",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":2615,
      "name":"Pale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":2614,
      "name":"Yoshis Nectar",
      "style":"California Common / Steam Beer",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1889,
      "name":"Leatherhead Red",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1222,
      "name":"Cropduster Mid-American IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":122,
      "name":"Golden Frau Honey Wheat",
      "style":"Braggot",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":121,
      "name":"Cornstalker Dark Wheat",
      "style":"American Dark Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2623,
      "name":"Cafe Leche",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"12",
      "id":2622,
      "name":"Damascene Apricot Sour",
      "style":"Fruit / Vegetable Beer",
      "ounces":16.0
   },
   {
      "abv":"0.12",
      "ibu":"90",
      "id":2621,
      "name":"Csar",
      "style":"Russian Imperial Stout",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1817,
      "name":"Klingon Warnog Roggen Dunkel",
      "style":"Roggenbier",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"115",
      "id":1449,
      "name":"Overlord Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":951,
      "name":"Alloy",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":950,
      "name":"Rivet Irish Red Ale",
      "style":"Irish Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":949,
      "name":"3 Gear Robust Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"35",
      "id":948,
      "name":"Circuit Bohemian Pilsner",
      "style":"Czech Pilsener",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2321,
      "name":"Turnrow Harvest Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":1755,
      "name":"Juke Joint IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"35",
      "id":1754,
      "name":"Parade Ground Coffee Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"21",
      "id":1428,
      "name":"Tin Roof Watermelon Wheat",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"18",
      "id":529,
      "name":"Tin Roof Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"37",
      "id":495,
      "name":"Voodoo Bengal Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":494,
      "name":"Perfect Tin Amber",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"87",
      "id":1856,
      "name":"IPA & a Half",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"33",
      "id":736,
      "name":"Ornery Amber Lager (2003)",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1027,
      "name":"Big Island Shandy",
      "style":"Shandy",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1026,
      "name":"Preservation IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"72",
      "id":1938,
      "name":"Almanac IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1937,
      "name":"Milk Mustachio Stout",
      "style":"Milk / Sweet Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"30",
      "id":1936,
      "name":"Farmers Tan Red Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":594,
      "name":"Triangle India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":114,
      "name":"Triangle White Ale",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":113,
      "name":"Triangle Belgian Golden Ale",
      "style":"Belgian Strong Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2445,
      "name":"Troegenator",
      "style":"Doppelbock",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"93",
      "id":2444,
      "name":"Nugget Nectar",
      "style":"American Amber / Red Ale",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"45",
      "id":2203,
      "name":"Sunshine Pils",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"25",
      "id":1510,
      "name":"Troegenator Doublebock",
      "style":"Doppelbock",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":1509,
      "name":"Perpetual IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"52",
      "id":433,
      "name":"Greenville Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":641,
      "name":"Hoppy Boy",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"26",
      "id":2588,
      "name":"Cow Creek",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"63",
      "id":2458,
      "name":"Chupahopra",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"19",
      "id":2212,
      "name":"Twisted X",
      "style":"American Adjunct Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"41",
      "id":2235,
      "name":"Day Hike Session",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"48",
      "id":1661,
      "name":"Trailhead ISA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":1660,
      "name":"Immersion Amber",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1659,
      "name":"Evo IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1438,
      "name":"Presidential Pils",
      "style":"Czech Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":1173,
      "name":"Evolutionary IPA (2012)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":560,
      "name":"Persnickety Pale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":519,
      "name":"SoDo Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":518,
      "name":"Immersion Amber Ale (2011)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":505,
      "name":"Evolutionary IPA (2011)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"48",
      "id":482,
      "name":"Trailhead India Style Session Ale (2011)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":451,
      "name":"Panorama Wheat Ale",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":2497,
      "name":"Wobble",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"43",
      "id":2246,
      "name":"Night Cat",
      "style":"American Dark Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"43",
      "id":1630,
      "name":"Night Cat (2014)",
      "style":"American Dark Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":1284,
      "name":"Dog Days Lager",
      "style":"Dortmunder / Export Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"36",
      "id":1121,
      "name":"Sidekick Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"23",
      "id":1042,
      "name":"Atom Smasher",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1041,
      "name":"Testudo",
      "style":"Bière de Garde",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1040,
      "name":"Hobnob B & B Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"68",
      "id":861,
      "name":"Cane and Ebel",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":642,
      "name":"Outlaw IPA (2015)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2037,
      "name":"The Gilded Age",
      "style":"Munich Helles Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1285,
      "name":"No Limits Hefeweizen",
      "style":"Hefeweizen",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1189,
      "name":"Honeyspot Road White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1171,
      "name":"Road 2 Ruin Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1170,
      "name":"Workers Comp Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1169,
      "name":"Ol Factory Pils",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"10",
      "id":2310,
      "name":"PUNKN",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":2100,
      "name":"Yard Sale Winter Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"42",
      "id":1925,
      "name":"Trader Session IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"83",
      "id":1723,
      "name":"Hop Nosh IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"17",
      "id":1212,
      "name":"SUMR",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"32",
      "id":1097,
      "name":"Organic Baba Black Lager",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"82",
      "id":1089,
      "name":"Hop Notch IPA (2013)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"34",
      "id":1088,
      "name":"Cutthroat Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"29",
      "id":974,
      "name":"WYLD Extra Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":98,
      "name":"Pilsner Ukiah",
      "style":"German Pilsener",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"75",
      "id":2372,
      "name":"The Green Room",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":2367,
      "name":"Humbucker Helles",
      "style":"Maibock / Helles Bock",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1704,
      "name":"Uncle Johns Apple Cherry Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1703,
      "name":"Uncle Johns Apricot Apple Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":877,
      "name":"Draught Hard Apple Cider",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.00",
      "ibu":"",
      "id":606,
      "name":"Scotty K NA",
      "style":"Low Alcohol Beer",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":543,
      "name":"Bacon Brown Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":347,
      "name":"Golden State Ale",
      "style":"Belgian Pale Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":346,
      "name":"Baltic Porter",
      "style":"Baltic Porter",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":25,
      "name":"Siamese twin",
      "style":"Dubbel",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"90",
      "id":2507,
      "name":"Double Duckpin",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"10",
      "id":2506,
      "name":"Old Pro",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":829,
      "name":"Duckpin Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":582,
      "name":"Balt Altbier",
      "style":"Altbier",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"50",
      "id":2190,
      "name":"Campside Session IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":1951,
      "name":"Upland Wheat Ale",
      "style":"Witbier",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1950,
      "name":"Dragonfly IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.12",
      "ibu":"",
      "id":2565,
      "name":"Lee Hill Series Vol. 5 - Belgian Style Quadrupel Ale",
      "style":"Quadrupel (Quad)",
      "ounces":19.2
   },
   {
      "abv":"0.10",
      "ibu":"",
      "id":2564,
      "name":"Lee Hill Series Vol. 4 - Manhattan Style Rye Ale",
      "style":"Rye Beer",
      "ounces":19.2
   },
   {
      "abv":"0.06",
      "ibu":"24",
      "id":2563,
      "name":"Lee Hill Series Vol. 2 - Wild Saison",
      "style":"American Wild Ale",
      "ounces":19.2
   },
   {
      "abv":"0.09",
      "ibu":"51",
      "id":2562,
      "name":"Lee Hill Series Vol. 3 - Barrel Aged Imperial Stout",
      "style":"American Double / Imperial Stout",
      "ounces":19.2
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2561,
      "name":"Lee Hill Series Vol. 1 - Barrel Aged Brown Ale",
      "style":"American Brown Ale",
      "ounces":19.2
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2560,
      "name":"Blood Orange Saison",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"33",
      "id":1932,
      "name":"Thai Style White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"30",
      "id":1853,
      "name":"Ferus Fluxus Wild Belgian Pale Ale",
      "style":"American Wild Ale",
      "ounces":19.2
   },
   {
      "abv":"0.09",
      "ibu":"90",
      "id":1315,
      "name":"Upslope Imperial India Pale Ale",
      "style":"American Double / Imperial IPA",
      "ounces":19.2
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":907,
      "name":"Upslope Christmas Ale",
      "style":"Winter Warmer",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":906,
      "name":"Upslope Pumpkin Ale",
      "style":"Pumpkin Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"30",
      "id":683,
      "name":"Upslope Belgian Style Pale Ale",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":614,
      "name":"Upslope Foreign Style Stout",
      "style":"Foreign / Export Stout",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":466,
      "name":"Top Rope Mexican-style Craft Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"22",
      "id":444,
      "name":"Upslope Craft Lager",
      "style":"Vienna Lager",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":345,
      "name":"Upslope Brown Ale",
      "style":"English Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":80,
      "name":"Upslope Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":79,
      "name":"Upslope India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":382,
      "name":"Common Sense Kentucky Common Ale",
      "style":"American Brown Ale",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"70",
      "id":381,
      "name":"Upstate I.P.W.",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1826,
      "name":"Squatters Full Suspension Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"75",
      "id":1825,
      "name":"Squatters Hop Rising Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1824,
      "name":"Devastator Double Bock",
      "style":"Doppelbock",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1823,
      "name":"Wasatch Ghostrider White IPA",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1682,
      "name":"Wasatch Ghostrider White IPA (2014)",
      "style":"American White IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1681,
      "name":"Wasatch Apricot Hefeweizen",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"75",
      "id":1680,
      "name":"Squatters Hop Rising Double IPA (2014)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1679,
      "name":"Squatters Full Suspension Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2245,
      "name":"Nunica Pine",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":2244,
      "name":"Ginger Peach",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1378,
      "name":"Totally Roasted",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1377,
      "name":"Blue Gold",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1376,
      "name":"Hard Apple",
      "style":"Cider",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2411,
      "name":"Nitro Can Coffee Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"25",
      "id":1770,
      "name":"Voodoo Love Child",
      "style":"Tripel",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"23",
      "id":1769,
      "name":"White Magick of the Sun",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"31",
      "id":1730,
      "name":"Wynonas Big Brown Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.09",
      "ibu":"25",
      "id":1729,
      "name":"Gran Met",
      "style":"Belgian Strong Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":1603,
      "name":"Good Vibes IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"85",
      "id":1488,
      "name":"Pilzilla",
      "style":"American Double / Imperial Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"37",
      "id":1846,
      "name":"Wachusett Light IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":1845,
      "name":"Green Monsta IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"50",
      "id":1844,
      "name":"Wachusett IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1843,
      "name":"Strawberry White",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"85",
      "id":1418,
      "name":"Larry Imperial IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1038,
      "name":"Wachusett Summer",
      "style":"American Pale Wheat Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"17",
      "id":1030,
      "name":"Country Pale Ale",
      "style":"English Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"37",
      "id":1029,
      "name":"Wachusett Light IPA (2013)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":908,
      "name":"Pumpkan",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"10",
      "id":619,
      "name":"Wachusett Blueberry Ale",
      "style":"Fruit / Vegetable Beer",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"55",
      "id":618,
      "name":"Green Monsta IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":780,
      "name":"T-6 Red Ale (2004)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"67",
      "id":2450,
      "name":"Self Starter",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":2223,
      "name":"Ermals",
      "style":"Cream Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2222,
      "name":"10 Ton",
      "style":"Oatmeal Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2221,
      "name":"Flyin Rye",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.09",
      "ibu":"",
      "id":2439,
      "name":"Christmas Ale",
      "style":"Herbed / Spiced Beer",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":2356,
      "name":"Pay It Forward Cocoa Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1069,
      "name":"West Sixth Amber Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":652,
      "name":"West Sixth IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1542,
      "name":"One Claw",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"5",
      "id":1312,
      "name":"Westbrook Gose",
      "style":"Gose",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"16",
      "id":576,
      "name":"White Thai",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"65",
      "id":575,
      "name":"Westbrook IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"22",
      "id":1645,
      "name":"Westfield Octoberfest",
      "style":"Märzen / Oktoberfest",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1551,
      "name":"Pops Old Fashioned Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"55",
      "id":1550,
      "name":"Charlie in the Rye",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2364,
      "name":"Royal Lager",
      "style":"American Pale Lager",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":2348,
      "name":"Rip Van Winkle (Current)",
      "style":"Bock",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2344,
      "name":"O’Malley’s Stout",
      "style":"English Stout",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"89",
      "id":2343,
      "name":"O’Malley’s IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"",
      "ibu":"",
      "id":2342,
      "name":"O’Malley’s Irish Style Cream Ale",
      "style":"Cream Ale",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"28",
      "id":2341,
      "name":"Lil Lucys Hot Pepper Ale",
      "style":"Chile Beer",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2340,
      "name":"Drop Kick Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2573,
      "name":"Raspberry Berliner Weisse",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2572,
      "name":"Hop Session",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2571,
      "name":"Blueberry Berliner Weisse",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2570,
      "name":"Berliner Weisse",
      "style":"Berliner Weissbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"",
      "id":1498,
      "name":"Super G IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1838,
      "name":"Hefe Lemon",
      "style":"Radler",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1837,
      "name":"Hefe Black",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"30",
      "id":1836,
      "name":"Widmer Brothers Hefeweizen",
      "style":"Hefeweizen",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":1619,
      "name":"Hop Slayer Double IPA",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1618,
      "name":"Pumpkin Ale",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1364,
      "name":"Big Bowl Blonde Ale",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"27",
      "id":971,
      "name":"Phat Chance",
      "style":"American Blonde Ale",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":740,
      "name":"Hop Slayer Double IPA (2011)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"100",
      "id":430,
      "name":"Hop Slayer Double IPA (2011)",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"13",
      "id":398,
      "name":"Wild Onion Summer Wit",
      "style":"Witbier",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"23",
      "id":366,
      "name":"Jack Stout",
      "style":"Oatmeal Stout",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":334,
      "name":"Wild Onion Pumpkin Ale (2010)",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"41",
      "id":162,
      "name":"Paddy Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"21",
      "id":2253,
      "name":"Blonde Hunny",
      "style":"Belgian Pale Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"20",
      "id":1318,
      "name":"Wild Wolf Wee Heavy Scottish Style Ale",
      "style":"Scotch Ale / Wee Heavy",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":1195,
      "name":"Wild Wolf American Pilsner",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"45",
      "id":1194,
      "name":"Alpha Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":826,
      "name":"Mystical Stout",
      "style":"Irish Dry Stout",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":825,
      "name":"Bodacious Bock",
      "style":"Bock",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":813,
      "name":"Ambitious Lager",
      "style":"Munich Helles Lager",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":324,
      "name":"Wyoming Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":323,
      "name":"Wind River Blonde Ale",
      "style":"American Blonde Ale",
      "ounces":16.0
   },
   {
      "abv":"0.07",
      "ibu":"83",
      "id":762,
      "name":"Ace IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.08",
      "ibu":"31",
      "id":761,
      "name":"P-51 Porter",
      "style":"American Porter",
      "ounces":16.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2149,
      "name":"#001 Golden Amber Lager",
      "style":"American Amber / Red Lager",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"60",
      "id":2148,
      "name":"#002 American I.P.A.",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2147,
      "name":"#003 Brown & Robust Porter",
      "style":"American Porter",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"38",
      "id":2146,
      "name":"#004 Session I.P.A.",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":2047,
      "name":"Tarasque",
      "style":"Saison / Farmhouse Ale",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"61",
      "id":1470,
      "name":"Ananda India Pale Ale",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"23",
      "id":1469,
      "name":"Tiny Bomb",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"72",
      "id":2627,
      "name":"Train Hopper",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":2626,
      "name":"Edward’s Portly Brown",
      "style":"American Brown Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"135",
      "id":1676,
      "name":"Troopers Alley IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"15",
      "id":1468,
      "name":"Wolverine Premium Lager",
      "style":"American Pale Lager",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":822,
      "name":"Woodchuck Amber Hard Cider",
      "style":"Cider",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"82",
      "id":2417,
      "name":"4000 Footer IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.02",
      "ibu":"15",
      "id":2306,
      "name":"Summer Brew",
      "style":"American Pilsner",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":1697,
      "name":"Be Hoppy IPA",
      "style":"American IPA",
      "ounces":16.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":2194,
      "name":"Worthy IPA",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"25",
      "id":1514,
      "name":"Easy Day Kolsch",
      "style":"Kölsch",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"30",
      "id":1513,
      "name":"Lights Out Vanilla Cream Extra Stout",
      "style":"American Double / Imperial IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"69",
      "id":1512,
      "name":"Worthy IPA (2013)",
      "style":"American IPA",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"50",
      "id":1511,
      "name":"Worthy Pale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.04",
      "ibu":"",
      "id":1345,
      "name":"Pattys Chile Beer",
      "style":"Chile Beer",
      "ounces":12.0
   },
   {
      "abv":"0.08",
      "ibu":"",
      "id":1316,
      "name":"Colorojo Imperial Red Ale",
      "style":"American Strong Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":1045,
      "name":"Wynkoop Pumpkin Ale",
      "style":"Pumpkin Ale",
      "ounces":12.0
   },
   {
      "abv":"0.07",
      "ibu":"",
      "id":1035,
      "name":"Rocky Mountain Oyster Stout",
      "style":"American Stout",
      "ounces":12.0
   },
   {
      "abv":"0.06",
      "ibu":"45",
      "id":928,
      "name":"Belgorado",
      "style":"Belgian IPA",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":807,
      "name":"Rail Yard Ale",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":620,
      "name":"B3K Black Lager",
      "style":"Schwarzbier",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"40",
      "id":145,
      "name":"Silverback Pale Ale",
      "style":"American Pale Ale (APA)",
      "ounces":12.0
   },
   {
      "abv":"0.05",
      "ibu":"",
      "id":84,
      "name":"Rail Yard Ale (2009)",
      "style":"American Amber / Red Ale",
      "ounces":12.0
   }
  ];
  beerSchema = [
    {
      name: "Name of the beer",
      keyname: "name"
    },
    {
      name: "Style of the beer",
      keyname: "style"
    },
    {
      name: "Ounces",
      keyname: "ounces"
    },
    {
      name: "abv",
      keyname: "abv"
    },
    {
      name: "ibu",
      keyname: "ibu"
    },
    {
      name: "id",
      keyname: "id"
    }
  ];
  imageData = [
    {
      "image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png"
    },
    {
      "image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Swedish_beerb2d62a0.jpg"
    },
    {
      "image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/EVEREST_SPECIAL_LIMITED_EDITION_BEER_POKHARA_NEPAL_FEB_2013_28851073145129_201905131625260ec63f6.jpg"
    },
    {
      "image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/https%20_specials-images.forbesimg.com_imageserve_5e325c56f133f400076b17b9_0x03b6f8ad.jpg"
    },
    {
      "image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/low-calorie-beers-157981804958062d8.jpg"
    }
  ]
  p: number = 1;
  brandname;
  constructor(
    private restService: RestService,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getBeerData();
  }

  getBeerData() {
    // this.restService
    //   .get(this.appService.getConfigParam("Beercraft_API"))
    //     .subscribe((res) => {
    //       console.log(res);
    //     });
  }
}
