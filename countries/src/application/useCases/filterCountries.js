
export const filterByRegion = (countries, region, selectedFilter, searchBy) => {    
  
    if(selectedFilter){
     return countries.filter(country => {
        return searchBy === 'country'
            ? country.name === selectedFilter
            : searchBy === 'capital'
                ? country.capital === selectedFilter
                : country.population.toString() === selectedFilter
    }) 
}
    return countries.filter(country => 
      region === '' || country.region === region
    )
  }