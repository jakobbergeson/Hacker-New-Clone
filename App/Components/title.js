import * as React from "react"

export default function Title ({title, url}){
        return(
        <div>
           <a href={url} target="_blank" className="link">
            <h4>{title}</h4>
           </a>
        </div>
        )
}