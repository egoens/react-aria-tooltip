import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import centered from "@storybook/addon-centered"

import ReactARIAToolTip from "../src/react-aria-tooltip"

// defind tooltip options
const directions = ["top", "right", "bottom", "left"]
const eventTypes = ["click", "hover"]

// setup the stories
let stories = eventTypes.map(type => {
    return storiesOf(type, module)
})

// map types and diretions to stories
stories.map(story => {
    directions.map(direction => {
        story.addDecorator(centered)
        story.add(direction, () => (
            <ReactARIAToolTip
                message="Your custom message"
                direction={direction}
                eventType={story.kind}
            >
                {story.kind === "click" ? <div>click on me</div> : <div>hover over me</div>}
            </ReactARIAToolTip>
        ))
    })
})
