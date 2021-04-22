import React from "react"

const UserContext = React.createContext({name:"Pranav", body:"Hello this is Pranav"})

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext