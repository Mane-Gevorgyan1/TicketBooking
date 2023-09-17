import { CategoryTicket } from '../../components/CategoryTicket'
import './style.css'
export const Category = () => {
    const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
    return <div >
        <div className='Category'>
            {data.map((elm, i) => {
                return <CategoryTicket
                    title={'Aretha Fanklin'}
                    image='Rectangle 19.png'
                    date={'31 September 2023'}
                    location={'Yerevan'}
                    price={'10.000 - 30.000 AMD'}
                    genre='Comedy'
                />
            })}
        </div>
        <div style={{ marginBottom: 100 }}>

        </div>
    </div>
}