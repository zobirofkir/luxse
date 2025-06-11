import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default ({ children }: AppLayoutProps) => (
    <>
        {
            /**
             * Header Component
             */
        }
        <HeaderComponent />

        {
            /**
             * The pages
             */
        }

        {children}

        {
            /**
             * The Footer Component
             */
        }
        <FooterComponent />
    </>
);
