import { FilterSelect, SortSelect } from "../index"
import "./FinderChildrenNav.css"
export const FinderChildrenNav = ({ action, setFilterValue, setMinValue, setMaxValue, setSortValue, setIsAscending, page, minValue, maxValue }) => {

  const handleSortChange = (e) => {
    console.log(" me estoy ejecutandooooooo")
    for (let option of e.target) {
      if (option.selected) {
        setSortValue(() => option.value)
      }
    }
  }

  switch (action) {
    case "filter":
      return (
        <>
            <div id = "min-max">
              <input id = "min-filter" placeholder = "min" type="text" value={minValue} onChange={(e) => {setMinValue(() => e.target.value)}}/>
              <input id = "max-filter" placeholder = "max" type="text" value={maxValue} onChange={(e) => {setMaxValue(() => e.target.value)}}/>
            </div>
            <FilterSelect setFilterValue={setFilterValue} page={page} />
          </>
      )

    case "sort":
      return (
      <SortSelect setIsAscending={setIsAscending} setSortValue={setSortValue} page={page} />
      )
    default:
      break;
  }
}
