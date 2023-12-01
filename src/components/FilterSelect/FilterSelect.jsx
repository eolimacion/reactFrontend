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
      { page == "riders" &&
        <select name="filter" id="filter-select" onChange={(e) => {setFilterValue(() => e.target.value)}}>
          <option value="selecciona">Select Filter</option>
          <option value="number">Number</option>
          <option value="age">Age</option>
          <option value="polesSeason">Poles (season)</option>
          <option value="points">Points</option>
          <option value="victoriesSeason">Victories (season)</option>
          <option value="victoriesCarrer">Victories (career)</option>
          <option value="championshipsCarrer">Championships (career)</option>
          <option value="rating">Rating</option>
        </select>}
      { page == "circuits" &&
        <select name="filter" id="filter-select" onChange={(e) => {setFilterValue(() => e.target.value)}}>
          <option value="selecciona">Select Filter</option>
          <option value="totalLength">Total Length</option>
          <option value="capacity">Capacity</option>
          <option value="topSpeed">Top Speed</option>
          <option value="name">Name</option>
        </select>}
    </>
  )
}
