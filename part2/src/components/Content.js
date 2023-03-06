import Part from './Part'

const Content = ({parts} ) => {
    return (
      <>
      {parts.map(parts =>
        <div key={parts.id}>
        <Part 
        part={parts.name} exercises={parts.exercises}
        />
        </div>
        )}
      </>
      )
    }
    export default Content