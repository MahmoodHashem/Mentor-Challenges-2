
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { translations } from '../i18n/translations'
import { motion, AnimatePresence } from 'motion/react'
import englishData from '../data/data.json'
import persianData from '../data/translated-data.json'

const CountryList = ({ language }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchBy, setSearchBy] = useState('country')
    const [region, setRegion] = useState('')
    const [visibleCount, setVisibleCount] = useState(16)
    const [isLoading, setIsLoading] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('')
    const suggestionRef = useRef(null)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [sortBy, setSortBy] = useState('name')
    const [sortOrder, setSortOrder] = useState('asc')


    const t = translations[language]
    const data = language === 'en' ? englishData : persianData



    const handleKeyDown = (e) => {
        if (!showSuggestions || !suggestions.length) return

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setSelectedIndex(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : prev
                )
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
                break
            case 'Enter':
                if (selectedIndex >= 0) {
                    const item = suggestions[selectedIndex]
                    handleSuggestionClick(item)
                    setSelectedIndex(-1)
                }
                break
            case 'Escape':
                setShowSuggestions(false)
                setSelectedIndex(-1)
                break
        }
    }



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


    const sortedCountries = [...filteredCountries].sort((a, b) => {
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

    const visibleCountries = sortedCountries.slice(0, visibleCount)


    return (
        <div className={`container overflow-hidden mx-auto   ${language === 'fa' ? 'rtl font-iransans' : 'ltr font-nunito'} px-8`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="transition-colors  mb-8">
                <div className="flex flex-col md:flex-row  md:justify-between gap-4 relative">
                    <div className="flex md:gap-4">
                        <div ref={suggestionRef} className="relative w-full">
                            <input
                                type="text"
                                placeholder={`${t.searchPlaceholder}${searchBy === 'country' ? t.country : searchBy === 'capital' ? t.capital : t.population}`}
                                className="bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark shadow-md px-5 py-3 pl-12 w-full"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setShowSuggestions(true)
                                    setSelectedFilter('')
                                    setSelectedIndex(-1)
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setShowSuggestions(true)}
                            />
                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light dark:text-text-dark"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            {showSuggestions && searchTerm && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute z-10 w-full mt-1 bg-elements-light dark:bg-elements-dark shadow-lg rounded-md">
                                    {suggestions.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`p-2 cursor-pointer ${index === selectedIndex
                                                ? 'bg-background-light dark:bg-background-dark'
                                                : 'hover:bg-background-light dark:hover:bg-background-dark'
                                                }`}
                                            onClick={() => handleSuggestionClick(item)}
                                        >
                                            {searchBy === 'country' ? item.name : searchBy === 'capital' ? item.capital : item.population.toLocaleString()}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                        <select
                            value={searchBy}
                            onChange={(e) => {
                                setSearchBy(e.target.value)
                                setSearchTerm('')
                                setSelectedFilter('')
                            }}
                            className="w-1/2 p-2.5 rounded bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark shadow-md"
                        >
                            <option value="country">{t.country}</option>
                            <option value="capital">{t.capital}</option>
                            <option value="population">{t.population}</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4" >

                        <select
                            value={`${sortBy}-${sortOrder}`}
                            onChange={(e) => {
                                const [newSortBy, newSortOrder] = e.target.value.split('-')
                                setSortBy(newSortBy)
                                setSortOrder(newSortOrder)
                            }}
                            className="mt-4 md:mt-0 p-2.5 rounded bg-elements-light dark:bg-elements-dark text-text-light dark:text-text-dark shadow-md"
                        >
                            <option value="name-asc">{t.sortNameAsc}</option>
                            <option value="name-desc">{t.sortNameDesc}</option>
                            <option value="population-asc">{t.sortPopulationAsc}</option>
                            <option value="population-desc">{t.sortPopulationDesc}</option>
                        </select>

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
                </div>
            </motion.div>

            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center ">
                <AnimatePresence>

                    {visibleCountries.map(country => (
                        <Link to={`/country/${country.name}`} key={country.name}>
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                whileHover={{ y: -5 }}

                                className="country-card bg-elements-light dark:bg-elements-dark shadow-md">
                                <img src={country.flag} alt={`${country.name} flag`} className="h-40 w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="font-extrabold text-text-light dark:text-text-dark">{country.name}</h3>
                                    <div className="mt-4 text-text-light dark:text-text-dark">
                                        <p><span className="font-semibold">{t.population}:</span> {country.population.toLocaleString()}</p>
                                        <p><span className="font-semibold">{t.region}:</span> {country.region}</p>
                                        <p><span className="font-semibold">{t.capital}:</span> {country.capital}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </AnimatePresence>
            </motion.div>

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
