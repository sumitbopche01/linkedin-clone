import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create'
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import PostCard from './Post'
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {

    const [Input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log('inside use effect')
        db.collection("posts").onSnapshot(snapshot =>
            setPosts(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data()
                    })
                )
            )
        )
    }, []);

    const sendPosts = (e) => {
        console.log('inside send posts')
        e.preventDefault();
        db.collection('posts').add({
            name: "Sumit Bopche",
            description: "This is description of description",
            message: Input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" onChange={e => setInput(e.target.value)} value={Input} />
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

            {posts.map(({ id, data }) =>
                <PostCard
                    key={id}
                    name={data.name}
                    description={data.description}
                    message={data.message}
                    photoUrl={data.photoUrl}
                />
            )}
        </div>
    )
}

export default Feed
