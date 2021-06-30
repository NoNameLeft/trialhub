import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="error">
            <div className="error__message">
                <h1 className="error__message__text">ERROR 404 - PAGE NOT FOUND!</h1>
                <Link className="error__message__btn" to="/" >Home</Link>
            </div>
        </div>
    )
}

export default Error;