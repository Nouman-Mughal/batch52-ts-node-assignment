/**
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers,
 * countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */
const mountains = ["k2", "nanga_parbat", "takht-e-suleman"];
const rivers = ["indus", "jehlum", "gomal", "ravi"];
const countries = ["pakistan", "india", "sri-lanka", "australia"];
const languages = ["urdu", "english", "farsi", "punjabi"];
const cities = ["lahore", "gujranwala", "peshawar", "multan"];

class List {
  mountains: string[];
  rivers: string[];
  countries: string[];
  languages: string[];
  cities: string[];

  constructor() {
    this.mountains = mountains;
    this.rivers = rivers;
    this.countries = countries;
    this.languages = languages;
    this.cities = cities;
  }
}

let req_list = new List();

req_list.mountains = mountains;
req_list.rivers = rivers;
req_list.cities = cities;
req_list.countries = countries;
req_list.languages = languages;

console.log(req_list);

export default req_list;
