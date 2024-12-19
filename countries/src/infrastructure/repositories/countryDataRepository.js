import englishData from '../data/data.json'
import persianData from '../data/translated-data.json'

export class CountryDataRepository {
  getAllCountries(language) {
    return language === 'en' ? englishData : persianData
  }

  getCountryByName(name, language) {
    const data = this.getAllCountries(language)
    return data.find(country => country.name === name)
  }

  getCountriesByBorders(borders, language) {
    const data = this.getAllCountries(language)
    return borders
      .map(border => data.find(c => c.alpha3Code === border))
      .filter(country => country !== undefined)
  }
}
