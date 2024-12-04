import Button from '../Button/Button';
import style from './PostCard.module.css'
import PropTypes from 'prop-types';
import placeholder from '../../assets/card600.jpg';
import TrashIcon from '../ui/trash-icon'



export default function PostCard({ onDelete = () => { }, title, tags, image, content }) {
    return (
        <div className={style.card}>
            {/* Se l'immagine esiste stampa, altrimenti stampo placeholder(img no available) */}

            <img className={style.image} src={image || placeholder} alt={title} />

            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>

                <div className={style.tags}>
                    {tags.map((tag, index) => {  // Map ogni tag a una classe CSS corrispondente

                        const tagClass = style[tag]; // Se tag è HTML diventa style.html ed associa la classe nel modulo CSS ecc.


                        return (
                            <span key={index} className={`${style.tag} ${tagClass}`}>
                                {tag}
                            </span>
                        );
                    })}
                    <p className={style.card_description}>{content}</p>
                </div>
                <div className={style.card_footer}>
                    <Button />

                    <button onClick={onDelete} className={style.icon}>
                        <TrashIcon />
                    </button>

                </div>
            </div>
        </div>
    );
}


PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    content: PropTypes.string,
    onDelete: PropTypes.func
};
