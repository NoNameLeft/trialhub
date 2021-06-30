import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

import Card from '../Card';
import * as jokesService from '../../service/jokesService';
import * as regex from '../../shared/Regex';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('')
    const [joke, setJoke] = useState('');

    const jokeBtnHandler = () => {
        if(!regex.validEmail.test(email)) {
            return toast.error('Enter a valid Business Email to continue.');
        }
        
        setEmail('');
        setIsOpen(true);
        jokesService.getJoke()
            .then(res => {
                setJoke(res.value);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <div className="ribbon">
                    <span className="ribbon__text">Find out how Covid-19 impacted the clinical research industry <Link to="/">Get our 2021 Market Overview</Link></span>
            </div>
            <div className="home">
                <div className="home__info">
                    <div className="home__info__text">
                        <h1 className="home__info__text__title">Clinical Trial Strategy That Stands Out</h1>
                        <h1 className="home__info__text__subtitle">Why losing studies you can win with TrialHub</h1>
                        <div className="home__email">
                            <input type="text" className="home__email__input" placeholder="Your work email" required={true} value={email} onChange={e => setEmail(e.target.value)} />
                            <button type="button" className="home__email__btn" onClick={jokeBtnHandler} >See TrialHub in Action</button>
                            <Card open={isOpen} onClose={() => setIsOpen(false)}>
                                <span style={{color: "black"}}>{joke}</span>
                            </Card>
                        </div>
                    </div>
                    <div className="home__info__banner">
                        <img src={`${process.env.PUBLIC_URL}/banner.png`} alt='main-banner'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;