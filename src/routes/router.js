import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Seats } from "../pages/seats"
import { Layout } from "../components/Layout"
import { Main } from '../pages/main/index.jsx'
import { Category } from "../pages/category"
import { Single } from "../pages/Single"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/Category/:id/:id" element={<Category />} />
                    <Route path="/Single/:id" element={<Single />} />
                </Route>
                <Route path="/hall" element={<Seats />} />
            </Routes>
        </BrowserRouter>
    )
}