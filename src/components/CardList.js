import React from "react";
import Card from './Card';

function CardList(props) {
    return (
        <div>
            {props.robotsCard.map((robotsItems, index) => {
                return(
                    <Card 
                        key={index}
                        id={robotsItems.id}
                        name={robotsItems.name}
                        email={robotsItems.email}
                    />
                );
            })}
        </div>
    );
}

export default CardList;