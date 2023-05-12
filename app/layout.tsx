import { StoreProvider } from "@/components/atoms/store-provider"
import './globals.css'

export const metadata = {
  title: 'Users List and Posts List',
  description: 'Created by Emiliano Conti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
            {children}
        </StoreProvider>
      </body>
    </html>
  )
}
