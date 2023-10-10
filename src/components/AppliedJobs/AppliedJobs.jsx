import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  // console.log(jobs);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    // console.log(storedJobIds);
    const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
    // console.log(jobApplied);

    // or
    /* const jobApplied = [];
for(let id of storedJobIds){
    const job = jobs.find(job => job.id === id);
    if(job){
        jobApplied.push(job)
    }
} */
    setAppliedJobs(jobApplied);
    setDisplayJobs(jobApplied);
  }, [jobs]);
  //   console.log(appliedJobs);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  // console.log(displayJobs);

  /* const navigate= useNavigate(0);
const handleViewDetails = ()=>{
    navigate()
    
}
 */
  const handleRemoveAll = () => {
    localStorage.clear();
    setDisplayJobs([]);
    setAppliedJobs([]);
  };
  const handleSingleJobRemove = (id) => {
    console.log(id);
    const getFromLs = JSON.parse(localStorage.getItem("job-application"));
    console.log(getFromLs);
    const filteredLs = getFromLs.filter((elem) => elem !== id);
    console.log(filteredLs);
    localStorage.setItem("job-application", JSON.stringify(filteredLs));

    const filteredJobs = displayJobs.filter((job) => job.id !== id);
    setDisplayJobs(filteredJobs);
    setAppliedJobs(filteredJobs);
  };

  // console.log(displayJobs);

  return (
    <div>
    <Helmet>
      <title>Career Hub | Applied Job</title>
    </Helmet>
      <h2 className="text-2xl text-center">
        applied jobs : {appliedJobs.length}
      </h2>

      <div
        className={`flex justify-end ${
          appliedJobs.length === 0 ? "hidden" : ""
        }`}
      >
        <details className="dropdown mb-32">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div
        onClick={handleRemoveAll}
        className={`flex justify-end mr-5 ${
          displayJobs.length === 0 ? "hidden" : ""
        }`}
      >
        <button className="btn btn-primary">Delete All</button>
      </div>
      <ul className="relative">
        {displayJobs.map((job) => (
          <li
            key={job.id}
            className="border-4 border-[#b3b1b1] rounded-xl p-4 my-5 flex justify-between items-center"
          >
            <span>
              Job title : {job.job_title} <br /> Company name :{" "}
              {job.company_name} <br />
              {job.remote_or_onsite} job
            </span>
            <div>
              <Link to={`/job/${job.id}`}>
                <div
                  //    onClick={handleViewDetails}
                  className="btn btn-primary"
                >
                  View Details
                </div>
              </Link>
              <div
                onClick={() => handleSingleJobRemove(job.id)}
                className="btn btn-primary ml-5"
              >
                Delete
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
