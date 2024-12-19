import { styles } from '../../../../styles/common'

export const FilterSection = ({ 
  region, 
  setRegion, 
  setSearchTerm, 
  sortBy, 
  setSortBy, 
  sortOrder, 
  setSortOrder, 
  t 
}) => (
  <div className="flex items-center flex-col md:flex-row gap-4">
    <select
      value={`${sortBy}-${sortOrder}`}
      onChange={(e) => {
        const [newSortBy, newSortOrder] = e.target.value.split('-')
        setSortBy(newSortBy)
        setSortOrder(newSortOrder)
      }}
      className={`${styles.select} w-full`}
    >
      <option value="name-asc">{t.sortNameAsc}</option>
      <option value="name-desc">{t.sortNameDesc}</option>
      <option value="population-asc">{t.sortPopulationAsc}</option>
      <option value="population-desc">{t.sortPopulationDesc}</option>
    </select>

    <select
      value={region}
      onChange={(e) =>{
        setRegion(e.target.value)
        setSearchTerm('')
      }}
      className={`${styles.select} w-full`}
    >
      <option value="">{t.filterByRegion}</option>
      <option value={t.regions.africa}>{t.regions.africa}</option>
      <option value={t.regions.americas}>{t.regions.americas}</option>
      <option value={t.regions.asia}>{t.regions.asia}</option>
      <option value={t.regions.europe}>{t.regions.europe}</option>
      <option value={t.regions.oceania}>{t.regions.oceania}</option>
    </select>
  </div>
)
