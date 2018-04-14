import React, { Component  } from "react";
import Hero from "./hero";
import EditHero from "./editHero";

class Heroes extends Component {
    constructor(){
        super();
        this.state = { heroes: [], addingHero: false }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        fetch('api/heroes/').then(result => result.json()).then(json => {
            this.setState({heroes : json});
        })
    }

    handleSelect(hero){
        this.setState({selectedHero : hero})
    }

    handleSave(hero){

    }

    handleChange(){

    }

    handleCancel(){
        
    }

    render(){
        return (
            <div>
                <ul className="heroes">
                    {this.state.heroes.map(hero => {
                        return (
                            <Hero
                                key={hero.id}
                                hero={hero} onSelect={this.handleSelect}/>
                        );
                    })}
                </ul>
                <div className="editarea">
                    <EditHero 
                            selectedHero={this.state.selectedHero} 
                            addingHero={this.state.addingHero} 
                            onChange={this.handleChange} 
                            onSave={this.handleSave}
                            onCancel={this.handleCancel} />
                </div>
            </div>
        );
    }
}

export default Heroes;