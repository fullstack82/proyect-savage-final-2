import { useParams } from "react-router-dom";
import ExperiencesCard from './ExperiencesCard'
import './Experiences.css'
import { useExperience } from "../../api";


function Bookings() {
    const { id } = useParams();
    const experiences = useExperience(id);
    return (
        <div>
            
            <ExperiencesCard 
            
            />
           
    
        </div>
    )
}


export default Bookings;