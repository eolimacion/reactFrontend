export const FinderChildrenNav = ({ action }) => {
  switch (action) {
    case "filter":
      return (
        <>
            <div id = "min-max">
              <input id = "min-filter" placeholder = "min" type="text"/>
              <input id = "max-filter" placeholder = "max" type="text" />
            </div>
            <select name="filter" id="filter-select">
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
        <select multiple name="sort" id="sort-select">
            <option value="selecciona">Select Sort</option>
          <optgroup label="SORTING METHOD">
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
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
