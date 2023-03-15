import './styles.scss';

export default function Quizz() {
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
                            <button>Parce que je peux taper du code avec mes pieds</button>
                            <button>Parce que j'ai un sens de l'humour tellement génial que je peux faire rire même les ordinateurs</button>
                            <button>Parce que je suis capable de développer des sites web en dansant la Macarena</button>
                    </div>
                    <div className="quizz_container_questions_question">
                        <p>Qu'est-ce qui me motive à travailler dans le développement web ?</p>
                            <button>J'aime pouvoir faire des siestes de 10 minutes entre deux builds</button>
                            <button>J'adorerai avoir l'impression d'être un super-héros en résolvant les problèmes de mes clients.</button>
                            <button>J'apprécie la possibilité de travailler en pyjama.</button>
                    </div>
                    <div className="quizz_container_questions_question">
                        <p>Quel est mon super-pouvoir secret en matière de développement web ?</p>
                            <button>Je peux écrire du code à l'envers.</button>
                            <button>J'ai la capacité de parler aux ordinateurs et de leur demander gentiment de fonctionner correctement.</button>
                            <button>Je peux coder en utilisant uniquement des emojis.</button>
                    </div>
                    <div className="quizz_container_questions_question">
                        <p>Si j'étais un personnage de Star Wars, lequel ce serait et pourquoi ?</p>
                            <button>Je serais R2-D2, parce que je suis souvent sous-estimé mais je finis toujours par faire le job.</button>
                            <button>Je serais Chewbacca, parce que je suis un vrai guerrier de la programmation</button>
                            <button>Je serais Palpatine, parce que je suis peux avoir la même tête que lui au réveil lorsqu'il se fait attaquer par Mace Windu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}