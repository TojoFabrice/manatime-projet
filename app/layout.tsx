import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import MenuBar from './components/menu/MenuBar'
import Modal from './components/modal/Modal'
import { VisibilityContextProvider } from './context/VisibilityContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <VisibilityContextProvider>
        <div className='h-screen flex flex-row justify-start bg-secondary'>
          <Sidebar />
          <div className='w-full overflow-y-auto relative'>
            <div className='sticky top-0'>
              <MenuBar />
            </div>
            {children}
            <div>
              <Modal />
            </div>
          </div>
        </div>
        </VisibilityContextProvider>
      </body>
    </html>
  )
}
