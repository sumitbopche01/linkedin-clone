import React, { useState } from 'react'
import CreateIcon from '@material-ui/icons/Create'
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'

function Feed() {

    const [Posts, setPosts] = useState([])

    const sendPosts = (e) => {
        e.preventDefault();

    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" name="" id="" />
                        <button onClick={sendPosts} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
                </div>
            </div>

            {Posts.map((post) => {
                <Posts />
            })}

            <Post name='Manu Kumar' description="this is props desc" message="this will work" />
        </div>
    )
}

export default Feed
