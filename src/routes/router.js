import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Seats } from "../pages/seats"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Seats />} />
            </Routes>
        </BrowserRouter>
    )
}