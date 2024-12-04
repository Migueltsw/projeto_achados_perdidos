import React from 'react';
import Styles from './Home.module.css';
import creator1 from './img/Eduardo.jpeg';
import creator2 from './img/Miguel.jpeg';
import creator3 from './img/Laura.jpeg';
import creator4 from './img/Coapac.png';

const Cards = () => {
    const creators = [
        { name: 'Eduardo Nogueira', imgSrc: creator1 },
        { name: 'Miguel Arcanjo', imgSrc: creator2 },
        { name: 'Laura Paiva', imgSrc: creator3 },
        { name: 'Luanderson', imgSrc: creator4 },
    ];

    return (
        <div className={Styles.fundoCards}>
        <div className={Styles.centralizado}>
        <h2>Criadores</h2>
        </div>
        <div className="card-group">
            <div className="card m-3" style={{ width: '18rem' }}>
                <img className="card-img-top" src={creator1} alt="Eduardo Nogueira" />
                <div className="card-body">
                    <h5 className="card-title">Eduardo Nogueira</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img className="card-img-top" src={creator2} alt="Miguel Arcanjo" />
                <div className="card-body">
                    <h5 className="card-title">Miguel Arcanjo</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img className="card-img-top" src={creator3} alt="Laura Paiva" />
                <div className="card-body">
                    <h5 className="card-title">Laura Paiva</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img className="card-img-top" src={creator4} alt="Luanderson" />
                <div className="card-body">
                    <h5 className="card-title">Luanderson</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cards;
