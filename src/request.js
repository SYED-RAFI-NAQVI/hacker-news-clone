import axios from 'axios'

const BaseUrl = ' https://hacker-news.firebaseio.com/v0/'
const NewStoriesIdUrl = `${BaseUrl}newstories.json`
const StoryUrl = `${BaseUrl}item/`


export const getStory = async storyId => {
    const result = await axios.get(`${StoryUrl + storyId}.json`)
    .then(({data}) => data)
    return result
} 

export const NewStoriesIds = async () =>{
    const ids = await axios.get(NewStoriesIdUrl).then(
        ({data}) => data
    ).catch(
        err => console.log(err)
    )
    return ids
}

