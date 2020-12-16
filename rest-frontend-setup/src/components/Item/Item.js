import React from 'react'

import './Item.css'

const item = (props) => {

    return (
        <div>
            <article className="card test-item">
                <header className="card__header">
                    <h1 className="test__title">
                        {props.itemName}
                    </h1>
                </header>

                <div className="card__content">
                    <h2 className="test__price">Price : {props.minPrice}
                    </h2>
                    <p className="test__lab">
                        Lab : {props.labName}
                    </p>
                </div>
                <div className="card__actions">
                    <button type="submit" className="btn">
                        Add to Cart
                                    </button>
                </div>
            </article>
        </div>
    )
}

export default item;