import React ,{createContext,useState, useEffect} from "react";
import { fetchDataFromApi } from "../utils/api";



export const Context=createContext()


export const AppContext=(props)=>{

    const [loading,setloading]=useState(false);
    const [searchResults,setsearchResults]=useState(false);

    const [selectCategories,setselectCategories]=useState("New");


    const [mobileMenu,setmobileMenu]=useState(false);


    const fetchSelectedCategoryData=(query)=>{
        setloading(true)
        fetchDataFromApi(`search/?=${query}`).then((res)=>{
            console.log(res)
            setsearchResults(res)
            
            setloading(false)
        })
        }


        useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)

    },[fetchSelectedCategoryData])



return(
    <Context.Provider value={{loading,setloading,
        searchResults,
        setsearchResults,
        selectCategories,
        setselectCategories,
        mobileMenu,
        setmobileMenu,

    }}>
{props.children}

    </Context.Provider>
);

};

