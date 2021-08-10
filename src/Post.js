import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import moment from 'moment';
import './css/Post.css';

const Post = ({post,avatar}) => {
    const [disable,setDisable] = useState(true);
    const handleSubmit  = e =>{
        e.preventDefault();
    }
    return (
        <article className="post">
            <header className="post__header">
                <div className="post__header-left">
                    <Avatar src={avatar} className="post-avatar"/>
                    <h3 className="post__user-name">{post.username}</h3>
                </div>
                <div className="post__header-right">
                    <MoreHorizIcon className="post-icon"/>
                </div>
            </header>
            <div className="post__main-post">
                <img src={post.imageUrl} alt={post.username} className="post__main-content" />
            </div>
            <footer className="post__footer">
                <div className="content_detail">
                <div className="post__footer-top">
                    <div className="post__footer-top-left">
                        <FavoriteBorderIcon className="post-icon icon-footer"/>
                        <ChatBubbleOutlineIcon className="post-icon icon-footer"/>
                        <SendOutlinedIcon className="post-icon icon-footer" />
                    </div>
                    <div className="post__footer-top-right">
                        <BookmarkBorderIcon className="post-icon"/>
                    </div>
                </div>
                <h3 className="post__likes">323 likes</h3>
                <div className="post__footer-caption">
                    <h2>{post.username}</h2> <p>{post.caption}</p>
                </div>
                <p className="time_stamp">{moment(post.tiemstamp.seconds*1000).fromNow()}</p>
                </div>
                <div className="footer__comment-container">
                    <SentimentSatisfiedOutlinedIcon className="post-icon" style={{flex: '0.1'}}/>
                    <form style={{display:'flex',alignItems:'center',flex:'0.9'}} onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setDisable(e.empty)}  className="comment-input" placeholder="Add a comment..." />
                        <button className="post__comment-btn"disabled={disable}>Post</button>
                    </form>
                </div>
            </footer>
        </article>
    )
}

export default Post
