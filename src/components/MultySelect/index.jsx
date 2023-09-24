import { useState } from 'react'
import { MultysElectSvg, OpenMulTyselect } from '../svg'
import './styles.css'
export const MultySelect = ({ title, onClick }) => {
    const item = ['Big Hall', 'Big Hall', 'Big Hall', 'Big Hall', 'Big Hall']
    const [open, setOpen] = useState(false)
    return <div>
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

                return <div onClick={() => onClick(elm)}>{elm}</div>
            })}
        </div>}
    </div>
}