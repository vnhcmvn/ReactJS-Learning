export default function Course({ courses }) {
    return (
        <ol>
            {courses.map((course, index) => (
                <li key={index}>{course}</li>
            ))}
        </ol>
    );
}
