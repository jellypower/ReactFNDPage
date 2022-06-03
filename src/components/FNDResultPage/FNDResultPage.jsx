import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FNDResultPage.css";
import "../Share.css"

import { ProgressBar } from "react-bootstrap";
import { KeywordChart } from "./KeywordChart";

import { Button } from "react-bootstrap";

function FNDResultPage(props) {


  const id= useParams()['id'];


  let [guage, setGuage] = useState(100); 
  let [keywords, setKeywords] = useState({});
  let [title, setTitle] = useState();
  let [body, setBody] = useState();
  let [newsType, setNewsType] = useState(false);
  


  useEffect(()=>{
  fetchInferenceResult(id).
  then((response) =>{
    let [fakenews, result] = response;
    setTitle(fakenews.title);
    setBody(fakenews.body);
    setNewsType(result.TF);
    setGuage(result.Score);
    setKeywords(result.Keywords);
  })}, []);



  return (
    <div className="snap-page-container">

      <div className="snap-page-component">
        <div className="truth-guage-content snap-page-align-center">
          <div className="banner">What is your news?</div>
          <TruthGuageBox guage={guage} newsType={newsType}/>
          <br/>

          <h1 className="result-tag">this news is...
          <div className={newsType ? "fake-result-label": "true-result-label"}>{newsType ? "Fake" : "True"}</div>
          </h1>

        </div>
      </div>

      <div  className="snap-page-component">
        <div className="keyword-content snap-page-align-center">
          <KeywordChart data={keywords} />
          <Article title={title} body={body}/>
        </div>
      </div>

    </div>
  );
}

function TruthGuageBox(props) {
  let guage = props.guage;
  let newsType = props.newsType;
  let variant;

  return (
    <div className="truth-guage-box">
      <p className="truth-guage-box-banner">The Guage of the Truth</p>
      <p className="percentage-label">{guage}%</p>

      <div className="truth-guage-bar">
        <ProgressBar variant={newsType ? "danger" : "success"} now={guage} />
      </div>

    </div>
  )
}

function Article(props) {
  const title = props.title;
  const body = props.body

  return (
  
  <>
    <h2>{title}</h2>
    <ul>
      <li className="article-body">{body}</li>
    </ul>
    </>
  );
}

function timer(time){
  return new Promise(function(resolve){
    setTimeout(function(){  }, time);
  })
}

async function fetchInferenceResult(id) {

  try {
      var response = await fetch("https://api.fnc-1.link/api/v1/fakenews-analyze/" + id);

      if (!response.ok) {
        alert('[result page]request not accepted!');
        console.log(response);
        return;
      }
      else {
        response = await response.json();
      }
    }
    catch (error) {
      alert('[result page]request failed!');
      console.log(response);
    }

    if(response.status === 3){
      let fakeNews = response.fakeNews;
      response = await JSON.parse(response.result); 
      console.log(response);

      return [fakeNews,response];
    }
    else{
      alert('[result page]request failed!');
      return;
    }


}
export default FNDResultPage;
