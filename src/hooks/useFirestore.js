import { useState, useEffect } from "react";
import {projectFirestore} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        const unsub = projectFirestore.collection(collection)
        .orderBy('createAt', 'desc')
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach((doc)=>{
                documents.push({...doc.data(), id: doc.id});
            })
            setDocs(documents);
            setLoading(false);
        })
        return () => unsub();
    }, [collection]);
    return {docs, loading};
}

export default useFirestore;