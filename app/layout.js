export const metadata = {
  title: 'Fede',
  description: 'Pagina de Fede',
}
import '../styles/globals.css'
import Navigation from './components/Navigation'

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
