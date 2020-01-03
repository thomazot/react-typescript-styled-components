import React, { ReactNode, useState, useEffect } from 'react'
import * as S from './styled'

type Props = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4'
    children: ReactNode
}

const Title = ({ tag = 'h1', children }: Props) => {
    const [level, setLevel] = useState(1)

    useEffect(() => {
        setLevel(parseFloat(tag.replace(/\D/g, '')))
    }, [tag])

    return <S.Heading as={tag} level={level}>{children}</S.Heading>
}

export default Title
