import { useParams, Link, useNavigate } from 'react-router-dom'
import { translations } from '../i18n/translations'
import englishData from '../data/data.json'
import persianData from '../data/translated-data.json'
import Map from './Map'
import { motion, AnimatePresence } from 'motion/react'

const CountryDetail = ({ language }) => {

  const { countryName } = useParams()
  const navigate = useNavigate()

  console.log(countryName)

  const t = translations[language]
  console.log(language)

  const data = language === 'en' ? englishData : persianData

  const country = data.find(c => c.name === countryName)


  if (!country) {
    navigate('/', { replace: true })
    return
  }


  const borderCountries = country.borders
    ? country.borders.map(border =>
      data.find(c => c.alpha3Code === border)
    ).filter(Boolean)
    : []


  return (
    <AnimatePresence mode='wait'>
    <motion.div
    key={countryName}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`container transition-colors text-text-light dark:text-text-dark mx-auto p-3 md:p-8 ${language === 'fa' ? 'rtl' : 'ltr'}`}>
      <Link
        to="/"
        className={`${language === 'fa' ? 'flex-row-reverse' : 'flex-row'} inline-flex items-center bg-elements-light dark:bg-elements-dark px-4 py-2 rounded shadow-md mb-16`}
      >
        <span> {language === 'en' ? '← Back' : ' → بازگشت'}</span>
      </Link>

      <div className="grid grid-cols-2 gap-24 items-center">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-full shadow-md col-span-2 md:col-span-1"
        />

        <div className='col-span-2 md:col-span-1' >
          <h1 className="text-3xl font-extrabold mb-8">{country.name}</h1>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2 mb-12">
            <p><span className="font-semibold">{t.nativeName}:</span> {country.nativeName}</p>
            <p><span className="font-semibold">{t.population}:</span> {country.population.toLocaleString()}</p>
            <p><span className="font-semibold">{t.region}:</span> {country.region}</p>
            <p><span className="font-semibold">{t.subRegion}:</span> {country.subregion}</p>
            <p><span className="font-semibold">{t.capital}:</span> {country.capital}</p>
            <p><span lang='fa' className="font-semibold">{t.domain}:</span> {country.topLevelDomain}</p>
            <p><span className="font-semibold">{t.currencies}:</span> {country.currencies?.map(c => c.name).join(', ')}</p>
            <p><span className="font-semibold">{t.languages}:</span> {country.languages?.map(l => l.name).join(', ')}</p>
          </div>

          {borderCountries.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold">{t.borderCountries}:</span>
              {borderCountries.map(border => (
                <Link
                  key={border.name}
                  to={`/country/${border.name}`}
                  className="bg-elements-light dark:bg-elements-dark px-6 py-1 rounded shadow-md text-sm"
                >
                  {border.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className='col-span-2' >
          <Map position={country.latlng} country={country.name} />
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default CountryDetail
