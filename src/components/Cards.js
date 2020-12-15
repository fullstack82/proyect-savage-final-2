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
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='adventure'
                            path='/experiences'
                        />
                        <CardItem
                            src='images/img10.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='luxury'
                            path='/experiences'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-home.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Ucharted Waters'
                            label='Relax'
                            path='/experiences'
                        />
                        <CardItem
                            src='images/img-7.jpg'
                            text='The wildest experiences'
                            label='Adventure'
                            path='/experiences'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sing-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards;