import { MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

 /*  const navigate = useNavigate();
  const handleShowDetails = () => {
   navigate(`/job/${id}`)
  }; */
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE] bg-[#a6dae7]">
              {remote_or_onsite}
            </button>
            <button className="px-5  py-2 font-extrabold border rounded border-[#7E90FE] bg-[#a6dae7]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4">
            <h2 className="flex gap-2 my-3">
              <MdOutlineLocationOn className="text-2xl" />
              {location}
            </h2>
            <h2 className="flex gap-2 my-3">
              <BiDollarCircle className="text-2xl" />
              Salary : {salary}
            </h2>
          </div>
          <div  className="card-action">
            {/* <button className="btn btn-primary">View Details</button> */}
            <Link to={`job/${id}`}>
              <button className="btn btn-primary">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
