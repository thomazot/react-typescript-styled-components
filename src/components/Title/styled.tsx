
import styled from 'styled-components'


interface Props {
    level: 'h1' | 'h2' | 'h3' | 'h4'
}


export const Heading = styled.div<Props>`
    font-size: ${({ level }) => 2.5 / (parseInt(level.replace(/\D/g, '')))}em;
`
