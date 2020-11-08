import React,{useState} from 'react'
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";

import db from "./firebase";
import firebase from "firebase";


function MessageSender() {
    const [input,setInput] = useState("")
    const [image,setImageUrl] = useState("")
    const [{user}, dispatch] = useStateValue();
    const handleSubmit = (e) =>{
         e.preventDefault();  
         
         //db stuff
         db.collection('posts').add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            username : user.displayName,
            profilePic : user.photoURL,
            image : image
         }
         );

         setInput("");
         setImageUrl("");
    }


    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src = {user.photoURL}/>
                <form>
                    <input 
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)} 
                    className="messageSender__input" placeholder={`What's on your mind, ${user.displayName} ?`} />
                    <input 
                    value = {image}
                    onChange = {(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL (Optional) ?"/>
                    <button onClick={handleSubmit} type="submit">Handle Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={ {color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={ {color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={ {color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
