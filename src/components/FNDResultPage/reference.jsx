import React from "react";
import "./FNDResultPage.css";


function FNDResultPage(props) {
  const {
    the_Gauge_Of_The_Truth,
    keywards_Of_The_News,
    short_Sentence,
    text_Petcent,
    char_Petcent,
    text_0,
    text_20,
    text_40,
    text_60,
    text_80,
    text_100,
    keyword1,
    keyword2,
    keyword3,
    keyword4,
    keyword5,
    text_Key_Sentence,
    political_Title,
    text_Leftwing,
    text_Rightwing,
    political_Explain,
    again,
  } = props;

  return (
    <div className="result-page">
      <div className="banner">What is your news?</div>

      <div className="truth_gauge"></div>
      <p className="the_-gauge_of_the_-truth khand-bold-abbey-12px">{the_Gauge_Of_The_Truth}</p>
      <div className="keywards_of_the_-news khand-bold-abbey-12px">{keywards_Of_The_News}</div>

      <h1 className="text_petcent">{text_Petcent}</h1>
      <div className="char_petcent">{char_Petcent}</div>
      <img
        className="truth-guage-bar-bg"
        src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/truth-background@2x.svg"
      />

      <img
        className="keyword_backround"
        src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/keyword-backround@2x.svg"
      />
      <img
        className="graph_backround"
        src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/graph-backround@2x.svg"
      />
      <div className="overlap-group">
        <img
          className="rectangle100"
          src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/rectangle100@2x.svg"
        />
        <img
          className="rectangle101"
          src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/rectangle101@2x.svg"
        />
        <div className="ellipse2"></div>
      </div>
      <div className="text_0 jejugothic-regular-normal-abbey-8px">{text_0}</div>
      <div className="text_20 jejugothic-regular-normal-abbey-8px">{text_20}</div>
      <div className="text_40 jejugothic-regular-normal-abbey-8px">{text_40}</div>
      <div className="text_60 jejugothic-regular-normal-abbey-8px">{text_60}</div>
      <div className="text_80 jejugothic-regular-normal-abbey-8px">{text_80}</div>
      <div className="text_100 jejugothic-regular-normal-abbey-8px">{text_100}</div>
      <div className="keyword1 jejugothic-regular-normal-abbey-7px">{keyword1}</div>
      <div className="keyword2 jejugothic-regular-normal-abbey-7px">{keyword2}</div>
      <div className="keyword3 jejugothic-regular-normal-abbey-7px">{keyword3}</div>
      <div className="keyword4 jejugothic-regular-normal-abbey-7px">{keyword4}</div>
      <div className="keyword5 jejugothic-regular-normal-abbey-7px">{keyword5}</div>
      <div className="graph1"></div>
      <div className="graph2"></div>
      <div className="graph3"></div>
      <div className="graph4"></div>
      <div className="graph5"></div>
      <div className="key_sentence">
        <div className="overlap-group1">
          <div className="ellipse4"></div>
        </div>
        <p className="text_key_sentence">{text_Key_Sentence}</p>
      </div>
      <div className="overlap-group2">
        <div className="rectangle114"></div>
        <div className="political_title">{political_Title}</div>
        <div className="ellipse_bottom"></div>
      </div>
      <div className="group28_political">
        <div className="overlap-group-container">
          <div className="overlap-group-1">
            <div className="rectangle119"></div>
            <div className="rectangle120"></div>
            <img
              className="rectangle122"
              src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/rectangle122@2x.svg"
            />
            <img
              className="rectangle123"
              src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/rectangle123@2x.svg"
            />
          </div>
          <div className="overlap-group1-1">
            <div className="rectangle118"></div>
            <div className="rectangle121"></div>
          </div>
        </div>
        <div className="flex-col">
          <img
            className="polygon1"
            src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/polygon1@2x.svg"
          />
          <div className="overlap-group4">
            <div className="political_center"></div>
          </div>
          <div className="twing-container jejugothic-regular-normal-white-7px">
            <div className="text_lef-twing">{text_Leftwing}</div>
            <div className="text_righ-twing">{text_Rightwing}</div>
          </div>
        </div>
        <div className="group-container">
          <div className="group21">
            <div className="overlap-group-2">
              <div className="rectangle119-1"></div>
              <div className="rectangle120-1"></div>
              <img
                className="rectangle122-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/rectangle122-1@2x.svg"
              />
              <img
                className="rectangle123-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/rectangle123-1@2x.svg"
              />
            </div>
          </div>
          <div className="group22">
            <div className="overlap-group1-2">
              <div className="rectangle118-1"></div>
              <div className="rectangle121-1"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="political_explain">{political_Explain}</p>
      <div className="again-container">
        <img
          className="again_-arrow"
          src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/again-arrow@2x.svg"
        />
        <div className="again">{again}</div>
      </div>
    </div>
  );
}

export default FNDResultPage;
