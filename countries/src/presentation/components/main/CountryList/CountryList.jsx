
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { translations } from '../../../../infrastructure/i18n/translations'
import { motion, AnimatePresence } from 'motion/react'
import { useCountries } from '../../../hooks/useCountries'
import { CountryDataRepository } from '../../../../infrastructure/repositories/countryDataRepository'
import { useKeyboardNavigation } from '../../../hooks/useKeyboardNavigation'
import { useLoadMore } from '../../../hooks/useLoadMore'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Container } from '../../shared/Container'
import { PageTransition } from '../../shared/PageTransition'
import { FilterSection } from './components/FilterSection'
import { SearchSection } from './components/SearchSection'
import { CountryCard } from '../../shared/CountryCard'
import { LoadMoreButton } from './components/LoadMoreButton'


const repository = new CountryDataRepository()


const CountryList = ({ language }) => {

    const t = translations[language]

    const [showSuggestions, setShowSuggestions] = useState(false)
    const suggestionRef = useClickOutside(() => setShowSuggestions(false))
    const { visibleCount, isLoading, loadMore } = useLoadMore()
    const {
        countries,
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
    } = useCountries(repository, language)

    const handleSuggestionClick = (item) => {
       
        const value = searchBy === 'country'
            ? item.name
            : searchBy === 'capital'
                ? item.capital
                : item.population.toString()

        setSearchTerm(value)
        setRegion(item.region)
        setSelectedFilter(value)
        setShowSuggestions(false)
    }


    const { selectedIndex, setSelectedIndex, handleKeyDown } = useKeyboardNavigation(
        showSuggestions,
        setShowSuggestions,
        suggestions,
        handleSuggestionClick
    )

    const visibleCountries = countries.slice(0, visibleCount)


    return (
        <Container language={language}>
            <PageTransition>
                <div className="flex flex-col gap-10 md:flex-row mb-10 md:justify-between md:items-center md:gap-5">
                    <SearchSection
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        searchBy={searchBy}
                        setSearchBy={setSearchBy}
                        suggestions={suggestions}
                        showSuggestions={showSuggestions}
                        setShowSuggestions={setShowSuggestions}
                        handleSuggestionClick={handleSuggestionClick}
                        selectedIndex={selectedIndex}
                        handleKeyDown={handleKeyDown}
                        suggestionRef={suggestionRef}
                        setSelectedFilter = {setSelectedFilter}
                        t={t}
                    />
                    <FilterSection
                        region={region}
                        setRegion={setRegion}
                        setSearchTerm={setSearchTerm}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        t={t}
                    />
                </div>
                <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <AnimatePresence>
                        {visibleCountries.map(country => (
                            <Link to={`/country/${country.name}`} key={country.name}>
                                <CountryCard country={country} t={t} />
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>
                {countries.length > 1 && visibleCount < countries.length && <LoadMoreButton
                    isLoading={isLoading}
                    onClick={loadMore}
                    t={t}
                />}
            </PageTransition>
        </Container>
    )
}

export default CountryList
