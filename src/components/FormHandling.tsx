import React ,{useState}from 'react'

interface Iprops{

}
interface Istate{
    user:{
        firstName:string;
        lastName:string;
    }
}

const FormHandling:React.FC<Iprops>=()=>{

const [state,setstate]=useState<Istate>({
    user:{
        firstName:"",
        lastName:"",
    }
})

const changeInputFirst=(event:React.ChangeEvent<HTMLInputElement>)=>{
    // const {user}=state
    setstate({user:{...state.user,firstName:event.target.value}});
}

const changeInputLast=(event:React.ChangeEvent<HTMLInputElement>)=>{
   
    setstate({user:{...state.user,lastName:event.target.value}});
}

const submitForm=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(state.user)
}

return (

    <React.Fragment>
        <div className="container">
            <div className="row">
            <div className="col">
                <div className="card bg-info text-white  border-warning m-3">
                    <form onSubmit={submitForm}>
                <div className="card-header bg-dark text-center fw-bold m-2">Login Page </div>
                    <div className="card-body">
                     <label htmlFor="first" className="card-title">FIRST NAME   </label>
                     <br/>
                     <input type="text" name="first" id="first" required={true} placeholder="First Name"  className="card-title" onChange={changeInputFirst}/>
                     </div>
                     <div className="card-body">
                     <label htmlFor="last" className="card-title">LAST NAME   </label>
                     <br/>
                     <input type="text" name="last" id="last" required={true} placeholder="Last Name"  className="card-title" onChange={changeInputLast}/>
                     </div>
<button type="submit" className="btn btn-primary m-3">Login</button>
                   
</form>
                </div>
                </div>
            </div>
        </div>
        </React.Fragment>
)


}
export default FormHandling