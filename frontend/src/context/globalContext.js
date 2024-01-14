import React, { useContext, useState } from "react"
import axios from 'axios'

// const BASE_URL = "http://localhost:3000/api/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    // const [incomes, setIncomes] = useState([])
    // const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    // const [userData, setUserData] = useState({})

    // const registerUser = async (user) => {
    //     const response = await axios.post('api/register-user', user)
    //         .catch((err) => {
    //             // toast.error("INVALID");
    //             // setError(err.response.data.message)
    //         })
    //     // toast.success("VALID");

    // }
    const loginUser = async (user) => {
        const response = await axios.post('api/signin-user', user)
            .catch((err) => {
                // toast.error("INVALID");
                // setError(err.response.data.message)
            })
        // toast.success("VALID");
    }

    const registerUser = async (user) => {
        const response = await axios.post('api/register-user', user, { headers: { "Content-type": "application/json" } })
            .catch((err) => {
                setError(err.response.data.message)
            })
    }
    return (
        <GlobalContext.Provider value={{
            registerUser,
            loginUser,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
