import React, { useState } from 'react'

interface Iprops{

}

interface Istate{
count:number;
}

const EventHandling:React.FC<Iprops>=()=>{
    const [state,setState]=useState<Istate>({
        count:0
    })

    let increment=():void=>{
        setState({count:state.count+1})
    }

    let decrement=():void=>{
        if(state.count!==0){
        setState({count:state.count-1})
        }
    }

    let reset=():void=>{
        setState({count:0})
    }

    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
            <div className="col">
                <div className="card bg-dark text-white  border-warning m-3">
                    <div className="card-body">
                        
                
                    <div className="card-header bg-info text-center fw-bold">Event Handling</div>
                    
               
                <p className='card-title display-6 fw-bold text-warning'> Count: {state.count}</p>
                <button  type ="button" className='btn btn-success m-2 ' onClick={increment}>Incr The Count</button>
                <button type ="button" className='btn btn-primary m-2 ' onClick={reset}>Reset</button>
                <button type ="button" className='btn  m-2 btn-danger' onClick={decrement}>Decr The Count</button>
                

                </div>
                </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default EventHandling