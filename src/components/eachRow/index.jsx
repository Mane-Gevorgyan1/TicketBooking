import './style.css'
import { EachSeat } from '../eachSeat'

export const EachRow = ({ row }) => {
    console.log('row', row);

    return (
        <div className='eachRow'>
            {row.map((seat, index) => (
                <EachSeat seat={seat} key={index} />
            ))}
        </div>
    )
}