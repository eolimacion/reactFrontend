export const FinderChildrenNav = ({ action, setFilterValue, setMinValue, setMaxValue, setSortValue, sortValue, setIsAscending }) => {

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
              <input id = "min-filter" placeholder = "min" type="text" onChange={(e) => {setMinValue(() => e.target.value)}}/>
              <input id = "max-filter" placeholder = "max" type="text" onChange={(e) => {setMaxValue(() => e.target.value)}}/>
            </div>
            <select name="filter" id="filter-select" onChange={(e) => {setFilterValue(() => e.target.value)}}>
              <option value="selecciona">Select Filter</option>
              <option value="number">Number</option>
              <option value="age">Age</option>
              <option value="marketvalue">Market Value</option>
              <option value="goals">Goals</option>
              <option value="assists">Assists</option>
              <option value="rating">Rating</option>
            </select>
          </>
      )

    case "sort":
      return (
        <select multiple name="sort" id="sort-select" onChange={(e) => handleSortChange(e)}>
            <option value="selecciona">Select Sort</option>
          <optgroup label="SORTING METHOD">
            <option value="descending" onClick={(e) => {setIsAscending(false)}}>Descending</option>
            <option value="ascending" onClick={(e) => {setIsAscending(true)}}>Ascending</option>
          </optgroup>
          <optgroup label = "STAT">
            <option value="number">Number</option>
            <option value="age">Age</option>
            <option value="marketvalue">Market Value</option>
            <option value="goals">Goals</option>
            <option value="assists">Assists</option>
            <option value="rating">Rating</option>
          </optgroup>
      </select>
      )
    default:
      break;
  }
}
