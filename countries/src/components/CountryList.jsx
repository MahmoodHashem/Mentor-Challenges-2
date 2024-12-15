
import { Link } from 'react-router-dom'

import { useState, useEffect, useRef } from 'react'
import { translations } from '../i18n/translations'

import englishData from '../data/data.json'
import persianData from '../data/translated-data.json'

const CountryList = ({language}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchBy, setSearchBy] = useState('country')
    const [region, setRegion] = useState('')
    const [visibleCount, setVisibleCount] = useState(16)
    const [isLoading, setIsLoading] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('')
    const suggestionRef = useRef(null)

    const t = translations[language]
    const data = language === 'en' ? englishData : persianData



    const suggestions = data.filter(country => {
        const searchValue = searchTerm.toLowerCase()
        return searchBy === 'country'
            ? country.name.toLowerCase().startsWith(searchValue)
            : searchBy === 'capital'
                ? country.capital?.toLowerCase().startsWith(searchValue)
                : country.population.toString().startsWith(searchValue)
    }).slice(0, 5)





    const filteredCountries = selectedFilter
        ? data.filter(country => {
            return searchBy === 'country'
                ? country.name === selectedFilter
                : searchBy === 'capital'
                    ? country.capital === selectedFilter
                    : country.population.toString() === selectedFilter
        })
        : data.filter(country => region === '' || country.region === region)

    const visibleCountries = filteredCountries.slice(0, visibleCount)

    const handleSuggestionClick = (item) => {
        const value = searchBy === 'country'
            ? item.name
            : searchBy === 'capital'
                ? item.capital
                : item.population.toString()

        setSelectedFilter(value)
        setSearchTerm(value)
        setRegion(item.region)
        setShowSuggestions(false)
    }

  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
                setShowSuggestions(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const loadMore = () => {
        setIsLoading(true)
        setTimeout(() => {
            setVisibleCount(prevCount => prevCount + 16)
            setIsLoading(false)
        }, 800)
    }

    return (
        <div className={`container mx-auto   ${language === 'fa' ? 'rtl font-iransans' : 'ltr font-nunito'}`}>
         

            <div className="flex flex-col md:flex-row md:justify-between mb-8">
                <div className="flex gap-4 relative">
                <h1>Countries numbers {data.length}</h1>
                    <div ref={suggestionRef} className="relative">
                        <input
                            type="text"
                            placeholder={`${t.searchPlaceholder}${searchBy === 'country' ? t.country : searchBy === 'capital' ? t.capital : t.population}`}
                            className="bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark shadow-md px-5 py-3"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                                setShowSuggestions(true)
                                setSelectedFilter('')
                            }}
                            onFocus={() => setShowSuggestions(true)}
                        />
                        {showSuggestions && searchTerm && (
                            <div className="absolute z-10 w-full mt-1 bg-elements-light dark:bg-elements-dark shadow-lg rounded-md">
                                {suggestions.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-2 hover:bg-background-light dark:hover:bg-background-dark cursor-pointer"
                                        onClick={() => handleSuggestionClick(item)}
                                    >
                                        {searchBy === 'country' ? item.name : searchBy === 'capital' ? item.capital : item.population.toLocaleString()}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <select
                        value={searchBy}
                        onChange={(e) => {
                            setSearchBy(e.target.value)
                            setSearchTerm('')
                            setSelectedFilter('')
                        }}
                        className="p-2.5 rounded bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark shadow-md"
                    >
                        <option value="country">{t.country}</option>
                        <option value="capital">{t.capital}</option>
                        <option value="population">{t.population}</option>
                    </select>
                </div>

                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="mt-4 md:mt-0 p-2.5 rounded bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark shadow-md"
                >
                    <option value="">{t.filterByRegion}</option>
                    <option value={t.regions.africa}>{t.regions.africa}</option>
                    <option value={t.regions.americas}>{t.regions.americas}</option>
                    <option value={t.regions.asia}>{t.regions.asia}</option>
                    <option value={t.regions.europe}>{t.regions.europe}</option>
                    <option value={t.regions.oceania}>{t.regions.oceania}</option>
                </select>
            </div>

            <div className="grid grid-cols-4 gap-10 items-center">
                {visibleCountries.map(country => (
                   <Link to={`/country/${country.name}`} key={country.name}>
                 
                   <div  className="country-card bg-elements-light dark:bg-elements-dark shadow-md">
                        <img src={country.flag} alt={`${country.name} flag`} className="h-40 w-full object-cover" />
                        <div className="p-6">
                            <h3 className="font-extrabold text-text-light dark:text-text-dark">{country.name}</h3>
                            <div className="mt-4 text-text-light dark:text-text-dark">
                                <p><span className="font-semibold">{t.population}:</span> {country.population.toLocaleString()}</p>
                                <p><span className="font-semibold">{t.region}:</span> {country.region}</p>
                                <p><span className="font-semibold">{t.capital}:</span> {country.capital}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            {visibleCount < filteredCountries.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={loadMore}
                        disabled={isLoading}
                        className="bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark px-6 py-3 rounded shadow-md hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {isLoading ? (
                            <span className="inline-flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {t.loading}
                            </span>
                        ) : t.loadMore}
                    </button>
                </div>
            )}
        </div>
    )
}

export default CountryList
