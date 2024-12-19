import { styles } from '../../../../styles/common'

export const LoadMoreButton = ({ isLoading, onClick, t }) => (
  <div className="text-center mt-8">
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${styles.button} disabled:opacity-50`}
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
)
