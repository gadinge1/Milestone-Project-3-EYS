import { createContext, useState, useEffect } from "react";


export const CurrentAccount = createContext()

function CurrentAccountProvider({ children }) {

    const [CurrentAccount, setCurrentAccount] = useState(null)

    useEffect(() => {

        const getLoggedInAccount = async () => {
            let response = await fetch('http://localhost:3000/authentication/profile', {
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentAccount(account)
        }
        getLoggedInAccount()
    }, [])

    return (
        <CurrentAccount.Provider value={{ CurrentAccount, setCurrentAccount }}>
            {children}
        </CurrentAccount.Provider>
    )
}

export default CurrentAccountProvider