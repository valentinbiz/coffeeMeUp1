import React from 'react';
import Card from './Card';

const CardList = ({ shops }) => {
    return (
        <div>
            {
                shops.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={shops[i].id}
                            name={shops[i].name}
                            website={shops[i].website}
                            address={shops[i].address}
                        />
                    );
                })
            }
        </div>

    );
}

export default CardList;