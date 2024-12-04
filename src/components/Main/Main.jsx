import { useEffect, useState } from 'react';
import Form from '../Form/form'; // Import del componente Form
import PostCard from '../PostCard/PostCard';
import style from './Main.module.css';
import axios from 'axios';
// import posts from '../../data/posts';


export const API_BASE_URI = 'http://localhost:3000/'


export default function Main() {
    const [publishedPosts, setPublishedPosts] = useState([]
        // posts.filter((post) => post.published)
    );

    function fetchPosts() {
        axios.get(`${API_BASE_URI}posts`)
            .then(res => {
                console.log('posts res', res)
                setPublishedPosts(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    const handleAddPost = (postData) => {
        const newPost = {
            ...postData,
            id: publishedPosts.length + 1, // Genero un nuovo ID
        };
        setPublishedPosts([...publishedPosts, newPost]); // Aggiungo il nuovo post alla lista
    };


    function deletePost(id) {
        setPublishedPosts(publishedPosts.filter(post => post.id !== id))
    }

    return (
        <main>
            <section className={style.section}>
                <div className="container">
                    <h1 className={style.section_title}>Il mio blog</h1>
                </div>

                <div className="container">
                    <Form onAddPost={handleAddPost} />
                </div>

                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col-3">
                                <PostCard
                                    onDelete={() => deletePost(post.id)}
                                    title={post.title}
                                    tags={post.tags}
                                    image={post.image}
                                    content={post.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
