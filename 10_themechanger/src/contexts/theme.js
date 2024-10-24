import { createContext, useContext } from "react";

export const ThemeContext = createContext({  //we can give default methods and variable in createcontext
    themeMode: "light",            //variable            hum kkuch bhi name de skhte hai
    darkTheme: () => {},            //method
    lightTheme: () => {},             //method
})

export const ThemeProvider = ThemeContext.Provider          //yeh sidha .provider ko export kr de raha hai 

export default function useTheme(){                 // this is custom hook which set useContext with themeContext . themeContext se value chaiye toh usetheme ke use aajayegi
    return useContext(ThemeContext)
}