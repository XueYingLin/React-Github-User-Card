import React from "react";
import styled from "styled-components";

const PersonCard = (props) => {
    const PersonCardStyle = styled.div `
        // background: yellow;
        border: 1px solid blue;
        padding: 20px;
        margin: 10px;
    `;

    return (
        <PersonCardStyle>
            <img src={props.avatar_url} />
            <p>{props.login}</p>
            <p>{props.html_url}</p>
        </PersonCardStyle>
    )
}

export default PersonCard;