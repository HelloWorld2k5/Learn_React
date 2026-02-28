import { useState, useEffect } from 'react';

// Trong file main.jsx có bắn ra các CustomeEvent

const lessons = [
    {
        id: 1,
        name: 'HTML, CSS, JS'
    },
    {
        id: 2,
        name: 'ReactJS'
    },
    {
        id: 3,
        name: 'Laravel'
    }
];

function FakeChat() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        console.log('Chay callback trong useEffect');

        const handleComment = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleComment); // lắng nghe các CustomeEvent được bắn ra (subscribe)

        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment); // (unsubscribe)
    }, [lessonId]);

    return (
        <>
            <ul>
                {lessons.map(lesson =>
                    <li key={lesson.id} 
                        style={{ color: lessonId === lesson.id ? 'red' : '#000' }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                )}
            </ul>
        </>
    );
}

export default FakeChat;