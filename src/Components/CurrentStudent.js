import React, {Component} from 'react'


class CurrentStudent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const current = this.props
        return(
            <div>
                
                <div >
                    <div>
                    <h1>{current.student.name}</h1>
                    <p><b>From:</b> {current.student.from}</p>
                    <p><b>Fun fact:</b> {current.student.funFact}</p>        
                        <div>
                            <ul><b>Would you rather...</b>
                                <li><b>...live in the city or country?</b> {current.student.cityOrCountry}</li>
                                <li><b>...be indoors or outdoors?</b> {current.student.indoorsOrOutdoors}</li>
                                <li><b>...travel every day or never leave home?</b> {current.student.travel}</li>
                                <li><b>...eat at Top's or Subway?</b> {current.student.food}</li>
                                <li><b>...have a dog or a cat?</b> {current.student.dogOrCat}</li>
                            </ul>
                         </div>
                     </div>    
                </div>
            </div> 
        )
    }
}

export default CurrentStudent

                