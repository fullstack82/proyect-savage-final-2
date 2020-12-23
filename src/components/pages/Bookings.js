import { useParams } from "react-router-dom";
import ExperiencesCard from './ExperiencesCard'
import './Bookings.css'
import { useExperience } from "../../api";
import Button from "../Button";
import Footer from "../Footer";



function Bookings() {
    const { id } = useParams();
    const experiencia = useExperience(id);
    if (!experiencia) return 'Loading...'
    return (
        <div className="card">
            <h1>¡Disfruta de nuestras experiencias salvajes!</h1>
            <br></br>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ExperiencesCard
                            key={experiencia.id}
                            id={experiencia.id}
                            text={experiencia.description}
                            label={experiencia.price}
                        />
                    </ul>
                </div>
                <Button to={'/reservations/' + id} buttonStyle='btn--outline'>Reserve aqui</Button>
            </div>
          
        </div>
    )

}


export default Bookings;