
// import image1 from "gite-vite/src/img/IMG_20190803_162235.jpg";
import './Accueil.css';
import {Carousel} from './Carousel';

export function Accueil() {
    return (
        <div>
            <h2>Accueil</h2>
            <div style={{
            display:'flex',
            flex:'row'
        }}>
            <Carousel/>
            <div>
                <img src="src/components/img/IMG_20190803_162256.jpg" alt="" className='carrousel'/>
                <p>les vignes auxquelles le gîte doit son nom</p>
            </div>
            <div>
                <img src="src/components/img/IMG_20190803_162400.jpg" alt="" className='carrousel'/>
                <p>Les terrasses paysagères</p>
            </div>
            <div>
                <div>
                <p>Bienvenue au Gîte la Vigne !</p><br></br>
                <p>Nous sommes heureux de vous accueillir au sein de</p>
                <p>notre établissement confortable et authentique. En</p>
                <p>espérons que vous passerez un séjour des plus</p>
                <p>agréables et que vous vous sentirez comme chez vous !</p>
            </div>
            <button className="buttonValid">Organiser une réservation</button>
            </div>
            </div>
        </div>
    );
}