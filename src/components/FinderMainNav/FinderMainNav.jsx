export const FinderMainNav = ({ setNav, setChildrenNav }) => {
  return (
    <nav>
      <button id = "filter-players" onClick={() => {setNav("filter")}}>FILTER</button>
      <button id = "sort-players" onClick={() => {setNav("sort")}}>SORT</button>
    </nav>
  )
}
