import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count: {count}
            </button>
            <button
                onClick={() => {
                    setCount(0);
                }}
            >
                Reset
            </button>
        </div>
    );
}
