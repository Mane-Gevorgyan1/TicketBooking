import './style.css'
import { SearchInput } from '../SearchInput'

export const SearchEvent = () => {
    return (
        <div className='searchEvent'>
            <p>You can find your preferred event with Ticket.com</p>
            <SearchInput placeholder={'Specify your preferred style'} />
        </div>
    )
}