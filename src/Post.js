import React from 'react'
import "./Post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import {ExpandMoreOutlined} from '@material-ui/icons' ;
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from "./StateProvider";
function Post({profilePic,image,username,timestamp,message}) {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="post">
            <div className="post__top">
            <Avatar className="post__avatar"
            src = {profilePic} />
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>

            </div>

            <div className="post__bottom">
                <p>{message}</p>

            </div>
            
            <div className="post__Image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;