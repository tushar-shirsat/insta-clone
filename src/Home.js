import React, { useEffect,useState } from 'react';
import Post from './Post';
import {db} from './firebase';

const Home = () => {
    const [posts, setPosts] = useState([]);

    
    useEffect(() =>{
        db
          .collection('posts')
          .orderBy('tiemstamp', 'desc')
          .onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
          })
    },[])
    
    return (
        <section className="Home">
            {
                posts.map(post => (<Post post={post.data} avatar='https://i.pinimg.com/originals/ff/39/52/ff39528890d0b19aa9807a20606d2fca.jpg' key={post.id}/>))
            
            }
            
        </section>
    )
}

export default Home
