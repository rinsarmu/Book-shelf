//Themes data
// Auth
// LOcation

//prop driving

//Steps :
//1. Create context

//2. Wrap around component Treee

// 3. Place the vaue that is supposed to passed down

//4. Read the value pf the context

import React, { useState,useEffect, createContext } from 'react'

const Theme = createContext();

export const Provider =({children}) =>{

    const [theme, setTheme] = useState(localStorage.getItem("theme" || 'light'))

    useEffect(()=>{

        localStorage.setItem('theme', theme)


        //runs on every render
        //When component is being mounted
    }, [theme])




    return (

        <Theme.Provider>{children} </Theme.Provider>

)

}


