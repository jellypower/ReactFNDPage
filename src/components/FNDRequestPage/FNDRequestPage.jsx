
import React, { PureComponent } from 'react';
import "../Share.css"
import "./FNDRequestPage.css"
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function FNDRequestPage(props) {

    const nav = useNavigate();

    return (


        <div className='snap-page-container'>

            <div className='snap-page-component'>
                <div className='request-page-content'>
                    <Form onSubmit={event=>{
                        event.preventDefault();
                        let id = requestInference(event, nav);
                        }}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label className='form-label-font'>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="body">
                            <Form.Label className='form-label-font'>Body</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter body" rows={10} />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>



        </div>
    );
}

function requestInference(event, nav){


    const title = event.target.title.value;
    const body = event.target.body.value;

    fetch("https://api.fnc-1.link/api/v1/fakenews-analyze/", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(
            {
                title: title,
                body: body
            }
        )
    })
    .then(response =>{
        if(!response.ok){
            alert('[request page]request not accepted!');
            console.log(response);
            return;
        }
        return response.text();

    })
    .then(response=>{
        nav("/loading/"+response);
    })
    .catch((response)=>{
        alert('[request page]request failed!');
        console.log(response);
    })
    

}
