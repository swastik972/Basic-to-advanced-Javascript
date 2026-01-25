let names=["Rahul","Ram","Shyam","Hari"];

let Dashboard=()=>{
    return(
        <div>
             <h3>Dashboard</h3>
             <p>Welcome to dashboard</p>
             <i>You are good to go</i>
             <ul>
             {
                names.map(
                    (element,index)=>{
                      return(
                        <li key={index}>{element}</li>
                      )
                    }
                )
            }
            </ul>
        </div>
    )
}
export default Dashboard;

//names.filter.map- bata aafno man anusar name lakhna milxa 