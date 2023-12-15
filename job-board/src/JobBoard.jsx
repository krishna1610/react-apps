import React, { useEffect, useState } from 'react';
import JobPosting from './JobPosting';

const JobBoard = () => {
    const [jobIds, setJobIds] = useState([]);
    const [jobContents, setJobContents] = useState({});

    const fetchJobContents = async (jobIds, start) => {
        const contents = await Promise.all(
            jobIds.slice(start, start+6).map(id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(response => response.json())
            })
        );
        const map = {...jobContents};
        contents.forEach(content => {
            map[content.id] = content;
        });
        setJobContents(map);
    }

    const fetchJobIds = async () => {
        const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
        const ids = await (await fetch(url)).json();
        setJobIds(ids);
        fetchJobContents(ids, 0);
    }

    useEffect(() => {
        fetchJobIds();  
    },[]);

    const LoadMoreJobs = () => {
        fetchJobContents(jobIds, Object.keys(jobContents).length);
    };
    
    return(
        <div>
            <h1>Hacker News Job Board</h1>
            <ul className='ul-style'>
                {jobIds.map((jobId)=> {
                    if (jobContents[jobId] !== undefined) {
                        const content = jobContents[jobId];
                        return (
                        <li key={content.id} className='li-style'>
                            <div>
                            <JobPosting content={content}/> 
                            </div>
                        </li>
                        );
                    } else {
                    return (<></>);
                    }
                })   
                }
            </ul>
            {
             (jobIds.length > Object.keys(jobContents).length) &&
             (<button onClick={LoadMoreJobs}>Load More Jobs</button>)
            }
        </div>
    );
};

export default JobBoard;