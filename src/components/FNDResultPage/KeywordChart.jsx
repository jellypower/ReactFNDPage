
import React, { PureComponent } from 'react';
import "./KeywordChart.css";
import "../Share.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Text } from 'recharts';

export function KeywordChart(props) {

    let data = props.data;

    const barSize=10;

    return (
        <div>
        <p className="keywrods-banner">Keywords of the News</p>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid vertical={false}/>
      <XAxis dataKey="word" height={50} dy={10}
      style={{
          fontSize: '1rem',
          fontFamily: "Khand"
      }}/>
      <Tooltip />
      <Bar dataKey="attention" fill="#6c60ff" maxBarSize={barSize}/>
    </BarChart>
    </ResponsiveContainer>
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