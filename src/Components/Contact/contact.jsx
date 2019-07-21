import React from 'react';
import '../../Styles/contact.scss';

export class Contact extends React.Component {


    render() {
        return(
            <section id='contact' className="contact animated fadeInRight">
                <h2>Kontakt</h2>

                <form id="contact" method="post" name='contactform' action="../../../public/mail.php">
                    <div className="left">
                        <input type="text" placeholder="  Temat" name='name' required="required"/>
                        <input type="email" placeholder="  E-mail" name='email' required="required"/>

                    </div>
                    <div className="right">
                        <textarea placeholder=" Napisz do mnie wiadomość!" name='message' rows='8' required="required"></textarea>
                    </div>
                    <div className="send-button cl">
                        <button type="submit">Wyślij</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Contact;