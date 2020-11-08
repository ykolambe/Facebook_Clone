import React from 'react'
import "./StoryReel.css"
import Story from "./Story"
function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://scontent.ffjr1-5.fna.fbcdn.net/v/t1.0-9/95857782_1469747783205934_355539346972999680_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=DrxOnvk5xK4AX_WRf08&_nc_oc=AQlnk-ZDB762vXWVTz820UTGOGlCEjFGaLnCLuTO89QbGcaEIZU_skoL9vgEJlEXfzGy6PMiJQZrRQM-hASJw0iq&_nc_ht=scontent.ffjr1-5.fna&oh=120b90f34c4f1578309d6dc17f4e8d8a&oe=5FCC7B7A"
            profileSrc="https://scontent.ffjr1-1.fna.fbcdn.net/v/t1.0-9/123326003_3550382571650302_4067570289500176668_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=gZfC8snpc4oAX89x-qb&_nc_ht=scontent.ffjr1-1.fna&oh=074667502dbfc3577c38f3c06da0ba09&oe=5FCCCFDE"
            title="Yuvraj Kolambe"
            />
            <Story />
            <Story />
            <Story />
            <Story />
        </div>
    )
}

export default StoryReel 
