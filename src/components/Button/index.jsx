import './style.css'

export const Button = ({ title, onClick, all }) => {
    return (
        <button style={all && { width: '100%' }} className='button' onClick={onClick}>{title}</button>
    )
}