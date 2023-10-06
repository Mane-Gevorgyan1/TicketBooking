import { useState } from 'react'
import { MultysElectSvg, OpenMulTyselect } from '../svg'
import './styles.css'
export const MultySelect = ({ title, onClick, item = [] }) => {
    const [open, setOpen] = useState(false)
    document.body.addEventListener('click', function () {
        setOpen(false)
    });
    return <div onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setOpen(!open)
    }}>
        <div className='Multyselect'>
            <p>{title}</p>
            {open ?
                <div onClick={() => setOpen(false)}>
                    <OpenMulTyselect />
                </div>
                :
                <div onClick={() => setOpen(true)}>
                    <MultysElectSvg />
                </div>}
        </div>
        {open && <div className='MultyselectItem'>
            {item.map((elm, i) => {
                return <div onClick={() => onClick(elm)}>{elm?.hall}</div>
            })}
        </div>}
    </div>
}