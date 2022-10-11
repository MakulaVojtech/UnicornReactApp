import { useState } from 'react';
import './App.css';
import ListItem from './components/list/listItem';
import Error from './components/error/error'; 

function App() {
 let [items, setItems] = useState([{"item":"Sekyra", "color":"#fff"}, {"item":"Nůž", "color":"#fff"}, {"item":"Luk", "color":"#fff"}]);
 let [inputValue, setInputValue] = useState("");
 let [inputColor, setInputColor] = useState("");
  return (
    <div className="App">
        <div>{inputValue}</div>
        {inputValue?.length < 5 && <Error code="123" message="Délka musí být delší než 5 znaků!"/>}
        <input type="text" onChange={e => {
          setInputValue(e.target.value); 
        }}/>
        <input type="color" onChange={e => {
          setInputColor(e.target.value);
        }}/>


        <button onClick={() => {
          items.push({"item": inputValue, "color": inputColor});
          setItems([...items]);
          console.log(items)
        }}>Vlož</button>
        {items.map((item, index)=> <ListItem item={item.item} key={index} style={{"color":item.color}}/>)}

    </div>
  );
}

export default App;
