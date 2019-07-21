import React from 'react';
import '../../Styles/about.scss';

const AboutUs = () => {

    return (
        <article id='about' className='animated fadeInLeft'>
            <h2 className='animated pulse'>Trochę o mnie</h2>

            <p><img className='gravatar'></img>Cześć, nazywam się Kewin i jestem z Białegostoku. Poznajmy się!</p>
            <p>Jestem absolwentem Politechniki Białostockiej. Tworzeniem stron zająłem się jakiś czas temu i bardzo chciałbym rozwijać się w tym kierunku. Z dnia na dzień wydaje mi się, że mój kod staje się lepszy, a ja coraz lepiej rozumiem w jaki sposób to wszystko działa. W związku z tym poszukuję pierwszej pracy na stanowisku Juniorskim :)</p> <p>Poszukuję miejsca gdzie będę mógł
            uporządkować zdobytą już wiedzę, oraz uczyć się nowych rzeczy. Chciałbym nabierać
            niezbędną w tej pracy praktykę i doświadczenie, które mam nadzieję przyjdzie z
            biegiem czasu. </p>
        </article>
    );
}

export default AboutUs;