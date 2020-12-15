import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            

            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button  to="/experiences" className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Start
                </Button>
                <Button  to="/register" className='btns'   buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                    Register <i class="fas fa-highlighter" />
                </Button>
                
            </div>
            
        </div >
    )
}
export default HeroSection;