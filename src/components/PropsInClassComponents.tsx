
import React,{Component} from 'react'

interface Iprops{
    name:string;
}

class PropsInClassComponents extends Component<Iprops>{

    render(){
        const {name}=this.props
        return(
            <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="card bg-dark text-white  border-warning m-3">
                        <div className="card-body">
                            
                    
                        <div className="card-header bg-info text-center fw-bold">User Details in Class Component(by Props)</div>
                        
                   
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
export default PropsInClassComponents

