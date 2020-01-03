import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './GlobalStyle'
import theme from './Config'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => (
    <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        { children }
    </ThemeProvider>
)

export default Layout
