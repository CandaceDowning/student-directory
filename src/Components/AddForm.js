import React, {Component} from 'react';


class AddForm extends Component{
    constructor(){
        super()
        
        this.state = {
           
        }

    }
    render(){
        return(
            <div className="whatever">
                
                <div >
                    <div>
                    <h4>Full Name: <input></input></h4>
                    <p><b>From:</b> <input></input></p>
                    <p><b>Fun fact:</b><input></input></p>        
                        <div>
                            <ul><b>Would you rather...</b>
                                <li><b>...live in the city or country?</b> <input></input></li>
                                <li><b>...be indoors or outdoors?</b> <input></input></li>
                                <li><b>...travel every day or never leave home?</b> <input></input></li>
                                <li><b>...eat at Top's or Subway?</b> <input></input></li>
                                <li><b>...have a dog or a cat?</b> <input></input></li>
                            </ul>
                         </div>
                     </div>    
                </div>
            </div> 
        )
    }
}


export default AddForm