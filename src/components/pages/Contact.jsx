import React from 'react';
import './Contact.css';

export function Contact () {
    return (
        <div>
            <div className='title'>
                <h2>Nous contacter</h2>
                <h4>Contactez-nous de préférence par mail</h4>
            </div>
            <div className='agencement'>
                <div className='carton'>
                    <p>Contactez-nous par mail afin de pouvoir réserver au plus vite, en ayant au préalable tenu compte du calendrier et des chambres disponibles. 
                        Les locations peuvent aller de trois jours à plusieurs semaines, et mobiliser plusieurs chambres. Ecrivez-nous et nous en parlerons !</p>
                    <p>Myriam Zidel-Cauffet</p>
                    {/* <div>
                        <p>     Contactez-nous par mail afin de pouvoir réserver au plus vite, en</p>
                        <p>ayant au préalable tenu compte du calendrier et des chambres disponibles.</p>
                        <p>     Les locations peuvent aller de trois jours à plusieurs semaines, et </p>
                        <p>mobiliser plusieurs chambres. Ecrivez-nous et nous en parlerons ! </p>
                        <p>Myriam Zidel-Cauffet</p>
                    </div> */}
                    <img src="src/components/img/Carte-Aveyron.png" alt="" className='map'/>
                </div>
                <div className='title2'>
                    <br />
                    <p className='inter'>Mail</p>
                    <p className=''>myriam.zidel@yahoo.fr</p>
                    <p className='inter'>Adresse</p>
                    <p className=''>Chemin de la Peyre - 12300 Firmi</p>
                    <br />
                    <p className='inter'>Cliquez sur la carte pour voir quels sont les principaux axes routiers
                    à proximité du gîte et de Firmi</p>
                </div>
            </div>

        </div>
    )
    
}