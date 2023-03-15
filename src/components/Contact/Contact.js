import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import './styles.scss';

export default function Contact() {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_msec5mj', 'template_cfvdpvp', form.current, 'EuiqluiunJNFkFV4m')
        .then((result) => {
            console.log(result.text);
            setIsModalOpen(true);
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
                <Modal
                    className="contact_container_modal"
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Confirmation de l'envoi"
                >
                    <h2>Votre message a bien été envoyé</h2>
                    <button onClick={() => setIsModalOpen(false)}>Fermer</button>
                </Modal>
            </div>
        </div>
    )
}