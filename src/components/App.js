import React, { useState } from "react";
import ToDoItem from "../components/ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]); //list starts empty

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  /* DELETE ITEM
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
*/

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="add item..."
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {items.map((
          todoItem //, index for deletion  CALL TODOITEM component
        ) => (
          <ToDoItem text={todoItem} />
          //onChecked={deleteItem}  />
          // key={index}
          //id={index}
        ))}
      </div>
    </div>
  );
}

export default App;
