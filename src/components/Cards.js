import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out famous Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="img-9.jpg"
                            text="Explore the hidden waterfall inside
                            the jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="img-sp.jpg"
                            text="Travel through Islands of the world 
                            in private cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="img-3.jpg"
                            text="Set Sail in Atlantic Ocean visiting Waters"
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src="img-4.jpg"
                            text="Experience football on top of Mountains" 
                            
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="img-8.jpg"
                            text="Ride through Desert on a Camel tour"
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
