export const SortSelect = ({ setIsAscending, setSortValue, page }) => {

  const handleSortChange = (e) => {
    console.log(" me estoy ejecutandooooooo")
    for (let option of e.target) {
      if (option.selected) {
        setSortValue(() => option.value)
      }
    }
  }
  return (
    <>
      {page == "players" &&
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
      </select>}
    </>
  )
}
