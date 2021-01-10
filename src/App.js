import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const[items,setItem]=useState();
  const [finalItem,setFinalItem]=useState([]);

  const itemSave=(events)=>{
    setItem(events.target.value);

  };
  const createList=()=>{
      setFinalItem((oldItems)=>{
        return [...oldItems,items];
      });
      setItem('');
  };
  const deleteItems=(id)=>{
    setFinalItem((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index!=id;

      })
    })

  };

  return (
    <>
    <div  className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List <sup className="superScript">By Vimal Pandey</sup></h1>
        <br/>
        <input type="text" name="todo" placeholder="Add ToDo..." onChange={itemSave} value={items}/>
        <button onClick={createList}>+</button>

        <ol>
            {/* <li>{items}</li> */}
            {finalItem.map((itemValue,index)=> {
               return <ToDoList id={index} key={index} params={itemValue} onSelect={deleteItems}/>;

            })  }


        </ol>
      </div>

      
    </div>
    </>
  );
}

export default App;
