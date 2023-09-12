import './style.css'
import { Header } from '../../components/Header/index'
import { SearchInput } from '../../components/SearchInput'
import { Ticket } from '../../components/Ticket'
export const Main = () => {
    return <div>
        <Header />
        <div className='imgWrapper'>
            <img className='img' src={require('../../assets/Rectangle 2.png')} />
            <div className='imgtextWrapper'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  he industry's standard dummy text ever since the 1500s,</p>
                <SearchInput />
            </div>

        </div>
        <div className='ticketWrapper'>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />

        </div>
    </div>
}