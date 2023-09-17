import { CategoryTicket } from '../../components/CategoryTicket'
import { MultySelect } from '../../components/MultySelect'
import { FilterSvg, MFilter, MultysElectSvg, OpenMulTyselect } from '../../components/svg'
import './style.css'
export const Category = () => {
    const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
    return <div className='category'>
        <div className='CategoryButtonWrapper'>
            <button id='active' className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
        </div>
        <div className='FilterWrapper'>
            <FilterSvg />
            <div className='SelectorDivWrapper'>
                <MultySelect title='Hall' />
            </div>
        </div>
        <div className='mFilterWrapper'>
            <MFilter />
            <MultysElectSvg />
        </div>
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