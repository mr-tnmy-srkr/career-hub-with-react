import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredJobApplication,
  saveJobApplication,
} from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job);

  // console.log(jobs);

  const handleApplyJob = () => {
    const storedJobApplication = getStoredJobApplication();
    const isExist = storedJobApplication.find((jobId) => jobId == id);
    if (isExist) {
      alert("already applied");
    } else {
      saveJobApplication(idInt);

      toast("job Applied", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="my-8">
    <Helmet>
      <title>Job Details : {id}</title>
    </Helmet>
      <h2 className="text-center text-3xl py-6 bg-[#f4e779]">
        Job details of id no : {id}
      </h2>
      <div className="grid md:grid-cols-4">
        <div className="bg-slate-400 col-span-3 min-h-16">
          <h2> {job.job_title}</h2>
        </div>
        <div className="bg-red-300 min-h-[300px] flex flex-col">
          <h2 className="flex-grow">side things</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default JobDetails;
