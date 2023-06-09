import { ThemeProvider } from 'next-themes'
import "../styles/globals.css";


const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
