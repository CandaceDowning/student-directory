import React, {Component} from 'react';
import './App.css';
import CurrentStudent from './Components/CurrentStudent'
import AddForm from './Components/AddForm'

class App extends Component {
  constructor(){
    super()

    this.state = {
      studentIndex: 0,
      displayInput: true,
      name:"",
      studentRoster:[
        {
            name:"Kevin",
            from:"San Antonio",
            funFact:"He has lived in Argentina",
            cityOrCountry:"Country",
            indoorsOrOutdoors:"Indoors",
            travel: "Travel everyday",
            food: "Top's",
            dogOrCat:"Dog"
        },
        {
            name: "Sabrina",
            from: "NYC",
            funFact: "Was born in Bangladesh",
            cityorCountry: "City",
            indoorsOrOutdoors: "Indoors",
            topsOrSubway: "Subway",
            catsOrDogs: "Cats - can't have dogs"
        },
        {
            name: "Samuel",
            from: "Nigeria",
            funFact: "He has been away from home at boarding school since age 10",
            cityOrCountry: "City",
            indoorsOrOutdoors: " Indoors",
            travel:"Everyday",
            topsOrSubway: null,
            dogOrCat:"Cat"
        }, 
        {
            name:"Yousef",
            from:"West Africa",
            funfact:"Was born in a village",
            cityOrCountry:"Lots of money in the city, otherwise country",
            indoorsOrOutdoors:"Outside but not working",
            travel: "yes",
            food: "subway",
            dogOrCat:"Cat"
        },
        {
            name: "Uriel",
            from: "Dallas, TX",
            funFact: "Plays Soccer",
            cityOrCountry: "Inbetween, rural",
            indoorsOrOutdoors: "Outdoors",
            travel: "Yes",
            food: "Subway",
            dogOrCat: null
        },
        {
            name: "Jon",
            from: "Washington State",
            funFact: "Can count in Finnish (lived in Finland)",
            cityOrCountry: "The midlands",
            indoorsOrOutdoors: "indoors",
            travel: "travel",
            food: null,
            dogOrCat: "cat"
        },
        {
            name: 'Harry',
            from: 'Denton',
            funFact: 'Has a degree in music education',
            cityOrCountry: 'Country but not too far from the city',
            indoorsOrOutdoors: 'Outdoors for sure, yes definitely outdoors',
            travel: 'Yes, for sure',
            food: 'Tops sounds cool, subway is lame',
            dogOrCat: '2 dogs'
        },
        {
            name: "Blake",
            from: "Springdale Arkansas",
            funFact: "Has a blackbelt",
            cityOrCountry: "Country",
            indoorsOutdoors: "outdoors",
            travelOrHome: "home",
            topsOrSubway: "Top's",
            dogOrCat: "dog"
        },
        {
            name: "Alec",
            from: "Plano, TX",
            funFact: "He is a musician",
            cityOrCountry: "both",
            indoorsOrOutdoors: null,
            travel: "never leave home",
            food: "Subway",
            pet: "dog"
        },
        {
            name : "Candace",
            from: "North Dallas",
            funFact: "She can weld",
            cityOrCountry: "Country",
            indoorsOrOutdoors : "Outdoors",
            travelOrStayHome: "travel every day",
            topsOrSubway: "Subway",
            dogOrCat: "werewolf cat"
        },
        {
            name: "Zaid",
            from: "New Jersey",
            funFact: "Plans to get engaged soon",
            cityOrCountry: "City for now, country to retire",     
            indoorsOrOutdoors: "Both, depends on mood",
            travel: "new country everday",
            dogOrCat: "unfortunately, none at the moment" 
        },
        {
            name: 'Dylan',
            from: 'Round Rock',
            funFact: 'He has been in drumline for 4 years',
            cityOrCountry: 'Country',
            indoorsOrOutdoors: 'Indoors',
            travel: 'travel',
            food: 'Subway',
            dogOrCat: 'both'
            },
        {
            name: "Caleb",
            from:"Wisconsin",
            funFact: "He has been to Asia",
            cityOrCountry:"City",
            indoorsOrOutdoors:"Indoors",
            travels:"yes",
            food:"Subway",
            dogOrCat:"Neither"
        },
        {
            name: "Sandra",
            from: "San Diego, CA",
            funFacts: "Has moved to 5 Difference Countries",
            cityorCountry: "Both, depending on the weather",
            travel: "yes",
            food: "Subway",
            dogOrCat: "Dog"
        }
      ],
      
    }
    this.HandleNext=this.HandleNext.bind(this)
    this.HandlePrevious=this.HandlePrevious.bind(this)
    this.HandleDelete=this.HandleDelete.bind(this)
    this.HandleAdd=this.HandleAdd.bind(this)
    this.HandleSubmit=this.HandleSubmit.bind(this)
  }

  HandleNext(){
    if(this.state.studentIndex >= this.state.studentRoster.length-1){
      this.setState({studentIndex: 0})
    }
    else{this.setState({studentIndex: this.state.studentIndex + 1});}
    
  }s
  HandlePrevious(){
    if(this.state.studentIndex === 0){
      this.setState({studentIndex: this.state.studentRoster.length-1})
    }
    else{
      this.setState({studentIndex: this.state.studentIndex - 1});}
  }
  HandleDelete(){
    let update = [...this.state.studentRoster]
    update.splice(this.state.studentIndex, 1)
    this.setState({studentRoster: update})
  }
  HandleAdd(){
    this.setState({displayInput: !this.state.displayInput})
  }
  HandleSubmit(){
    this.setState({displayInput: !this.state.displayInput})
  }
  HandleChange(){
    
  }
  render() {
    return (
      <div className="App">
        
         <header class="titleBar">
                    <a class="home" href="#">Home</a>
                    <a class="directory" href="#">DevMountainDirectory</a>
          </header>
        
          <div class="mainBox">
            <div class="dataBox">
              <span class="counter">{this.state.studentIndex+1} of {this.state.studentRoster.length}</span>
             
             
              {this.state.studentRoster[0] && this.state.displayInput ?  <CurrentStudent student = {this.state.studentRoster[this.state.studentIndex]}/> : !this.state.displayInput ? null: <div>No Students To Display</div>}
            
            
            
            {!this.state.displayInput ? <AddForm formUpdate={()=>this.HandleChange()}/> : null}
            </div>
            <div class="allButtonsBox">
              <button class="PButton" onClick={this.HandlePrevious}> &lt; Previous</button>
              <button class="DButton" onClick={this.HandleDelete}>Delete</button>
              {this.state.displayInput ? <button class="AButton" onClick={this.HandleAdd}>Add</button> : <button class="SButton" onClick={this.HandleSubmit}>Submit</button>}
              <button class="NButton" onClick={this.HandleNext}>Next &gt;</button>
            </div>    
          </div>      
       </div>
    )
  }
}

export default App;

