
export const sortCountries = (countries, sortBy, sortOrder) => {
    return [...countries].sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      } else {
        return sortOrder === 'asc'
          ? a.population - b.population
          : b.population - a.population
      }
    })
  }