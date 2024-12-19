import { Link } from 'react-router-dom'

export const BackButton = ({ language }) => (
  <Link
    to="/"
    className={`${language === 'fa' ? 'flex-row-reverse' : 'flex-row'} inline-flex items-center bg-elements-light dark:bg-elements-dark px-4 py-2 rounded shadow-md mb-16`}
  >
    <span>{language === 'en' ? '← Back' : ' → بازگشت'}</span>
  </Link>
)
