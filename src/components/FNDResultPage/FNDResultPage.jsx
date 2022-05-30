import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./FNDResultPage.css";
import "../Share.css"

import { ProgressBar } from "react-bootstrap";
import { KeywordChart } from "./KeywordChart";

import { Button } from "react-bootstrap";


//--------------------------temp
const con ="12일 중국 국가신문출판서에 따르면 중국 국내 개발사가 신청한 게임에 45개 대해 4월 8일자로 판호를 발급했다. 여기에는 릴리스 게임즈\
바이두, 4399 등 개발사가 포함됐으나, 텐센트, 넷이즈 등 대형 개발사는 목록에서 빠졌다."
const da = [
  {
      word: '#한국',
      attention: 2400
  },
  {
      word: '#힙합',
      attention: 1398
  },
  {
      word: '#망해라',
      attention: 9800
  },
  {
      word: 'Word E',
      attention: 3908
  },
  {
      word: 'Word E',
      attention: 4800
  },
];
//--------------------------temp

function FNDResultPage(props) {

  const id= useParams()['id'];

  let [guage, setGuage] = useState(); 
  let [keywords, setKeywords] = useState();

  fetchInferenceResult(id, setGuage, setKeywords);
  


  return (
    <div className="snap-page-container">

      <div className="snap-page-component">
        <div className="truth-guage-content snap-page-align-center">
          <div className="banner">What is your news?</div>
          <TruthGuageBox guage={80} />
        </div>
      </div>

      <div  className="snap-page-component">
        <div className="keyword-content snap-page-align-center">
          <KeywordChart data={da} />
          <Article contents={con} />
        </div>
      </div>

    </div>
  );
}

function TruthGuageBox(props) {
  const guage = props.guage;
  let variant;

  if (50 >= guage) variant = "warning";
  else variant = "success";

  return (
    <div className="truth-guage-box">
      <p className="truth-guage-box-banner">The Guage of the Truth</p>
      <p className="percentage-label">{guage}%</p>

      <div className="truth-guage-bar">
        <ProgressBar variant="truth-prog-bar" now={guage} />
      </div>

    </div>
  )
}

function Article(props) {
  const contents = props.contents

  return (
    <ul>
      <li className="article-body">{contents}</li>
    </ul>
  );
}

function fetchInferenceResult(id, setGuage, setKeywords){
  console.log("http://localhost:8080/api/v1/fakenews-analyze/"+id);

  fetch("http://localhost:8080/api/v1/fakenews-analyze/"+id, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
        
    })
    .then(response =>{
        if(!response.ok){
            alert('[result page]request not accepted!');
            console.log(response);
            return;
        }

        return response.json();

    })
    .then(response=>{
        console.log(response);
    })
    .catch((response)=>{
        alert('[result page]request failed!');
        console.log(response);
    })
    
}





export default FNDResultPage;
