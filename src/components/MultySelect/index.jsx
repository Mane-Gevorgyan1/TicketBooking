import { useState } from 'react'
import { MultysElectSvg, OpenMulTyselect } from '../svg'
import './styles.css'
export const MultySelect = ({ title }) => {
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
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>
            <div>Big Hall</div>

        </div>}
    </div>
}