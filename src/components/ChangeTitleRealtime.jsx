import { useEffect, useState } from "react";

export default function ChangeTitleRealtime() {
    const [title, setTitle] = useState("No Title");

    useEffect(() => {
        document.title = title; // Cập nhật title khi title thay đổi
    }, [title]); // Chỉ chạy useEffect khi title thay đổi

    const handleInputChange = (event) => setTitle(event.target.value);
    // Cập nhật title với giá trị mới từ input

    return (
        <div>
            <label htmlFor="">ChangeTitleRealtime:</label>
            <br />
            <input
                className="input"
                type="text"
                value={title} // Liên kết giá trị của input với state "title"
                onChange={handleInputChange} // Gọi hàm xử lý khi giá trị input thay đổi
            />
        </div>
    );
}
