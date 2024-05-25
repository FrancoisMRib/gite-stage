import HeaderImg from './img/header-image.png' ;
import './Header.css';

export function Header() {
    return (
        <div className="Header">
            <img src={HeaderImg} alt='HeaderImg' className="photo"/>
        
                <div id="HeaderMenu" className="HeaderContain">
                    <p>Accueil</p>
                    <p>Découvrir le gîte</p>
                    <p>Découvrir la région</p>
                    <p>Réservations</p>
                    <p>Contact</p>
                </div>

            
        </div>

    );
}