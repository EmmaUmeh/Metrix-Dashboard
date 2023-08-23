
import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Sidenav from '@/components/Sidenav';

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
  })


export const metadata = {
    title: 'Dashboard',
    description: 'A simple dashboard',
  }

 

  export default function RootLayout ({ children }) {
    return(
<html lang="en">
            <body className={inter.className} >
                <div style={{ display: 'flex' }}>
                    <Sidenav />
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <Navbar />
                        <main style={{ flex: '1' }}>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    )
}