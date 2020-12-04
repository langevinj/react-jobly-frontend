import React from 'react'
import Card from './Card'
import { v4 as uuid } from 'uuid'
import './CardList.css'

function CardList({ title, items, toggleJob }) {
    return (
        <div className="CardList">
            {items.map(item => (<Card key={uuid()} title={title} item={item} toggleJob={toggleJob}/>))}
        </div>
    )
}
export default CardList;