import FooterAuthComponent from '@/components/auth/FooterAuthComponent';
import HeaderAuthComponent from '@/components/auth/HeaderAuthComponent';
import React from 'react'
import { type ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

interface AuthLayoutProps {
    children: ReactNode;
}

export default ({ children }: AuthLayoutProps) => (
    <>
        {
            /**
             * Header Auth Component
             */
        }
        <HeaderAuthComponent />

        {
            /**
             * The pages
             */
        }

        {children}

        {
            /**
             * Footer Auth Component
             */
        }
        <FooterAuthComponent />
    </>
);