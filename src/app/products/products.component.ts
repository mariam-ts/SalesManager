import { Component, OnInit } from '@angular/core';
import { currency } from '@app/shared/models/currency';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor() { }

  currency = currency;
  displayedColumns = [
    "id",
    "name",
    "quantity",
    "price"
  ]
  data = [
    {
      name: "Sausages",
      quantity: 88323,
      price: "887.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg",
      id: "1"
    },
    {
      name: "Mouse",
      quantity: 85050,
      price: "749.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg",
      id: "2"
    },
    {
      name: "Chair",
      quantity: 8430,
      price: "218.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg",
      id: "3"
    },
    {
      name: "Computer",
      quantity: 56368,
      price: "685.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1119.jpg",
      id: "4"
    },
    {
      name: "Ball",
      quantity: 50265,
      price: "134.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/15.jpg",
      id: "5"
    },
    {
      name: "Pizza",
      quantity: 28663,
      price: "427.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg",
      id: "6"
    },
    {
      name: "Tuna",
      quantity: 56183,
      price: "75.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/992.jpg",
      id: "7"
    },
    {
      name: "Table",
      quantity: 42194,
      price: "574.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/615.jpg",
      id: "8"
    },
    {
      name: "Table",
      quantity: 58269,
      price: "930.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/645.jpg",
      id: "9"
    },
    {
      name: "Cheese",
      quantity: 8659,
      price: "839.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg",
      id: "10"
    },
    {
      name: "Sausages",
      quantity: 32218,
      price: "207.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/538.jpg",
      id: "11"
    },
    {
      name: "Cheese",
      quantity: 17942,
      price: "647.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/527.jpg",
      id: "12"
    },
    {
      name: "Pizza",
      quantity: 35205,
      price: "92.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/968.jpg",
      id: "13"
    },
    {
      name: "Table",
      quantity: 70057,
      price: "591.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/678.jpg",
      id: "14"
    },
    {
      name: "Soap",
      quantity: 43496,
      price: "627.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/779.jpg",
      id: "15"
    },
    {
      name: "Mouse",
      quantity: 4934,
      price: "455.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/73.jpg",
      id: "16"
    },
    {
      name: "Ball",
      quantity: 72080,
      price: "973.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/624.jpg",
      id: "17"
    },
    {
      name: "Shoes",
      quantity: 67645,
      price: "702.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/530.jpg",
      id: "18"
    },
    {
      name: "Gloves",
      quantity: 53361,
      price: "573.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/627.jpg",
      id: "19"
    },
    {
      name: "Bacon",
      quantity: 13785,
      price: "125.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/154.jpg",
      id: "20"
    },
    {
      name: "Bike",
      quantity: 8365,
      price: "178.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1202.jpg",
      id: "21"
    },
    {
      name: "Chips",
      quantity: 2395,
      price: "528.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/837.jpg",
      id: "22"
    },
    {
      name: "Chair",
      quantity: 7366,
      price: "858.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg",
      id: "23"
    },
    {
      name: "Towels",
      quantity: 60144,
      price: "116.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/738.jpg",
      id: "24"
    },
    {
      name: "Shoes",
      quantity: 47846,
      price: "211.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg",
      id: "25"
    },
    {
      name: "Computer",
      quantity: 82122,
      price: "918.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/492.jpg",
      id: "26"
    },
    {
      name: "Towels",
      quantity: 50969,
      price: "57.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1128.jpg",
      id: "27"
    },
    {
      name: "Chicken",
      quantity: 86056,
      price: "98.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg",
      id: "28"
    },
    {
      name: "Shirt",
      quantity: 33003,
      price: "113.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1101.jpg",
      id: "29"
    },
    {
      name: "Mouse",
      quantity: 90320,
      price: "627.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/756.jpg",
      id: "30"
    },
    {
      name: "Mouse",
      quantity: 10662,
      price: "215.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      id: "31"
    },
    {
      name: "Pants",
      quantity: 44749,
      price: "190.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/963.jpg",
      id: "32"
    },
    {
      name: "Bike",
      quantity: 24085,
      price: "323.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/729.jpg",
      id: "33"
    },
    {
      name: "Pizza",
      quantity: 61396,
      price: "858.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg",
      id: "34"
    },
    {
      name: "Pizza",
      quantity: 65516,
      price: "270.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/670.jpg",
      id: "35"
    },
    {
      name: "Bike",
      quantity: 60481,
      price: "697.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/889.jpg",
      id: "36"
    },
    {
      name: "Soap",
      quantity: 66666,
      price: "948.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg",
      id: "37"
    },
    {
      name: "Soap",
      quantity: 698,
      price: "535.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/316.jpg",
      id: "38"
    },
    {
      name: "Table",
      quantity: 48707,
      price: "629.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg",
      id: "39"
    },
    {
      name: "Bacon",
      quantity: 1483,
      price: "944.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/22.jpg",
      id: "40"
    },
    {
      name: "Pizza",
      quantity: 93714,
      price: "973.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg",
      id: "41"
    },
    {
      name: "Pizza",
      quantity: 54719,
      price: "429.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/149.jpg",
      id: "42"
    },
    {
      name: "Shirt",
      quantity: 89261,
      price: "25.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/512.jpg",
      id: "43"
    },
    {
      name: "Table",
      quantity: 61243,
      price: "508.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/780.jpg",
      id: "44"
    },
    {
      name: "Chips",
      quantity: 24400,
      price: "255.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg",
      id: "45"
    },
    {
      name: "Pants",
      quantity: 61462,
      price: "674.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/350.jpg",
      id: "46"
    },
    {
      name: "Tuna",
      quantity: 57156,
      price: "229.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/763.jpg",
      id: "47"
    },
    {
      name: "Gloves",
      quantity: 79111,
      price: "537.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1029.jpg",
      id: "48"
    },
    {
      name: "Shoes",
      quantity: 45758,
      price: "783.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg",
      id: "49"
    },
    {
      name: "Shirt",
      quantity: 2738,
      price: "421.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/195.jpg",
      id: "50"
    },
    {
      name: "Pants",
      quantity: 77871,
      price: "941.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/483.jpg",
      id: "51"
    },
    {
      name: "Chicken",
      quantity: 86380,
      price: "940.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
      id: "52"
    },
    {
      name: "Keyboard",
      quantity: 81616,
      price: "811.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
      id: "53"
    },
    {
      name: "Ball",
      quantity: 81137,
      price: "74.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/242.jpg",
      id: "54"
    },
    {
      name: "Fish",
      quantity: 16822,
      price: "663.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/85.jpg",
      id: "55"
    },
    {
      name: "Hat",
      quantity: 93943,
      price: "949.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/295.jpg",
      id: "56"
    },
    {
      name: "Tuna",
      quantity: 86915,
      price: "357.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/263.jpg",
      id: "57"
    },
    {
      name: "Hat",
      quantity: 78834,
      price: "346.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
      id: "58"
    },
    {
      name: "Chips",
      quantity: 7361,
      price: "611.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg",
      id: "59"
    },
    {
      name: "Bacon",
      quantity: 77701,
      price: "622.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg",
      id: "60"
    },
    {
      name: "Pizza",
      quantity: 17474,
      price: "76.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/782.jpg",
      id: "61"
    },
    {
      name: "Sausages",
      quantity: 26447,
      price: "792.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/38.jpg",
      id: "62"
    },
    {
      name: "Bike",
      quantity: 64582,
      price: "553.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg",
      id: "63"
    },
    {
      name: "Hat",
      quantity: 64379,
      price: "978.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg",
      id: "64"
    },
    {
      name: "Computer",
      quantity: 51363,
      price: "639.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/484.jpg",
      id: "65"
    },
    {
      name: "Computer",
      quantity: 19262,
      price: "156.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/572.jpg",
      id: "66"
    },
    {
      name: "Chair",
      quantity: 69858,
      price: "270.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      id: "67"
    },
    {
      name: "Cheese",
      quantity: 60893,
      price: "985.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/864.jpg",
      id: "68"
    },
    {
      name: "Hat",
      quantity: 84619,
      price: "543.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/886.jpg",
      id: "69"
    },
    {
      name: "Table",
      quantity: 88074,
      price: "237.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/195.jpg",
      id: "70"
    },
    {
      name: "Shoes",
      quantity: 91032,
      price: "457.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/150.jpg",
      id: "71"
    },
    {
      name: "Salad",
      quantity: 96388,
      price: "590.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1203.jpg",
      id: "72"
    },
    {
      name: "Gloves",
      quantity: 90877,
      price: "983.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg",
      id: "73"
    },
    {
      name: "Shirt",
      quantity: 29073,
      price: "505.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/748.jpg",
      id: "74"
    },
    {
      name: "Chicken",
      quantity: 73372,
      price: "126.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg",
      id: "75"
    },
    {
      name: "Salad",
      quantity: 44261,
      price: "577.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg",
      id: "76"
    },
    {
      name: "Chair",
      quantity: 22353,
      price: "237.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg",
      id: "77"
    },
    {
      name: "Shoes",
      quantity: 6457,
      price: "556.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1066.jpg",
      id: "78"
    },
    {
      name: "Chips",
      quantity: 45198,
      price: "53.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/830.jpg",
      id: "79"
    },
    {
      name: "Salad",
      quantity: 85698,
      price: "527.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg",
      id: "80"
    },
    {
      name: "Bacon",
      quantity: 11489,
      price: "848.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1215.jpg",
      id: "81"
    },
    {
      name: "Table",
      quantity: 41546,
      price: "532.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg",
      id: "82"
    },
    {
      name: "Table",
      quantity: 95845,
      price: "953.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg",
      id: "83"
    },
    {
      name: "Sausages",
      quantity: 70001,
      price: "471.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/367.jpg",
      id: "84"
    },
    {
      name: "Shoes",
      quantity: 81872,
      price: "373.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/798.jpg",
      id: "85"
    },
    {
      name: "Tuna",
      quantity: 2158,
      price: "698.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/578.jpg",
      id: "86"
    },
    {
      name: "Sausages",
      quantity: 57815,
      price: "771.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg",
      id: "87"
    },
    {
      name: "Sausages",
      quantity: 68321,
      price: "254.00",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/288.jpg",
      id: "88"
    }
  ]

}
