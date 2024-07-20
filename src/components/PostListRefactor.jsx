import { useEffect, useState } from "react";

const Post = ({ id, title, body }) => {
    return (
        <div>
            <h3>{id + ". " + title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default function PostListRefactor() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (!response.ok) throw new Error("Have Error!");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <h1>Loading data...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div>
            {posts.map((post) => (
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
