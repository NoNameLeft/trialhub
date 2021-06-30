import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__motto">
                    <FaQuoteLeft className="footer__motto__leftq" />
                    <div className="footer__motto__text">
                        Previously only the big CROs and pharma could afford such a sophisticated platform.
                        <hr></hr>
                        <b>TrialHub is a game changer!</b>
                    </div>
                    <FaQuoteRight className="footer__motto__rightq" />
                </div>
            </div>
            <div className="footer__strip"></div>
        </div>
    )
}

export default Footer;