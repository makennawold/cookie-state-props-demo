import React from "react";

export const Cookie = props => {
    return (
        <div className="cookieContainer">
            {props.path}
            <img className="cookie" src={props.path} />
        </div>
    )
}

export default Cookie;