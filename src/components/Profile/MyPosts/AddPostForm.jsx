import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="Enter your text"
                       validate={[required, maxLength(10)]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const PostForm = reduxForm({
    form: 'addPostForm'
})(AddPostForm)