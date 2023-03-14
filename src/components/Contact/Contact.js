import './styles.scss';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact_container">
                <div className="contact_container_title">
                    <h6>Vous êtes interessé(e)s?</h6>
                    <h3>Contactez-moi</h3>
                </div>
                <form action="#" method="post">
                    <input type="text" name="name" placeholder="Entrez votre Nom ou Entreprise" required=""></input>
                    <input type="email" name="email" placeholder="Entrez votre Email" required=""></input>
                    <input type="text" name="object" placeholder="Entrez votre objet" required=""></input>
                    <input type="text" name="number" placeholder="Entrez votre numéro de téléphone" required=""></input>
                    <textarea name="message" placeholder="Entrez votre message"></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}