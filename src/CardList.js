import React from 'react'
import Card from './Card'
import { v4 as uuid } from 'uuid'
import './CardList.css'
import { paginateData } from './helpers'

function CardList({ title, items, toggleJob, pageNum }) {
    return (
        <div className="CardList">
            {items[pageNum].map(item => (<Card key={uuid()} title={title} item={item} toggleJob={toggleJob}/>))}
        </div>
    )
}
export default CardList;