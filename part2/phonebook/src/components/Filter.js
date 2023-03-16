const Filter = ({searchInput, handleSearchInputChange, showAll, setShowAll}) => {
  
  return (
        <p>filter shown with<input value={searchInput} onChange={handleSearchInputChange} 
          onKeyDown={()=> setShowAll(!showAll)}/> 
        </p>
        )
    }
    export default Filter 
