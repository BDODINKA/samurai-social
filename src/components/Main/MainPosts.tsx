import React from 'react';


export const MainPosts = () => {
    return (
        <div className="posts">
            <div className="post">
                <div className = "logo"></div>
                <p className = "title">Alexa</p>
                <p className = "times">1 hour ago</p>
                <button>...</button>
            </div>
            <div className="photos">
                <p className="text">Description</p>
                <div className = "content">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>

    )
}