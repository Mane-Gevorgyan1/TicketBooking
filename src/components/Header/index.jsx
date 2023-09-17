import './style.css'
import { Search, Translate, User } from '../svg'
import { Button } from '../Button'

export const Header = () => {
    return (
        <div className='headerContainer'>
            <div className="header">
                <p className='title'>Logo</p>
                <div className='textWrapper'>
                    <p className='text'>Cinema</p>
                    <p className='text'>Концерт</p>
                    <p className='text'>Թատրոն</p>
                    <p className='text'>Classic</p>
                    <p className='text'>Other</p>
                </div>
                <div className='buttonWrapper'>
                    <Search />
                    <Translate />
                </div>
            </div>
        </div>
    )
}