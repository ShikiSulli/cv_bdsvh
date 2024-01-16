import '../../style/style.scss';
import coder from '../../Images/coder.png';
import meeting from '../../Images/meeting.png';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { RegexName, RegexEmail } from '../../data/data';

export default function Contact() {

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
                    <p>Téléphone : +33 6 23 96 74 09</p>
                    <p>Email : bandasavanh.b@gmail.com</p>
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