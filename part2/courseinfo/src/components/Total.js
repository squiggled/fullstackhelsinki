const Total =({parts}) => {
    const sum = parts.reduce((total, current) => { 
        return total + current.exercises;
      } , 0);
    
    return (
      <p>
        Total of {sum} exercises
      </p>
    )
  }
  export default Total 