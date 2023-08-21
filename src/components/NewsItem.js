import React from 'react'

export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl , author ,date , source} = props;
    return (
        <div className="my-3">
            <div className="card" style={{ width: "20rem" , border: "2px solid red" }}><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{source}</span>
                <img src={imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title" style = {{fontFamily:"'Borel', cursive"}}>{title}</h5>
                    <p className="card-text" style = {{fontFamily:"'Borel', cursive"}}>{description}</p>
                    <p className="card-text"><small class="text-muted">By {author} on {date}</small></p>
                    <a href={newsUrl} target ="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}



