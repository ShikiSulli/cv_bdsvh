import '../../style/style.scss';
import coder from '../../Images/coder.png';
import meeting from '../../Images/meeting.png';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { RegexName, RegexEmail } from '../../data/data';

export default function Contact() {
    // function sendEmail(email, message) {
    //     const templateId = 'template_xxxxxxx'; /* EmailJS.com -> Email Templates / My default Template / Template ID  */
    //     const serviceId = 'service_yyyyyyy'; /* EmailJS.com -> Email Services / GMAIL / Service ID  */
    //     const publicKey = '_yvdWM1iF7BpuqHkY'; /* EmailJS.com -> Account / public Key  */

    //     const templateParams = {
    //         from_name: 'Appli Portfolio', /* Application source de cet envoi de mails  */
    //         from_email: email, /* Adresse email de l'expéditeur (saisie dans le formulaire) */
    //         to_name: 'xxxxxxx.yyyyyyy@gmail.com', /* Adresse du destinataire: votre adresse email gmail, outlook etc ... */
    //         message: message, /* Message écrit par l'expéditeur  */
    //     };
    //     emailjs.send(serviceId, templateId, templateParams, publicKey) /* Envoi du message à m'aide des IDs et des paramètres  */
    //         .then((response) => {
    //             setMsgAlert(true); /* Définit msgAlert à true pour affichage "Message bien envoyé !"  */
    //             setTimeout(() => { /* Définit msgAlert à false pour ne plus afficher le message d'envoi au bout de 5 secondes  */ 
    //                 setMsgAlert(false);
    //             }, 5000);
    //             console.log('SUCCESS!', response.status, response.text); /* Message dans la console pour vérifier le "send OK : 200"  */
    //         }, (err) => {
    //             console.log('FAILED...', err); /* Message dans la console pour vérifier l'erreur générée  */
    //         });
    // }
    
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name:'', email:''});


    
    const handleName = (e) => {
        const nameValue =e.target.value;
        if (RegexName(nameValue)) {
         setName(nameValue);
         setErrors({...errors, name:''});
    }else{
        setErrors({...errors, name:'Invalid name format'});
    }
    };

    const handleEmail = (e) => {
        const emailValue = e.target.value;
        if (RegexEmail(emailValue)) {
            setEmail(emailValue);
            setErrors({ ...errors, email: '' });
        } else {
            setErrors({ ...errors, email: 'Invalid email format' });
        }
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message
        };

        //verifier les champs avec les regex et si ils sont faut afficher une alerte au submit
        if (RegexName(data.name) && RegexEmail(data.email)) {
            Swal.fire({
                icon: 'success',
                title: 'Votre message a bien été envoyé',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Veuillez remplir les champs correctement',
            });
        }
     
    };

    return (
        <div className="contact">
            <div className="contact__location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12453.70650938361!2d2.314345913537433!3d48.99023880991592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66844fd0cef15%3A0x5628614f55a070b0!2s95160%20Montmorency!5e0!3m2!1sfr!2sfr!4v1704791468869!5m2!1sfr!2sfr" width="600" height="450" title="Google Maps" style={{border: "0" ,borderRadius:"10"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <h2 className="contact__location--title">Me contacter</h2>
                <div className="contact__location--info">
                <img src={coder} alt=""  className='coder' />
                    <p>Adresse : ** Rue de Verdun</p>
                    <p>Code postal : 95160</p>
                    <p>Ville : Montmorency</p>
                    <p>Téléphone : +33 6 23 96 ** **</p>
                    <p>Email : bandasavanh.b@gmail.com</p>
                    <div className="contact__location--social">
                        <a href="https://www.linkedin.com/in/bdsvhb"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"> <i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-discord"></i></a>
                        <a href="#">  <i class="fa-brands fa-github"></i></a>
                    </div>
                   
            </div>
            </div>

            {/*formulaire de contact*/}
            <div className="contact__form">
            <form className="contact__form--content">
               
              <h2 className='contact__form--title'>Une Demande particulière ?</h2>
                <div className="contact__form--name">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" onChange={handleName} />
                    <span className='error'>{errors.name}</span>
                </div>
                <div className="contact__form--email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" onChange={handleEmail}/>
                    <span className='error'>{errors.email}</span>
                </div>
                <div className="contact__form--message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message"></textarea>
                </div>
                <div className="contact__form--button">
                    <button type="submit" onClick={handleSubmit}>Envoyer</button>
                </div>
               <div className='meeting'>
                <img className='meeting--img' src={meeting} alt={meeting} />
                </div>
              
            </form>
            </div>
        </div>
    );
    }