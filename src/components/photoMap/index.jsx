import './style.css'
import { useEffect, useState } from 'react'
import { GetSeat } from '../../services/action/ticket_action'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveTicketsAction, SetTicketsAction } from '../../services/action/action'

const PhotoCoordinatesByColor = ({ secion }) => {
    const dispatch = useDispatch()
    const [coordinatesState, setCoordinatesState] = useState([])
    const [activeTicket, setActiveTicket] = useState({})
    const [position, setPosition] = useState({ x: '', y: '' })
    const [showModal, setShowModal] = useState(false)
    const [activeButton, setActiveButton] = useState(null)
    const ticket = useSelector((st) => st.Ticket_reducer)
    const tickets = useSelector((st) => st.tiketsForBuy)

    const [seansArr, setSeansArr] = useState([
        {
            id: 1, price: '', section: 1
        },
        {
            id: 2, price: '', section: 1
        },
        {
            id: 3, price: '', section: 1
        },
        {
            id: 4, price: '', section: 1
        },
        {
            id: 5, price: '', section: 1
        },
        {
            id: 6, price: '', section: 1
        },
        {
            id: 7, price: '', section: 1
        },
        {
            id: 8, price: '', section: 1,
        },
        {
            id: 9, price: '', section: 2
        },
        {
            id: 10, price: '', section: 2
        },
        {
            id: 11, price: '', section: 2
        },
        {
            id: 12, price: '', section: 2
        },
        {
            id: 13, price: '', section: 2
        },
        {
            id: 14, price: '', section: 2
        },
        {
            id: 15, price: '', section: 2
        },
        {
            id: 16, price: '', section: 2
        },
        {
            id: 17, price: '', section: 2
        },
        {
            id: 18, price: '', section: 3
        },
        {
            id: 19, price: '', section: 3
        },
        {
            id: 20, price: '', section: 3
        },
        {
            id: 21, price: '', section: 3
        },
        {
            id: 22, price: '', section: 3
        },
        {
            id: 23, price: '', section: 3
        },
        {
            id: 24, price: '', section: 3
        },
        {
            id: 25, price: '', section: 3
        },
        {
            id: 26, price: '', section: 3
        },
        {
            id: 27, price: '', section: 4
        },
        {
            id: 28, price: '', section: 4
        },
        {
            id: 29, price: '', section: 4
        },
        {
            id: 30, price: '', section: 4
        },
        {
            id: 31, price: '', section: 4
        },
        {
            id: 32, price: '', section: 4
        },
        {
            id: 33, price: '', section: 4
        },
        {
            id: 34, price: '', section: 4
        },
        {
            id: 35, price: '', section: 4
        },
        {
            id: 36, price: '', section: 5
        },
        {
            id: 37, price: '', section: 5
        },
        {
            id: 38, price: '', section: 5
        },
        {
            id: 39, price: '', section: 5
        },
        {
            id: 40, price: '', section: 5
        },
        {
            id: 41, price: '', section: 5
        },
        {
            id: 42, price: '', section: 5
        },
        {
            id: 43, price: '', section: 5
        },
        {
            id: 44, price: '', section: 1
        },
        {
            id: 45, price: '', section: 1
        },
        {
            id: 46, price: '', section: 1
        },
        {
            id: 47, price: '', section: 1
        },
        {
            id: 48, price: '', section: 1
        },
        {
            id: 49, price: '', section: 1
        },
        {
            id: 50, price: '', section: 1
        },
        {
            id: 51, price: '', section: 1
        },
        {
            id: 52, price: '', section: 1
        },
        {
            id: 53, price: '', section: 2
        },
        {
            id: 54, price: '', section: 2
        },
        {
            id: 55, price: '', section: 2
        },
        {
            id: 56, price: '', section: 2
        },
        {
            id: 57, price: '', section: 2
        },
        {
            id: 58, price: '', section: 2
        },
        {
            id: 59, price: '', section: 2
        },
        {
            id: 60, price: '', section: 2
        },
        {
            id: 61, price: '', section: 2
        },
        {
            id: 62, price: '', section: 3
        },
        {
            id: 63, price: '', section: 3
        },
        {
            id: 64, price: '', section: 3
        },
        {
            id: 65, price: '', section: 3
        },
        {
            id: 66, price: '', section: 3
        },
        {
            id: 67, price: '', section: 3
        },
        {
            id: 68, price: '', section: 3
        },
        {
            id: 69, price: '', section: 3
        },
        {
            id: 70, price: '', section: 3
        },
        {
            id: 71, price: '', section: 4
        },
        {
            id: 72, price: '', section: 4
        },
        {
            id: 73, price: '', section: 4
        },
        {
            id: 74, price: '', section: 4
        },
        {
            id: 75, price: '', section: 4
        },
        {
            id: 76, price: '', section: 4
        },
        {
            id: 77, price: '', section: 4
        },
        {
            id: 78, price: '', section: 4
        },
        {
            id: 79, price: '', section: 4
        },
        {
            id: 80, price: '', section: 5
        },
        {
            id: 81, price: '', section: 5
        },
        {
            id: 82, price: '', section: 5
        },
        {
            id: 83, price: '', section: 5
        },
        {
            id: 84, price: '', section: 5
        },
        {
            id: 85, price: '', section: 5
        },
        {
            id: 86, price: '', section: 5
        },
        {
            id: 87, price: '', section: 5
        },
        {
            id: 88, price: '', section: 5
        },
        {
            id: 89, price: '', section: 1
        },
        {
            id: 90, price: '', section: 1
        },
        {
            id: 91, price: '', section: 1
        },
        {
            id: 92, price: '', section: 1
        },
        {
            id: 93, price: '', section: 1
        },
        {
            id: 94, price: '', section: 1
        },
        {
            id: 95, price: '', section: 1
        },
        {
            id: 96, price: '', section: 1
        },
        {
            id: 97, price: '', section: 1
        },
        {
            id: 98, price: '', section: 1
        },
        {
            id: 99, price: '', section: 2
        },
        {
            id: 100, price: '', section: 2
        },
        {
            id: 101, price: '', section: 2
        },
        {
            id: 102, price: '', section: 2
        },
        {
            id: 103, price: '', section: 2
        },
        {
            id: 104, price: '', section: 2
        },
        {
            id: 105, price: '', section: 2
        },
        {
            id: 106, price: '', section: 2
        },
        {
            id: 107, price: '', section: 2
        },
        {
            id: 108, price: '', section: 3
        },
        {
            id: 109, price: '', section: 3
        },
        {
            id: 110, price: '', section: 3
        },
        {
            id: 111, price: '', section: 3
        },
        {
            id: 112, price: '', section: 3
        },
        {
            id: 113, price: '', section: 3
        },
        {
            id: 114, price: '', section: 3
        },
        {
            id: 115, price: '', section: 3
        },
        {
            id: 116, price: '', section: 3
        },
        {
            id: 117, price: '', section: 4
        },
        {
            id: 118, price: '', section: 4
        },
        {
            id: 119, price: '', section: 4
        },
        {
            id: 120, price: '', section: 4
        },
        {
            id: 121, price: '', section: 4
        },
        {
            id: 122, price: '', section: 4
        },
        {
            id: 123, price: '', section: 4
        },
        {
            id: 124, price: '', section: 4
        },
        {
            id: 125, price: '', section: 4
        },
        {
            id: 126, price: '', section: 5
        },
        {
            id: 127, price: '', section: 5
        },
        {
            id: 128, price: '', section: 5
        },
        {
            id: 129, price: '', section: 5
        },
        {
            id: 130, price: '', section: 5
        },
        {
            id: 131, price: '', section: 5
        },
        {
            id: 132, price: '', section: 5
        },
        {
            id: 133, price: '', section: 5
        },
        {
            id: 134, price: '', section: 5
        },
        {
            id: 135, price: '', section: 5
        },
        {
            id: 136, price: '', section: 1
        },
        {
            id: 137, price: '', section: 1
        },
        {
            id: 138, price: '', section: 1
        },
        {
            id: 139, price: '', section: 1
        },
        {
            id: 140, price: '', section: 1
        },
        {
            id: 141, price: '', section: 1
        },
        {
            id: 142, price: '', section: 1
        },
        {
            id: 143, price: '', section: 1
        },
        {
            id: 144, price: '', section: 1
        },
        {
            id: 145, price: '', section: 1
        },
        {
            id: 146, price: '', section: 2
        },
        {
            id: 147, price: '', section: 2
        },
        {
            id: 148, price: '', section: 2
        },
        {
            id: 149, price: '', section: 2
        },
        {
            id: 150, price: '', section: 2
        },
        {
            id: 151, price: '', section: 2
        },
        {
            id: 152, price: '', section: 2
        },
        {
            id: 153, price: '', section: 2
        },
        {
            id: 154, price: '', section: 2
        },
        {
            id: 155, price: '', section: 2
        },
        {
            id: 156, price: '', section: 3
        },
        {
            id: 157, price: '', section: 3
        },
        {
            id: 158, price: '', section: 3
        },
        {
            id: 159, price: '', section: 3
        },
        {
            id: 160, price: '', section: 3
        },
        {
            id: 161, price: '', section: 3
        },
        {
            id: 162, price: '', section: 3
        },
        {
            id: 163, price: '', section: 3
        },
        {
            id: 164, price: '', section: 3
        },
        {
            id: 165, price: '', section: 4
        },
        {
            id: 166, price: '', section: 4
        },
        {
            id: 167, price: '', section: 4
        },
        {
            id: 168, price: '', section: 4
        },
        {
            id: 169, price: '', section: 4
        },
        {
            id: 170, price: '', section: 4
        },
        {
            id: 171, price: '', section: 4
        },
        {
            id: 172, price: '', section: 4
        },
        {
            id: 173, price: '', section: 4
        },
        {
            id: 174, price: '', section: 5
        },
        {
            id: 175, price: '', section: 5
        },
        {
            id: 176, price: '', section: 5
        },
        {
            id: 177, price: '', section: 5
        },
        {
            id: 178, price: '', section: 5
        },
        {
            id: 179, price: '', section: 5
        },
        {
            id: 180, price: '', section: 5
        },
        {
            id: 181, price: '', section: 5
        },
        {
            id: 182, price: '', section: 5
        },
        {
            id: 183, price: '', section: 5
        },
        {
            id: 184, price: '', section: 1
        },
        {
            id: 185, price: '', section: 1
        },
        {
            id: 186, price: '', section: 1
        },
        {
            id: 187, price: '', section: 1
        },
        {
            id: 188, price: '', section: 1
        },
        {
            id: 189, price: '', section: 1
        },
        {
            id: 190, price: '', section: 1
        },
        {
            id: 191, price: '', section: 1
        },
        {
            id: 192, price: '', section: 1
        },
        {
            id: 193, price: '', section: 1
        },
        {
            id: 194, price: '', section: 1
        },
        {
            id: 195, price: '', section: 2
        },
        {
            id: 196, price: '', section: 2
        },
        {
            id: 197, price: '', section: 2
        },
        {
            id: 198, price: '', section: 2
        },
        {
            id: 199, price: '', section: 2
        },
        {
            id: 200, price: '', section: 2
        },
        {
            id: 201, price: '', section: 2
        },
        {
            id: 202, price: '', section: 2
        },
        {
            id: 203, price: '', section: 2
        },
        {
            id: 204, price: '', section: 2
        },
        {
            id: 205, price: '', section: 3
        },
        {
            id: 206, price: '', section: 3
        },
        {
            id: 207, price: '', section: 3
        },
        {
            id: 208, price: '', section: 3
        },
        {
            id: 209, price: '', section: 3
        },
        {
            id: 210, price: '', section: 3
        },
        {
            id: 211, price: '', section: 3
        },
        {
            id: 212, price: '', section: 3
        },
        {
            id: 213, price: '', section: 3
        },
        {
            id: 214, price: '', section: 3
        },
        {
            id: 215, price: '', section: 4
        },
        {
            id: 216, price: '', section: 4
        },
        {
            id: 217, price: '', section: 4
        },
        {
            id: 218, price: '', section: 4
        },
        {
            id: 219, price: '', section: 4
        },
        {
            id: 220, price: '', section: 4
        },
        {
            id: 221, price: '', section: 4
        },
        {
            id: 222, price: '', section: 4
        },
        {
            id: 223, price: '', section: 4
        },
        {
            id: 224, price: '', section: 4
        },
        {
            id: 225, price: '', section: 5
        },
        {
            id: 226, price: '', section: 5
        },
        {
            id: 227, price: '', section: 5
        },
        {
            id: 228, price: '', section: 5
        },
        {
            id: 229, price: '', section: 5
        },
        {
            id: 230, price: '', section: 5
        },
        {
            id: 231, price: '', section: 5
        },
        {
            id: 232, price: '', section: 5
        },
        {
            id: 233, price: '', section: 5
        },
        {
            id: 234, price: '', section: 5
        },
        {
            id: 235, price: '', section: 5
        },
        {
            id: 236, price: '', section: 1
        },
        {
            id: 237, price: '', section: 1
        },
        {
            id: 238, price: '', section: 1
        },
        {
            id: 239, price: '', section: 1
        },
        {
            id: 240, price: '', section: 1
        },
        {
            id: 241, price: '', section: 1
        },
        {
            id: 242, price: '', section: 1
        },
        {
            id: 243, price: '', section: 1
        },
        {
            id: 244, price: '', section: 1
        },
        {
            id: 245, price: '', section: 1
        },
        {
            id: 246, price: '', section: 1
        },
        {
            id: 247, price: '', section: 2
        },
        {
            id: 248, price: '', section: 2
        },
        {
            id: 249, price: '', section: 2
        },
        {
            id: 250, price: '', section: 2
        },
        {
            id: 251, price: '', section: 2
        },
        {
            id: 252, price: '', section: 2
        },
        {
            id: 253, price: '', section: 2
        },
        {
            id: 254, price: '', section: 2
        },
        {
            id: 255, price: '', section: 2
        },
        {
            id: 256, price: '', section: 2
        },
        {
            id: 257, price: '', section: 3
        },
        {
            id: 258, price: '', section: 3
        },
        {
            id: 259, price: '', section: 3
        },
        {
            id: 260, price: '', section: 3
        },
        {
            id: 261, price: '', section: 3
        },
        {
            id: 262, price: '', section: 3
        },
        {
            id: 263, price: '', section: 3
        },
        {
            id: 264, price: '', section: 3
        },
        {
            id: 265, price: '', section: 3
        },
        {
            id: 266, price: '', section: 3
        },
        {
            id: 267, price: '', section: 4
        },
        {
            id: 268, price: '', section: 4
        },
        {
            id: 269, price: '', section: 4
        },
        {
            id: 270, price: '', section: 4
        },
        {
            id: 271, price: '', section: 4
        },
        {
            id: 272, price: '', section: 4
        },
        {
            id: 273, price: '', section: 4
        },
        {
            id: 274, price: '', section: 4
        },
        {
            id: 275, price: '', section: 4
        },
        {
            id: 276, price: '', section: 4
        },
        {
            id: 277, price: '', section: 5
        },
        {
            id: 278, price: '', section: 5
        },
        {
            id: 279, price: '', section: 5
        },
        {
            id: 280, price: '', section: 5
        },
        {
            id: 281, price: '', section: 5
        },
        {
            id: 282, price: '', section: 5
        },
        {
            id: 283, price: '', section: 5
        },
        {
            id: 284, price: '', section: 5
        },
        {
            id: 285, price: '', section: 5
        },
        {
            id: 286, price: '', section: 5
        },
        {
            id: 287, price: '', section: 5
        },
        {
            id: 288, price: '', section: 1
        },
        {
            id: 289, price: '', section: 1
        },
        {
            id: 290, price: '', section: 1
        },
        {
            id: 291, price: '', section: 1
        },
        {
            id: 292, price: '', section: 1
        },
        {
            id: 293, price: '', section: 1
        },
        {
            id: 294, price: '', section: 1
        },
        {
            id: 295, price: '', section: 1
        },
        {
            id: 296, price: '', section: 1
        },
        {
            id: 297, price: '', section: 1
        },
        {
            id: 298, price: '', section: 1
        },
        {
            id: 299, price: '', section: 2
        },
        {
            id: 300, price: '', section: 2
        },
        {
            id: 301, price: '', section: 2
        },
        {
            id: 302, price: '', section: 2
        },
        {
            id: 303, price: '', section: 2
        },
        {
            id: 304, price: '', section: 2
        },
        {
            id: 305, price: '', section: 2
        },
        {
            id: 306, price: '', section: 2
        },
        {
            id: 307, price: '', section: 2
        },
        {
            id: 308, price: '', section: 2
        },
        {
            id: 309, price: '', section: 2
        },
        {
            id: 310, price: '', section: 3
        },
        {
            id: 311, price: '', section: 3
        },
        {
            id: 312, price: '', section: 3
        },
        {
            id: 313, price: '', section: 3
        },
        {
            id: 314, price: '', section: 3
        },
        {
            id: 315, price: '', section: 3
        },
        {
            id: 316, price: '', section: 3
        },
        {
            id: 317, price: '', section: 3
        },
        {
            id: 318, price: '', section: 3
        },
        {
            id: 319, price: '', section: 3
        },
        {
            id: 320, price: '', section: 4
        },
        {
            id: 321, price: '', section: 4
        },
        {
            id: 322, price: '', section: 4
        },
        {
            id: 323, price: '', section: 4
        },
        {
            id: 324, price: '', section: 4
        },
        {
            id: 325, price: '', section: 4
        },
        {
            id: 326, price: '', section: 4
        },
        {
            id: 327, price: '', section: 4
        },
        {
            id: 328, price: '', section: 4
        },
        {
            id: 329, price: '', section: 4
        },
        {
            id: 330, price: '', section: 5
        },
        {
            id: 331, price: '', section: 5
        },
        {
            id: 332, price: '', section: 5
        },
        {
            id: 333, price: '', section: 5
        },
        {
            id: 334, price: '', section: 5
        },
        {
            id: 335, price: '', section: 5
        },
        {
            id: 336, price: '', section: 5
        },
        {
            id: 337, price: '', section: 5
        },
        {
            id: 338, price: '', section: 5
        },
        {
            id: 339, price: '', section: 5
        },
        {
            id: 340, price: '', section: 5
        },
        {
            id: 341, price: '', section: 1
        },
        {
            id: 342, price: '', section: 1
        },
        {
            id: 343, price: '', section: 1
        },
        {
            id: 344, price: '', section: 1
        },
        {
            id: 345, price: '', section: 1
        },
        {
            id: 346, price: '', section: 1
        },
        {
            id: 347, price: '', section: 1
        },
        {
            id: 348, price: '', section: 1
        },
        {
            id: 349, price: '', section: 1
        },
        {
            id: 350, price: '', section: 1
        },
        {
            id: 351, price: '', section: 1
        },
        {
            id: 352, price: '', section: 1
        },
        {
            id: 353, price: '', section: 2
        },
        {
            id: 354, price: '', section: 2
        },
        {
            id: 355, price: '', section: 2
        },
        {
            id: 356, price: '', section: 2
        },
        {
            id: 357, price: '', section: 2
        },
        {
            id: 358, price: '', section: 2
        },
        {
            id: 359, price: '', section: 2
        },
        {
            id: 360, price: '', section: 2
        },
        {
            id: 361, price: '', section: 2
        },
        {
            id: 362, price: '', section: 2
        },
        {
            id: 363, price: '', section: 2
        },
        {
            id: 364, price: '', section: 3
        },
        {
            id: 365, price: '', section: 3
        },
        {
            id: 366, price: '', section: 3
        },
        {
            id: 367, price: '', section: 3
        },
        {
            id: 368, price: '', section: 3
        },
        {
            id: 369, price: '', section: 3
        },
        {
            id: 370, price: '', section: 3
        },
        {
            id: 371, price: '', section: 3
        },
        {
            id: 372, price: '', section: 3
        },
        {
            id: 373, price: '', section: 3
        },
        {
            id: 374, price: '', section: 3
        },
        {
            id: 375, price: '', section: 4
        },
        {
            id: 376, price: '', section: 4
        },
        {
            id: 377, price: '', section: 4
        },
        {
            id: 378, price: '', section: 4
        },
        {
            id: 379, price: '', section: 4
        },
        {
            id: 380, price: '', section: 4
        },
        {
            id: 381, price: '', section: 4
        },
        {
            id: 382, price: '', section: 4
        },
        {
            id: 383, price: '', section: 4
        },
        {
            id: 384, price: '', section: 4
        },
        {
            id: 385, price: '', section: 4
        },
        {
            id: 386, price: '', section: 5
        },
        {
            id: 387, price: '', section: 5
        },
        {
            id: 388, price: '', section: 5
        },
        {
            id: 389, price: '', section: 5
        },
        {
            id: 390, price: '', section: 5
        },
        {
            id: 391, price: '', section: 5
        },
        {
            id: 392, price: '', section: 5
        },
        {
            id: 393, price: '', section: 5
        },
        {
            id: 394, price: '', section: 5
        },
        {
            id: 395, price: '', section: 5
        },
        {
            id: 396, price: '', section: 5
        },
        {
            id: 397, price: '', section: 5
        },
        {
            id: 398, price: '', section: 1
        },
        {
            id: 399, price: '', section: 1
        },
        {
            id: 400, price: '', section: 1
        },
        {
            id: 401, price: '', section: 1
        },
        {
            id: 402, price: '', section: 1
        },
        {
            id: 403, price: '', section: 1
        },
        {
            id: 404, price: '', section: 1
        },
        {
            id: 405, price: '', section: 1
        },
        {
            id: 406, price: '', section: 1
        },
        {
            id: 407, price: '', section: 1
        },
        {
            id: 408, price: '', section: 1
        },
        {
            id: 409, price: '', section: 1
        },
        {
            id: 410, price: '', section: 2
        },
        {
            id: 411, price: '', section: 2
        },
        {
            id: 412, price: '', section: 2
        },
        {
            id: 413, price: '', section: 2
        },
        {
            id: 414, price: '', section: 2
        },
        {
            id: 415, price: '', section: 2
        },
        {
            id: 416, price: '', section: 2
        },
        {
            id: 417, price: '', section: 2
        },
        {
            id: 418, price: '', section: 2
        },
        {
            id: 419, price: '', section: 2
        },
        {
            id: 420, price: '', section: 2
        },
        {
            id: 421, price: '', section: 3
        },
        {
            id: 422, price: '', section: 3
        },
        {
            id: 423, price: '', section: 3
        },
        {
            id: 424, price: '', section: 3
        },
        {
            id: 425, price: '', section: 3
        },
        {
            id: 426, price: '', section: 3
        },
        {
            id: 427, price: '', section: 3
        },
        {
            id: 428, price: '', section: 3
        },
        {
            id: 429, price: '', section: 3
        },
        {
            id: 430, price: '', section: 3
        },
        {
            id: 431, price: '', section: 3
        },
        {
            id: 432, price: '', section: 4
        },
        {
            id: 433, price: '', section: 4
        },
        {
            id: 434, price: '', section: 4
        },
        {
            id: 435, price: '', section: 4
        },
        {
            id: 436, price: '', section: 4
        },
        {
            id: 437, price: '', section: 4
        },
        {
            id: 438, price: '', section: 4
        },
        {
            id: 439, price: '', section: 4
        },
        {
            id: 440, price: '', section: 4
        },
        {
            id: 441, price: '', section: 4
        },
        {
            id: 442, price: '', section: 4
        },
        {
            id: 443, price: '', section: 5
        },
        {
            id: 444, price: '', section: 5
        },
        {
            id: 445, price: '', section: 5
        },
        {
            id: 446, price: '', section: 5
        },
        {
            id: 447, price: '', section: 5
        },
        {
            id: 448, price: '', section: 5
        },
        {
            id: 449, price: '', section: 5
        },
        {
            id: 450, price: '', section: 5
        },
        {
            id: 451, price: '', section: 5
        },
        {
            id: 452, price: '', section: 5
        },
        {
            id: 453, price: '', section: 5
        },
        {
            id: 454, price: '', section: 5
        },
        {
            id: 455, price: '', section: 1
        },
        {
            id: 456, price: '', section: 1
        },
        {
            id: 457, price: '', section: 1
        },
        {
            id: 458, price: '', section: 1
        },
        {
            id: 459, price: '', section: 1
        },
        {
            id: 460, price: '', section: 1
        },
        {
            id: 461, price: '', section: 1
        },
        {
            id: 462, price: '', section: 1
        },
        {
            id: 463, price: '', section: 1
        },
        {
            id: 464, price: '', section: 1
        },
        {
            id: 465, price: '', section: 1
        },
        {
            id: 466, price: '', section: 1
        },
        {
            id: 467, price: '', section: 2
        },
        {
            id: 468, price: '', section: 2
        },
        {
            id: 469, price: '', section: 2
        },
        {
            id: 470, price: '', section: 2
        },
        {
            id: 471, price: '', section: 2
        },
        {
            id: 472, price: '', section: 2
        },
        {
            id: 473, price: '', section: 2
        },
        {
            id: 474, price: '', section: 2
        },
        {
            id: 475, price: '', section: 2
        },
        {
            id: 476, price: '', section: 2
        },
        {
            id: 477, price: '', section: 2
        },
        {
            id: 478, price: '', section: 3
        },
        {
            id: 479, price: '', section: 3
        },
        {
            id: 480, price: '', section: 3
        },
        {
            id: 481, price: '', section: 3
        },
        {
            id: 482, price: '', section: 3
        },
        {
            id: 483, price: '', section: 3
        },
        {
            id: 484, price: '', section: 3
        },
        {
            id: 485, price: '', section: 3
        },
        {
            id: 486, price: '', section: 3
        },
        {
            id: 487, price: '', section: 3
        },
        {
            id: 488, price: '', section: 3
        },
        {
            id: 489, price: '', section: 4
        },
        {
            id: 490, price: '', section: 4
        },
        {
            id: 491, price: '', section: 4
        },
        {
            id: 492, price: '', section: 4
        },
        {
            id: 493, price: '', section: 4
        },
        {
            id: 494, price: '', section: 4
        },
        {
            id: 495, price: '', section: 4
        },
        {
            id: 496, price: '', section: 4
        },
        {
            id: 497, price: '', section: 4
        },
        {
            id: 498, price: '', section: 4
        },
        {
            id: 499, price: '', section: 4
        },
        {
            id: 500, price: '', section: 5
        },
        {
            id: 501, price: '', section: 5
        },
        {
            id: 502, price: '', section: 5
        },
        {
            id: 503, price: '', section: 5
        },
        {
            id: 504, price: '', section: 5
        },
        {
            id: 505, price: '', section: 5
        },
        {
            id: 506, price: '', section: 5
        },
        {
            id: 507, price: '', section: 5
        },
        {
            id: 508, price: '', section: 5
        },
        {
            id: 509, price: '', section: 5
        },
        {
            id: 510, price: '', section: 5
        },
        {
            id: 511, price: '', section: 5
        },
        {
            id: 512, price: '', section: 6
        },
        {
            id: 513, price: '', section: 6
        },
        {
            id: 514, price: '', section: 6
        },
        {
            id: 515, price: '', section: 6
        },
        {
            id: 516, price: '', section: 6
        },
        {
            id: 517, price: '', section: 6
        },
        {
            id: 518, price: '', section: 6
        },
        {
            id: 519, price: '', section: 6
        },
        {
            id: 520, price: '', section: 6
        },
        {
            id: 521, price: '', section: 6
        },
        {
            id: 522, price: '', section: 6
        },
        {
            id: 523, price: '', section: 7
        },
        {
            id: 524, price: '', section: 7
        },
        {
            id: 525, price: '', section: 7
        },
        {
            id: 526, price: '', section: 7
        },
        {
            id: 527, price: '', section: 7
        },
        {
            id: 528, price: '', section: 7
        },
        {
            id: 529, price: '', section: 7
        },
        {
            id: 530, price: '', section: 7
        },
        {
            id: 531, price: '', section: 7
        },
        {
            id: 532, price: '', section: 7
        },
        {
            id: 533, price: '', section: 7
        },
        {
            id: 534, price: '', section: 7
        },
        {
            id: 535, price: '', section: 8
        },
        {
            id: 536, price: '', section: 8
        },
        {
            id: 537, price: '', section: 8
        },
        {
            id: 538, price: '', section: 8
        },
        {
            id: 539, price: '', section: 8
        },
        {
            id: 540, price: '', section: 8
        },
        {
            id: 541, price: '', section: 8
        },
        {
            id: 542, price: '', section: 8
        },
        {
            id: 543, price: '', section: 8
        },
        {
            id: 544, price: '', section: 8
        },
        {
            id: 545, price: '', section: 8
        },
        {
            id: 546, price: '', section: 8
        },
        {
            id: 547, price: '', section: 9
        },
        {
            id: 548, price: '', section: 9
        },
        {
            id: 549, price: '', section: 9
        },
        {
            id: 550, price: '', section: 9
        },
        {
            id: 551, price: '', section: 9
        },
        {
            id: 552, price: '', section: 9
        },
        {
            id: 553, price: '', section: 9
        },
        {
            id: 554, price: '', section: 9
        },
        {
            id: 555, price: '', section: 9
        },
        {
            id: 556, price: '', section: 9
        },
        {
            id: 557, price: '', section: 9
        },
        {
            id: 558, price: '', section: 9
        },
        {
            id: 559, price: '', section: 10
        },
        {
            id: 560, price: '', section: 10
        },
        {
            id: 561, price: '', section: 10
        },
        {
            id: 562, price: '', section: 10
        },
        {
            id: 563, price: '', section: 10
        },
        {
            id: 564, price: '', section: 10
        },
        {
            id: 565, price: '', section: 10
        },
        {
            id: 566, price: '', section: 10
        },
        {
            id: 567, price: '', section: 10
        },
        {
            id: 568, price: '', section: 10
        },
        {
            id: 569, price: '', section: 6
        },
        {
            id: 570, price: '', section: 6
        },
        {
            id: 571, price: '', section: 6
        },
        {
            id: 572, price: '', section: 6
        },
        {
            id: 573, price: '', section: 6
        },
        {
            id: 574, price: '', section: 6
        },
        {
            id: 575, price: '', section: 6
        },
        {
            id: 576, price: '', section: 6
        },
        {
            id: 577, price: '', section: 6
        },
        {
            id: 578, price: '', section: 6
        },
        {
            id: 579, price: '', section: 6
        },
        {
            id: 580, price: '', section: 7
        },
        {
            id: 581, price: '', section: 7
        },
        {
            id: 582, price: '', section: 7
        },
        {
            id: 583, price: '', section: 7
        },
        {
            id: 584, price: '', section: 7
        },
        {
            id: 585, price: '', section: 7
        },
        {
            id: 586, price: '', section: 7
        },
        {
            id: 587, price: '', section: 7
        },
        {
            id: 588, price: '', section: 7
        },
        {
            id: 589, price: '', section: 7
        },
        {
            id: 590, price: '', section: 7
        },
        {
            id: 591, price: '', section: 7
        },
        {
            id: 592, price: '', section: 8
        },
        {
            id: 593, price: '', section: 8
        },
        {
            id: 594, price: '', section: 8
        },
        {
            id: 595, price: '', section: 8
        },
        {
            id: 596, price: '', section: 8
        },
        {
            id: 597, price: '', section: 8
        },
        {
            id: 598, price: '', section: 8
        },
        {
            id: 599, price: '', section: 8
        },
        {
            id: 600, price: '', section: 8
        },
        {
            id: 601, price: '', section: 8
        },
        {
            id: 602, price: '', section: 8
        },
        {
            id: 603, price: '', section: 8
        },
        {
            id: 604, price: '', section: 9
        },
        {
            id: 605, price: '', section: 9
        },
        {
            id: 606, price: '', section: 9
        },
        {
            id: 607, price: '', section: 9
        },
        {
            id: 608, price: '', section: 9
        },
        {
            id: 609, price: '', section: 9
        },
        {
            id: 610, price: '', section: 9
        },
        {
            id: 611, price: '', section: 9
        },
        {
            id: 612, price: '', section: 9
        },
        {
            id: 613, price: '', section: 9
        },
        {
            id: 614, price: '', section: 9
        },
        {
            id: 615, price: '', section: 9
        },
        {
            id: 616, price: '', section: 10
        },
        {
            id: 617, price: '', section: 10
        },
        {
            id: 618, price: '', section: 10
        },
        {
            id: 619, price: '', section: 10
        },
        {
            id: 620, price: '', section: 10
        },
        {
            id: 621, price: '', section: 10
        },
        {
            id: 622, price: '', section: 10
        },
        {
            id: 623, price: '', section: 10
        },
        {
            id: 624, price: '', section: 10
        },
        {
            id: 625, price: '', section: 10
        },
        {
            id: 626, price: '', section: 10
        },
        {
            id: 627, price: '', section: 6
        },
        {
            id: 628, price: '', section: 6
        },
        {
            id: 629, price: '', section: 6
        },
        {
            id: 630, price: '', section: 6
        },
        {
            id: 631, price: '', section: 6
        },
        {
            id: 632, price: '', section: 6
        },
        {
            id: 633, price: '', section: 6
        },
        {
            id: 634, price: '', section: 6
        },
        {
            id: 635, price: '', section: 6
        },
        {
            id: 636, price: '', section: 6
        },
        {
            id: 637, price: '', section: 6
        },
        {
            id: 638, price: '', section: 7
        },
        {
            id: 639, price: '', section: 7
        },
        {
            id: 640, price: '', section: 7
        },
        {
            id: 641, price: '', section: 7
        },
        {
            id: 642, price: '', section: 7
        },
        {
            id: 643, price: '', section: 7
        },
        {
            id: 644, price: '', section: 7
        },
        {
            id: 645, price: '', section: 7
        },
        {
            id: 646, price: '', section: 7
        },
        {
            id: 647, price: '', section: 7
        },
        {
            id: 648, price: '', section: 7
        },
        {
            id: 649, price: '', section: 7
        },
        {
            id: 650, price: '', section: 7
        },
        {
            id: 651, price: '', section: 8
        },
        {
            id: 652, price: '', section: 8
        },
        {
            id: 653, price: '', section: 8
        },
        {
            id: 654, price: '', section: 8
        },
        {
            id: 655, price: '', section: 8
        },
        {
            id: 656, price: '', section: 8
        },
        {
            id: 657, price: '', section: 8
        },
        {
            id: 658, price: '', section: 8
        },
        {
            id: 659, price: '', section: 8
        },
        {
            id: 660, price: '', section: 8
        },
        {
            id: 661, price: '', section: 8
        },
        {
            id: 662, price: '', section: 8
        },
        {
            id: 663, price: '', section: 8
        },
        {
            id: 664, price: '', section: 9
        },
        {
            id: 665, price: '', section: 9
        },
        {
            id: 666, price: '', section: 9
        },
        {
            id: 667, price: '', section: 9
        },
        {
            id: 668, price: '', section: 9
        },
        {
            id: 669, price: '', section: 9
        },
        {
            id: 670, price: '', section: 9
        },
        {
            id: 671, price: '', section: 9
        },
        {
            id: 672, price: '', section: 9
        },
        {
            id: 673, price: '', section: 9
        },
        {
            id: 674, price: '', section: 9
        },
        {
            id: 675, price: '', section: 9
        },
        {
            id: 676, price: '', section: 9
        },
        {
            id: 677, price: '', section: 10
        },
        {
            id: 678, price: '', section: 10
        },
        {
            id: 679, price: '', section: 10
        },
        {
            id: 680, price: '', section: 10
        },
        {
            id: 681, price: '', section: 10
        },
        {
            id: 682, price: '', section: 10
        },
        {
            id: 683, price: '', section: 10
        },
        {
            id: 684, price: '', section: 10
        },
        {
            id: 685, price: '', section: 10
        },
        {
            id: 686, price: '', section: 10
        },
        {
            id: 687, price: '', section: 10
        },
        {
            id: 688, price: '', section: 6
        },
        {
            id: 689, price: '', section: 6
        },
        {
            id: 690, price: '', section: 6
        },
        {
            id: 691, price: '', section: 6
        },
        {
            id: 692, price: '', section: 6
        },
        {
            id: 693, price: '', section: 6
        },
        {
            id: 694, price: '', section: 6
        },
        {
            id: 695, price: '', section: 6
        },
        {
            id: 696, price: '', section: 6
        },
        {
            id: 697, price: '', section: 6
        },
        {
            id: 698, price: '', section: 6
        },
        {
            id: 699, price: '', section: 7
        },
        {
            id: 700, price: '', section: 7
        },
        {
            id: 701, price: '', section: 7
        },
        {
            id: 702, price: '', section: 7
        },
        {
            id: 703, price: '', section: 7
        },
        {
            id: 704, price: '', section: 7
        },
        {
            id: 705, price: '', section: 7
        },
        {
            id: 706, price: '', section: 7
        },
        {
            id: 707, price: '', section: 7
        },
        {
            id: 708, price: '', section: 7
        },
        {
            id: 709, price: '', section: 7
        },
        {
            id: 710, price: '', section: 7
        },
        {
            id: 711, price: '', section: 7
        },
        {
            id: 712, price: '', section: 8
        },
        {
            id: 713, price: '', section: 8
        },
        {
            id: 714, price: '', section: 8
        },
        {
            id: 715, price: '', section: 8
        },
        {
            id: 716, price: '', section: 8
        },
        {
            id: 717, price: '', section: 8
        },
        {
            id: 718, price: '', section: 8
        },
        {
            id: 719, price: '', section: 8
        },
        {
            id: 720, price: '', section: 8
        },
        {
            id: 721, price: '', section: 8
        },
        {
            id: 722, price: '', section: 8
        },
        {
            id: 723, price: '', section: 8
        },
        {
            id: 724, price: '', section: 8
        },
        {
            id: 725, price: '', section: 9
        },
        {
            id: 726, price: '', section: 9
        },
        {
            id: 727, price: '', section: 9
        },
        {
            id: 728, price: '', section: 9
        },
        {
            id: 729, price: '', section: 9
        },
        {
            id: 730, price: '', section: 9
        },
        {
            id: 731, price: '', section: 9
        },
        {
            id: 732, price: '', section: 9
        },
        {
            id: 733, price: '', section: 9
        },
        {
            id: 734, price: '', section: 9
        },
        {
            id: 735, price: '', section: 9
        },
        {
            id: 736, price: '', section: 9
        },
        {
            id: 737, price: '', section: 9
        },
        {
            id: 738, price: '', section: 10
        },
        {
            id: 739, price: '', section: 10
        },
        {
            id: 740, price: '', section: 10
        },
        {
            id: 741, price: '', section: 10
        },
        {
            id: 742, price: '', section: 10
        },
        {
            id: 743, price: '', section: 10
        },
        {
            id: 744, price: '', section: 10
        },
        {
            id: 745, price: '', section: 10
        },
        {
            id: 746, price: '', section: 10
        },
        {
            id: 747, price: '', section: 10
        },
        {
            id: 748, price: '', section: 10
        },
        {
            id: 749, price: '', section: 6
        },
        {
            id: 750, price: '', section: 6
        },
        {
            id: 751, price: '', section: 6
        },
        {
            id: 752, price: '', section: 6
        },
        {
            id: 753, price: '', section: 6
        },
        {
            id: 754, price: '', section: 6
        },
        {
            id: 755, price: '', section: 6
        },
        {
            id: 756, price: '', section: 6
        },
        {
            id: 757, price: '', section: 6
        },
        {
            id: 758, price: '', section: 6
        },
        {
            id: 759, price: '', section: 6
        },
        {
            id: 760, price: '', section: 6
        },
        {
            id: 761, price: '', section: 7
        },
        {
            id: 762, price: '', section: 7
        },
        {
            id: 763, price: '', section: 7
        },
        {
            id: 764, price: '', section: 7
        },
        {
            id: 765, price: '', section: 7
        },
        {
            id: 766, price: '', section: 7
        },
        {
            id: 767, price: '', section: 7
        },
        {
            id: 768, price: '', section: 7
        },
        {
            id: 769, price: '', section: 7
        },
        {
            id: 770, price: '', section: 7
        },
        {
            id: 771, price: '', section: 7
        },
        {
            id: 772, price: '', section: 7
        },
        {
            id: 773, price: '', section: 7
        },
        {
            id: 774, price: '', section: 8
        },
        {
            id: 775, price: '', section: 8
        },
        {
            id: 776, price: '', section: 8
        },

        {
            id: 777, price: '', section: 8
        },
        {
            id: 778, price: '', section: 8
        },
        {
            id: 779, price: '', section: 8
        },
        {
            id: 780, price: '', section: 8
        },
        {
            id: 781, price: '', section: 8
        },
        {
            id: 782, price: '', section: 8
        },
        {
            id: 783, price: '', section: 8
        },
        {
            id: 784, price: '', section: 8
        },
        {
            id: 785, price: '', section: 8
        },
        {
            id: 786, price: '', section: 8
        },
        {
            id: 787, price: '', section: 9
        },
        {
            id: 788, price: '', section: 9
        },
        {
            id: 789, price: '', section: 9
        },
        {
            id: 790, price: '', section: 9
        },
        {
            id: 791, price: '', section: 9
        },
        {
            id: 792, price: '', section: 9
        },
        {
            id: 793, price: '', section: 9
        },
        {
            id: 794, price: '', section: 9
        },
        {
            id: 795, price: '', section: 9
        },
        {
            id: 796, price: '', section: 9
        },
        {
            id: 797, price: '', section: 9
        },
        {
            id: 798, price: '', section: 9
        },
        {
            id: 799, price: '', section: 9
        },
        {
            id: 800, price: '', section: 10
        },
        {
            id: 801, price: '', section: 10
        },
        {
            id: 802, price: '', section: 10
        },
        {
            id: 803, price: '', section: 10
        },
        {
            id: 804, price: '', section: 10
        },
        {
            id: 805, price: '', section: 10
        },
        {
            id: 806, price: '', section: 10
        },
        {
            id: 807, price: '', section: 10
        },
        {
            id: 808, price: '', section: 10
        },
        {
            id: 809, price: '', section: 10
        },
        {
            id: 810, price: '', section: 10
        },
        {
            id: 811, price: '', section: 10
        },
        {
            id: 812, price: '', section: 11
        },
        {
            id: 813, price: '', section: 11
        },
        {
            id: 814, price: '', section: 11
        },
        {
            id: 815, price: '', section: 11
        },
        {
            id: 816, price: '', section: 11
        },
        {
            id: 817, price: '', section: 11
        },
        {
            id: 818, price: '', section: 11
        },
        {
            id: 819, price: '', section: 11
        },
        {
            id: 820, price: '', section: 11
        },
        {
            id: 821, price: '', section: 11
        },
        {
            id: 822, price: '', section: 12
        },
        {
            id: 823, price: '', section: 12
        },
        {
            id: 824, price: '', section: 12
        },
        {
            id: 825, price: '', section: 12
        },
        {
            id: 826, price: '', section: 12
        },
        {
            id: 827, price: '', section: 12
        },
        {
            id: 828, price: '', section: 12
        },
        {
            id: 829, price: '', section: 12
        },
        {
            id: 830, price: '', section: 13
        },
        {
            id: 831, price: '', section: 13
        },
        {
            id: 832, price: '', section: 13
        },
        {
            id: 833, price: '', section: 13
        },
        {
            id: 834, price: '', section: 13
        },
        {
            id: 835, price: '', section: 13
        },
        {
            id: 836, price: '', section: 13
        },
        {
            id: 837, price: '', section: 13
        },
        {
            id: 838, price: '', section: 13
        },
        {
            id: 839, price: '', section: 14
        },
        {
            id: 840, price: '', section: 14
        },
        {
            id: 841, price: '', section: 14
        },
        {
            id: 842, price: '', section: 14
        },
        {
            id: 843, price: '', section: 14
        },
        {
            id: 844, price: '', section: 14
        },
        {
            id: 845, price: '', section: 14
        },
        {
            id: 846, price: '', section: 14
        },
        {
            id: 847, price: '', section: 15
        },
        {
            id: 848, price: '', section: 15
        },
        {
            id: 849, price: '', section: 15
        },
        {
            id: 850, price: '', section: 15
        },
        {
            id: 851, price: '', section: 15
        },
        {
            id: 852, price: '', section: 15
        },
        {
            id: 853, price: '', section: 15
        },
        {
            id: 854, price: '', section: 15
        },
        {
            id: 855, price: '', section: 15
        },
        {
            id: 856, price: '', section: 11
        },
        {
            id: 857, price: '', section: 11
        },
        {
            id: 858, price: '', section: 11
        },
        {
            id: 859, price: '', section: 11
        },
        {
            id: 860, price: '', section: 11
        },
        {
            id: 861, price: '', section: 11
        },
        {
            id: 862, price: '', section: 11
        },
        {
            id: 863, price: '', section: 11
        },
        {
            id: 864, price: '', section: 11
        },
        {
            id: 865, price: '', section: 11
        },
        {
            id: 866, price: '', section: 12
        },
        {
            id: 867, price: '', section: 12
        },
        {
            id: 868, price: '', section: 12
        },
        {
            id: 869, price: '', section: 12
        },
        {
            id: 870, price: '', section: 12
        },
        {
            id: 871, price: '', section: 12
        },
        {
            id: 872, price: '', section: 12
        },
        {
            id: 873, price: '', section: 12
        },
        {
            id: 874, price: '', section: 12
        },
        {
            id: 875, price: '', section: 13
        },
        {
            id: 876, price: '', section: 13
        },
        {
            id: 877, price: '', section: 13
        },
        {
            id: 878, price: '', section: 13
        },
        {
            id: 879, price: '', section: 13
        },
        {
            id: 880, price: '', section: 13
        },
        {
            id: 881, price: '', section: 13
        },
        {
            id: 882, price: '', section: 13
        },
        {
            id: 883, price: '', section: 13
        },
        {
            id: 884, price: '', section: 14
        },
        {
            id: 885, price: '', section: 14
        },
        {
            id: 886, price: '', section: 14
        },
        {
            id: 887, price: '', section: 14
        },
        {
            id: 888, price: '', section: 14
        },
        {
            id: 889, price: '', section: 14
        },
        {
            id: 890, price: '', section: 14
        },
        {
            id: 891, price: '', section: 14
        },
        {
            id: 892, price: '', section: 14
        },
        {
            id: 893, price: '', section: 15
        },
        {
            id: 894, price: '', section: 15
        },
        {
            id: 895, price: '', section: 15
        },
        {
            id: 896, price: '', section: 15
        },
        {
            id: 897, price: '', section: 15
        },
        {
            id: 898, price: '', section: 15
        },
        {
            id: 899, price: '', section: 15
        },
        {
            id: 900, price: '', section: 15
        },
        {
            id: 901, price: '', section: 15
        },
        {
            id: 902, price: '', section: 15
        },
        {
            id: 903, price: '', section: 11
        },
        {
            id: 904, price: '', section: 11
        },
        {
            id: 905, price: '', section: 11
        },
        {
            id: 906, price: '', section: 11
        },
        {
            id: 907, price: '', section: 11
        },
        {
            id: 908, price: '', section: 11
        },
        {
            id: 909, price: '', section: 11
        },
        {
            id: 910, price: '', section: 11
        },
        {
            id: 911, price: '', section: 11
        },
        {
            id: 912, price: '', section: 11
        },
        {
            id: 913, price: '', section: 12
        },
        {
            id: 914, price: '', section: 12
        },
        {
            id: 915, price: '', section: 12
        },
        {
            id: 916, price: '', section: 12
        },
        {
            id: 917, price: '', section: 12
        },
        {
            id: 918, price: '', section: 12
        },
        {
            id: 919, price: '', section: 12
        },
        {
            id: 920, price: '', section: 12
        },
        {
            id: 921, price: '', section: 12
        },
        {
            id: 922, price: '', section: 14
        },
        {
            id: 923, price: '', section: 14
        },
        {
            id: 924, price: '', section: 14
        },
        {
            id: 925, price: '', section: 14
        },
        {
            id: 926, price: '', section: 14
        },
        {
            id: 927, price: '', section: 14
        },
        {
            id: 928, price: '', section: 14
        },
        {
            id: 929, price: '', section: 14
        },
        {
            id: 930, price: '', section: 14
        },
        {
            id: 931, price: '', section: 15
        },
        {
            id: 932, price: '', section: 15
        },
        {
            id: 933, price: '', section: 15
        },
        {
            id: 934, price: '', section: 15
        },
        {
            id: 935, price: '', section: 15
        },
        {
            id: 936, price: '', section: 15
        },
        {
            id: 937, price: '', section: 15
        },
        {
            id: 938, price: '', section: 15
        },
        {
            id: 939, price: '', section: 15
        },
        {
            id: 940, price: '', section: 15
        },
        {
            id: 941, price: '', section: 11
        },
        {
            id: 942, price: '', section: 11
        },
        {
            id: 943, price: '', section: 11
        },
        {
            id: 944, price: '', section: 11
        },
        {
            id: 945, price: '', section: 11
        },
        {
            id: 946, price: '', section: 11
        },
        {
            id: 947, price: '', section: 11
        },
        {
            id: 948, price: '', section: 11
        },
        {
            id: 949, price: '', section: 11
        },
        {
            id: 950, price: '', section: 11
        },
        {
            id: 951, price: '', section: 12
        },
        {
            id: 952, price: '', section: 12
        },
        {
            id: 953, price: '', section: 12
        },
        {
            id: 954, price: '', section: 12
        },
        {
            id: 955, price: '', section: 12
        },
        {
            id: 956, price: '', section: 12
        },
        {
            id: 957, price: '', section: 12
        },
        {
            id: 958, price: '', section: 12
        },
        {
            id: 959, price: '', section: 12
        },
        {
            id: 960, price: '', section: 14
        },
        {
            id: 961, price: '', section: 14
        },
        {
            id: 962, price: '', section: 14
        },
        {
            id: 963, price: '', section: 14
        },
        {
            id: 964, price: '', section: 14
        },
        {
            id: 965, price: '', section: 14
        },
        {
            id: 966, price: '', section: 14
        },
        {
            id: 967, price: '', section: 14
        },
        {
            id: 968, price: '', section: 14
        },
        {
            id: 969, price: '', section: 15
        },
        {
            id: 970, price: '', section: 15
        },
        {
            id: 971, price: '', section: 15
        },
        {
            id: 972, price: '', section: 15
        },
        {
            id: 973, price: '', section: 15
        },
        {
            id: 974, price: '', section: 15
        },
        {
            id: 975, price: '', section: 15
        },
        {
            id: 976, price: '', section: 15
        },
        {
            id: 977, price: '', section: 15
        },
        {
            id: 978, price: '', section: 15
        },
        {
            id: 979, price: '', section: 11
        },
        {
            id: 980, price: '', section: 11
        },
        {
            id: 981, price: '', section: 11
        },
        {
            id: 982, price: '', section: 11
        },
        {
            id: 983, price: '', section: 11
        },
        {
            id: 984, price: '', section: 11
        },
        {
            id: 985, price: '', section: 11
        },
        {
            id: 986, price: '', section: 11
        },
        {
            id: 987, price: '', section: 11
        },
        {
            id: 988, price: '', section: 11
        },
        {
            id: 989, price: '', section: 11
        },
        {
            id: 990, price: '', section: 11
        },
        {
            id: 991, price: '', section: 11
        },
        {
            id: 992, price: '', section: 11
        },
        {
            id: 993, price: '', section: 11
        },
        {
            id: 994, price: '', section: 12
        },
        {
            id: 995, price: '', section: 12
        },
        {
            id: 996, price: '', section: 12
        },
        {
            id: 997, price: '', section: 12
        },
        {
            id: 998, price: '', section: 12
        },
        {
            id: 999, price: '', section: 12
        },
        {
            id: 1000, price: '', section: 12
        },
        {
            id: 1001, price: '', section: 12
        },
        {
            id: 1002, price: '', section: 12
        },
        {
            id: 1003, price: '', section: 12
        },
        {
            id: 1004, price: '', section: 12
        },
        {
            id: 1005, price: '', section: 12
        },
        {
            id: 1006, price: '', section: 12
        },
        {
            id: 1007, price: '', section: 14
        },
        {
            id: 1008, price: '', section: 14
        },
        {
            id: 1009, price: '', section: 14
        },
        {
            id: 1010, price: '', section: 14
        },
        {
            id: 1011, price: '', section: 14
        },
        {
            id: 1012, price: '', section: 14
        },
        {
            id: 1013, price: '', section: 14
        },
        {
            id: 1014, price: '', section: 14
        },
        {
            id: 1015, price: '', section: 14
        },
        {
            id: 1016, price: '', section: 14
        },
        {
            id: 1017, price: '', section: 14
        },
        {
            id: 1018, price: '', section: 14
        },
        {
            id: 1019, price: '', section: 14
        },
        {
            id: 1020, price: '', section: 15
        },
        {
            id: 1021, price: '', section: 15
        },
        {
            id: 1022, price: '', section: 15
        },
        {
            id: 1023, price: '', section: 15
        },
        {
            id: 1024, price: '', section: 15
        },
        {
            id: 1025, price: '', section: 15
        },
        {
            id: 1026, price: '', section: 15
        },
        {
            id: 1027, price: '', section: 15
        },
        {
            id: 1028, price: '', section: 15
        },
        {
            id: 1029, price: '', section: 15
        },
        {
            id: 1030, price: '', section: 15
        },
        {
            id: 1031, price: '', section: 15
        },
        {
            id: 1032, price: '', section: 15
        },
        {
            id: 1033, price: '', section: 15
        },
        {
            id: 1034, price: '', section: 16
        },
        {
            id: 1035, price: '', section: 16
        },
        {
            id: 1036, price: '', section: 16
        },
        {
            id: 1037, price: '', section: 16
        },
        {
            id: 1038, price: '', section: 16
        },
        {
            id: 1039, price: '', section: 17
        },
        {
            id: 1040, price: '', section: 17
        },
        {
            id: 1041, price: '', section: 17
        },
        {
            id: 1042, price: '', section: 17
        },
        {
            id: 1043, price: '', section: 17
        },
        {
            id: 1044, price: '', section: 17
        },
        {
            id: 1045, price: '', section: 17
        },
        {
            id: 1046, price: '', section: 17
        },
        {
            id: 1047, price: '', section: 17
        },
        {
            id: 1048, price: '', section: 17
        },
        {
            id: 1049, price: '', section: 17
        },
        {
            id: 1050, price: '', section: 17
        },
        {
            id: 1051, price: '', section: 17
        },
        {
            id: 1052, price: '', section: 17
        },
        {
            id: 1053, price: '', section: 17
        },
        {
            id: 1054, price: '', section: 17
        },
        {
            id: 1055, price: '', section: 18
        },
        {
            id: 1056, price: '', section: 18
        },
        {
            id: 1057, price: '', section: 18
        },
        {
            id: 1058, price: '', section: 18
        },
        {
            id: 1059, price: '', section: 18
        },
        {
            id: 1060, price: '', section: 18
        },
        {
            id: 1061, price: '', section: 18
        },
        {
            id: 1062, price: '', section: 18
        },
        {
            id: 1063, price: '', section: 18
        },
        {
            id: 1064, price: '', section: 18
        },
        {
            id: 1065, price: '', section: 18
        },
        {
            id: 1066, price: '', section: 18
        },
        {
            id: 1067, price: '', section: 18
        },
        {
            id: 1068, price: '', section: 18
        },
        {
            id: 1069, price: '', section: 18
        },
        {
            id: 1070, price: '', section: 18
        },
        {
            id: 1071, price: '', section: 19
        },
        {
            id: 1072, price: '', section: 19
        },
        {
            id: 1073, price: '', section: 19
        },
        {
            id: 1074, price: '', section: 19
        },
        {
            id: 1075, price: '', section: 19
        },
        {
            id: 1076, price: '', section: 16
        },
        {
            id: 1077, price: '', section: 16
        },
        {
            id: 1078, price: '', section: 16
        },
        {
            id: 1079, price: '', section: 16
        },
        {
            id: 1080, price: '', section: 16
        },
        {
            id: 1081, price: '', section: 16
        },
        {
            id: 1082, price: '', section: 17
        },
        {
            id: 1083, price: '', section: 17
        },
        {
            id: 1084, price: '', section: 17
        },
        {
            id: 1085, price: '', section: 17
        },
        {
            id: 1086, price: '', section: 17
        },
        {
            id: 1087, price: '', section: 17
        },
        {
            id: 1088, price: '', section: 17
        },
        {
            id: 1089, price: '', section: 17
        },
        {
            id: 1090, price: '', section: 17
        },
        {
            id: 1091, price: '', section: 17
        },
        {
            id: 1092, price: '', section: 17
        },
        {
            id: 1093, price: '', section: 17
        },
        {
            id: 1094, price: '', section: 17
        },
        {
            id: 1095, price: '', section: 17
        },
        {
            id: 1096, price: '', section: 17
        },
        {
            id: 1097, price: '', section: 17
        },
        {
            id: 1098, price: '', section: 18
        },
        {
            id: 1099, price: '', section: 18
        },
        {
            id: 1100, price: '', section: 18
        },
        {
            id: 1101, price: '', section: 18
        },
        {
            id: 1102, price: '', section: 18
        },
        {
            id: 1103, price: '', section: 18
        },
        {
            id: 1104, price: '', section: 18
        },
        {
            id: 1105, price: '', section: 18
        },
        {
            id: 1106, price: '', section: 18
        },
        {
            id: 1107, price: '', section: 18
        },
        {
            id: 1108, price: '', section: 18
        },
        {
            id: 1109, price: '', section: 18
        },
        {
            id: 1110, price: '', section: 18
        },
        {
            id: 1111, price: '', section: 18
        },
        {
            id: 1112, price: '', section: 18
        },
        {
            id: 1113, price: '', section: 18
        },
        {
            id: 1114, price: '', section: 19
        },
        {
            id: 1115, price: '', section: 19
        },
        {
            id: 1116, price: '', section: 19
        },
        {
            id: 1117, price: '', section: 19
        },
        {
            id: 1118, price: '', section: 19
        },
        {
            id: 1119, price: '', section: 19
        },
        {
            id: 1120, price: '', section: 16
        },
        {
            id: 1121, price: '', section: 16
        },
        {
            id: 1122, price: '', section: 16
        },
        {
            id: 1123, price: '', section: 16
        },
        {
            id: 1124, price: '', section: 16
        },
        {
            id: 1125, price: '', section: 16
        },
        {
            id: 1126, price: '', section: 17
        },
        {
            id: 1127, price: '', section: 17
        },
        {
            id: 1128, price: '', section: 17
        },
        {
            id: 1129, price: '', section: 17
        },
        {
            id: 1130, price: '', section: 17
        },
        {
            id: 1131, price: '', section: 17
        },
        {
            id: 1132, price: '', section: 17
        },
        {
            id: 1133, price: '', section: 17
        },
        {
            id: 1134, price: '', section: 17
        },
        {
            id: 1135, price: '', section: 17
        },
        {
            id: 1136, price: '', section: 17
        },
        {
            id: 1137, price: '', section: 17
        },
        {
            id: 1138, price: '', section: 17
        },
        {
            id: 1139, price: '', section: 17
        },
        {
            id: 1140, price: '', section: 17
        },
        {
            id: 1141, price: '', section: 17
        },
        {
            id: 1142, price: '', section: 18
        },
        {
            id: 1143, price: '', section: 18
        },
        {
            id: 1144, price: '', section: 18
        },
        {
            id: 1145, price: '', section: 18
        },
        {
            id: 1146, price: '', section: 18
        },
        {
            id: 1147, price: '', section: 18
        },
        {
            id: 1148, price: '', section: 18
        },
        {
            id: 1149, price: '', section: 18
        },
        {
            id: 1150, price: '', section: 18
        },
        {
            id: 1151, price: '', section: 18
        },
        {
            id: 1152, price: '', section: 18
        },
        {
            id: 1153, price: '', section: 18
        },
        {
            id: 1154, price: '', section: 18
        },
        {
            id: 1155, price: '', section: 18
        },
        {
            id: 1156, price: '', section: 18
        },
        {
            id: 1157, price: '', section: 18
        },
        {
            id: 1158, price: '', section: 19
        },
        {
            id: 1159, price: '', section: 19
        },
        {
            id: 1160, price: '', section: 19
        },
        {
            id: 1161, price: '', section: 19
        },
        {
            id: 1162, price: '', section: 19
        },
        {
            id: 1163, price: '', section: 19
        },
        {
            id: 1164, price: '', section: 16
        },
        {
            id: 1165, price: '', section: 16
        },
        {
            id: 1166, price: '', section: 16
        },
        {
            id: 1167, price: '', section: 16
        },
        {
            id: 1168, price: '', section: 16
        },
        {
            id: 1169, price: '', section: 16
        },
        {
            id: 1170, price: '', section: 16
        },
        {
            id: 1171, price: '', section: 17
        },
        {
            id: 1172, price: '', section: 17
        },
        {
            id: 1173, price: '', section: 17
        },
        {
            id: 1174, price: '', section: 17
        },
        {
            id: 1175, price: '', section: 17
        },
        {
            id: 1176, price: '', section: 17
        },
        {
            id: 1177, price: '', section: 17
        },
        {
            id: 1178, price: '', section: 17
        },
        {
            id: 1179, price: '', section: 17
        },
        {
            id: 1180, price: '', section: 17
        },
        {
            id: 1181, price: '', section: 17
        },
        {
            id: 1182, price: '', section: 17
        },
        {
            id: 1183, price: '', section: 17
        },
        {
            id: 1184, price: '', section: 17
        },
        {
            id: 1185, price: '', section: 17
        },
        {
            id: 1186, price: '', section: 17
        },
        {
            id: 1187, price: '', section: 17
        },
        {
            id: 1188, price: '', section: 18
        },
        {
            id: 1189, price: '', section: 18
        },
        {
            id: 1190, price: '', section: 18
        },
        {
            id: 1191, price: '', section: 18
        },
        {
            id: 1192, price: '', section: 18
        },
        {
            id: 1193, price: '', section: 18
        },
        {
            id: 1194, price: '', section: 18
        },
        {
            id: 1195, price: '', section: 18
        },
        {
            id: 1196, price: '', section: 18
        },
        {
            id: 1197, price: '', section: 18
        },
        {
            id: 1198, price: '', section: 18
        },
        {
            id: 1199, price: '', section: 18
        },
        {
            id: 1200, price: '', section: 18
        },
        {
            id: 1201, price: '', section: 18
        },
        {
            id: 1202, price: '', section: 18
        },
        {
            id: 1203, price: '', section: 18
        },
        {
            id: 1204, price: '', section: 18
        },
        {
            id: 1205, price: '', section: 19
        },
        {
            id: 1206, price: '', section: 19
        },
        {
            id: 1207, price: '', section: 19
        },
        {
            id: 1208, price: '', section: 19
        },
        {
            id: 1209, price: '', section: 19
        },
        {
            id: 1210, price: '', section: 19
        },
        {
            id: 1211, price: '', section: 19
        },
        {
            id: 1212, price: '', section: 16
        },
        {
            id: 1213, price: '', section: 16
        },
        {
            id: 1214, price: '', section: 16
        },
        {
            id: 1215, price: '', section: 16
        },
        {
            id: 1216, price: '', section: 16
        },
        {
            id: 1217, price: '', section: 16
        },
        {
            id: 1218, price: '', section: 16
        },
        {
            id: 1219, price: '', section: 16
        },
        {
            id: 1220, price: '', section: 17
        },
        {
            id: 1221, price: '', section: 17
        },
        {
            id: 1222, price: '', section: 17
        },
        {
            id: 1223, price: '', section: 17
        },
        {
            id: 1224, price: '', section: 17
        },
        {
            id: 1225, price: '', section: 17
        },
        {
            id: 1226, price: '', section: 17
        },
        {
            id: 1227, price: '', section: 17
        },
        {
            id: 1228, price: '', section: 17
        },
        {
            id: 1229, price: '', section: 17
        },
        {
            id: 1230, price: '', section: 17
        },
        {
            id: 1231, price: '', section: 17
        },
        {
            id: 1232, price: '', section: 17
        },
        {
            id: 1233, price: '', section: 17
        },
        {
            id: 1234, price: '', section: 17
        },
        {
            id: 1235, price: '', section: 17
        },
        {
            id: 1236, price: '', section: 17
        },
        {
            id: 1237, price: '', section: 18
        },
        {
            id: 1238, price: '', section: 18
        },
        {
            id: 1239, price: '', section: 18
        },
        {
            id: 1240, price: '', section: 18
        },
        {
            id: 1241, price: '', section: 18
        },
        {
            id: 1242, price: '', section: 18
        },
        {
            id: 1243, price: '', section: 18
        },
        {
            id: 1244, price: '', section: 18
        },
        {
            id: 1245, price: '', section: 18
        },
        {
            id: 1246, price: '', section: 18
        },
        {
            id: 1247, price: '', section: 18
        },
        {
            id: 1248, price: '', section: 18
        },
        {
            id: 1249, price: '', section: 18
        },
        {
            id: 1250, price: '', section: 18
        },
        {
            id: 1251, price: '', section: 18
        },
        {
            id: 1252, price: '', section: 18
        },
        {
            id: 1253, price: '', section: 18
        },
        {
            id: 1254, price: '', section: 19
        },
        {
            id: 1255, price: '', section: 19
        },
        {
            id: 1256, price: '', section: 19
        },
        {
            id: 1257, price: '', section: 19
        },
        {
            id: 1258, price: '', section: 19
        },
        {
            id: 1259, price: '', section: 19
        },
        {
            id: 1260, price: '', section: 19
        },
        {
            id: 1261, price: '', section: 19
        },
        {
            id: 1262, price: '', section: 16
        },
        {
            id: 1263, price: '', section: 16
        },
        {
            id: 1264, price: '', section: 16
        },
        {
            id: 1265, price: '', section: 16
        },
        {
            id: 1266, price: '', section: 16
        },
        {
            id: 1267, price: '', section: 16
        },
        {
            id: 1268, price: '', section: 16
        },
        {
            id: 1269, price: '', section: 16
        },
        {
            id: 1270, price: '', section: 17
        },
        {
            id: 1271, price: '', section: 17
        },
        {
            id: 1272, price: '', section: 17
        },
        {
            id: 1273, price: '', section: 17
        },
        {
            id: 1274, price: '', section: 17
        },
        {
            id: 1275, price: '', section: 17
        },
        {
            id: 1276, price: '', section: 17
        },
        {
            id: 1277, price: '', section: 17
        },
        {
            id: 1278, price: '', section: 17
        },
        {
            id: 1279, price: '', section: 17
        },
        {
            id: 1280, price: '', section: 17
        },
        {
            id: 1281, price: '', section: 17
        },
        {
            id: 1282, price: '', section: 17
        },
        {
            id: 1283, price: '', section: 17
        },
        {
            id: 1284, price: '', section: 17
        },
        {
            id: 1285, price: '', section: 17
        },
        {
            id: 1286, price: '', section: 17
        },
        {
            id: 1287, price: '', section: 18
        },
        {
            id: 1288, price: '', section: 18
        },
        {
            id: 1289, price: '', section: 18
        },
        {
            id: 1290, price: '', section: 18
        },
        {
            id: 1291, price: '', section: 18
        },
        {
            id: 1292, price: '', section: 18
        },
        {
            id: 1293, price: '', section: 18
        },
        {
            id: 1294, price: '', section: 18
        },
        {
            id: 1295, price: '', section: 18
        },
        {
            id: 1296, price: '', section: 18
        },
        {
            id: 1297, price: '', section: 18
        },
        {
            id: 1298, price: '', section: 18
        },
        {
            id: 1299, price: '', section: 18
        },
        {
            id: 1300, price: '', section: 18
        },
        {
            id: 1301, price: '', section: 18
        },
        {
            id: 1302, price: '', section: 18
        },
        {
            id: 1303, price: '', section: 18
        },
        {
            id: 1304, price: '', section: 18
        },
        {
            id: 1305, price: '', section: 19
        },
        {
            id: 1306, price: '', section: 19
        },
        {
            id: 1307, price: '', section: 19
        },
        {
            id: 1308, price: '', section: 19
        },
        {
            id: 1309, price: '', section: 19
        },
        {
            id: 1310, price: '', section: 19
        },
        {
            id: 1311, price: '', section: 19
        },
        {
            id: 1312, price: '', section: 19
        },
        {
            id: 1313, price: '', section: 16
        },
        {
            id: 1314, price: '', section: 16
        },
        {
            id: 1315, price: '', section: 16
        },
        {
            id: 1316, price: '', section: 16
        },
        {
            id: 1317, price: '', section: 16
        },
        {
            id: 1318, price: '', section: 16
        },
        {
            id: 1319, price: '', section: 16
        },
        {
            id: 1320, price: '', section: 16
        },
        {
            id: 1321, price: '', section: 16
        },
        {
            id: 1322, price: '', section: 17
        },
        {
            id: 1323, price: '', section: 17
        },
        {
            id: 1324, price: '', section: 17
        },
        {
            id: 1325, price: '', section: 17
        },
        {
            id: 1326, price: '', section: 17
        },
        {
            id: 1327, price: '', section: 17
        },
        {
            id: 1328, price: '', section: 17
        },
        {
            id: 1329, price: '', section: 17
        },
        {
            id: 1330, price: '', section: 17
        },
        {
            id: 1331, price: '', section: 17
        },
        {
            id: 1332, price: '', section: 17
        },
        {
            id: 1333, price: '', section: 17
        },
        {
            id: 1334, price: '', section: 17
        },
        {
            id: 1335, price: '', section: 17
        },
        {
            id: 1336, price: '', section: 17
        },
        {
            id: 1337, price: '', section: 17
        },
        {
            id: 1338, price: '', section: 17
        },
        {
            id: 1339, price: '', section: 18
        },
        {
            id: 1340, price: '', section: 18
        },
        {
            id: 1341, price: '', section: 18
        },
        {
            id: 1342, price: '', section: 18
        },
        {
            id: 1343, price: '', section: 18
        },
        {
            id: 1344, price: '', section: 18
        },
        {
            id: 1345, price: '', section: 18
        },
        {
            id: 1346, price: '', section: 18
        },
        {
            id: 1347, price: '', section: 18
        },
        {
            id: 1348, price: '', section: 18
        },
        {
            id: 1349, price: '', section: 18
        },
        {
            id: 1350, price: '', section: 18
        },
        {
            id: 1351, price: '', section: 18
        },
        {
            id: 1352, price: '', section: 18
        },
        {
            id: 1353, price: '', section: 18
        },
        {
            id: 1354, price: '', section: 18
        },
        {
            id: 1355, price: '', section: 18
        },
        {
            id: 1356, price: '', section: 18
        },
        {
            id: 1357, price: '', section: 19
        },
        {
            id: 1358, price: '', section: 19
        },
        {
            id: 1359, price: '', section: 19
        },
        {
            id: 1360, price: '', section: 19
        },
        {
            id: 1361, price: '', section: 19
        },
        {
            id: 1362, price: '', section: 19
        },
        {
            id: 1363, price: '', section: 19
        },
        {
            id: 1364, price: '', section: 19
        },
        {
            id: 1365, price: '', section: 19
        },
        {
            id: 1366, price: '', section: 20
        },
        {
            id: 1367, price: '', section: 20
        },
        {
            id: 1368, price: '', section: 20
        },
        {
            id: 1369, price: '', section: 20
        },
        {
            id: 1370, price: '', section: 20
        },
        {
            id: 1371, price: '', section: 20
        },
        {
            id: 1372, price: '', section: 20
        },
        {
            id: 1373, price: '', section: 20
        },
        {
            id: 1374, price: '', section: 20
        },
        {
            id: 1375, price: '', section: 20
        },
        {
            id: 1376, price: '', section: 20
        },
        {
            id: 1377, price: '', section: 20
        },
        {
            id: 1378, price: '', section: 20
        },
        {
            id: 1379, price: '', section: 20
        },
        {
            id: 1380, price: '', section: 20
        },
        {
            id: 1381, price: '', section: 21
        },
        {
            id: 1382, price: '', section: 21
        },
        {
            id: 1383, price: '', section: 21
        },
        {
            id: 1384, price: '', section: 21
        },
        {
            id: 1385, price: '', section: 21
        },
        {
            id: 1386, price: '', section: 21
        },
        {
            id: 1387, price: '', section: 21
        },
        {
            id: 1388, price: '', section: 21
        },
        {
            id: 1389, price: '', section: 21
        },
        {
            id: 1390, price: '', section: 21
        },
        {
            id: 1391, price: '', section: 21
        },
        {
            id: 1392, price: '', section: 21
        },
        {
            id: 1393, price: '', section: 21
        },
        {
            id: 1394, price: '', section: 21
        },
        {
            id: 1395, price: '', section: 22
        },
        {
            id: 1396, price: '', section: 22
        },
        {
            id: 1397, price: '', section: 22
        },
        {
            id: 1398, price: '', section: 22
        },
        {
            id: 1399, price: '', section: 22
        },
        {
            id: 1400, price: '', section: 22
        },
        {
            id: 1401, price: '', section: 22
        },
        {
            id: 1402, price: '', section: 22
        },
        {
            id: 1403, price: '', section: 22
        },
        {
            id: 1404, price: '', section: 22
        },
        {
            id: 1405, price: '', section: 22
        },
        {
            id: 1406, price: '', section: 22
        },
        {
            id: 1407, price: '', section: 22
        },
        {
            id: 1408, price: '', section: 22
        },
        {
            id: 1409, price: '', section: 22
        },
        {
            id: 1410, price: '', section: 20
        },
        {
            id: 1411, price: '', section: 20
        },
        {
            id: 1412, price: '', section: 20
        },
        {
            id: 1413, price: '', section: 20
        },
        {
            id: 1414, price: '', section: 20
        },
        {
            id: 1415, price: '', section: 20
        },
        {
            id: 1416, price: '', section: 20
        },
        {
            id: 1417, price: '', section: 20
        },
        {
            id: 1418, price: '', section: 20
        },
        {
            id: 1419, price: '', section: 20
        },
        {
            id: 1420, price: '', section: 20
        },
        {
            id: 1421, price: '', section: 20
        },
        {
            id: 1422, price: '', section: 20
        },
        {
            id: 1423, price: '', section: 20
        },
        {
            id: 1424, price: '', section: 20
        },
        {
            id: 1425, price: '', section: 21
        },
        {
            id: 1426, price: '', section: 21
        },
        {
            id: 1427, price: '', section: 21
        },
        {
            id: 1428, price: '', section: 21
        },
        {
            id: 1429, price: '', section: 21
        },
        {
            id: 1430, price: '', section: 21
        },
        {
            id: 1431, price: '', section: 21
        },
        {
            id: 1432, price: '', section: 21
        },
        {
            id: 1433, price: '', section: 21
        },
        {
            id: 1434, price: '', section: 21
        },
        {
            id: 1435, price: '', section: 21
        },
        {
            id: 1436, price: '', section: 21
        },
        {
            id: 1437, price: '', section: 21
        },
        {
            id: 1438, price: '', section: 21
        },
        {
            id: 1439, price: '', section: 22
        },
        {
            id: 1440, price: '', section: 22
        },
        {
            id: 1441, price: '', section: 22
        },
        {
            id: 1442, price: '', section: 22
        },
        {
            id: 1443, price: '', section: 22
        },
        {
            id: 1444, price: '', section: 22
        },
        {
            id: 1445, price: '', section: 22
        },
        {
            id: 1446, price: '', section: 22
        },
        {
            id: 1447, price: '', section: 22
        },
        {
            id: 1448, price: '', section: 22
        },
        {
            id: 1449, price: '', section: 22
        },
        {
            id: 1450, price: '', section: 22
        },
        {
            id: 1451, price: '', section: 22
        },
        {
            id: 1452, price: '', section: 22
        },
        {
            id: 1453, price: '', section: 22
        },
        {
            id: 1454, price: '', section: 20
        },
        {
            id: 1455, price: '', section: 20
        },
        {
            id: 1456, price: '', section: 20
        },
        {
            id: 1457, price: '', section: 20
        },
        {
            id: 1458, price: '', section: 20
        },
        {
            id: 1459, price: '', section: 20
        },
        {
            id: 1460, price: '', section: 20
        },
        {
            id: 1461, price: '', section: 20
        },
        {
            id: 1462, price: '', section: 20
        },
        {
            id: 1463, price: '', section: 20
        },
        {
            id: 1464, price: '', section: 20
        },
        {
            id: 1465, price: '', section: 20
        },
        {
            id: 1466, price: '', section: 20
        },
        {
            id: 1467, price: '', section: 20
        },
        {
            id: 1468, price: '', section: 20
        },
        {
            id: 1469, price: '', section: 21
        },
        {
            id: 1470, price: '', section: 21
        },
        {
            id: 1471, price: '', section: 21
        },
        {
            id: 1472, price: '', section: 21
        },
        {
            id: 1473, price: '', section: 21
        },
        {
            id: 1474, price: '', section: 21
        },
        {
            id: 1475, price: '', section: 21
        },
        {
            id: 1476, price: '', section: 21
        },
        {
            id: 1477, price: '', section: 21
        },
        {
            id: 1478, price: '', section: 21
        },
        {
            id: 1479, price: '', section: 21
        },
        {
            id: 1480, price: '', section: 21
        },
        {
            id: 1481, price: '', section: 21
        },
        {
            id: 1482, price: '', section: 21
        },
        {
            id: 1483, price: '', section: 22
        },
        {
            id: 1484, price: '', section: 22
        },
        {
            id: 1485, price: '', section: 22
        },
        {
            id: 1486, price: '', section: 22
        },
        {
            id: 1487, price: '', section: 22
        },
        {
            id: 1488, price: '', section: 22
        },
        {
            id: 1489, price: '', section: 22
        },
        {
            id: 1490, price: '', section: 22
        },
        {
            id: 1491, price: '', section: 22
        },
        {
            id: 1492, price: '', section: 22
        },
        {
            id: 1493, price: '', section: 22
        },
        {
            id: 1494, price: '', section: 22
        },
        {
            id: 1495, price: '', section: 22
        },
        {
            id: 1496, price: '', section: 22
        },
        {
            id: 1497, price: '', section: 22
        },
        {
            id: 1498, price: '', section: 20
        },
        {
            id: 1499, price: '', section: 20
        },
        {
            id: 1500, price: '', section: 20
        },
        {
            id: 1501, price: '', section: 20
        },
        {
            id: 1502, price: '', section: 20
        },
        {
            id: 1503, price: '', section: 20
        },
        {
            id: 1504, price: '', section: 20
        },
        {
            id: 1505, price: '', section: 20
        },
        {
            id: 1506, price: '', section: 20
        },
        {
            id: 1507, price: '', section: 20
        },
        {
            id: 1508, price: '', section: 20
        },
        {
            id: 1509, price: '', section: 20
        },
        {
            id: 1510, price: '', section: 20
        },
        {
            id: 1511, price: '', section: 20
        },
        {
            id: 1512, price: '', section: 20
        },
        {
            id: 1513, price: '', section: 21
        },
        {
            id: 1514, price: '', section: 21
        },
        {
            id: 1515, price: '', section: 21
        },
        {
            id: 1516, price: '', section: 21
        },
        {
            id: 1517, price: '', section: 21
        },
        {
            id: 1518, price: '', section: 21
        },
        {
            id: 1519, price: '', section: 21
        },
        {
            id: 1520, price: '', section: 21
        },
        {
            id: 1521, price: '', section: 21
        },
        {
            id: 1522, price: '', section: 21
        },
        {
            id: 1523, price: '', section: 21
        },
        {
            id: 1524, price: '', section: 21
        },
        {
            id: 1525, price: '', section: 21
        },
        {
            id: 1526, price: '', section: 21
        },
        {
            id: 1527, price: '', section: 22
        },
        {
            id: 1528, price: '', section: 22
        },
        {
            id: 1529, price: '', section: 22
        },
        {
            id: 1530, price: '', section: 22
        },
        {
            id: 1531, price: '', section: 22
        },
        {
            id: 1532, price: '', section: 22
        },
        {
            id: 1533, price: '', section: 22
        },
        {
            id: 1534, price: '', section: 22
        },
        {
            id: 1535, price: '', section: 22
        },
        {
            id: 1536, price: '', section: 22
        },
        {
            id: 1537, price: '', section: 22
        },
        {
            id: 1538, price: '', section: 22
        },
        {
            id: 1539, price: '', section: 22
        },
        {
            id: 1540, price: '', section: 22
        },
        {
            id: 1541, price: '', section: 22
        },
        {
            id: 1542, price: '', section: 20
        },
        {
            id: 1543, price: '', section: 20
        },
        {
            id: 1544, price: '', section: 20
        },
        {
            id: 1545, price: '', section: 20
        },
        {
            id: 1546, price: '', section: 20
        },
        {
            id: 1547, price: '', section: 20
        },
        {
            id: 1548, price: '', section: 20
        },
        {
            id: 1549, price: '', section: 20
        },
        {
            id: 1550, price: '', section: 20
        },
        {
            id: 1551, price: '', section: 20
        },
        {
            id: 1552, price: '', section: 20
        },
        {
            id: 1553, price: '', section: 20
        },
        {
            id: 1554, price: '', section: 20
        },
        {
            id: 1555, price: '', section: 20
        },
        {
            id: 1556, price: '', section: 20
        },
        {
            id: 1557, price: '', section: 20
        },
        {
            id: 1558, price: '', section: 20
        },
        {
            id: 1559, price: '', section: 20
        },
        {
            id: 1560, price: '', section: 20
        },
        {
            id: 1561, price: '', section: 20
        },
        {
            id: 1562, price: '', section: 20
        },
        {
            id: 1563, price: '', section: 21
        },
        {
            id: 1564, price: '', section: 21
        },
        {
            id: 1565, price: '', section: 21
        },
        {
            id: 1566, price: '', section: 21
        },
        {
            id: 1567, price: '', section: 21
        },
        {
            id: 1568, price: '', section: 21
        },
        {
            id: 1569, price: '', section: 21
        },
        {
            id: 1570, price: '', section: 21
        },
        {
            id: 1571, price: '', section: 21
        },
        {
            id: 1572, price: '', section: 21
        },
        {
            id: 1573, price: '', section: 21
        },
        {
            id: 1574, price: '', section: 21
        },
        {
            id: 1575, price: '', section: 21
        },
        {
            id: 1576, price: '', section: 21
        },
        {
            id: 1577, price: '', section: 21
        },
        {
            id: 1578, price: '', section: 21
        },
        {
            id: 1579, price: '', section: 21
        },
        {
            id: 1580, price: '', section: 21
        },
        {
            id: 1581, price: '', section: 21
        },
        {
            id: 1582, price: '', section: 21
        },
        {
            id: 1583, price: '', section: 22
        },
        {
            id: 1584, price: '', section: 22
        },
        {
            id: 1585, price: '', section: 22
        },
        {
            id: 1586, price: '', section: 22
        },
        {
            id: 1587, price: '', section: 22
        },
        {
            id: 1588, price: '', section: 22
        },
        {
            id: 1589, price: '', section: 22
        },
        {
            id: 1590, price: '', section: 22
        },
        {
            id: 1591, price: '', section: 22
        },
        {
            id: 1592, price: '', section: 22
        },
        {
            id: 1593, price: '', section: 22
        },
        {
            id: 1594, price: '', section: 22
        },
        {
            id: 1595, price: '', section: 22
        },
        {
            id: 1596, price: '', section: 22
        },
        {
            id: 1597, price: '', section: 22
        },
        {
            id: 1598, price: '', section: 22
        },
        {
            id: 1599, price: '', section: 22
        },
        {
            id: 1600, price: '', section: 22
        },
        {
            id: 1601, price: '', section: 22
        },
        {
            id: 1602, price: '', section: 22
        },
        {
            id: 1603, price: '', section: 22
        },
        {
            id: 1604, price: '', section: 20
        },
        {
            id: 1605, price: '', section: 20
        },
        {
            id: 1606, price: '', section: 20
        },
        {
            id: 1607, price: '', section: 20
        },
        {
            id: 1608, price: '', section: 20
        },
        {
            id: 1609, price: '', section: 20
        },
        {
            id: 1610, price: '', section: 20
        },
        {
            id: 1611, price: '', section: 20
        },
        {
            id: 1612, price: '', section: 20
        },
        {
            id: 1613, price: '', section: 20
        },
        {
            id: 1614, price: '', section: 20
        },
        {
            id: 1615, price: '', section: 20
        },
        {
            id: 1616, price: '', section: 20
        },
        {
            id: 1617, price: '', section: 20
        },
        {
            id: 1618, price: '', section: 20
        },
        {
            id: 1619, price: '', section: 20
        },
        {
            id: 1620, price: '', section: 20
        },
        {
            id: 1621, price: '', section: 20
        },
        {
            id: 1622, price: '', section: 20
        },
        {
            id: 1623, price: '', section: 20
        },
        {
            id: 1624, price: '', section: 20
        },
        {
            id: 1625, price: '', section: 21
        },
        {
            id: 1626, price: '', section: 21
        },
        {
            id: 1627, price: '', section: 21
        },
        {
            id: 1628, price: '', section: 21
        },
        {
            id: 1629, price: '', section: 21
        },
        {
            id: 1630, price: '', section: 21
        },
        {
            id: 1631, price: '', section: 21
        },
        {
            id: 1632, price: '', section: 21
        },
        {
            id: 1633, price: '', section: 21
        },
        {
            id: 1634, price: '', section: 21
        },
        {
            id: 1635, price: '', section: 21
        },
        {
            id: 1636, price: '', section: 21
        },
        {
            id: 1637, price: '', section: 21
        },
        {
            id: 1638, price: '', section: 21
        },
        {
            id: 1639, price: '', section: 21
        },
        {
            id: 1640, price: '', section: 21
        },
        {
            id: 1641, price: '', section: 21
        },
        {
            id: 1642, price: '', section: 21
        },
        {
            id: 1643, price: '', section: 21
        },
        {
            id: 1644, price: '', section: 21
        },
        {
            id: 1645, price: '', section: 22
        },
        {
            id: 1646, price: '', section: 22
        },
        {
            id: 1647, price: '', section: 22
        },
        {
            id: 1648, price: '', section: 22
        },
        {
            id: 1649, price: '', section: 22
        },
        {
            id: 1650, price: '', section: 22
        },
        {
            id: 1651, price: '', section: 22
        },
        {
            id: 1652, price: '', section: 22
        },
        {
            id: 1653, price: '', section: 22
        },
        {
            id: 1654, price: '', section: 22
        },
        {
            id: 1655, price: '', section: 22
        },
        {
            id: 1656, price: '', section: 22
        },
        {
            id: 1657, price: '', section: 22
        },
        {
            id: 1658, price: '', section: 22
        },
        {
            id: 1659, price: '', section: 22
        },
        {
            id: 1660, price: '', section: 22
        },
        {
            id: 1661, price: '', section: 22
        },
        {
            id: 1662, price: '', section: 22
        },
        {
            id: 1663, price: '', section: 22
        },
        {
            id: 1664, price: '', section: 22
        },
        {
            id: 1665, price: '', section: 22
        },
        {
            id: 1666, price: '', section: 20
        },
        {
            id: 1667, price: '', section: 20
        },
        {
            id: 1668, price: '', section: 20
        },
        {
            id: 1669, price: '', section: 20
        },
        {
            id: 1670, price: '', section: 20
        },
        {
            id: 1671, price: '', section: 20
        },
        {
            id: 1672, price: '', section: 20
        },
        {
            id: 1673, price: '', section: 20
        },
        {
            id: 1674, price: '', section: 20
        },
        {
            id: 1675, price: '', section: 20
        },
        {
            id: 1676, price: '', section: 20
        },
        {
            id: 1677, price: '', section: 20
        },
        {
            id: 1678, price: '', section: 20
        },
        {
            id: 1679, price: '', section: 20
        },
        {
            id: 1680, price: '', section: 20
        },
        {
            id: 1681, price: '', section: 20
        },
        {
            id: 1682, price: '', section: 20
        },
        {
            id: 1683, price: '', section: 20
        },
        {
            id: 1684, price: '', section: 20
        },
        {
            id: 1685, price: '', section: 20
        },
        {
            id: 1686, price: '', section: 20
        },
        {
            id: 1687, price: '', section: 21
        },
        {
            id: 1688, price: '', section: 21
        },
        {
            id: 1689, price: '', section: 21
        },
        {
            id: 1690, price: '', section: 21
        },
        {
            id: 1691, price: '', section: 21
        },
        {
            id: 1692, price: '', section: 21
        },
        {
            id: 1693, price: '', section: 21
        },
        {
            id: 1694, price: '', section: 21
        },
        {
            id: 1695, price: '', section: 21
        },
        {
            id: 1696, price: '', section: 21
        },
        {
            id: 1697, price: '', section: 21
        },
        {
            id: 1698, price: '', section: 21
        },
        {
            id: 1699, price: '', section: 21
        },
        {
            id: 1700, price: '', section: 21
        },
        {
            id: 1701, price: '', section: 21
        },
        {
            id: 1702, price: '', section: 21
        },
        {
            id: 1703, price: '', section: 21
        },
        {
            id: 1704, price: '', section: 21
        },
        {
            id: 1705, price: '', section: 21
        },
        {
            id: 1706, price: '', section: 21
        },
        {
            id: 1707, price: '', section: 22
        },
        {
            id: 1708, price: '', section: 22
        },
        {
            id: 1709, price: '', section: 22
        },
        {
            id: 1710, price: '', section: 22
        },
        {
            id: 1711, price: '', section: 22
        },
        {
            id: 1712, price: '', section: 22
        },
        {
            id: 1713, price: '', section: 22
        },
        {
            id: 1714, price: '', section: 22
        },
        {
            id: 1715, price: '', section: 22
        },
        {
            id: 1716, price: '', section: 22
        },
        {
            id: 1717, price: '', section: 22
        },
        {
            id: 1718, price: '', section: 22
        },
        {
            id: 1719, price: '', section: 22
        },
        {
            id: 1720, price: '', section: 22
        },
        {
            id: 1721, price: '', section: 22
        },
        {
            id: 1722, price: '', section: 22
        },
        {
            id: 1723, price: '', section: 22
        },
        {
            id: 1724, price: '', section: 22
        },
        {
            id: 1725, price: '', section: 22
        },
        {
            id: 1726, price: '', section: 22
        },
        {
            id: 1727, price: '', section: 22
        },
        {
            id: 1728, price: '', section: 20
        },
        {
            id: 1729, price: '', section: 20
        },
        {
            id: 1730, price: '', section: 20
        },
        {
            id: 1731, price: '', section: 20
        },
        {
            id: 1732, price: '', section: 20
        },
        {
            id: 1733, price: '', section: 20
        },
        {
            id: 1734, price: '', section: 20
        },
        {
            id: 1735, price: '', section: 20
        },
        {
            id: 1736, price: '', section: 20
        },
        {
            id: 1737, price: '', section: 20
        },
        {
            id: 1738, price: '', section: 20
        },
        {
            id: 1739, price: '', section: 20
        },
        {
            id: 1740, price: '', section: 20
        },
        {
            id: 1741, price: '', section: 20
        },
        {
            id: 1742, price: '', section: 20
        },
        {
            id: 1743, price: '', section: 20
        },
        {
            id: 1744, price: '', section: 20
        },
        {
            id: 1745, price: '', section: 20
        },
        {
            id: 1746, price: '', section: 20
        },
        {
            id: 1747, price: '', section: 20
        },
        {
            id: 1748, price: '', section: 20
        },
        {
            id: 1749, price: '', section: 21
        },
        {
            id: 1750, price: '', section: 21
        },
        {
            id: 1751, price: '', section: 21
        },
        {
            id: 1752, price: '', section: 21
        },
        {
            id: 1753, price: '', section: 21
        },
        {
            id: 1754, price: '', section: 21
        },
        {
            id: 1755, price: '', section: 21
        },
        {
            id: 1756, price: '', section: 21
        },
        {
            id: 1757, price: '', section: 21
        },
        {
            id: 1758, price: '', section: 21
        },
        {
            id: 1759, price: '', section: 21
        },
        {
            id: 1760, price: '', section: 21
        },
        {
            id: 1761, price: '', section: 21
        },
        {
            id: 1762, price: '', section: 21
        },
        {
            id: 1763, price: '', section: 21
        },
        {
            id: 1764, price: '', section: 21
        },
        {
            id: 1765, price: '', section: 21
        },
        {
            id: 1766, price: '', section: 21
        },
        {
            id: 1767, price: '', section: 21
        },
        {
            id: 1768, price: '', section: 21
        },
        {
            id: 1769, price: '', section: 21
        },
        {
            id: 1770, price: '', section: 22
        },
        {
            id: 1771, price: '', section: 22
        },
        {
            id: 1772, price: '', section: 22
        },
        {
            id: 1773, price: '', section: 22
        },
        {
            id: 1774, price: '', section: 22
        },
        {
            id: 1775, price: '', section: 22
        },
        {
            id: 1776, price: '', section: 22
        },
        {
            id: 1777, price: '', section: 22
        },
        {
            id: 1778, price: '', section: 22
        },
        {
            id: 1779, price: '', section: 22
        },
        {
            id: 1780, price: '', section: 22
        },
        {
            id: 1781, price: '', section: 22
        },
        {
            id: 1782, price: '', section: 22
        },
        {
            id: 1783, price: '', section: 22
        },
        {
            id: 1784, price: '', section: 22
        },
        {
            id: 1785, price: '', section: 22
        },
        {
            id: 1786, price: '', section: 22
        },
        {
            id: 1787, price: '', section: 22
        },
        {
            id: 1788, price: '', section: 22
        },
        {
            id: 1789, price: '', section: 22
        },
        {
            id: 1790, price: '', section: 22
        },
        {
            id: 1791, price: '', section: 20
        },
        {
            id: 1792, price: '', section: 20
        },
        {
            id: 1793, price: '', section: 20
        },
        {
            id: 1794, price: '', section: 20
        },
        {
            id: 1795, price: '', section: 20
        },
        {
            id: 1796, price: '', section: 20
        },
        {
            id: 1797, price: '', section: 20
        },
        {
            id: 1798, price: '', section: 20
        },
        {
            id: 1799, price: '', section: 20
        },
        {
            id: 1800, price: '', section: 20
        },
        {
            id: 1801, price: '', section: 20
        },
        {
            id: 1802, price: '', section: 20
        },
        {
            id: 1803, price: '', section: 20
        },
        {
            id: 1804, price: '', section: 20
        },
        {
            id: 1805, price: '', section: 20
        },
        {
            id: 1806, price: '', section: 20
        },
        {
            id: 1807, price: '', section: 20
        },
        {
            id: 1808, price: '', section: 20
        },
        {
            id: 1809, price: '', section: 20
        },
        {
            id: 1810, price: '', section: 20
        },
        {
            id: 1811, price: '', section: 21
        },
        {
            id: 1812, price: '', section: 21
        },
        {
            id: 1813, price: '', section: 21
        },
        {
            id: 1814, price: '', section: 21
        },
        {
            id: 1815, price: '', section: 21
        },
        {
            id: 1816, price: '', section: 21
        },
        {
            id: 1817, price: '', section: 21
        },
        {
            id: 1818, price: '', section: 21
        },
        {
            id: 1819, price: '', section: 21
        },
        {
            id: 1820, price: '', section: 21
        },
        {
            id: 1821, price: '', section: 21
        },
        {
            id: 1822, price: '', section: 21
        },
        {
            id: 1823, price: '', section: 21
        },
        {
            id: 1824, price: '', section: 21
        },
        {
            id: 1825, price: '', section: 21
        },
        {
            id: 1826, price: '', section: 21
        },
        {
            id: 1827, price: '', section: 21
        },
        {
            id: 1828, price: '', section: 21
        },
        {
            id: 1829, price: '', section: 21
        },
        {
            id: 1830, price: '', section: 21
        },
        {
            id: 1831, price: '', section: 21
        },
        {
            id: 1832, price: '', section: 22
        },
        {
            id: 1833, price: '', section: 22
        },
        {
            id: 1834, price: '', section: 22
        },
        {
            id: 1835, price: '', section: 22
        },
        {
            id: 1836, price: '', section: 22
        },
        {
            id: 1837, price: '', section: 22
        },
        {
            id: 1838, price: '', section: 22
        },
        {
            id: 1839, price: '', section: 22
        },
        {
            id: 1840, price: '', section: 22
        },
        {
            id: 1841, price: '', section: 22
        },
        {
            id: 1842, price: '', section: 22
        },
        {
            id: 1843, price: '', section: 22
        },
        {
            id: 1844, price: '', section: 22
        },
        {
            id: 1845, price: '', section: 22
        },
        {
            id: 1846, price: '', section: 22
        },
        {
            id: 1847, price: '', section: 22
        },
        {
            id: 1848, price: '', section: 22
        },
        {
            id: 1849, price: '', section: 22
        },
        {
            id: 1850, price: '', section: 22
        },
        {
            id: 1851, price: '', section: 22
        },
        {
            id: 1852, price: '', section: 22
        },
        {
            id: 1853, price: '', section: 20
        },
        {
            id: 1854, price: '', section: 20
        },
        {
            id: 1855, price: '', section: 20
        },
        {
            id: 1856, price: '', section: 20
        },
        {
            id: 1857, price: '', section: 20
        },
        {
            id: 1858, price: '', section: 20
        },
        {
            id: 1859, price: '', section: 20
        },
        {
            id: 1860, price: '', section: 20
        },
        {
            id: 1861, price: '', section: 20
        },
        {
            id: 1862, price: '', section: 20
        },
        {
            id: 1863, price: '', section: 20
        },
        {
            id: 1864, price: '', section: 20
        },
        {
            id: 1865, price: '', section: 20
        },
        {
            id: 1866, price: '', section: 20
        },
        {
            id: 1867, price: '', section: 20
        },
        {
            id: 1868, price: '', section: 20
        },
        {
            id: 1869, price: '', section: 20
        },
        {
            id: 1870, price: '', section: 20
        },
        {
            id: 1871, price: '', section: 20
        },
        {
            id: 1872, price: '', section: 20
        },
        {
            id: 1873, price: '', section: 21
        },
        {
            id: 1874, price: '', section: 21
        },
        {
            id: 1875, price: '', section: 21
        },
        {
            id: 1876, price: '', section: 21
        },
        {
            id: 1877, price: '', section: 21
        },
        {
            id: 1878, price: '', section: 21
        },
        {
            id: 1879, price: '', section: 21
        },
        {
            id: 1880, price: '', section: 21
        },
        {
            id: 1881, price: '', section: 21
        },
        {
            id: 1882, price: '', section: 21
        },
        {
            id: 1883, price: '', section: 21
        },
        {
            id: 1884, price: '', section: 21
        },
        {
            id: 1885, price: '', section: 21
        },
        {
            id: 1886, price: '', section: 21
        },
        {
            id: 1887, price: '', section: 21
        },
        {
            id: 1888, price: '', section: 21
        },
        {
            id: 1889, price: '', section: 21
        },
        {
            id: 1890, price: '', section: 21
        },
        {
            id: 1891, price: '', section: 21
        },
        {
            id: 1892, price: '', section: 21
        },
        {
            id: 1893, price: '', section: 21
        },
        {
            id: 1894, price: '', section: 22
        },
        {
            id: 1895, price: '', section: 22
        },
        {
            id: 1896, price: '', section: 22
        },
        {
            id: 1897, price: '', section: 22
        },
        {
            id: 1898, price: '', section: 22
        },
        {
            id: 1899, price: '', section: 22
        },
        {
            id: 1900, price: '', section: 22
        },
        {
            id: 1901, price: '', section: 22
        },
        {
            id: 1902, price: '', section: 22
        },
        {
            id: 1903, price: '', section: 22
        },
        {
            id: 1904, price: '', section: 22
        },
        {
            id: 1905, price: '', section: 22
        },
        {
            id: 1906, price: '', section: 22
        },
        {
            id: 1907, price: '', section: 22
        },
        {
            id: 1908, price: '', section: 22
        },
        {
            id: 1909, price: '', section: 22
        },
        {
            id: 1910, price: '', section: 22
        },
        {
            id: 1911, price: '', section: 22
        },
        {
            id: 1912, price: '', section: 22
        },
        {
            id: 1913, price: '', section: 22
        },
        {
            id: 1914, price: '', section: 20
        },
        {
            id: 1915, price: '', section: 20
        },
        {
            id: 1916, price: '', section: 20
        },
        {
            id: 1917, price: '', section: 20
        },
        {
            id: 1918, price: '', section: 20
        },
        {
            id: 1919, price: '', section: 20
        },
        {
            id: 1920, price: '', section: 20
        },
        {
            id: 1921, price: '', section: 20
        },
        {
            id: 1922, price: '', section: 20
        },
        {
            id: 1923, price: '', section: 20
        },
        {
            id: 1924, price: '', section: 20
        },
        {
            id: 1925, price: '', section: 20
        },
        {
            id: 1926, price: '', section: 20
        },
        {
            id: 1927, price: '', section: 20
        },
        {
            id: 1928, price: '', section: 20
        },
        {
            id: 1929, price: '', section: 20
        },
        {
            id: 1930, price: '', section: 20
        },
        {
            id: 1931, price: '', section: 20
        },
        {
            id: 1932, price: '', section: 20
        },
        {
            id: 1933, price: '', section: 21
        },
        {
            id: 1934, price: '', section: 21
        },
        {
            id: 1935, price: '', section: 21
        },
        {
            id: 1936, price: '', section: 21
        },
        {
            id: 1937, price: '', section: 21
        },
        {
            id: 1938, price: '', section: 21
        },
        {
            id: 1939, price: '', section: 21
        },
        {
            id: 1940, price: '', section: 21
        },
        {
            id: 1941, price: '', section: 21
        },
        {
            id: 1942, price: '', section: 21
        },
        {
            id: 1943, price: '', section: 21
        },
        {
            id: 1944, price: '', section: 21
        },
        {
            id: 1945, price: '', section: 21
        },
        {
            id: 1946, price: '', section: 21
        },
        {
            id: 1947, price: '', section: 21
        },
        {
            id: 1948, price: '', section: 21
        },
        {
            id: 1949, price: '', section: 21
        },
        {
            id: 1950, price: '', section: 21
        },
        {
            id: 1951, price: '', section: 21
        },
        {
            id: 1952, price: '', section: 21
        },
        {
            id: 1953, price: '', section: 21
        },
        {
            id: 1954, price: '', section: 21
        },
        {
            id: 1955, price: '', section: 22
        },
        {
            id: 1956, price: '', section: 22
        },
        {
            id: 1957, price: '', section: 22
        },
        {
            id: 1958, price: '', section: 22
        },
        {
            id: 1959, price: '', section: 22
        },
        {
            id: 1960, price: '', section: 22
        },
        {
            id: 1961, price: '', section: 22
        },
        {
            id: 1962, price: '', section: 22
        },
        {
            id: 1963, price: '', section: 22
        },
        {
            id: 1964, price: '', section: 22
        },
        {
            id: 1965, price: '', section: 22
        },
        {
            id: 1966, price: '', section: 22
        },
        {
            id: 1967, price: '', section: 22
        },
        {
            id: 1968, price: '', section: 22
        },
        {
            id: 1969, price: '', section: 22
        },
        {
            id: 1970, price: '', section: 22
        },
        {
            id: 1971, price: '', section: 22
        },
        {
            id: 1972, price: '', section: 22
        },
        {
            id: 1973, price: '', section: 22
        },
        {
            id: 1974, price: '', section: 22
        },
        {
            id: 1975, price: '', section: 23
        },
        {
            id: 1976, price: '', section: 23
        },
        {
            id: 1977, price: '', section: 23
        },
        {
            id: 1978, price: '', section: 23
        },
        {
            id: 1979, price: '', section: 23
        },
        {
            id: 1980, price: '', section: 23
        },
        {
            id: 1981, price: '', section: 23
        },
        {
            id: 1982, price: '', section: 23
        },
        {
            id: 1983, price: '', section: 23
        },
        {
            id: 1984, price: '', section: 23
        },
        {
            id: 1985, price: '', section: 23
        },
        {
            id: 1986, price: '', section: 23
        },
        {
            id: 1987, price: '', section: 23
        },
        {
            id: 1988, price: '', section: 23
        },
        {
            id: 1989, price: '', section: 23
        },
        {
            id: 1990, price: '', section: 23
        },
        {
            id: 1991, price: '', section: 23
        },
        {
            id: 1992, price: '', section: 23
        },
        {
            id: 1993, price: '', section: 23
        },
        {
            id: 1994, price: '', section: 23
        },
        {
            id: 1995, price: '', section: 23
        },
        {
            id: 1996, price: '', section: 23
        },
        {
            id: 1997, price: '', section: 23
        },
        {
            id: 1998, price: '', section: 23
        },
        {
            id: 1999, price: '', section: 23
        },
        {
            id: 2000, price: '', section: 23
        },
        {
            id: 2001, price: '', section: 23
        },
        {
            id: 2002, price: '', section: 23
        },
        {
            id: 2003, price: '', section: 23
        },
        {
            id: 2004, price: '', section: 23
        },
        {
            id: 2005, price: '', section: 23
        },
        {
            id: 2006, price: '', section: 23
        },
        {
            id: 2007, price: '', section: 23
        },
        {
            id: 2008, price: '', section: 23
        },
        {
            id: 2009, price: '', section: 23
        },
        {
            id: 2010, price: '', section: 23
        },
        {
            id: 2011, price: '', section: 23
        },
        {
            id: 2012, price: '', section: 23
        },
        {
            id: 2013, price: '', section: 23
        },
        {
            id: 2014, price: '', section: 23
        },
        {
            id: 2015, price: '', section: 23
        },
        {
            id: 2016, price: '', section: 23
        },
        {
            id: 2017, price: '', section: 23
        },
        {
            id: 2018, price: '', section: 23
        },
        {
            id: 2019, price: '', section: 23
        },
        {
            id: 2020, price: '', section: 23
        },
        {
            id: 2021, price: '', section: 23
        },
        {
            id: 2022, price: '', section: 23
        },
        {
            id: 2023, price: '', section: 23
        },
        {
            id: 2024, price: '', section: 23
        },
        {
            id: 2025, price: '', section: 23
        },
        {
            id: 2026, price: '', section: 23
        },
        {
            id: 2027, price: '', section: 23
        },
        {
            id: 2028, price: '', section: 23
        },
        {
            id: 2029, price: '', section: 23
        },
        {
            id: 2030, price: '', section: 23
        },
        {
            id: 2031, price: '', section: 23
        },
        {
            id: 2032, price: '', section: 23
        },
        {
            id: 2033, price: '', section: 23
        },
        {
            id: 2034, price: '', section: 23
        },
        {
            id: 2035, price: '', section: 23
        },
        {
            id: 2036, price: '', section: 23
        },
        {
            id: 2037, price: '', section: 23
        },
        {
            id: 2038, price: '', section: 23
        },
        {
            id: 2039, price: '', section: 23
        },
        {
            id: 2040, price: '', section: 23
        },
        {
            id: 2041, price: '', section: 23
        },
    ])

    useEffect(() => {
        let arr = [...seansArr]
        secion.map((elm, index) => {
            arr.map((e, i) => {
                if (e.section === elm.section) {
                    e.price = elm.price
                }
            })
        })
        setSeansArr(arr)
    }, [])


    const getPrice = (y, i, x) => {
        setPosition({ x, y })
        let row = null
        let seat = 0
        let price = null
        let amfiteatr = false
        let seats = []
        const result = coordinatesState.filter((elm) => elm.y === y);
        const index = result.findIndex((elm) => elm.x === x)
        if (y === 885) {
            row = 1
            seat = 2041 - i
            amfiteatr = true
        }
        else if (y === 866) {
            row = 2
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 847) {
            row = 3
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 828) {
            row = 4
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 809) {
            row = 5
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 789) {
            row = 6
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 770) {
            row = 7
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 751) {
            row = 8
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 732) {
            row = 9
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 713) {
            row = 10
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 674) {
            row = 11
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 655) {
            row = 12
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 635) {
            row = 13
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 616) {
            row = 14
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 597) {
            row = 15
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 559) {
            row = 16
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 540) {
            row = 17
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 521) {
            row = 18
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 502) {
            row = 19
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 483) {
            row = 20
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 432) {
            row = 1
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 413) {
            row = 2
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 394) {
            row = 3
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 375) {
            row = 4
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 355) {
            row = 5
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 336) {
            row = 6
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 317) {
            row = 7
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 273) {
            row = 8
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 253) {
            row = 9
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 234) {
            row = 10
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 215) {
            row = 11
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 196) {
            row = 12
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 177) {
            row = 13
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 158) {
            row = 14
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 139) {
            row = 15
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 120) {
            row = 16
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 101) {
            row = 17
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 82) {
            row = 18
            seat = result.length - index
            amfiteatr = true
        }
        else if (y === 62) {
            row = 19
            seat = result.length - index
            amfiteatr = true
        }
        else {
            row = 2
            amfiteatr = false
        }
        price = seansArr[2040 - i].price
        setActiveTicket({
            row: row,
            price: price,
            bench: seat,
            id: i
        })
        setShowModal(true)
    }

    const addTicket = (i) => {
        let data = [...coordinatesState]
        data[i].active = !data[i].active
        if (data[i].active) {
            dispatch(SetTicketsAction(activeTicket))
        }
        else {
            dispatch(RemoveTicketsAction(activeTicket))
        }
        setCoordinatesState(data)
    }

    useEffect(() => {
        const image = new Image()
        image.src = require('../../assets/ActualPlan.png')

        image.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = image.width
            canvas.height = image.height
            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0, image.width, image.height)

            const imageData = ctx.getImageData(0, 0, image.width, image.height)
            const pixelData = imageData.data
            const coordinates = []

            for (let y = 0; y < image.height; y++) {
                for (let x = 0; x < image.width; x++) {
                    const offset = (y * image.width + x) * 4
                    const r = pixelData[offset]
                    const g = pixelData[offset + 1]
                    const b = pixelData[offset + 2]

                    if (r >= 100 && g <= 30 && b <= 30) {
                        coordinates.push({ x, y, active: false, id: coordinates.length })
                    }
                }
            }
            setCoordinatesState(coordinates)
        };
    }, []);

    // useEffect(() => {
    //     let data = [...coordinatesState]
    //     data?.map((elm, i) => {
    //         const index = tickets.tickets.findIndex(({ id }) => id === elm.id);
    //         if (index >= 0) {
    //             elm.active = true
    //         } else {
    //             elm.active = false
    //         }
    //     })

    // }, [tickets])


    return (
        <div className='hallWrapper'>
            <div className='hall' >
                <div >
                    <img alt='' src={require('../../assets/ActualPlan.png')} />
                    {coordinatesState.map((e, i) => {
                        if (seansArr[2040 - i].price)
                            return <button
                                key={i}
                                onMouseOver={() => {
                                    getPrice(e.y, i, e.x)
                                    setActiveButton(i)
                                    dispatch(GetSeat({ row: 1, seat: 1 }))
                                }}
                                style={
                                    {
                                        position: 'absolute',
                                        top: e?.y - 4,
                                        left: e?.x - 4,
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: e.active && 'green'
                                    }
                                }
                                className={[
                                    i == activeButton ? 'activeButton' : '',
                                    e.active ? "addTicketButton" : '']}
                                onMouseLeave={() => {
                                    setShowModal(false)
                                    setActiveButton(null)
                                }}
                                onClick={() => addTicket(i)}
                            />
                    })}

                    {showModal &&
                        <div style={{ top: position.y, left: position.x, position: 'absolute' }} className='parter'>
                            <p className='Teatertext'>շարք {activeTicket.row}</p>
                            <p className='Teatertext'>տեղ {activeTicket.bench}</p>
                            <p className='Teatertext'>դրամ {activeTicket.price}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default PhotoCoordinatesByColor
