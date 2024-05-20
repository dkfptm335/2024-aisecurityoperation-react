import React from 'react'
import {GridLoader} from 'react-spinners';
import './style.css'

export const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            fontFamily: 'Noto Sans KR',
        }}>
            <h1 style={{
                color: '#0165B0',
                fontSize: '2rem',
                fontWeight: 'bold',
            }}>페이지 불러오는 중...
            </h1>
            <GridLoader color={'#0165B0'} size={15} />
        </div>
    );
}