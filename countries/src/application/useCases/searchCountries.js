
export const searchCountries = (countries, searchTerm, searchBy) => {
    const searchValue = searchTerm.toLowerCase()
  
    return countries.filter(country => {
      switch (searchBy) {
        case 'country':
          return country.name.toLowerCase().startsWith(searchValue)
        case 'capital':
          return country.capital?.toLowerCase().startsWith(searchValue)
        case 'population':
          return country.population.toString().startsWith(searchValue)
      }
    })
  }

  