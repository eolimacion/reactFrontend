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
      
      <select multiple name="sort" id="sort-select" onChange={(e) => handleSortChange(e)}>
          <option value="selecciona">Select Sort</option>
        <optgroup label="SORTING METHOD">
          <option value="descending" onClick={(e) => {setIsAscending(false)}}>Descending</option>
          <option value="ascending" onClick={(e) => {setIsAscending(true)}}>Ascending</option>
        </optgroup>
        {page == "players" &&
          <optgroup label = "STAT">
            <option value="number">Number</option>
            <option value="age">Age</option>
            <option value="marketvalue">Market Value</option>
            <option value="goals">Goals</option>
            <option value="assists">Assists</option>
            <option value="rating">Rating</option>
          </optgroup>}
        {page == "teams" &&
          <optgroup label = "STAT">
            <option value="ranking">Ranking</option>
            <option value="points">Points</option>
            <option value="seasontrophies">Trophies (season)</option>
            <option value="overalltrophies">Trophies (history)</option>
            <option value="networth">Net Worth</option>
            <option value="name">Name</option>
          </optgroup>}
        {page == "riders" &&
          <optgroup label = "STAT">
            <option value="number">Number</option>
            <option value="age">Age</option>
            <option value="polesSeason">Poles (season)</option>
            <option value="points">Points</option>
            <option value="victoriesSeason">Victories (season)</option>
            <option value="victoriesCarrer">Victories (career)</option>
            <option value="championshipsCarrer">Championships (career)</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </optgroup>}
        {page == "circuits" &&
          <optgroup label = "STAT">
            <option value="totalLength">Total Length</option>
            <option value="capacity">Capacity</option>
            <option value="topSpeed">Top Speed</option>
            <option value="name">Name</option>
          </optgroup>}
      </select>
    </>
  )
}