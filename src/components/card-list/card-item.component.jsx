import { Component } from "react";
import './card-item.styles.css'

class CardItem extends Component{
    render(){
       const {name,id,email} = this.props;
        return (
            <div className="card-container" key={id}>
                        <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} 
                        width="180px"
                        height={"180px"} />
                        <h2>{name}</h2>
                        <p>{email}</p>
             </div>
        )
    }
}
export default CardItem