import { useEffect, useRef, useState } from "react";

export default function ChangeTitleClickBtn2() {
    const [title, setTitle] = useState("No Title");
    const inputRef = useRef(null);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => setTitle(inputRef.current.value)}>
                Change Title
            </button>
        </div>
    );
}
