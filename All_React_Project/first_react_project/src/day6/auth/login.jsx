let rules =[
    {
        name:"email",type:"email",placeholder:"Enter your email",rule:"required|email"},
        {name:"password",type:"password",placeholder:"Enter your password",rule:"required|min:8"},
    
]


let Login=()=>{
    return(
        <div>
        <ol>
          {
                rules.map(
                    (ele,ind)=>{
                        return(
                            <>
                                <li key={ind}>Name:{ele.name}</li>
                                <li key={ind}>rule:{ele.name}</li>
                            </>
                        )
                    }
                )
            }
            </ol>
            <h1>Login Page</h1>
            <p>Please enter the following details to Login</p>
            <div>
            <ol>
                {
                rules.map(  
                    (ele,ind)=>{
                  return(
                    <>
                        <li key={ind}>{ele.name}:{ele.rule}</li>
                    </>
                  )
                    }
                )
                }
            </ol>

                <input type="email" placeholder="Enter your email"/>
                <br/><br/>
                <input type="password"
                placeholder="Enter strong password" />
                <br/><br/>
                <button></button>
            </div>
        </div>
    )
}
export default Login ;