import React, { useState } from 'react'

interface Iprops{

}

interface Istate{
    name:string;
}

const StateInFunComponents:React.FC<Iprops>=()=>{

const [state,setState]=useState<Istate>({
    name:"Jay"
})

let {name}=state
return(
    <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="card bg-warning text-white  border-warning m-3">
                        <div className="card-body">
                            
                    
                        <div className="card-header bg-dark text-center fw-bold">User Details in Function Component(by State)</div>
                        
                   
                    <p className='card-title display-6 fw-bold'> Hello {name}</p>
                    <p className='card-text display-7 fw-bold'> {name} is born on 16-09-2021</p>
                    
    
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
)

}
export default StateInFunComponents