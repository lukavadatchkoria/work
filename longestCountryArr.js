function longestCountry(countryName) {
    return countryName.reduce(function(name, country)
    {
    return name.length > country.length ? name :
    country;
    },
    "");
}
console.log(longestCountry(["Australia", "Germany", "United States of America"]))