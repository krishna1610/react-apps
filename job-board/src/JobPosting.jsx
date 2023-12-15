import React from 'react';

const JobPosting = ({content}) => {
    const date = new Date(content.time).toLocaleString();
    const url = content.url;

    return (
        <div className='job-box'>
            { url ? 
            <div onClick={()=>{window.open(url)}} className='style-open-link'>
                {content.title}
            </div>
            :
            <div>{content.title}</div>
            }
            <div>{content.by}</div>
            <div>{date}</div>
        </div>
    );
}

export default JobPosting;