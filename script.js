var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Ramen%20Ratings.csv"
var brand = getColumn(url,1);
var variety = getColumn(url,2);
var style = getColumn(url,3);
var country = getColumn(url,4);
var stars = getColumn(url,5);

//removes "n", "N", and "/" from the code and replaces them with a nutral 2.5 so it doesn't
//change the outcome of the code
for (var i=0; i < stars.length; i++){
    if (stars[i].includes("n")||stars[i].includes("/")||stars[i].includes("N")){
    stars[i]=2.5
    }
}
//creates a list of countries with no repeats
var uniqueCountries=[]
for (var i=0; i < country.length; i++){
    if (!uniqueCountries.includes(country[i])){
    uniqueCountries.push(country[i])
    }  
}
//finds the brand with the highest rated ramen in a country
//If their are multiple winners, the procedure returns a list of brands
function getBrandWithBestRamenInCountry(countryChoice){
    var ranksInCountry=[]
    var brandsInCountry=[]
    var topBrands=[]
    for (var i=0; i < brand.length; i++){
        //finds the country that matches the parameter
        if(country[i].toLowerCase()==countryChoice.toLowerCase()){
            //adds the ranking to a list
            ranksInCountry.push(parseFloat(stars[i]))
            //adds the brands to a list ** The brand will have the same index as its rank
            brandsInCountry.push(brand[i])
        }
    }
    var max=0;
    //finds the highest rank inn the list
    for (var i=0; i < ranksInCountry.length; i++){
        if (ranksInCountry[i]>max){
            max=ranksInCountry[i]
        }
    }    
    //pushes unique brands with the highest ranking ramen in that country
    for (var i=0; i < brandsInCountry.length; i++){
        if(ranksInCountry[i]==max&&!topBrands.includes(brandsInCountry[i])){
            topBrands.push(brandsInCountry[i])
        }
    }
    //returns topBrands
    if(topBrands.length>0){
        return topBrands
    }
    //returns -1 if the input was invalid
    else return -1   
}
console.log(getBrandWithBestRamenInCountry("israel"));


//this function takes a string and finds the country with the most of that category
//either brand, flavors, or stars
function getCountryWithMost(item){
    //finds country with the most unique ramen brands
    if(item.toLowerCase()=="brands"){
        var brandcounts=[]
        //this loop will run once for each unique country
        for (var i=0; i < uniqueCountries.length; i++){
            //var uniqueBrandsPerCountry resets for each country
            var uniqueBrandsPerCountry=[]
            for (var j=0; j < country.length; j++){
                if(uniqueCountries[i]==country[j]&&!uniqueBrandsPerCountry.includes(brand[j])){
                    //adds each unique brand to a list
                    uniqueBrandsPerCountry.push(brand[j])
                }
            }
            //assigns a brand count to each country (or index) thats equal to the length of
            //the list
            brandcounts[i]=uniqueBrandsPerCountry.length
        }
        //finds country with highest brand count
        for (var i=0; i < uniqueCountries.length; i++){
            if(brandcounts[i]== Math.max(...brandcounts))
                //returns country with highest brand count
                return uniqueCountries[i]
        }
    }
    //finds country with most unique ramen flavors
    else if(item.toLowerCase()=="varieties"||item.toLowerCase()=="flavors"){
        var flavorCounts=[]
        //this loop will run once for each unique country
        for (var i=0; i < uniqueCountries.length; i++){
            //var uniqueFlavorsPerCountry resets for each country
            var uniqueFlavorsPerCountry=[]
            for (var j=0; j < country.length; j++){
                if(uniqueCountries[i]==country[j]&&!uniqueFlavorsPerCountry.includes(variety[j])){
                    //adds each unique brand to a list
                    uniqueFlavorsPerCountry.push(variety[j])
                } 
            }
            //assigns a flavor count to each country (or index) thats equal to the length of  
            //the list of unique flavors for that country
            flavorCounts[i]=uniqueFlavorsPerCountry.length
        }
        //finds country with highest flavor count
        for (var i=0; i < uniqueCountries.length; i++){
            if(flavorCounts[i]== Math.max(...flavorCounts)){
                //returns country with highest flavor count
                return uniqueCountries[i]
            }
        }
    }
    //finds country with highest average stars
    else if(item.toLowerCase()=="stars"){
        var avgStars=[]
        //this loop will run once for each unique country
        for (var i=0; i < uniqueCountries.length; i++){
            //var totalStarsPerCountry an starCount resets for each country
            var totalStarsPerCountry=0
            var starCount=0
            for (var j=0; j < country.length; j++){
                if(uniqueCountries[i]==country[j]){
                    //adds stars to the list 
                    totalStarsPerCountry=totalStarsPerCountry+(parseFloat(stars[j]))
                    //keeps track of how many times additions have been made to the list
                    starCount=starCount+1
                }
            }
            //finds the avg stars for each country
            avgStars[i]=(totalStarsPerCountry/starCount)
        }
        //finds country with highest avg ranking
        for (var i=0; i < uniqueCountries.length; i++){
            if(avgStars[i]== Math.max(...avgStars)){
                //returns country with highest avg ranking
                return uniqueCountries[i]
            }
        }    
    } 
    else return -1
}
 console.log(getCountryWithMost("stars"))


//find the ramens based on how many stars.
function getRamenByStars(ramenStars){
    var matchingRamen = [];
    for(var i = 0; i < stars.length; i++){
       if(Math.round(parseFloat(stars[i])) == Math.round(ramenStars)){
           matchingRamen.push(variety[i]);
        }   
    }
   if (matchingRamen.length == 0){
       matchingRamen.push("There is no ramen with this rating")
    }
   return matchingRamen
   }
   console.log(getRamenByStars(10));
   
   //finds ramen varieties based country
function getRamenByCountry(ramenCountry){
    var ramenInCountry = [];
    for(var i = 0; i < country.length; i++){
      if(country[i].toLowerCase() == ramenCountry.toLowerCase()){
          ramenInCountry.push(variety[i]);
        }
    }
    if (ramenInCountry.length == 0){
        ramenInCountry.push("There is no ramen from this country")
    }
    return ramenInCountry
}
console.log(getRamenByCountry("123"));
   

   //put in a brand and get how many ramens there are
function getNumberByBrand(chosenBrand){
    var numberInBrand = 0;  
   for(var i = 0; i < brand.length; i++){
        if(brand[i].toLowerCase() == chosenBrand.toLowerCase()){
            numberInBrand++;
        }  
    }
    if (numberInBrand == 0){
        return -1;
    }
    return numberInBrand
   }
      console.log(getNumberByBrand("immi"));


//Additional utils
      function getColumn(url, columnNumber){
        var column = [];
        var table = [];
        var request = new XMLHttpRequest();  
        request.open("GET", url, false);   
        request.send(null);  
        var csvData = new Array();
        var jsonObject = request.responseText.split(/\r?\n|\r/);
        for (var i = 0; i < jsonObject.length; i++) {
          csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
        }
        table = csvData;
        column = getCol(table, columnNumber);
        return column;
      }
      
      //returns the specified column from a 2D Array
      function getCol(matrix, col){
             var column = [];
             for(var i=1; i<matrix.length-1; i++){
                column.push(matrix[i][col]);
             }
             return column;
          }
      
