import './styles.css'
import { Button } from '../../components/Button'
export const Single = () => {
    return <div className='single'>
        <div className='SinglDescription'>
            <div className='singlImg'>
                <img src={require('../../assets/Vector.png')} />
            </div>
            <div className='singltextWrapper'>
                <div></div>
                <p className='singlTitle'>Concert  Denic Macoew  </p >
                <p className='singelText'>Lorem ipsum dolor sit amet consectetur. Blandit ma
                    ris ut pretium volutpat. Eu at etiam purus non enim nam. Commodo pellentesque semper neque sene
                    ctus lectus enim turpis ornare. Pellentesque amet
                    ultricies nam venenatis quisque. </p>
                <div className='buttonWrapper'>
                    <Button title={'Buy Now'} />
                </div>
            </div>
        </div>
    </div >
}