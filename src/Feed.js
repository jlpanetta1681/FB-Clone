import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />


            <Post
                profilePic="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/98199378_10158181210161737_674591374808449024_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ep1PEd0AkIQAX_xDxET&_nc_ht=scontent-atl3-1.xx&oh=0000b86c10fe9b796b979a4d6e9c7895&oe=60204083"
                message='Wow I actually did it!!'
                timestamp="Thos will be a timestamp"
                username="JoJo Beans"
                image="https://image.shutterstock.com/image-illustration/business-success-concept-target-motivation-260nw-713054818.jpg" />

        </div>
    )
}

export default Feed
