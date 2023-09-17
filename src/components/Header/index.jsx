import './style.css'
import { CloseSvg, FreeSvg, MenuSvg, Search, Translate, User } from '../svg'
import { Button } from '../Button'

export const Header = ({ open, menu }) => {
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
                <div className='buttonWrapperHeader'>
                    <Search />
                    <div className='Translate'>
                        <Translate />
                    </div>
                    <div className='menuSvg' onClick={() => open(!menu)}>
                        {!menu ? <MenuSvg /> : <CloseSvg />}
                    </div>
                </div>
            </div>
            <div className='FreeSvg'>
                <img src={require('../../assets/free.png')} />
            </div>
            <div className='FreeSvg1'>
                <img src={require('../../assets/free1.png')} />
            </div>
        </div>
    )
}