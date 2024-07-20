import { useEffect, useState } from "react";
import axios from "axios"; //npm install axios

const Post = ({ id, title, body }) => {
    return (
        <div>
            <h3>{id + ". " + title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default function PostListAxios() {
    const [data, setData] = useState({ posts: [], loading: true, error: null });

    const updateState = (state) => {
        setData((prevState) => ({ ...prevState, ...state }));
    };

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => updateState({ posts: response.data }))
            .catch((error) => updateState({ error: error.message }))
            .finally(() => updateState({ loading: false }));
    }, []);

    if (data.loading) return <h1>Loading data...</h1>;
    if (data.error) return <h1>Error: {data.error}</h1>;

    return (
        <div>
            {data.posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
}
