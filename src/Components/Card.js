import React from 'react';

const Card = ({ name, website, id, address }) => {
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='shops' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2> {name} </h2>
                <p> {website} </p>
                <p> {address}</p>
            </div>
        </div>
    );
}

export default Card;