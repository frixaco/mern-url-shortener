import "materialize-css"
import React from "react"
import { useRoutes } from "./routes"
import { useAuth } from "./hooks/authHook"
import { Navbar } from "./components/Navbar"
import { Loader } from "./components/Loader"
import { BrowserRouter } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"

function App() {
    const { token, login, logout, userID, ready } = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider
            value={{ token, login, logout, userID, isAuthenticated }}>
            <BrowserRouter>
                {isAuthenticated && <Navbar />}
                <div className="container">{routes}</div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
