

These functions give information about ramen rankings, flavors, and countries.
#
##### Finds the brand with the highest rated ramen in a country. If their are multiple winners, the procedure finds a list of brands.
###### @param countryChoice {string} - The country that the function checks
###### @return {list} - The brand or list of brands with the highest rated ramen
**`function getBrandWithBestRamenInCountry(countryChoice)`**
#

##### this function finds the country with the most of an item.
###### @param item {string}  brands, flavors, and stars are valid inputs
###### @return the country with the most ramen brands, ramen flavors, or stars
**`function getCountryWithMost(item)`**

##### find the ramens based on how many stars.
###### @param ramenStars {number} - a number of how many stars a ramen has been rated
###### @return {list} - the ramen varieties with specified number of stars
**`function getRamenByStars(ramenStars)`**

##### finds ramen varieties based country
###### @param ramenCountry {string} - The country that a ramen in from
###### @return {list} - The ramen varieties from specified country
**`function getRamenByCountry(ramenCountry)`**

##### Shows how many varieties of ramen a brand makes.
###### @param chosenBrand {string} - the brand that makes ramen
###### @return {number} - the number of ramens that the specified brand makes
**`function getNumberByBrand(chosenBrand)`**
