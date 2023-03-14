import './styles.scss';
import montage from '../../assets/montage-moi.png';

export default function About() {
    return (
        <div className="about">
            <div className="about_content">
                <img src={montage}></img>
                <div className="about_content_text">
                    <h1>A propos de moi</h1>
                    <h5>Developpeuse Web et Web mobile</h5>
                    <p>
                        Je m'appelle Claire, j'ai 31 ans et je suis une développeuse web junior depuis 6 mois. Après avoir suivi une formation intensive chez O'clock, 
                        j'ai décidé de me lancer dans le monde passionnant du développement web. J'aime explorer de nouvelles technologies pour créer des applications web innovantes 
                        et j'ai hâte de continuer à apprendre et à évoluer dans ce domaine en constante évolution. J'ai encore beaucoup à apprendre, mais cela ne me fait pas peur. 
                        J'ai appris à être autonome et à chercher par moi-même, même si cela signifie parfois googler toutes les cinq minutes.
                        Et même si je n'ai pas encore acquis l'expérience d'un développeur chevronné, je suis prête à faire face à tous les défis qui se présentent à moi, 
                        y compris ceux qui nécessitent de laisser tomber mes chaussons en pilou-pilou ! Dans mes temps libres, j'aime coder en pyjama et boire du café, 
                        mais chut... ne le répétez pas à mon futur employeur. Je suis donc à la recherche d'un emploi en tant que développeuse web. 
                        Si vous cherchez une développeuse web dynamique, n'hésitez pas à me contacter !
                    </p>
                    <button type="button">Engagez-moi !</button>
                </div>
            </div>
        </div>
    );
}
