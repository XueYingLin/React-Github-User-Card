import React from "react";
import styled from "styled-components";
import PersonCard from "./PersonCard";

const Profile = (props) => {
    return (
        <div className="display">
            <div className="profile">
                <img src={props.avatar_url} />
                <p>{props.login}</p>
                <p>{props.html_url}</p>
            </div>
            <p className="text">Followers as below:</p>
            
            {props.followers.map(p => (
                <PersonCard key={p}
                            avatar_url={p.avatar_url}
                            login= {p.login}
                            html_url={p.html_url}
                            />
                
          ))}
    </div>);
}

export default Profile;
