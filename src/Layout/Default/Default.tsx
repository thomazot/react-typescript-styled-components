import React, { ReactNode } from 'react'
import { Theme } from '../../theme'
import * as S from './styled'

type Props = {
    children: ReactNode
}

const Default = ({ children }: Props) => (
    <Theme>
        <S.Container>
            {children}
        </S.Container>
    </Theme>
)

export default Default
