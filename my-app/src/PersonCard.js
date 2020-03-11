import React from "react";
import styled from "styled-components";

const PersonCard = (props) => {
    // const PersonCardStyle = styled.div `
       
       
    //     margin: 10px;
        
    // `;

    return (
        <div>
            <img src={props.avatar_url} />
            <p>{props.login}</p>
            <p>{props.html_url}</p>
        </div>
    )
}

export default PersonCard;