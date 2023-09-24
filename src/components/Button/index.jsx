import './style.css'

export const Button = ({ title }) => {
    return <button className='button' onClick={() => window.location = '/hall'}>{title}</button>
}