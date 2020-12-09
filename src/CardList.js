import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList({ title, items, apply = () => null, pageNum }) {
    return items.length ? (
        <div className="CardList">
            {items[pageNum].map(item => (<Card key={item.id} id={item.id} title={title} item={item} apply={apply}/>))}
        </div>
    ) : (
        <p>Sorry, no results found!</p>
    )
}
export default CardList;