import { Button, CircularProgress, Input, LinearProgress } from '@material-ui/core';
import React, { useState } from 'react'
import { db, storage } from './firebase';
import firebase from 'firebase'

const UploadPost = ({user}) => {
    const [caption,setCaption] = useState('');
    const [image,setImage] = useState('');
    const [progress,setProgress] = useState(0);
    const handleChange = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleClick =e =>{
        console.log(image.name);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) =>{
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                );
                setProgress(progress);
                console.log(progress);
            },
            (error) =>{
                // error functions
                console.log(error);
                alert(error.message)
            },
            () =>{
                // complete fucntions
                storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    //post image inside db
                    db.collection('posts').add({
                        tiemstamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption,
                        imageUrl: url,
                        username: user.displayName
                    });
                    setProgress(0);
                    setCaption('');
                    setImage(null)
                })
            }
        )
    }
    return (
        <div className='upload' style={{width: '60%',margin:'auto'}}>
            <Input value={caption} onChange={(e) => setCaption(e.target.value)} type="text" placeholder="Enter caption" />
            <Input type="file" onChange={handleChange}/>
            <Button onClick={handleClick}>upload</Button>
            <progress style={{display: 'block',widht: '100%'}}  value={progress} max="100" /> 
        </div>
    )
}

export default UploadPost
