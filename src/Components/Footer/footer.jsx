import React from 'react';
import '../../Styles/footer.scss';

export class Footer extends React.Component {


    render() {
        return(
            <div className='footer animated rubberBand'>
                <a href='https://www.linkedin.com/in/kewin-bielecki-7937a1186/' target='_blank' className='social'><i className="linkedin fab fa-linkedin animated headShake"></i></a>
                <span>&#169; Kewin Bielecki 07.2019</span>
                <a href='https://github.com/KewinBielecki' target='_blank' className='social'><i className="github fab fa-github animated headShake"></i></a>
            </div>
        )
    }
}

export default Footer;