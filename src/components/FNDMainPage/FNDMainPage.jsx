
import React, { PureComponent } from 'react';
import './FNDMainPage.css';
import "../Share.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function FNDMainPage(props) {

    const nav = useNavigate();

    return (
        <div className='main-page-container snap-page-component'>

            <div className='main-page-content desc-half-left'>
                <div className='desc-box'>
                    <h1 className='title'>How to Read <br />Fake News</h1>

                    <p className="sub-title">
                        Sejong University Capstone Project
                        <br />
                        Team. Pasongsong
                    </p>


                    <Button
                        className='btn-font'
                        variant="primary"
                        onClick={()=>nav("/request")}
                    >
                        S T A R T
                    </Button>
                </div>
            </div>


            <div className='main-page-content'>
                <img className="sample-img"
                    src="https://anima-uploads.s3.amazonaws.com/projects/628097709ee82e3c152a2f25/releases/62809c28c25221139ed6a27e/img/sample-page@2x.svg" />;



            </div>

        </div>
    );
}



// 해야할 일
/*
1. 페이지 차트 폰트 바꾸기 
2. react route를 이용해 페이지 전환 만들기
3. 각 페이지별 디자인 완성하기
4. fetch를 이용해 서버와 통신
*/