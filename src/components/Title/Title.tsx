import React, { ReactNode } from 'react'
import * as S from './styled'

type Props = {
    level?: 'h1' | 'h2' | 'h3' | 'h4'
    children: ReactNode
}

const Title = ({ level = 'h1', children }: Props) => (
    <S.Heading as={level} level={level}>{children}</S.Heading>
)

export default Title
