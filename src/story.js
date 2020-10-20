import React, {useState, useEffect} from 'react'

import {getStory} from './request'

import './story.css'



function Story({storyId}) {
    const [story, setStory]= useState({})

    useEffect(()=>{
        getStory(storyId).then(data => setStory(data))
    }, [storyId])


    return (
        <div className='story'>
            <div className='story_items'>
                <a className='story_url' href={story.url}>
                    <h3 className='story_title'>{story.title}</h3>
                </a>
                <p className='story_title'>Author: {story.by}</p>
                <p className='story_score'>Score: {story.score}</p>
            </div>
        </div>
    )
}

export default Story
