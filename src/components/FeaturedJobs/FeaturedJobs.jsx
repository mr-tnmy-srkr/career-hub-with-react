import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { useNavigation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDataLength] = useState(4)

  const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);

  // const axios = require('axios');
  useEffect(() => {
    // const fetchData = () => {
    axios
      .get("data/jobs.json")
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })

      .finally(() => {
        // setLoading(false);
      });
    // }
    // fetchData();
  }, []);

  // console.log(jobs);

  return (
    <div>
      <div className="space-y-3">
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
          ariaLabel="ball-triangle-loading"navigation
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        /> : 
      
      <div className="grid grid-cols-2 gap-6 mt-10">
        {jobs.slice(0,dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      }
     {
      dataLength === 4 &&  <div className="text-center my-3">
        <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
      </div>
     }
    </div>
  );
};

export default FeaturedJobs;
