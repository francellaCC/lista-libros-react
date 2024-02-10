import React, { useState } from "react";

function InputSearch() {
  const [search, updateSearch] = useState('');

  const handleChange =(event)=>{
    const newSearch = event.target.value
    updateSearch(newSearch)
  
   }
  
   const handleSubmit=(e)=>{
    e.preventDefault()
    const newSearch = e.target.value
    
  
   }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className="inputSearch" value={search} onChange={handleChange} name='query' type="text" />
      <button className="buttonSearch" type='submit'>Buscar</button>
     </form>
  );
}

export default InputSearch;
