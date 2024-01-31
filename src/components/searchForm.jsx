import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
    const {setSearchValue} = useGlobalContext()
    const inputValue = useRef('')
    const handleSubmit = (e)=>{
        return e.preventDefault()
    }
    const searchCockTail = () =>{
        setSearchValue(inputValue.current.value)
    }
    useEffect(()=>{
      inputValue.current.focus()
    },[])
    return ( 
        <div className='search-form'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="search-input">Search for your favourite <span>cocktail</span> </label>
                        <input 
                           type="text" 
                           id='search-input' 
                           ref={inputValue} 
                           onChange={searchCockTail}
                           />
                    </div>
                </form>
            </div>
     );
}
 
export default SearchForm;