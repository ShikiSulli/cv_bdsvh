import '../../style/style.scss';
import coder from '../../Images/coder.png';
import meeting from '../../Images/meeting.png';

export default function Contact() {
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
            <form className="contact__form">
               
              <h2 className='contact__form--title'>Une Demande particulière ?</h2>
                <div className="contact__form--name">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" />
                </div>
                <div className="contact__form--email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" />
                </div>
                <div className="contact__form--message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message"></textarea>
                </div>
                <div className="contact__form--button">
                    <button type="submit">Envoyer</button>
                </div>
               <div className='meeting'>
                <img className='meeting--img' src={meeting} alt={meeting} />
                </div>
              
            </form>
            
        </div>
    );
    }