import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { MY_SERVER } from '../../env';
import axios from 'axios';
import {
    getImagesAsync,
    image_list,

} from './gallerySlice';
const Upload = () => {
    const images = useAppSelector(image_list);
    const dispatch = useAppDispatch()
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [uploadedFile, setuploadedFile] = useState<any | null>(null)
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [refreshFlag, setrefreshFlag] = useState(false)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.target!.files![0])
    };


    useEffect(() => {
        console.table(images)
        dispatch(getImagesAsync())
    }, [refreshFlag])



    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        const form_data = new FormData();
        form_data.append("image", selectedFile);
        form_data.append("title", title);
        form_data.append("desc", desc);
        try {
            const res = await axios.post(MY_SERVER, form_data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setuploadedFile(res.data.file)
            setrefreshFlag(!refreshFlag)
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <div>
            <input type='file' onChange={handleFileChange} /><br />
            Title: <input onChange={(e) => settitle(e.target.value)} /><br />
            Desc: <input onChange={(e) => setdesc(e.target.value)} /><br />
            <button onClick={handleUpload}>Upload</button><br />
            {uploadedFile && <p>Uploaded File: {uploadedFile}</p>}
        </div>
    );
};


export default Upload