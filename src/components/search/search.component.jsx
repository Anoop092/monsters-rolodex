import { Component } from "react"
import '../search/search.styles.css'


class Search extends Component {
   
    render(){
        
        return(
            <input  
            type="search" 
            className={`search-box ${this.props.className}`}
            placeholder={this.props.placeholder} 
            onChange={this.props.eventHandler} 
            />
        )
    }
}
export default Search