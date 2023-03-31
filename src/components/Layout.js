import { useContext } from "react";
import {ThemeContext, ThemeProvider} from './contexts/ThemeContexts'


function Layout({startingTheme,children}){
    return(
        <ThemeProvider startingTheme = {startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
            </ThemeProvider> 
    )
}

function LayoutNoThemeProvider(
    {startingTheme, children}){

        const {theme} =useContext(ThemeContext)
    return(
                <div 
        className={
            theme === "light" ? "container-fluid light" :
                "container-fluid dark"
        }>
            {children}
        </div>
        
    )
}
export default Layout