var mountains = ["k2", "nanga_parbat", "takht-e-suleman"];
var rivers = ["indus", "jehlum", "gomal", "ravi"];
var countries = ["pakistan", "india", "sri-lanka", "australia"];
var languages = ["urdu", "english", "farsi", "punjabi"];
var cities = ["lahore", "gujranwala", "peshawar", "multan"];
var List = /** @class */ (function () {
    function List() {
        this.mountains = mountains;
        this.rivers = rivers;
        this.countries = countries;
        this.languages = languages;
        this.cities = cities;
    }
    return List;
}());
var req_list = new List();
req_list.mountains = mountains;
req_list.rivers = rivers;
req_list.cities = cities;
req_list.countries = countries;
req_list.languages = languages;
console.log(req_list);
