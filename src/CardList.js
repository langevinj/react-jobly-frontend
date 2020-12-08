import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList({ title, items, apply = () => null, pageNum }) {
    return (
        <div className="CardList">
            {items[pageNum].map(item, idx => (item ? <Card key={idx} id={idx} title={title} item={item} apply={apply}/> : null))}
        </div>
    )
}
export default CardList;