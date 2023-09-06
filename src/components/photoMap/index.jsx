import './style.css'
import { Cart } from '../svg'
import { CartPopup } from '../popup/cart'
import { useEffect, useState } from 'react'

const PhotoCoordinatesByColor = () => {

    const [coordinatesState, setCoordinatesState] = useState([])
    const [activeTicket, setActiveTicket] = useState({})
    const [position, setPosition] = useState({ x: '', y: '' })
    const [showModal, setShowModal] = useState(false)
    const [activeButton, setActiveButton] = useState(null)
    const [tickets, setTikets] = useState([])
    const [positionleft, setPositionleft] = useState(3.5)
    const [openCart, setOpenCart] = useState(false)

    const Price = [
        [10000, 20000, 10000, 20000],
        [24000, 33000, 11000, 24000],
    ]

    const getPrice = (y, i, x) => {
        setPosition({ x: x, y: y })
        let row = null
        let price = null
        if (y === 62) {
            row = 0
        }
        else {
            row = 1
        }
        price = Price[row][i]
        setActiveTicket({
            row: row + 1,
            price: price,
            bench: i + 1
        })
        setShowModal(true)
    }

    const addTicket = () => {
        let item = [...tickets]
        item.push(activeTicket)
        setTikets(item)
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
                        coordinates.push({ x, y })

                    }
                }
            }

            setCoordinatesState(coordinates)
        };
    }, []);
}
return (
    <div className='hall'>
        {openCart &&
            <CartPopup
                open={openCart}
                setOpen={setOpenCart}
            />
        }
        <img alt='' src={require('../../assets/ActualPlan.png')} />
        {coordinatesState.map((e, i) => {
            return <button
                key={i}
                onMouseOver={() => {
                    getPrice(e.y, i, e.x)
                    setActiveButton(i)
                }}
                style={{
                    position: 'absolute',
                    top: e?.y - 4,
                    left: e?.x - 4,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer'
                }}
                className={i == activeButton ? 'activeButton' : ''}
                onMouseLeave={() => {
                    setShowModal(false)
                    setActiveButton(null)
                }}
                onClick={() => addTicket()}
            />
        })}

        {showModal &&
            <div style={{ top: position.y, left: position.x, position: 'absolute' }} className='parter'>
                <p className='text'>շարք {activeTicket.row}</p>
                <p className='text'>տեղ {activeTicket.bench}</p>
                <p className='text'>դրամ {activeTicket.price}</p>
            </div>
        }

        <div className='cartLine'><div onClick={() => setOpenCart(true)}><Cart /> 3</div></div>
    </div>
)


export default PhotoCoordinatesByColor
