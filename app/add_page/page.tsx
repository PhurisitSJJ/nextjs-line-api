'use client';

import { Container } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add',
};

const AddDataPage = () => {

    return (
        <>
            <MemberNavbar />
            <Container>

            </Container>
            </>
    );
};

export default AddDataPage;