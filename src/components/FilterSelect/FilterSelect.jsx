export const FilterSelect = ({ setFilterValue, page }) => {
  return (
    <>
    { page == "players" &&
      <select name="filter" id="filter-select" onChange={(e) => {setFilterValue(() => e.target.value)}}>
        <option value="selecciona">Select Filter</option>
        <option value="number">Number</option>
        <option value="age">Age</option>
        <option value="marketvalue">Market Value</option>
        <option value="goals">Goals</option>
        <option value="assists">Assists</option>
        <option value="rating">Rating</option>
      </select>}
      { page == "teams" &&
      <select name="filter" id="filter-select" onChange={(e) => {setFilterValue(() => e.target.value)}}>
        <option value="selecciona">Select Filter</option>
        <option value="number">Ranking</option>
        <option value="age">Points</option>
        <option value="marketvalue">Overall Trophies</option>
        <option value="goals">Season Trophies</option>
        <option value="assists">Net Worth</option>
      </select>}
    </>
  )
}
