import './style.css'
import { useEffect, useState } from 'react'
import { GetSeat } from '../../services/action/ticket_action'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveTicketsAction, SetTicketsAction } from '../../services/action/action'

const PhotoCoordinatesByColor = () => {
    const dispatch = useDispatch()
    const [coordinatesState, setCoordinatesState] = useState([])
    const [activeTicket, setActiveTicket] = useState({})
    const [position, setPosition] = useState({ x: '', y: '' })
    const [showModal, setShowModal] = useState(false)
    const [activeButton, setActiveButton] = useState(null)
    const ticket = useSelector((st) => st.Ticket_reducer)
    const tickets = useSelector((st) => st.tiketsForBuy)
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
            seat = 2041 - i
            amfiteatr = true
        }
        else if (y === 62) {
            row = 19
            seat = 2041 - i
            amfiteatr = true
        }
        else {
            row = 2
            amfiteatr = false
        }
        price = ticket?.ticket?.length > 0 && ticket?.ticket?.filter((item) => item.seat === seat && item.row === row);
        setActiveTicket({
            row: row,
            price: price.length > 0 && price[0].price,
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

    useEffect(() => {
        let data = [...coordinatesState]
        data?.map((elm, i) => {
            const index = tickets.tickets.findIndex(({ id }) => id === elm.id);
            if (index >= 0) {
                elm.active = true
            } else {
                elm.active = false
            }
        })

    }, [tickets])


    return (
        <div className='hallWrapper'>
            <div className='hall' >
                <div >
                    <img alt='' src={require('../../assets/ActualPlan.png')} />
                    {coordinatesState.map((e, i) => {
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
                    {/* <div className='cartLine'><div onClick={() => setOpenCart(true)}><Cart />{tickets.length}</div></div> */}
                </div>
            </div>
        </div>
    )
}
export default PhotoCoordinatesByColor
