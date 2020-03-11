import React from "react";
import styled from "styled-components";

const PersonCard = (props) => {
    
    return (
        <div>
            <img src={props.avatar_url} />
            <p>{props.login}</p>
            <p>{props.html_url}</p>
        </div>
    )
}

export default PersonCard;