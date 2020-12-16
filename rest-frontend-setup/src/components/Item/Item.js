import React from 'react'

import './Item.css'

const item = (props) => {

    return (
        <div className="grid">
            <article class="card test-item">
                <header class="card__header">
                    <h1 class="test__title">
                        {props.itemName}
                    </h1>
                </header>

                <div class="card__content">
                    <h2 class="test__price">{props.minPrice}
                    </h2>
                    <p class="test__lab">
                        {props.labName}
                    </p>
                </div>
                <div class="card__actions">
                    <button type="submit" class="btn">
                        Add to Cart
                                    </button>
                </div>
            </article>
        </div>
    )
}

export default item;