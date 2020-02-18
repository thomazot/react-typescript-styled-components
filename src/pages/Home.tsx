import React from 'react'
import { ListRepository } from '../components/repository'
import { Title } from '../components/Title'
import { LayoutDefault } from '../Layout'

const HomePage = () => (
    <LayoutDefault>
        <Title>List Repository</Title>
        <ListRepository />
    </LayoutDefault>
)

export default HomePage
