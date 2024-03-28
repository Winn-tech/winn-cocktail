import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../components/context';
import SideBar from '../components/sideBar';
import Loading from '../components/loading';
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
                    strIngredient1,
                    strIngredient2 ,
                    strIngredient3 
                } =data.drinks[0]
    
                const ingredients = [strIngredient1, strIngredient2, strIngredient3]
                .filter(ingredients => ingredients)
                const newSingleCockTail = {
                    name, 
                    glass, 
                    image, 
                    category, 
                    instructions, 
                    // ingredients
                }
                console.log(newSingleCockTail);
                setSingleCockTail(newSingleCockTail);
                setIsLoading(false)
               } else {
                setSingleCockTail({})
               }
            } catch (error) {
                // setSingleCockTail({})
                setIsLoading(false)
            }
        }    
        fetchSingleCockTail()
    
    },[id])
    
    
    if(isLoading){
        return(
           <Loading/>
        )
    }
    

    const {name, glass, image, category, instructions,ingredients} =singleCockTail
    console.log(ingredients);
    return ( 

        
    <>
        <SideBar/>
        <div className="single">
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
                {/* <div>{ingredients.map((item, index)=>{
                    //  console.log(`Ingredient ${index}:`, item);
                     return item ? <span key={index}> {item}</span> : null
                })}</div> */}
                <div>
                    {ingredients? ingredients.map((item, index)=>{
                        return (
                            <span key={index}>item</span>
                        )
                    }): null}
                </div>
            </div>
        </div>
        <div className='home-btn'>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
        </div>
    </> );
}

 
export default SingleCockTail;