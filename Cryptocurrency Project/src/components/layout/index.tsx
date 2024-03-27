import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Loading } from "../loading"

export const Layout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Loading/>
        </>
    )
}