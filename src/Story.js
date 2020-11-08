import React from 'react'
import "./Story.css";
import { Avatar } from '@material-ui/core';
import { useStateValue } from "./StateProvider";
function Story({image,profileSrc,title}) {
    const [{user}, dispatch] = useStateValue();
    return (
        <div style={{backgroundImage : `url(${image})` }} className="story" >
            <Avatar className="story__avatar"src={user.photoURL} />
            <h4>{user.displayName}</h4>
        </div>
    )
}

export default Story 
