import { useState } from 'react'
import * as React from 'react' 

import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      if (persons.some(e => e.name === newName)) {
        alert(`${newName} is already added to the phonebook`)}
      else {
      setPersons(persons.concat(newPerson)) //does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end. This is important since we must never mutate state directly in React!
      setNewName('')
      setNewNumber('')} // resets the value of the controlled input element by calling the setNewNote function of the newNote state:
      console.log('button clicked', event.target)
  }

//event handler to sync changes
  const handlePersonChange  = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  //event.target.value refers to input value of controlled input element

  const handleNumberChange  = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchInputChange = (event)=>{
    console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  //to keep track of which names to be displayed
  const namesToShow = searchInput.length === 0 //if search field is empty, show all names
  ? persons 
  : persons.filter(person => person.name.toLowerCase().includes(searchInput) );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchInput={searchInput} handleSearchInputChange={handleSearchInputChange} showAll={showAll} setShowAll={setShowAll}/>
      
      <h3>Add a new</h3>
      <PersonsForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange}  />

      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow} persons={persons}/>
        
    </div>
  )
}

export default App