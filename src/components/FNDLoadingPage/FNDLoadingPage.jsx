
import React, { PureComponent } from 'react';
import logo from '../../logo.svg';
import "../Share.css"
import "./FNDLoadingPage.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

export function FNDLoadingPage(props) {

    const id = useParams()['id'];


    const nav = useNavigate();

    apiServicePoll(id, nav);

    return (


        <div className='snap-page-container'>

            <div className='snap-page-component'>
                <header className="loading-header">
                    <Spinner animation="grow" variant="primary" />
                    <br/>
                    <p>Inferencing...</p>
                </header>
            </div>



        </div>
    );
}

async function apiServicePoll(id, nav) {

    const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));

    for (var i = 0; i < 30; i++) {
        try {
            var response = await fetch("http://3.38.210.214:8080/api/v1/fakenews-analyze/" + id);

            if (!response.ok) {
                alert('[result page]request not accepted!');
                console.log(response);
                return;
            }
            else {
                response = await response.json();
                console.log("data: " + JSON.stringify(response))
            }
        }
        catch (error) {
            alert('[loading page]request failed!');
            console.log(response);
        }


        if (response.status === 3){
             nav("/result/"+ id);
             return;
        }
        await delay();
    }

    alert("reference time out!");

}