import React,{Component} from "react";

interface Istate{
name:string;
}

interface Iprops{

}

 class StateInClassComponents extends Component<Iprops,Istate>{
    state= {name:"Jay"}
    // constructor(props:Iprops){
    // super(props)
    // this.state= {name:"Jay"} }
    render()
      {
        const {name}=this.state
       
        return(
            <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="card bg-danger text-white  border-warning m-3">
                        <div className="card-body">
                            
                    
                        <div className="card-header bg-light text-black text-center fw-bold">User Details in Class Component(by State)</div>
                        
                   
                    <p className='card-title display-6 fw-bold'> Hello {name}</p>
                    <p className='card-textdisplay-7 fw-bold'> {name} is born on 16-09-2021</p>
                    
    
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }

}
export default StateInClassComponents
export {}
