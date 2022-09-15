import JobCard from "../components/JobCard.js"
import PageStepper from "../components/PageStepper"
import React, { useState, useEffect } from 'react';
import { fetchJobListings } from "../api";

const HomePage = () => {

    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetchJobListings(setJobs, setIsLoading)

        return () => {

        }
        
    }, [])

    function ShowList() {
        return jobs.map((p) =>
            <JobCard
                key={p.id}
                jobTitle={p.title}
                jobLink={p.link}
                companyName={p.companyName}
                bodyText={p.bodyText}
                releaseDate={p.releaseDate}
                id={p.id}
                setJobs={setJobs}
                jobs={jobs}
            /> 

        )

    }

    (<ShowList />
    )
    return (
        <div>
            { isLoading ? <p>Den laddar</p> :

                <div>
                     <h1 style={{color : "black", textAlign : "center"}}>JobScraper</h1>
                    <ShowList />
                   
                </div>


            }

        </div>

    )
}

export default HomePage;