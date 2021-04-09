import React from 'react'


function Card({title,imageSource}) {

    return ( 
    <div className="card text-center bg-dark">
    <img src={imageSource} alt=""/>
<div className="card-body">
    <h4 className="card-title text-white ">{title}</h4>
    <p className="card-text text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit at libero, aliquid quisquam dolorum, earum error harum alias beatae odit consectetur dicta doloribus amet ducimus rem voluptate excepturi, commodi odio?</p>

    <a href="#!" className="btn btn-outline-secondary">
        Go to this website
    </a>
</div>

         </div>
    )
}

export default Card