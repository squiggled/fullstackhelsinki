const Persons =({namesToShow, persons}) =>{
    return (
        <>
        {namesToShow.map(persons=> 
        <p key={persons.id}> {persons.name} {persons.number}
        </p>
        )}
        </>
    )
}
export default Persons