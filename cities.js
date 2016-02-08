var cities =["Warren","Washington","Wilkes-Barre","Williamsport","York"]
var citiesLessThanSeven=[]

function findCitiesLessThanSeven() {
    citiesLessThanSeven=[]
    for (var i=0;i < cities.length;i++){
        if (cities[i].length < 7){
            citiesLessThanSeven.push(cities[i])
        }
    }
   return citiesLessThanSeven
}

function concatStrings() {
 var cityString=""
 
        findCitiesLessThanSeven()

    for (var i=0;i < citiesLessThanSeven.length;i++){
        cityString += citiesLessThanSeven[i] + " "
    }
    console.log(cityString)

}

