"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type {ReactNode} from "react";

interface ThemeProviderProps{
    //accepts any rendering value eg string
    children:ReactNode;

}

export default function ThemeProvider({
    children,
}:ThemeProviderProps){
    return(
        <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
          disableTransitionOnChange
        >
            {children}

        </NextThemesProvider>
        
    )
}