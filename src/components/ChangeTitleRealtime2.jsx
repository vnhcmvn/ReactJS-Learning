import { useEffect, useState } from "react";

export default function ChangeTitleRealtime2() {
    const [title, setTitle] = useState("No Title");

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <label htmlFor="">ChangeTitleRealtime2:</label>
            <br />
            <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    );
}
