import { motion } from "motion/react"

export const CountryCard = ({ country, t }) => (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -5 }}
      className="country-card bg-elements-light dark:bg-elements-dark shadow-md h-full"
    >
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
  )
  