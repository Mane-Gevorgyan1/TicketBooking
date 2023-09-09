import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Seats } from "../pages/seats"
import ProductDisplay from "../pages/checkout/index.jsx"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Seats />} />
                <Route path="/checkout" element={<ProductDisplay />} />
            </Routes>
        </BrowserRouter>
    )
}