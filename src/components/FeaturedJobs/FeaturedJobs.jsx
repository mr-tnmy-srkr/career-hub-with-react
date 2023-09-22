import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { useNavigation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  // const axios = require('axios');
  useEffect(() => {
    // const fetchData = () => {
    axios
      .get("data/jobs.json")
      .then((response) => {
        setJobs(response.data);
      })

      .finally(() => {
        setLoading(false);
      });
    // }
    // fetchData();
  }, []);

  console.log(jobs);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
       
      </div>
      {
        navigation.state === "loading" ?  <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        /> : 
      
      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      }
    </div>
  );
};

export default FeaturedJobs;
