'use client';

import { Container } from "@mui/material";
import MemberNavbar from "@/app/utils/components/MemberNavber";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List',
};
const ListDataPage = () => {

    return (
        <>
            <MemberNavbar />
            <Container>

            </Container>
            </>
    );
};

export default ListDataPage;