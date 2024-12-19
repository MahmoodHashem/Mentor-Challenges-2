import { useParams, Link, useNavigate } from 'react-router-dom'
import { translations } from '../../../../infrastructure/i18n/translations'
import Map from './components/Map'
import { useEffect } from 'react'
import { CountryDataRepository } from '../../../../infrastructure/repositories/countryDataRepository'
import { Container } from '../../shared/Container'
import { BackButton } from './components/BackButton'
import { PageTransition } from '../../shared/PageTransition'
import { CountryInfo } from './components/CountryInfo'
import { BorderCountries } from './components/BorderCountries'
const repository = new CountryDataRepository()


const CountryDetail = ({ language }) => {

  const { countryName } = useParams()
  const navigate = useNavigate()
  const t = translations[language]

  const country = repository.getCountryByName(countryName, language)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [country?.borders])


  if (!country) {
    navigate('/', { replace: true })
    return null
  }




  const borderCountries = country.borders
    ? repository.getCountriesByBorders(country.borders, language)
    : []


  return (
    <Container language={language}>
      <PageTransition transitionKey={countryName} >
        <BackButton language={language} />
        <CountryInfo country={country} t={t} borderCountries={borderCountries} />
        <Map key={country.name} country={country} />
      </PageTransition>
    </Container>
  )
}

export default CountryDetail
