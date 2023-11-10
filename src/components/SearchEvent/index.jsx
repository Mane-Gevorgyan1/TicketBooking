import './style.css'

export const SearchEvent = ({ data }) => {
    return (
        <div className='searchEvent'>
            <img alt='' src={`${process.env.REACT_APP_IMAGE}/${data[0]?.image}`} />
            <p>{data[0]?.text}</p>
        </div>
    )
}