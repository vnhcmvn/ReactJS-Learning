import { useEffect, useState } from "react";

export default function ChangeTitleClickBtn() {
    const [title, setTitle] = useState("No Title");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const handleInputChange = (event) => setInputValue(event.target.value);
    const handleBtnClick = () => setTitle(inputValue);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleBtnClick}>Change Title</button>
        </div>
    );
}
