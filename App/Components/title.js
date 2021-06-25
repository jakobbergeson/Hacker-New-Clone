import * as React from "react"
import PropTypes from 'prop-types';

export default function Title ({title, url}){
        return(
        <div>
           <a href={url} target="_blank" className="link">
            <h4>{title}</h4>
           </a>
        </div>
        )
}

Title.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}