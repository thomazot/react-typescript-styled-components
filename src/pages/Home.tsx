import React from 'react'
import { ListRepository } from '../components/Repository'
import { Title } from '../components/Title'
import { LayoutDefault } from '../Layout'

const HomePage = () => (
    <LayoutDefault>
        <Title>List Repository</Title>
        <ListRepository />
    </LayoutDefault>
)

export default HomePage
