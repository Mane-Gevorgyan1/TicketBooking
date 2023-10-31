import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout"
import { Main } from '../pages/main/index.jsx'
import { Category } from "../pages/category"
import { Single } from "../pages/Single"
import { Page404 } from "../pages/404"
import { PrivatePolice } from "../components/privatePolice"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/Category/:id/:id" element={<Category />} />
                    <Route path="/Single/:id" element={<Single />} />
                    <Route path="/PrivacyPolicy" element={<PrivatePolice />} />

                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
// PrivatePolice