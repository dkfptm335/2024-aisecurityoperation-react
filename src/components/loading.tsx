import React from 'react'
import {GridLoader} from 'react-spinners';

export const Loading = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <GridLoader color={'#0165B0'} size={20} />
        </div>
    );
}