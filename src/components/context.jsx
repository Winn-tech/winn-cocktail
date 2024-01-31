import React, { createContext, useContext, useEffect, useState } from 'react';

const searchByNameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const winnContext = createContext();

const AppProvider = ({ children }) => {
    const [cockTailList, setCockTailList] = useState([]);
    const [searchValue, setSearchValue] = useState('a');
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isBackToTopOpen, setIsBackToTopOpen] = useState(false)

    const openSidebar =()=>{
        setIsSidebarOpen(true)
    }
    function closeSidebar(params) {
        setIsSidebarOpen(false)
    }
    const scroll =()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 700) {
                setIsBackToTopOpen(true)
            }
            else(
                setIsBackToTopOpen(false)
            )
        })
    }
    const scrollToTop =()=>{
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         })
    }
    useEffect(()=>{
       scroll()
    }, [])

    const fetchCockTails = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${searchByNameUrl}${searchValue}`);
            const data = await response.json();
            if (data.drinks) {
                const modifiedCockTail = data.drinks.map((item) => {
                    const { idDrink, strCategory, strGlass, strDrinkThumb, strDrink } = item;
                    return { id: idDrink, category: strCategory, glass: strGlass, image: strDrinkThumb, name: strDrink };
                });
                setCockTailList(modifiedCockTail);
                setIsLoading(false)
            }
            else{
                setCockTailList([])
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCockTails();
    }, [searchValue]); 

    const contextValue = {
        setIsLoading,
        cockTailList,
        searchValue,
        setSearchValue,
        isLoading,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isBackToTopOpen,
        scrollToTop

    };

    return <winnContext.Provider value={contextValue}>{children}</winnContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(winnContext);
};

export { AppProvider, useGlobalContext };
