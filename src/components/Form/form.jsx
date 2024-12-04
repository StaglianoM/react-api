import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

export default function Form({ onAddPost }) {
    const [formState, setFormState] = useState({
        title: '',
        image: '',
        content: '',
        category: '',
        tags: [],
        published: false,
    });

    const updateField = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormState((prevState) => ({
                ...prevState,
                tags: checked
                    ? [...prevState.tags, value]
                    : prevState.tags.filter((tag) => tag !== value),
            }));
        } else if (type === 'radio') {
            setFormState((prevState) => ({
                ...prevState,
                published: value === 'true',
            }));
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.title.trim() === '') return; // Evita di aggiungere post senza titolo
        onAddPost(formState); // Passa tutti i dati al genitore
        setFormState({
            title: '',
            image: '',
            content: '',
            category: '',
            tags: [],
            published: false,
        }); // Reset del form
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input
                type="text"
                name="title"
                placeholder="Titolo del post"
                value={formState.title}
                onChange={updateField}
                className={style.input}
            />
            <input
                type="text"
                name="image"
                placeholder="URL dell'immagine"
                value={formState.image}
                onChange={updateField}
                className={style.input}
            />
            <textarea
                name="content"
                placeholder="Contenuto del post"
                value={formState.content}
                onChange={updateField}
                className={style.textarea}
            />
            <select
                name="category"
                value={formState.category}
                onChange={updateField}
                className={style.select}
            >
                <option value="">Seleziona una categoria</option>
                <option value="part1">Test1</option>
                <option value="part2">Test2</option>
                <option value="part3">Test3</option>
            </select>
            <div className={style.tags}>
                <label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="html"
                        checked={formState.tags.includes('html')}
                        onChange={updateField}
                    />
                    HTML
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="css"
                        checked={formState.tags.includes('css')}
                        onChange={updateField}
                    />
                    CSS
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="Php"
                        checked={formState.tags.includes('Php')}
                        onChange={updateField}
                    />
                    Php
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="tags"
                        value="javascript"
                        checked={formState.tags.includes('javascript')}
                        onChange={updateField}
                    />
                    JavaScript
                </label>
            </div>
            <div className={style.published}>
                <label>
                    <input
                        type="radio"
                        name="published"
                        value="true"
                        checked={formState.published === true}
                        onChange={updateField}
                    />
                    Pubblica
                </label>
                <label>
                    <input
                        type="radio"
                        name="published"
                        value="false"
                        checked={formState.published === false}
                        onChange={updateField}
                    />
                    Bozza
                </label>
            </div>
            <button type="submit" className={style.button}>Aggiungi</button>
        </form>
    );
}

Form.propTypes = {
    onAddPost: PropTypes.func.isRequired,
};
