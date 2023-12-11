import React from "react";
import profileReducer, {addPost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

it('new post should be added', () => {
    let action = addPost("blablabla");

    let state = {
        posts: [
            {
                id: 1,
                message: 'tincidunt nunc pulvinar sapien ettincidunt ' +
                    'nunc pulvinar sapien ettincidunt nunc pulvinar ' +
                    'sapien ettincidunt nunc pulvinar sapien ettincidunt ' +
                    'nunc pulvinar sapien ettincidunt nunc pulvinar ' +
                    'sapien ettincidunt nunc pulvinar sapien ettincidunt' +
                    ' nunc pulvinar sapien et',
                like: 13
            },
            {
                id: 2,
                message: 'tellus molestie nunc non blandittellus ' +
                    'molestie nunc non blandittellus molestie nunc ' +
                    'non blandittellus molestie nunc non ' +
                    'blanditblandittellus molestie nunc non ' +
                    'blanditblandittellus molestie nunc non ' +
                    'blanditblandittellus molestie nunc non blandit',
                like: 3
            }
        ],
    };
    let newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(3);
    expect (newState.posts[2].message).toBe("blablabla");
});
