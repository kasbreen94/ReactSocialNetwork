import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessage"
                       placeholder="Enter your message"
                       validate={[required, maxLength(10)]}
                />

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm ({
    form: 'dialogAddMessageForm'
}) (AddMessageForm)