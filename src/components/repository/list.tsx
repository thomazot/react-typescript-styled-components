import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Repository } from '../../stores/repositories/types'
import { loadRequest } from '../../stores/repositories/actions'
import { ApplicationState } from '../../stores/index'
import Item from './item'

const List = () => {
    const dispatch = useDispatch()
    const repositories: Repository[] = useSelector(
        (state: ApplicationState) => state.repositories.data,
    )

    useEffect(() => {
        dispatch(loadRequest())
    }, [dispatch])

    return (
        <div>
            {repositories.map((repository) => (
                <Item key={repository.id} repository={repository} />
            ))}
        </div>
    )
}

export default List
