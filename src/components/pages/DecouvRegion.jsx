import './DecouvRegion.css';
import thermes from '../img/Cransac2.jpg';

export function DecReg() {
    return (
        <div>
            <div 
            // className='essai'
            >
                <h1>Découvrez la région aux alentours !</h1>
                <h4>
                    Quelles sont les attractions qui vont feront envie ?
                </h4>
            </div>
            <div className='background'>
                <p>Cliquez sur une image pour en savoir plus</p>
            </div>
            <div className='panel'>
                <img src="src/components/img/bournazel.jpg" alt="Le château de Bournazel" className='window'/>
                <img src={thermes} alt="Les thermes de Cransac" className='window'/>
            </div>
        </div>
    )
}