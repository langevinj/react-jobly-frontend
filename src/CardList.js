import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList({ title, items = [], apply = () => null, unapply = () => null, pageNum = 0}) {
    //if absolutely no results are found, tell the user, otherwise list as many items as the page provides
    const pageItems = items[0] && Array.isArray(items[0]) ? items[pageNum] : items 
    return items.length ? (
        <div className="CardList">
            {pageItems.map((item, idx) => item ? (<Card key={idx} id={item.id} title={title} item={item} apply={apply} unapply={unapply}/>) : null)}
        </div>
    ) : (
        <p>Sorry, no results found!</p>
    )
}

export default CardList;