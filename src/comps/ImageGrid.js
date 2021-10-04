import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {

    const {docs, loading} = useFirestore('images');

    if(loading){
        return(
            <div className="img-grid">
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
                <div className="img-loader"></div>
            </div>
        );
    }

    return(
        <div className="img-grid">
            {docs && docs.map((doc)=>{
                return(
                    // <motion.div 
                    //     key={doc.id} 
                    //     className="img-wrap" 
                    //     onClick={()=>setSelectedImg(doc.url)} 
                    //     whileHover={{opacity: 1}}
                    //     layout
                    // >
                    //     <motion.img src={doc.url} alt="uploaded pic" 
                    //         initial={{opacity: 0}}
                    //         animate={{opacity: 1}}
                    //         transition={{delay: 1}}
                    //     />
                    // </motion.div>
                    <div 
                        key={doc.id} 
                        className="img-wrap" 
                        onClick={()=>setSelectedImg(doc.url)} 
                    >
                        <img src={doc.url} alt="uploaded pic"/>
                    </div>
                );
            })}
        </div>
        
    );
}
export default ImageGrid;