import { BorderCountries } from "./BorderCountries";

export const CountryInfo = ({ country, t, borderCountries }) => (
    <div className="grid grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center mb-12">
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        className="w-full shadow-md col-span-2 md:col-span-1"
      />
      <div className='col-span-2 md:col-span-1'>
        <h1 className="text-3xl font-extrabold mb-8">{country.name}</h1>
        <div className="grid grid-cols-2 gap-x-16 gap-y-2 mb-12">
          <p><span className="font-semibold">{t.nativeName}:</span> {country.nativeName}</p>
          <p><span className="font-semibold">{t.population}:</span> {country.population.toLocaleString()}</p>
          <p><span className="font-semibold">{t.region}:</span> {country.region}</p>
          <p><span className="font-semibold">{t.subRegion}:</span> {country.subregion}</p>
          <p><span className="font-semibold">{t.capital}:</span> {country.capital}</p>
          <p><span className="font-semibold">{t.domain}:</span> {country.topLevelDomain}</p>
          <p><span className="font-semibold">{t.currencies}:</span> {country.currencies?.map(c => c.name).join(', ')}</p>
          <p><span className="font-semibold">{t.languages}:</span> {country.languages?.map(l => l.name).join(', ')}</p>
        </div>
          <BorderCountries borderCountries={borderCountries} t={t} />
      </div>
    </div>
  )
  