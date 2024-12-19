import { Link } from 'react-router-dom'

export const BorderCountries = ({ borderCountries, t }) => {
  if (!borderCountries.length) return null

  return (
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
  )
}
