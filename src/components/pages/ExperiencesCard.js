import { Link } from 'react-router-dom';

function ExperiencesCard(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={'/experience/' + props.id}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={'http://localhost:4000/uploads/' + props.id + '.jpg'}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ExperiencesCard;