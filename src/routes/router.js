import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Seats } from "../pages/seats"
import { Layout } from "../components/Layout"
import { Main } from '../pages/main/index.jsx'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                </Route>
                <Route path="/hall" element={<Seats />} />
            </Routes>
        </BrowserRouter>
    )
}