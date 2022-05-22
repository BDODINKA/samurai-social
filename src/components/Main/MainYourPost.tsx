import React from 'react';


export const MainYourPost = () => {
    return (
        <div className="your__post">
            <div className="post">
                <div className = "logo"></div>
                <input className = "description"></input>
            </div>
            <div className="buttons">
                <button>Video</button>
                <button>Photo</button>
            </div>
        </div>
    )
}