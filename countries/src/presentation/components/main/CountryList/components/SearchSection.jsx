import { styles } from '../../../../styles/common'
import { motion } from 'motion/react'


export const SearchSection = ({ 
  searchTerm, 
  setSearchTerm, 
  searchBy, 
  setSearchBy,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  handleSuggestionClick,
  selectedIndex,
  handleKeyDown,
  suggestionRef,
  setSelectedFilter, 
  t 
}) => (
  <div className="flex items-center gap-4">
    <div ref={suggestionRef} className="relative w-full">
      <input
        type="text"
        placeholder={`${t.searchPlaceholder}${searchBy === 'country' ? t.country : searchBy === 'capital' ? t.capital : t.population}`}
        className={`${styles.input} pl-12  w-full`}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setSelectedFilter('')
          setShowSuggestions(true)
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
          className="absolute z-20 w-full mt-1 bg-elements-light dark:bg-elements-dark shadow-lg rounded-md"
        >
          {suggestions.map((item, index) => (
            <div
              key={index}
              className={`p-2 cursor-pointer ${
                index === selectedIndex
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
        setSelectedFilter('')
        setSearchTerm('')
      }}
      className={`${styles.select} w-1/2`}
    >
      <option value="country">{t.country}</option>
      <option value="capital">{t.capital}</option>
      <option value="population">{t.population}</option>
    </select>
  </div>
)
