import {useEffect, useState} from "react";

import './App.css';
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";
const App = ()=>{
  const [searchString,setSearchString] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilterdMonsters] = useState(monsters);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then((users)=>setMonsters(users));
          
  },[]);
  useEffect(()=>{
    const filteredMonsters=monsters.filter((monster)=>{
            return searchString.toLowerCase() === monster.name.slice(0,searchString.length).toLowerCase()
           });
           setFilterdMonsters(filteredMonsters)
          
  },[monsters,searchString])
  const onSearchChange = (evt)=>{
    setSearchString(evt.target.value)
  }
  return (
    <div className="app">
      <h1 className="app-title">Monsters Rolodex</h1>
      <Search className="monsters-search-box"  placeholder="search monsters" eventHandler={onSearchChange}  />
        <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       monsters:[],
//       searchString:"",
//     }
//   }
//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then((users)=>this.setState(()=>{
//       return {
//         monsters:users
//       }
//     }))
//   }
//    onSearchChange = (event)=>{
//       let keyword = event.target.value;
//       this.setState(()=>{
//     return {
//       searchString:keyword,
//     }
//   })
// }
//   render(){
//     const {monsters,searchString} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters=monsters.filter((monster)=>{
//       return searchString.toLowerCase() === monster.name.slice(0,searchString.length).toLowerCase()
//      })
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <Search className="monsters-search-box"  placeholder="search monsters" eventHandler={onSearchChange}  />
//         <CardList monsters={filteredMonsters} />
        
//       </div>
//   )
  
//     };
// }

export default App;
