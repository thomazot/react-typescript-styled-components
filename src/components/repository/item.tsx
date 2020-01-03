import React from 'react'
import { Repository } from '../../stores/repositories/types'

interface Props {
    repository: Repository
}

const Item = ({ repository }: Props) => <div>{repository.name}</div>

export default Item
