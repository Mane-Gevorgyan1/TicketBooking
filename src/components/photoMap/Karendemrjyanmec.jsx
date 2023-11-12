import './style.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RemoveTicketsAction, SetTicketsAction } from '../../services/action/action'

const AramKhachatryan = ({ secion, soldTickets, sessionID }) => {
    const dispatch = useDispatch()
    const [coordinatesState, setCoordinatesState] = useState([])
    const [activeTicket, setActiveTicket] = useState({})
    const [position, setPosition] = useState({ x: '', y: '' })
    const [showModal, setShowModal] = useState(false)
    const [activeButton, setActiveButton] = useState(null)


    const getPrice = (y, i, x, price, row) => {
        setPosition({ x, y })
        let seat = 0
        let result = []
        let index = 0
        if ((i >= 676 && i <= 6622)) {
            if ((i > 3228 && i < 4438) || (i >= 703 && i <= 755) || (i >= 785 && i <= 835) || (i >= 852 && i <= 901) || (i >= 936 && i <= 983) || (i >= 1020 && i <= 1063) || (i >= 1104 && i <= 1147) || (i >= 1208 && i <= 1249)) {
                result = coordinatesState.filter((elm) => elm.y === y);
                index = result.findIndex((elm) => elm.x === x)
                seat = result.length - (result.length - index - 1)
            }
            else {
                result = coordinatesState.filter((elm) => elm.x === x);
                index = result.findIndex((elm) => elm.y === y)
                seat = result.length - (index)
            }
        }
        else {
            result = coordinatesState.filter((elm) => elm.y === y);
            index = result.findIndex((elm) => elm.x === x)
            seat = result.length - (result.length - index - 1)
        }
        setActiveTicket({
            row: row,
            price: price,
            bench: seat,
            id: i,
            sessionId: sessionID,
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
        image.src = require('../../assets/hamalir7000.png')
        if (!coordinatesState.length && secion.length > 0)
            image.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = image.width
                canvas.height = image.height
                const ctx = canvas.getContext('2d')
                ctx.drawImage(image, 0, 0, image.width, image.height)

                const imageData = ctx.getImageData(0, 0, image.width, image.height)
                const pixelData = imageData.data
                const coordinates = []
                let id = 0
                for (let y = 0; y < image.height; y++) {
                    for (let x = 0; x < image.width; x++) {
                        const offset = (y * image.width + x) * 4
                        const r = pixelData[offset]
                        const g = pixelData[offset + 1]
                        const b = pixelData[offset + 2]
                        if (r >= 100 && g <= 30 && b <= 30) {
                            id = coordinates.length
                            let row = 1
                            let row2 = 1
                            let section = 0
                            if (y === 626) {
                                row = 1
                                row2 = 1
                            }
                            else if (y === 601) {
                                row = 2
                                row2 = 2
                            }
                            else if (y === 577) {
                                row = 3
                                row2 = 3
                            }
                            else if (y === 552) {
                                row = 4
                                row2 = 4
                            }
                            else if (y === 527) {
                                row = 5
                                row2 = 5
                            }
                            else if (y === 503) {
                                row = 6
                                row2 = 6
                            }
                            else if (y === 478) {
                                row = 7
                                row2 = 7
                            }
                            else if (y === 419) {
                                row = 8
                                row2 = 1
                            }
                            else if (y === 395) {
                                row = 9
                                row2 = 2
                            }
                            else if (y === 370) {
                                row = 10
                                row2 = 3
                            }
                            else if (y === 346) {
                                row = 11
                                row2 = 4
                            }
                            else if (y === 321) {
                                row = 12
                                row2 = 5
                            }
                            else if (y === 296) {
                                row = 13
                                row2 = 6
                            }
                            else if (y === 272) {
                                row = 14
                                row2 = 7
                            }
                            else if (y === 247) {
                                row = 15
                                row2 = 8
                            }
                            else if (y === 223) {
                                row = 16
                                row2 = 9
                            }
                            else if (y === 198) {
                                row = 17
                                row2 = 10
                            }
                            else if (y === 174) {
                                row = 18
                                row2 = 11
                            }
                            else if (x === 515) {
                                row = 9
                                row2 = 1
                            }
                            else if (x === 492) {
                                row = 10
                                row2 = 2
                            }
                            else if (x === 469) {
                                row = 11
                                row2 = 3
                            }
                            else if (x === 445) {
                                row = 12
                                row2 = 3
                            }
                            else if (x === 422) {
                                row = 13
                                row2 = 4
                            }
                            else if (x === 398) {
                                row = 14
                                row2 = 5
                            }
                            else if (x === 375) {
                                row = 15
                                row2 = 6
                            }
                            else if (x === 352) {
                                row = 16
                                row2 = 7
                            }
                            else if (x === 328) {
                                row = 17
                                row2 = 8
                            }

                            else if (x === 305) {
                                row = 18
                                row2 = 9
                            }
                            else if (x === 281) {
                                row = 19
                                row2 = 10
                            }
                            else if (x === 258) {
                                row = 20
                                row2 = 11
                            }
                            else if (x === 235) {
                                row = 21
                                row2 = 12
                            }
                            else if (x === 211) {
                                row = 22
                                row2 = 13
                            }
                            else if (x === 188) {
                                row = 23
                                row2 = 14
                            }
                            else if (x === 164) {
                                row = 24
                                row2 = 15
                            }
                            else if (x === 141) {
                                row = 25
                                row2 = 16
                            }
                            else if (x === 118) {
                                row = 26
                                row2 = 17
                            }
                            else if (x === 579) {
                                row = 8
                                row2 = 8
                            }
                            else if (x === 603) {
                                row = 7
                                row2 = 7
                            }
                            else if (x === 626) {
                                row = 6
                                row2 = 6
                            }
                            else if (x === 650) {
                                row = 5
                                row2 = 5
                            }
                            else if (x === 673) {
                                row = 4
                                row2 = 4
                            }
                            else if (x === 696) {
                                row = 3
                                row2 = 3
                            }
                            else if (x === 720) {
                                row = 2
                                row2 = 2
                            }
                            else if (x === 743) {
                                row = 1
                                row2 = 1
                            }
                            else if (y === 1496) {
                                row = 1
                                row2 = 1
                            }
                            else if (y === 1473) {
                                row = 2
                                row2 = 2
                            }
                            else if (y === 1449) {
                                row = 3
                                row2 = 3
                            }
                            else if (y === 1426) {
                                row = 4
                                row2 = 4
                            }
                            else if (y === 1402) {
                                row = 5
                                row2 = 5
                            }
                            else if (y === 1379) {
                                row = 6
                                row2 = 6
                            }
                            else if (y === 1356) {
                                row = 7
                                row2 = 7
                            }
                            else if (y === 1332) {
                                row = 8
                                row2 = 8
                            }
                            else if (y === 1309) {
                                row = 9
                                row2 = 9
                            }
                            else if (y === 1285) {
                                row = 10
                                row2 = 10
                            }
                            else if (x === 1841) {
                                row = 1
                                row2 = 1
                            }
                            else if (x === 1865) {
                                row = 2
                                row2 = 2
                            }
                            else if (x === 1888) {
                                row = 3
                                row2 = 3
                            }
                            else if (x === 1912) {
                                row = 4
                                row2 = 4
                            }
                            else if (x === 1935) {
                                row = 5
                                row2 = 5
                            }
                            else if (x === 1958) {
                                row = 6
                                row2 = 6
                            }
                            else if (x === 1982) {
                                row = 7
                                row2 = 7
                            }
                            else if (x === 2005) {
                                row = 8
                                row2 = 8
                            }
                            else if (x === 2072) {
                                row = 9
                                row2 = 1
                            }
                            else if (x === 2095) {
                                row = 10
                                row2 = 2
                            }

                            else if (x === 2119) {
                                row = 11
                                row2 = 3
                            }
                            else if (x === 2142) {
                                row = 12
                                row2 = 4
                            }
                            else if (x === 2166) {
                                row = 13
                                row2 = 5
                            }
                            else if (x === 2189) {
                                row = 14
                                row2 = 6
                            }
                            else if (x === 2212) {
                                row = 15
                                row2 = 7
                            }
                            else if (x === 2236) {
                                row = 16
                                row2 = 8
                            }
                            else if (x === 2259) {
                                row = 17
                                row2 = 9
                            }
                            else if (x === 2282) {
                                row = 18
                                row2 = 10
                            }
                            else if (x === 2306) {
                                row = 19
                                row2 = 11
                            }
                            else if (x === 2329) {
                                row = 20
                                row2 = 12
                            }
                            else if (x === 2353) {
                                row = 21
                                row2 = 13
                            }
                            else if (x === 2376) {
                                row = 22
                                row2 = 14
                            }

                            else if (x === 2399) {
                                row = 23
                                row2 = 15
                            }

                            else if (x === 2423) {
                                row = 24
                                row2 = 16
                            }
                            else if (x === 2446) {
                                row = 25
                                row2 = 17
                            }
                            else if (x === 2470) {
                                row = 26
                                row2 = 18
                            }
                            else if (x === 2493) {
                                row = 27
                                row2 = 19
                            }
                            else if (x === 2516) {
                                row = 28
                                row2 = 20
                            }
                            else if (x === 2540) {
                                row = 29
                                row2 = 21
                            }






                            if ((id >= 703 && id <= 711) || (id >= 785 && id <= 792) || (id >= 852 && id <= 859) || (id >= 936 && id <= 942) || (id <= 1025 && id >= 1020) || (id <= 1212 && id >= 1208) || (id <= 1109 && id >= 1104 && (x >= 933 && x <= 1005))) {

                                section = 5
                            }
                            else if (((id >= 712 && id <= 729) || (id >= 793 && id <= 810) || (id >= 860 && id <= 876) || (id >= 943 && id <= 959) || (id <= 1041 && id >= 1026) || (id <= 1125 && id >= 1100 && (x >= 1055 && x < 2212)) || (id <= 1228 && id >= 1213))) {
                                section = 6
                            }
                            else if ((id >= 730 && id <= 746) || (id >= 811 && id <= 827) || (id >= 877 && id <= 893) || (id >= 960 && id <= 976) || (id <= 1057 && id >= 1042) || (id <= 1141 && id >= 1126) || (id <= 1244 && id >= 1229)) {
                                section = 7
                            }
                            else if ((id >= 747 && id <= 755) || (id >= 828 && id <= 835) || (id >= 894 && id <= 901) || (id >= 977 && id <= 983) || (id <= 1063 && id >= 1058) || (id <= 1147 && id >= 1142) || (id <= 1249 && id >= 1245)) {
                                section = 8
                            }
                            else if ((id <= 646 && id >= 632) || (id <= 602 && id >= 588) || (id <= 558 && id >= 544) || (id <= 514 && id >= 500) || (id <= 458 && id >= 438) || (id <= 396 && id >= 376) || (id <= 334 && id >= 314) || (id <= 271 && id >= 251) || (id <= 209 && id >= 189) || (id <= 147 && id >= 128) || (id <= 86 && id >= 67)) {
                                section = 4
                            }
                            else if ((id <= 660 && id >= 647) || (id <= 616 && id >= 603) || (id <= 572 && id >= 559) || (id <= 528 && id >= 515) || (id <= 478 && id >= 459) || (id <= 416 && id >= 397) || (id <= 354 && id >= 335) || (id <= 292 && id >= 272) || (id <= 230 && id >= 210) || (id <= 168 && id >= 148) || (id <= 108 && id >= 87)) {
                                section = 3
                            }
                            else if ((id <= 675 && id >= 661) || (id <= 631 && id >= 617) || (id <= 587 && id >= 573) || (id <= 543 && id >= 529) || (id <= 499 && id >= 479) || (id <= 437 && id >= 417) || (id <= 375 && id >= 355) || (id <= 313 && id >= 293) || (id <= 250 && id >= 231) || (id <= 188 && id >= 169) || (id <= 127 && id >= 109)) {
                                section = 2
                            }
                            else if (id <= 66 && id >= 0) {
                                section = 1
                                row = 19
                                row2 = 1
                            }
                            else if ((id == 676 || id == 677) || (id >= 678 && id <= 683) || (id >= 690 && id <= 696) || (id >= 756 && id <= 762) || (id >= 770 && id <= 776) || (id >= 836 && id <= 843) || (id >= 902 && id <= 909) || (id >= 918 && id <= 926) || (id >= 984 && id <= 992) || (id >= 1002 && id <= 1010) || (id >= 1064 && id <= 1073) || (id >= 1084 && id <= 1093) || (id >= 1148 && id <= 1157) || (id >= 1180 && id <= 1190) || (id >= 1256 && id <= 1266) || (id >= 1290 && id <= 1300) || (id >= 1324 && id <= 1335) || (id >= 1359 && id <= 1370) || (id >= 1395 && id <= 1406)) {
                                section = 9
                            }
                            else if ((y <= 948 && y >= 722) && (x >= 118 && x <= 445)) {
                                section = 10
                            }
                            else if ((y <= 1227 && y >= 993) && (x >= 71 && x <= 515)) {
                                section = 11
                            }
                            else if ((y <= 1507 && y >= 1273) && (x >= 47 && x <= 445)) {
                                section = 12
                            }
                            else if ((y <= 1780 && y >= 1546) && (x >= 71 && x <= 515)) {
                                section = 13
                            }
                            else if ((y <= 2046 && y >= 1825) && (x >= 118 && x <= 445)) {
                                section = 14
                            }
                            else if ((y <= 2313 && y >= 2092) && (x >= 258 && x <= 515)) {
                                section = 15
                            }
                            else if ((y <= 801 && y >= 606) && (x >= 579 && x <= 696)) {
                                section = 16
                            } else if ((y >= 1974 && y <= 2169) && (x >= 579 && x <= 696)) {
                                section = 22
                            }
                            else if (x >= 579 && x <= 743) {
                                if (y >= 844 && y <= 1026) {
                                    section = 17
                                }
                                else if (y >= 1071 && y <= 1253) {
                                    section = 18
                                }
                                else if (y >= 1298 && y <= 1480) {
                                    section = 19
                                }
                                else if (y >= 1519 && y <= 1701) {
                                    section = 20
                                }
                                else if (y >= 1747 && y <= 1929) {
                                    section = 21
                                }
                            }
                            else if ((y >= 1285 && y <= 1496) && (x >= 918 && x <= 1236)) {
                                section = 23
                            }
                            else if ((y >= 1285 && y <= 1496) && (x >= 1285 && x <= 1605)) {
                                section = 24
                            }
                            else if ((y >= 617 && y <= 799) && (x >= 1888 && x <= 2005)) {
                                section = 25
                            }
                            else if ((y >= 1973 && y <= 2155) && (x >= 1888 && x <= 2005)) {
                                section = 31
                            }
                            else if (x >= 1841 && x <= 2005) {
                                if (y >= 845 && y <= 1027) {
                                    section = 26
                                }
                                if (y >= 1069 && y <= 1251) {
                                    section = 27
                                }
                                if (y >= 1297 && y <= 1479) {
                                    section = 28
                                }
                                if (y >= 1524 && y <= 1706) {
                                    section = 29
                                }
                                if (y >= 1747 && y <= 1929) {
                                    section = 30
                                }
                            }
                            else if ((y >= 463 && y <= 697) && (x >= 2072 && x <= 2329)) {
                                section = 32
                            }
                            else if ((y >= 728 && y <= 962) && (x >= 2142 && x <= 2470)) {
                                section = 33
                            }
                            else if ((y >= 1006 && y <= 1227) && (x >= 2072 && x <= 2516)) {
                                section = 34
                            }
                            else if ((y >= 1273 && y <= 1507) && (x >= 2142 && x <= 2540)) {
                                section = 35
                            }
                            else if ((y >= 1546 && y <= 1780) && (x >= 2072 && x <= 2516)) {
                                section = 36
                            }
                            else if ((y >= 1825 && y <= 2046) && (x >= 2142 && x <= 2470)) {
                                section = 37
                            }
                            else if ((y >= 2092 && y <= 2326) && (x >= 2072 && x <= 2329)) {
                                section = 38
                            }

                            let item = secion?.filter((elm) => elm.section === section);
                            let rows = item[0]?.price.filter((elm) => elm?.row === row2);

                            let price = 0
                            if (rows?.length) {
                                price = rows[0].price
                            }
                            let sold = soldTickets.findIndex((elm) => elm.id == id)
                            coordinates.push({ x, y, active: false, id: coordinates.length, row: row, section: section, price: price, sold: sold >= 0, id: id })
                        }
                    }
                }
                setCoordinatesState(coordinates)
            };
    }, [secion]);

    return (

        <div className='hallWrapper'>

            <div className='hall' >
                <div >
                    <img alt='' src={require('../../assets/hamalir7000.png')} />
                    {coordinatesState.map((e, i) => {
                        if (e.price && !e.sold)
                            return <button
                                key={i}
                                onMouseOver={() => {
                                    getPrice(e.y, i, e.x, e.price, e.row)
                                    setActiveButton(i)
                                }}
                                style={
                                    {
                                        top: e?.y - 4,
                                        left: e?.x - 4,
                                        backgroundColor: e.active && 'green'
                                    }
                                }
                                id='seatStyle'
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
export default AramKhachatryan
