import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../components/context';
const singleCockTailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCockTail = () => {
    const [singleCockTail, setSingleCockTail] = useState({})
    const {isLoading, setIsLoading} = useGlobalContext();
     const {id} = useParams()

    
    useEffect(()=>{
        const fetchSingleCockTail = async () =>{
            setIsLoading(true)
            try {
                const response = await fetch(`${singleCockTailURL}${id}`)
                const data = await response.json()
               if (data.drinks) {
                const {
                    strCategory:category, 
                    strGlass :glass, 
                    strDrinkThumb : image, 
                    strDrink : name,
                    strInstructions : instructions,
                    strIngredient1 : ingredient1,
                    strIngredient2 : ingredient2,
                    strIngredient3 : ingredient3,
                    strIngredient4 : ingredient4,
                } =data.drinks[0]
    
                const ingredients = [ingredient1, ingredient2, ingredient3, ingredient4]
                .filter(ingredients => ingredients)
                const newSingleCockTail = {name, glass, image, category, instructions, ingredients}
                console.log(newSingleCockTail);
                setSingleCockTail(newSingleCockTail);
                setIsLoading(false)
               } else {
                
               }
            } catch (error) {
                setSingleCockTail({})
                setIsLoading(false)
            }
        }
        fetchSingleCockTail()
    
    },[id])
    
    
    if(isLoading){
        return(
            <h3>Loading ...</h3>
        )
    }
    // if(singleCockTail === null){
    //     <h3>You just hit a dead end</h3>
    // }

    const {name, glass, image, category, instructions,ingredients} =singleCockTail
    console.log(ingredients);
    return ( 
        
    <main className='single'>
        <h3>{name}</h3>
        <div className="single-center">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="description">
                <div className='sub'>
                    <span>Category:</span>
                    <span>{category}</span>
                </div>
                <div className='sub'>
                    <span>glass:</span>
                    <span>{glass}</span>
                </div>
                <div className='sub'>
                    <span>instructions:</span>
                    <span>{instructions}</span>
                </div>
                <div>{ingredients.map((item, index)=>{
                     console.log(`Ingredient ${index}:`, item);
                     return item ? <span key={index}> {item}</span> : null
                })}</div>
            </div>
        </div>
        <div className='home-btn'>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    </main> );
}

 
export default SingleCockTail;