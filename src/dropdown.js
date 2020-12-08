import React from 'react'

export default class DropDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            colours: {},
            query:'',
            filterData:[]
        };
    }
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
        this.filterArray();
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
    filterArray = () => {
        var searchString = this.state.query;
        var responseData = this.state.countries
        if(searchString.length > 0){
            // console.log(responseData[i].name);
            responseData = responseData.filter(l => {
                console.log( l.name.toLowerCase().match(searchString));
            })
            this.setState({filterData:responseData})
        }
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
            <div>
                    {
                        this.state.filterData.map((i) =>
                            <p>{i.name}</p>
                        )
                    }
                </div>
            </div>
        );
    
    }
}
