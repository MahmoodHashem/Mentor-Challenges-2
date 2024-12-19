import { useState } from 'react'
import { searchCountries } from '../../application/useCases/searchCountries'
import { filterByRegion } from '../../application/useCases/filterCountries'
import { sortCountries } from '../../application/useCases/sortCountries'

export const useCountries = (repository, language) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchBy, setSearchBy] = useState('country')
  const [region, setRegion] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedFilter, setSelectedFilter] = useState('')
  const countries = repository.getAllCountries(language)
  const suggestions = searchCountries(countries, searchTerm, searchBy).slice(0, 5)
  const filteredCountries = filterByRegion(countries, region, selectedFilter, searchBy)
  const sortedCountries = sortCountries(filteredCountries, sortBy, sortOrder)
  


  return {
    countries: sortedCountries,
    suggestions,
    searchTerm,
    setSearchTerm,
    searchBy,
    setSearchBy,
    region,
    setRegion,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder, 
    setSelectedFilter
  }
}
