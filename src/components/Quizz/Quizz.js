import { useState } from 'react';
import './styles.scss';

export default function Quizz() {
    const [results, setResults] = useState(Array(4).fill(null))
    const handleAnswerClick = (questionIndex, answerIndex) => {
        const isAnswerCorrect = (questionIndex === 0 && answerIndex === 1)
            || (questionIndex === 1 && answerIndex === 2)
            || (questionIndex === 2 && answerIndex === 1)
            || (questionIndex === 3 && answerIndex === 2);

        const newResults = [...results];
        newResults[questionIndex] = isAnswerCorrect;
        setResults(newResults);
    }

    const renderResultMessage = (result) => {
        if (result === true) {
            return <p className="result-message correct">Bonne réponse !</p>
        } else if (result === false) {
            return <p className="result-message incorrect">Râté !</p>;
        } else {
            return null;
        }
    };

    return (
        <div className="quizz">
            <div className="quizz_container">
                <div className="quizz_container_title">
                    <h6>A la recherche d'un travail dans le développement web, je suis prête
                        à coder jusqu'à l'aube pour pouvoir être embauchée. Armée d'un clavier, 
                        d'une tasse de café et d'un sens de l'humour tranchant, je suis prête
                        à conquérir le monde du web !
                    </h6>
                    <h3>Mon CV ne montre pas mon humour, mais mon quizz le fera !</h3>
                </div>
                <div className="quizz_container_questions">
                    <div className="quizz_container_questions_question">
                        <p>Pourquoi devriez-vous m'embaucher?</p>
                            <button className={results[0] === true ? 'answer correct' : results[0] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(0, 0)}>Parce que je peux taper du code avec mes pieds</button>
                            <button className={results[0] === true ? 'answer correct' : results[0] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(0, 1)}>Parce que j'ai un sens de l'humour tellement génial que je peux faire rire même les ordinateurs</button>
                            <button className={results[0] === true ? 'answer correct' : results[0] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(0, 2)}>Parce que je suis capable de développer des sites web en dansant la Macarena</button>
                            {renderResultMessage(results[0])}
                    </div>
                    <div className="quizz_container_questions_question">
                        <p>Qu'est-ce qui me motive à travailler dans le développement web ?</p>
                            <button className={results[1] === true ? 'answer correct' : results[1] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(1, 0)}>J'aime pouvoir faire des siestes de 10 minutes entre deux builds</button>
                            <button className={results[1] === true ? 'answer correct' : results[1] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(1, 1)}>J'adorerai avoir l'impression d'être un super-héros en résolvant les problèmes de mes clients.</button>
                            <button className={results[1] === true ? 'answer correct' : results[1] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(1, 2)}>J'apprécie la possibilité de travailler en pyjama.</button>
                            {renderResultMessage(results[1])}
                    </div>
                    <div className="quizz_container_questions_question">
                        <p>Quel est mon super-pouvoir secret en matière de développement web ?</p>
                            <button className={results[2] === true ? 'answer correct' : results[2] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(2, 0)}>Je peux écrire du code à l'envers.</button>
                            <button className={results[2] === true ? 'answer correct' : results[2] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(2, 1)}>J'ai la capacité de parler aux ordinateurs et de leur demander gentiment de fonctionner correctement.</button>
                            <button className={results[2] === true ? 'answer correct' : results[2] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(2, 2)}>Je peux coder en utilisant uniquement des emojis.</button>
                            {renderResultMessage(results[2])}
                    </div>
                    <div className="quizz_container_questions_question">
                        <p>Si j'étais un personnage de Star Wars, lequel ce serait et pourquoi ?</p>
                            <button className={results[3] === true ? 'answer correct' : results[3] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(3, 0)}>Je serais R2-D2, parce que je suis souvent sous-estimé mais je finis toujours par faire le job.</button>
                            <button className={results[3] === true ? 'answer correct' : results[3] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(3, 1)}>Je serais Chewbacca, parce que je suis un vrai guerrier de la programmation</button>
                            <button className={results[3] === true ? 'answer correct' : results[3] === false ? 'answer incorrect' : 'answer'} onClick={() => handleAnswerClick(3, 2)}>Je serais Palpatine, parce que je peux avoir la même tête que lui au réveil lorsqu'il se fait attaquer par Mace Windu</button>
                            {renderResultMessage(results[3])}
                    </div>
                </div>
            </div>
        </div>
    )
}