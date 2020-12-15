import CardItem from "./CardItem";
import './Cards.css'



function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='img/29.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            
                        />
                        <CardItem
                            src='img/2.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='adventure'
                            
                        />
                        <CardItem
                            src='img/10.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='luxury'
                            
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='img/12.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Ucharted Waters'
                            label='Relax'
                            
                        />
                        <CardItem
                            src='img/7.jpg'
                            text='The wildest experiences'
                            label='Adventure'
                            
                        />
                        <CardItem
                            src='img/8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards;