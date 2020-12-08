import React from 'react'

export default class DropDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            colours: {},
            query:''
        };
    }
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }
    componentDidMount() {
        this.setState({
            countries: [
                {id: 'AFG', name: 'Afghanistan'},
                {id: 'ALA', name: 'Aland Islands'},
                {id: 'ALB', name: 'Albania'},
                {id: 'AUG', name: 'Austarila'},
            ]
        });
    }
    render() {
        const { countries } = this.state;
    
        let countriesList = countries.length > 0
            && countries.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.name}</option>
            )
        }, this);
    
        return (
            <div>
                <h1>Smart DropDown</h1>
                <select>
                    {countriesList}
                </select><br/>
                <div className="row">
        <div className="col-12">
            <div className="input-group">
            <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
        <i className="fa fa-search" ></i>
            </div>
            </div>
            </div>
            </div>
        );
    
    }
}
