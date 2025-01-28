import { useContext } from 'react';
import { themeContext } from '../Context/themeContext';

export function useTheme () {
    const theme = useContext(themeContext); 
    if(theme === undefined) {
        throw new Error('eror to usecontext')
    }
    return theme;
}
