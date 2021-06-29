import { FaTimes } from 'react-icons/fa';

var CARD_STYLES = {
    boxShadow: "0 0.25em 0.25em 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    textAlign: "center"
}

var EXIT_ICON_STYLES = {
    color: "red",
    fontSize: "2rem",
    cursor: "pointer",
    position: "absolute",
    left: "0.125rem"
}

const Card = ({ open, children, onClose }) => {
    if (!open) return null

    return (
        <>
            <div className="overlay"></div>
            <div className="card" style={CARD_STYLES}>
                <FaTimes style={EXIT_ICON_STYLES} onClick={onClose} />
                <img src={`${process.env.PUBLIC_URL}/norris_head.png`} alt="Chuck Norris" style={{width: '18.75rem'}} />
                <div className="card__container" style={{padding: "0.125rem 1rem"}}>
                    <h4><b style={{color: "black"}}>Chuck Norris</b></h4> 
                    <p style={{color: "black"}}><i>Martial artist & Actor</i></p> 
                    <div style={{marginTop: "1.875rem"}} className="card__text">{children}</div>
                </div>
            </div>
        </>
    )
}

export default Card;