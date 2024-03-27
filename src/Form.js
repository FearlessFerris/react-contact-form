// Contact Information Form ( Form Component )

import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';


// Form Component 
function ContactInformationForm() {

    return(
    <div className = 'form-container'>
        <Form> 
          <div className = 'inline-field'>
            <label> Name </label>
            <Form.Input 
                name = 'name'
                placeholder = 'Name'
            />
          </div>
        </Form>
    </div>
    )
}

export default ContactInformationForm;