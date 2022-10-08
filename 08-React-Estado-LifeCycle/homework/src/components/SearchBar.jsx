import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [input, setInput] = useState('');
  function onHandleInputCityChange(event){
    setInput(event.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setInput("");
      onSearch(input);
    }}>
      <input
        onChange={onHandleInputCityChange}
        type="text"
        value={input}
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
