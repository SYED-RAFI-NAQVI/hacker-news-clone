import React, {useEffect, useState} from 'react'


import {NewStoriesIds} from './request'
import Story from './story'

import './stories.css'

function Stories() {
    const [storyIds, setstoryIds] = useState([])

    useEffect(() => {
        NewStoriesIds()
        .then((data) => {
            setstoryIds(data)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div className='story_box'>
            {storyIds.slice(0,10).map(storyId => <Story key={storyId} storyId={storyId}/>)}
        </div>
    )
}

export default Stories







