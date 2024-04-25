import { Outlet } from "react-router-dom"
import { Loading } from "../loading"

export const Layout = () => {
    return(
        <>
            <Loading/>
            <Outlet/>
        </>
    )
}