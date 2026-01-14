//always start with capital letter to create a component
//functional component
let App = ()=>{

    //return always return only one jsx element
    //to return multiple jsx element uses fragment (<></>) or div
    let count = 999;
  return(
    <>
    <h1>intro</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum iure eveniet modi? Commodi sed dolore quod ducimus rerum labore recusandae? Doloremque minima dolores eos dicta totam obcaecati nam non?</p>
    {/* never use capital letter for jsx el;ement */}
    {/* <B>it not teturns anything</B> */}
    {/* use className instead of clas attribute
    use htmlFor instead of for attribute */}
    <b className="bold">it returns the content</b>
    {/* use  {} to display variable value or for expression */}
    <br></br>
    <i>Total: {45+15}</i>
    <h4>Count: {count}</h4>
    <h4>Even or Odd: {count%2 == 0 ? "even" : "odd"} </h4>
    </>
  )
}
export default App;