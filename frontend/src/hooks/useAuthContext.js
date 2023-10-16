import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context){
        throw Error('AuthContextProvider must be used inside a AuthContextProvider');
    };

    return context;
}