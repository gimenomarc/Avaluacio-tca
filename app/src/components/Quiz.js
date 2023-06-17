import React, { useState } from 'react';
import Layout from './Layout';
import Question from './Question';
import questions from '../data/questions'

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
        return <div>No hay más preguntas</div>;
    }

    return (
        <div>
            <Layout>
                <Question question={currentQuestion.question} options={currentQuestion.options} />
                <button onClick={handleNextQuestion}>Seguent</button>
            </Layout>
        </div>
    );
}


export default Quiz;

