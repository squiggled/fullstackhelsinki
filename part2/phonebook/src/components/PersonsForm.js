const PersonsForm = ({addPerson, newName, newNumber, handleNumberChange, handlePersonChange}) => {
  return (
    <form onSubmit ={addPerson}>
    <div>
      name: <input value={newName}
      onChange = {handlePersonChange}/>
    </div>
    <div>
      number: <input value={newNumber}
      onChange = {handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
    {/*render state for debugging */}
  </form>
  )
}
export default PersonsForm