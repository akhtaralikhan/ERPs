import { createContext,useState } from "react";
import {groceryData} from '../assets/data'
export const storeContext = createContext(null)

const StoreContextProvider = ({children}) => {
    const [cardItem,setCardItem] = useState({});
    
    const addToCart = (itemId) => {
        if(!cardItem[itemId]) {
            setCardItem((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCardItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCardItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cardItem) {
            if(cardItem[item] > 0){
                let itemInfo = groceryData.find((data)=>data.id === Number(item));
               if(itemInfo){
                totalAmount += itemInfo.price *cardItem[item]    
               } 
            }
        }
        return totalAmount
    }

    const contextValue = {
        addToCart,
        removeFromCart,
        cardItem,
        getTotalAmount,
    }

    return(
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreContextProvider;