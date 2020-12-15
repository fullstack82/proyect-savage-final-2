import ExperiencesCard from "./ExperiencesCard";
import './Experiences.css';
import '../../App';
import useFetch from "../../useFetch";
/*import Button from '../../components/Button'*/



function Experiences() {
    const experiencias = useFetch('http://localhost:4000/api/experiences')
    
    console.log('>>>', experiencias)

    return (
        <div className='cards'>
            <h1>Travel the world looking for adventure!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {experiencias && experiencias.map(experiencia =>
                            <ExperiencesCard
                                key={experiencia.id}
                                id={experiencia.id}
                                text={experiencia.description}
                                label={experiencia.price}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

/*
                        <ExperiencesCard
                            id="1"
                            src='images/1.jpg'
                            text='If you want to enjoy a romantic night in the center of Madrid, we recommend these apartments located next to La Gran Via. They are equiped with a kitchen, so you can prepare your own dinner and enjoy total freedom of schedules. Its jacuzzis are spectacular, as well as decoration of all the apartments'
                            label='250 €'
                            path='/bookings/:id'
                        />

*/

export default Experiences;