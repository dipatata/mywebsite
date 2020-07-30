import actionTypes from './actionTypes'
import localStorageVars from './localStorageVars';
import i18n from '../i18n';

const initialState = {
    language : localStorage.getItem(localStorageVars.language) === localStorageVars.esp? 
        localStorageVars.esp : localStorageVars.eng
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.TOGGLE_ENG ) {
        localStorage.setItem(localStorageVars.language, localStorageVars.eng);
        i18n.changeLanguage('en')
        return {
            ...state,
            language : localStorageVars.eng
        }
    } 
    if (action.type === actionTypes.TOGGLE_ESP ) {
        localStorage.setItem(localStorageVars.language, localStorageVars.esp);
        i18n.changeLanguage('es');
        return {
            ...state,
            language : localStorageVars.esp
        }
    } 
    return state;
}

export default reducer;