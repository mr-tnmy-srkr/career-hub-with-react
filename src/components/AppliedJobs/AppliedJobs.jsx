import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
const jobs = useLoaderData();
const[appliedJobs,setAppliedJobs] = useState([]);
console.log(jobs);
const storedJobApplication = getStoredJobApplication();
console.log(storedJobApplication);


    return (
        <div>
            applied jobs
        </div>
    );
};

export default AppliedJobs;