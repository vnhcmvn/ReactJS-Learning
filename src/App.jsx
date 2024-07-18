import Count from "./components/Count";
import Course from "./components/Course";

export default function App() {
    const courses = ["Javascript", "HTML", "CSS", "Python", "Ruby"];
    return (
        <>
            <div>
                <Course courses={courses} />
            </div>
            <div>
                <Count />
            </div>
        </>
    );
}
