import React,{useState} from "react";
const Card =({ id, image, info, price, name, removeTour }) => {
    const [readmore, setReadMore] = useState(false);
    const description=readmore?info:`${info.substring(0, 200)}....`;

function readmoreHandler(){
    setReadMore(!readmore);
}

    return(
        <div className="card">
            <img src={image} className="image" alt="img"/>
            <div className="Tour-info">
                <div className="Tour-details">
                    <h4 className="Tour-price">{price}</h4>
                    <h4 className="Tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore?`show less` :`read more`}
                    </span>
                </div>
            </div>
            <button className="btnRed" onClick={()=>removeTour(id)}>
                Note Interested 
            </button>
        </div>
    );
} ;
export default Card;