import { useEffect, useState } from "react";

export default function PostList() {
    const [data, setData] = useState({
        posts: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) throw new Error("Have error!");
                return response.json();
            })
            .then((data) =>
                setData((prevState) => ({
                    ...prevState,
                    posts: data,
                }))
            )
            .catch((error) =>
                setData((prevState) => ({
                    ...prevState,
                    error: error.message,
                }))
            )
            .finally(() =>
                setData((prevState) => ({ ...prevState, loading: false }))
            );
    }, []);

    if (data.loading) return <h1>Loading data...</h1>;
    if (data.error) return <h1>Error: {data.error}</h1>;

    return (
        <>
            {data.posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.id + ". " + post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    );
}
