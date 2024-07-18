import ChangeTitleClickBtn from "./components/ChangeTitleClickBtn";
import ChangeTitleClickBtn2 from "./components/ChangeTitleClickBtn2";
import ChangeTitleRealtime from "./components/ChangeTitleRealtime";
import ChangeTitleRealtime2 from "./components/ChangeTitleRealtime2";
import Count from "./components/Count";
import Course from "./components/Course";

export default function App() {
    const courses = ["Javascript", "HTML", "CSS", "Python", "Ruby"];
    return (
        <>
            <div>
                <Course courses={courses} />
            </div>

            <Count />

            <br />

            <ChangeTitleRealtime />

            <br />

            <ChangeTitleRealtime2 />

            <br />

            <ChangeTitleClickBtn />

            <br />

            <ChangeTitleClickBtn2 />
        </>
    );
}
