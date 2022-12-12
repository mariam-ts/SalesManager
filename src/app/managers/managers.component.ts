import { Component, OnInit } from '@angular/core';
import { currency } from '@app/shared/models/currency';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currency = currency;
  displayedColumns = [
    "id",
    "userName",
    "firstName",
    "lastName",
    "salesSum",
    "registrationDate",
  ]
  data = [
    {
      userName: "Laurianne15",
      firstName: "Percy",
      lastName: "Tremblay",
      salesSum: "827.00",
      registrationDate: "2083-10-10T16:23:36.817Z",
      id: "1"
    },
    {
      userName: "Deonte_Rippin",
      firstName: "Kaleigh",
      lastName: "Rau",
      salesSum: "789.00",
      registrationDate: "2042-07-19T20:26:36.287Z",
      id: "2"
    },
    {
      userName: "Thaddeus_Durgan75",
      firstName: "Tracy",
      lastName: "Wisoky",
      salesSum: "9.00",
      registrationDate: "2078-09-13T08:12:33.341Z",
      id: "3"
    },
    {
      userName: "Jerrod_McCullough",
      firstName: "Kayla",
      lastName: "Daniel",
      salesSum: "922.00",
      registrationDate: "2082-04-09T06:42:11.889Z",
      id: "4"
    },
    {
      userName: "Letitia.Wisoky",
      firstName: "Leatha",
      lastName: "Walsh",
      salesSum: "399.00",
      registrationDate: "2056-07-20T23:33:15.978Z",
      id: "5"
    },
    {
      userName: "Twila_Murphy12",
      firstName: "Retha",
      lastName: "Bernier",
      salesSum: "661.00",
      registrationDate: "2045-06-29T10:23:08.009Z",
      id: "6"
    },
    {
      userName: "Dedrick.Deckow89",
      firstName: "Camron",
      lastName: "Roberts",
      salesSum: "786.00",
      registrationDate: "2056-01-13T14:48:45.680Z",
      id: "7"
    },
    {
      userName: "Graciela33",
      firstName: "Oswald",
      lastName: "Thiel",
      salesSum: "220.00",
      registrationDate: "2006-01-20T00:40:56.867Z",
      id: "8"
    },
    {
      userName: "Arlene.Runte67",
      firstName: "Althea",
      lastName: "Haag",
      salesSum: "348.00",
      registrationDate: "1995-11-02T00:35:34.807Z",
      id: "9"
    },
    {
      userName: "Ashlynn13",
      firstName: "Ana",
      lastName: "Quitzon",
      salesSum: "597.00",
      registrationDate: "2072-09-18T08:36:14.688Z",
      id: "10"
    },
    {
      userName: "Bridgette.Romaguera",
      firstName: "Marcia",
      lastName: "Ziemann",
      salesSum: "530.00",
      registrationDate: "2036-02-12T05:30:16.472Z",
      id: "11"
    },
    {
      userName: "Seamus_Turner26",
      firstName: "Armando",
      lastName: "Hermiston",
      salesSum: "122.00",
      registrationDate: "2004-10-18T02:09:04.651Z",
      id: "12"
    },
    {
      userName: "Vivianne91",
      firstName: "Cary",
      lastName: "Shanahan",
      salesSum: "600.00",
      registrationDate: "2048-04-26T19:55:01.560Z",
      id: "13"
    },
    {
      userName: "Magdalena9",
      firstName: "Jettie",
      lastName: "Paucek",
      salesSum: "132.00",
      registrationDate: "2089-06-03T14:18:32.631Z",
      id: "14"
    },
    {
      userName: "Karli.Krajcik",
      firstName: "Gayle",
      lastName: "Lowe",
      salesSum: "960.00",
      registrationDate: "2069-09-04T11:41:03.323Z",
      id: "15"
    },
    {
      userName: "Rosalinda.Wiegand76",
      firstName: "Jerrell",
      lastName: "Bechtelar",
      salesSum: "399.00",
      registrationDate: "2061-05-08T15:44:37.165Z",
      id: "16"
    },
    {
      userName: "Connor.Skiles",
      firstName: "Patience",
      lastName: "Kovacek",
      salesSum: "307.00",
      registrationDate: "2051-04-13T19:59:51.138Z",
      id: "17"
    },
    {
      userName: "Cory.Senger",
      firstName: "Dillon",
      lastName: "Wiegand",
      salesSum: "430.00",
      registrationDate: "2088-01-02T23:26:28.751Z",
      id: "18"
    },
    {
      userName: "Jacques_Douglas",
      firstName: "Lea",
      lastName: "Gerlach",
      salesSum: "587.00",
      registrationDate: "2085-09-04T02:34:38.220Z",
      id: "19"
    },
    {
      userName: "Thurman_Hoeger",
      firstName: "Hailie",
      lastName: "Renner",
      salesSum: "922.00",
      registrationDate: "2031-02-23T22:28:05.725Z",
      id: "20"
    },
    {
      userName: "Clinton98",
      firstName: "Louvenia",
      lastName: "Reilly",
      salesSum: "810.00",
      registrationDate: "2047-08-05T10:17:49.498Z",
      id: "21"
    },
    {
      userName: "Raegan.Nitzsche",
      firstName: "Anne",
      lastName: "Goldner",
      salesSum: "936.00",
      registrationDate: "2012-04-22T11:11:34.812Z",
      id: "22"
    },
    {
      userName: "Obie_Ruecker45",
      firstName: "Clay",
      lastName: "Mayert",
      salesSum: "251.00",
      registrationDate: "2033-01-10T08:21:54.346Z",
      id: "23"
    },
    {
      userName: "Edna.Franey39",
      firstName: "Alana",
      lastName: "Auer",
      salesSum: "454.00",
      registrationDate: "2020-04-08T17:07:10.956Z",
      id: "24"
    },
    {
      userName: "Dandre.Goyette23",
      firstName: "Dena",
      lastName: "Pouros",
      salesSum: "643.00",
      registrationDate: "2001-10-29T07:31:57.882Z",
      id: "25"
    },
    {
      userName: "Cecelia73",
      firstName: "Jose",
      lastName: "Altenwerth",
      salesSum: "472.00",
      registrationDate: "2009-03-21T11:58:29.347Z",
      id: "26"
    },
    {
      userName: "Sierra81",
      firstName: "Crawford",
      lastName: "Schaden",
      salesSum: "267.00",
      registrationDate: "2097-05-21T11:15:01.136Z",
      id: "27"
    },
    {
      userName: "Jaqueline.Johnston34",
      firstName: "Helen",
      lastName: "Haley",
      salesSum: "252.00",
      registrationDate: "2050-12-11T12:24:27.382Z",
      id: "28"
    },
    {
      userName: "Makenzie_Franey74",
      firstName: "Janet",
      lastName: "Rohan",
      salesSum: "809.00",
      registrationDate: "2097-03-18T08:40:28.607Z",
      id: "29"
    },
    {
      userName: "Maurine51",
      firstName: "Augustus",
      lastName: "Skiles",
      salesSum: "841.00",
      registrationDate: "2002-08-13T10:34:08.527Z",
      id: "30"
    },
    {
      userName: "Rick_Glover89",
      firstName: "Corrine",
      lastName: "Connelly",
      salesSum: "497.00",
      registrationDate: "2002-06-28T23:19:20.189Z",
      id: "31"
    },
    {
      userName: "Jason.Jenkins",
      firstName: "Jeffrey",
      lastName: "Weissnat",
      salesSum: "947.00",
      registrationDate: "2079-09-17T07:18:29.582Z",
      id: "32"
    },
    {
      userName: "Bernice.Schaefer27",
      firstName: "Norma",
      lastName: "Cormier",
      salesSum: "940.00",
      registrationDate: "2001-07-18T21:50:06.492Z",
      id: "33"
    },
    {
      userName: "Destiny69",
      firstName: "Brittany",
      lastName: "Auer",
      salesSum: "868.00",
      registrationDate: "2064-12-10T21:55:01.673Z",
      id: "34"
    },
    {
      userName: "Augustine.Bauch73",
      firstName: "Olen",
      lastName: "Konopelski",
      salesSum: "287.00",
      registrationDate: "2096-04-03T02:04:38.599Z",
      id: "35"
    },
    {
      userName: "Ellis.OHara82",
      firstName: "Dorcas",
      lastName: "Goldner",
      salesSum: "178.00",
      registrationDate: "2070-04-25T23:29:34.459Z",
      id: "36"
    },
    {
      userName: "Russel79",
      firstName: "Rachael",
      lastName: "Moen",
      salesSum: "847.00",
      registrationDate: "2016-05-19T23:35:41.463Z",
      id: "37"
    },
    {
      userName: "Destiny90",
      firstName: "Colleen",
      lastName: "Bernier",
      salesSum: "11.00",
      registrationDate: "2073-10-03T03:47:17.460Z",
      id: "38"
    },
    {
      userName: "Karson.Tremblay",
      firstName: "Lavinia",
      lastName: "Swift",
      salesSum: "172.00",
      registrationDate: "2080-10-30T12:48:13.081Z",
      id: "39"
    },
    {
      userName: "Abbigail88",
      firstName: "Sigmund",
      lastName: "Hettinger",
      salesSum: "662.00",
      registrationDate: "2013-08-18T21:03:34.648Z",
      id: "40"
    },
    {
      userName: "Kyla.Predovic",
      firstName: "Chanelle",
      lastName: "Wolff",
      salesSum: "433.00",
      registrationDate: "2096-05-04T02:51:20.313Z",
      id: "41"
    },
    {
      userName: "Trinity_Kling75",
      firstName: "Gideon",
      lastName: "Ryan",
      salesSum: "147.00",
      registrationDate: "2026-08-14T03:06:33.884Z",
      id: "42"
    },
    {
      userName: "Liliana.Kirlin",
      firstName: "Alexa",
      lastName: "Mosciski",
      salesSum: "751.00",
      registrationDate: "2014-11-18T04:06:44.948Z",
      id: "43"
    },
    {
      userName: "Lucienne.Hyatt62",
      firstName: "Kimberly",
      lastName: "Moen",
      salesSum: "38.00",
      registrationDate: "2066-04-26T20:14:13.974Z",
      id: "44"
    },
    {
      userName: "Annabel44",
      firstName: "Dennis",
      lastName: "Powlowski",
      salesSum: "333.00",
      registrationDate: "2098-03-16T05:50:09.775Z",
      id: "45"
    },
    {
      userName: "Devan0",
      firstName: "Anika",
      lastName: "Jakubowski",
      salesSum: "109.00",
      registrationDate: "2073-12-15T01:06:48.632Z",
      id: "46"
    },
    {
      userName: "Mariah.Gerhold61",
      firstName: "Lois",
      lastName: "Lakin",
      salesSum: "108.00",
      registrationDate: "2062-05-28T16:50:19.872Z",
      id: "47"
    },
    {
      userName: "Wilton.Steuber",
      firstName: "Eda",
      lastName: "Treutel",
      salesSum: "93.00",
      registrationDate: "2087-03-09T11:23:47.816Z",
      id: "48"
    },
    {
      userName: "Luella_Hoeger",
      firstName: "Wade",
      lastName: "Gutkowski",
      salesSum: "507.00",
      registrationDate: "2058-06-18T21:10:26.310Z",
      id: "49"
    },
    {
      userName: "Vesta.Douglas",
      firstName: "Dane",
      lastName: "Howell",
      salesSum: "150.00",
      registrationDate: "2089-08-19T00:55:31.082Z",
      id: "50"
    },
    {
      userName: "Valerie_Glover11",
      firstName: "Jazmyn",
      lastName: "Murazik",
      salesSum: "257.00",
      registrationDate: "2076-06-23T08:07:34.787Z",
      id: "51"
    },
    {
      userName: "Keaton40",
      firstName: "Rosalee",
      lastName: "Predovic",
      salesSum: "642.00",
      registrationDate: "2067-02-26T14:28:50.870Z",
      id: "52"
    },
    {
      userName: "Lucious.Mohr",
      firstName: "Josh",
      lastName: "Hermann",
      salesSum: "816.00",
      registrationDate: "2003-05-17T13:57:56.042Z",
      id: "53"
    },
    {
      userName: "Lukas_Volkman77",
      firstName: "Nya",
      lastName: "Brown",
      salesSum: "767.00",
      registrationDate: "2053-02-11T19:47:29.966Z",
      id: "54"
    },
    {
      userName: "Natasha_Veum74",
      firstName: "Gerhard",
      lastName: "Beer",
      salesSum: "866.00",
      registrationDate: "2041-11-23T07:17:46.300Z",
      id: "55"
    },
    {
      userName: "Miguel.Pagac",
      firstName: "Jennie",
      lastName: "Green",
      salesSum: "937.00",
      registrationDate: "2095-02-22T03:07:05.362Z",
      id: "56"
    },
    {
      userName: "Vergie.OKeefe44",
      firstName: "Aurore",
      lastName: "Medhurst",
      salesSum: "222.00",
      registrationDate: "2018-10-01T09:00:46.321Z",
      id: "57"
    },
    {
      userName: "Ike37",
      firstName: "Annamae",
      lastName: "Kiehn",
      salesSum: "526.00",
      registrationDate: "2080-06-14T23:47:16.206Z",
      id: "58"
    },
    {
      userName: "Josefa.Kautzer",
      firstName: "Lyda",
      lastName: "Kuhlman",
      salesSum: "182.00",
      registrationDate: "2046-03-16T11:20:39.400Z",
      id: "59"
    },
    {
      userName: "Julius15",
      firstName: "Hulda",
      lastName: "Blick",
      salesSum: "260.00",
      registrationDate: "2046-10-08T14:26:01.494Z",
      id: "60"
    }
  ]

}
