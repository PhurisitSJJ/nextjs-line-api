'use client';

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import axios from 'axios';
import { Container } from '@mui/material';

const LinePage = () => {
    useEffect(() => {
        liff.init({liffId: '2006781477-NzeKaxpL'})
        .then(()=>{
            handleLogin()
        })
    },[])
    
    const handleLogin = async() => {
        try {
            const profile = await liff.getProfile() 
            const idToken = liff.getIDToken()
            console.log("Data: ", profile, " idToken: ", idToken)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container>
            เหมี่ยวววววววว
        </Container>
    )
}
export default LinePage;
