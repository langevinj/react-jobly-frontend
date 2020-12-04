import React from 'react'
import Card from './Card'
import { v4 as uuid } from 'uuid'
import './CardList.css'

function CardList({ title, items, toggleJob, pageNum }) {
    return (
        <div className="CardList">
            {items[pageNum].map(item => (item ? <Card key={uuid()} title={title} item={item} toggleJob={toggleJob}/> : null))}
        </div>
    )
}
export default CardList;