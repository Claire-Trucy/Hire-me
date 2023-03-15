import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.scss';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_msec5mj', 'template_cfvdpvp', form.current, 'EuiqluiunJNFkFV4m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact">
            <div className="contact_container">
                <div className="contact_container_title">
                    <h6>Vous êtes interessé(e)s?</h6>
                    <h3>Contactez-moi</h3>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Entrez votre Nom ou Entreprise" required=""></input>
                    <input type="email" name="user_email" placeholder="Entrez votre Email" required=""></input>
                    <input type="number" name="user_number" placeholder="Entrez votre numéro de téléphone" required=""></input>
                    <textarea name="message" placeholder="Entrez votre message"></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}