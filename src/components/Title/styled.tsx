
import styled from 'styled-components'


interface Props {
    level: number
}


export const Heading = styled.div<Props>`
    font-size: ${({ level }) => 2.5 / level}em;
`
