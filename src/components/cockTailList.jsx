import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

import Loading from './loading';
const CockTailList = () => {
    // const {cockTailList} = useGlobalContext()

    const {isLoading, cockTailList} = useGlobalContext()

    if (isLoading) {
      return (<Loading/>)
    }
   if (cockTailList.length < 1) {
     return <div className='no-cocktail'>
      <h3>No cocktail matches your search input.</h3>
     </div>
   }
    return ( 
        
       <section  className='section main'>
          <div className="title">
            <h3>Cocktails:</h3>
          </div>
          <div className='cocktail-list'>
            {cockTailList.map((item)=>{
                const {id, category, glass, image, name} = item;
                return (
                    <article key={id}>
                        <div className="image">
                        <img src={image} alt=""/>
                        </div>
                      <div className="description">
                          <h2>{name}</h2>
                          <div className="sub">
                            <p>Category :</p> <p>{category}</p>
                          </div>
                          <div className="sub">
                            <p>Serving glass :</p> <p>{glass}</p>
                          </div>
                          
                          <Link to={`/singleCocktail/${id}`}>
                            <button>
                              More Details 
                            </button>
                          </Link>
                        
                      </div>

                </article>
                )
                
            })}
          </div>
         
       </section>
     );
}
 
export default CockTailList;