import { useEffect, useState } from "react";
import JobCard from "../components/JobCard.jsx";
import { useAdmin } from "../context/useAdmin.jsx";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AnyQueriesFooter from '../components/AnyQueriesFooter.jsx';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;



function Toast({ type = "success", message, onClose }) {
    const base = "fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium z-50 transition-all duration-500";
    const styles = {
        success: "bg-green-100 text-green-800 border border-green-300",
        error: "bg-red-100 text-red-800 border border-red-300"
    };
    return (
        <div className={`${base} ${styles[type]}`}>
            <div className="flex items-center justify-between gap-3">
                <span>{message}</span>
                <button onClick={onClose} className="text-xl font-bold leading-none">&times;</button>
            </div>
        </div>
    );
}

function CareerPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toast, setToast] = useState({ show: false, type: "success", message: "" });
    const {admin} = useAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(`${BASE_URL}/user/jobs`);
                const result = await res.json()

                if (!res.ok || !result.success) {
                    throw new Error(result.message || "Failed to fetch job openings");
                }

                setJobs(result.data);

            } catch (err) {
                console.error("Error fetching jobs:", err);
                // Handle error gracefully
                setError("Failed to load job openings. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Job?');
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${BASE_URL}/admin/delete-job/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            const result = await res.json();

            if (!res.ok || !result.success) throw new Error(result.message);

            setJobs(jobs.filter(job => job._id !== id));
            setToast({ show: true, type: "success", message: "Job deleted successfully." });
            setTimeout(() => {
                navigate("/job");
            }, 2000);
        } catch (err) {
            console.error('[Delete Error]', err);
            setToast({ show: true, type: "error", message: "Failed to delete job." });
        }
    };

    const handleEdit = (id) => {
        // Redirect to edit job page
        window.location.href = `/edit-job/${id}`;
    };
    return (
        <div className="p-6 max-w-8xl mx-auto relative flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white to-blue-200 opacity-50 -z-10"></div>
            <h1 className="text-4xl font-bold mb-6 text-center text-orange-700 mt-2">
                Career Opportunities
            </h1>
            {loading ? (
                <div className="text-center text-blue-500 font-medium">Loading job openings...</div>
            ) : error ? (
                <div className="text-center text-red-500 font-semibold">{error}</div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-2">
                    {jobs.length > 0 ? (
                        jobs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((job) => (
                            <div key={job._id} className="relative cursor-pointer">
                                {admin && (
                                    <div className="absolute top-2 left-2 z-10 flex gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(job._id);
                                            }}
                                            className="bg-red-100 hover:bg-red-200 p-1 rounded-full"
                                        >
                                            <FaTrashAlt size={16} className="text-red-600" />
                                        </button>
                                        <button
                                            onClick={(e) => handleEdit(e, job.slug)}
                                            className="bg-blue-100 hover:bg-blue-200 p-1 rounded-full"
                                        >
                                            <FaEdit size={16} className="text-blue-600" />
                                        </button>
                                    </div>
                                )}
                                <div className="w-full h-full">   
                                <JobCard {...job} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No Job Opening at the moment.
                        </div>
                    )}
                </div>
            )}
            <AnyQueriesFooter />
            {toast.show && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast({ ...toast, show: false })}
                />
            )}
        </div>
    );
}

export default CareerPage;



// kkkfkkk



//   return (
//     <div className="p-6 max-w-8xl mx-auto relative flex flex-col justify-center items-center min-h-screen">
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white to-blue-200 opacity-50 -z-10"></div>

//       <h1 className="text-4xl font-bold mb-6 text-center text-orange-700 mt-4">
//         Career Opportunities
//       </h1>

//       {loading ? (
//         <div className="text-center text-blue-500 font-medium">Loading job openings...</div>
//       ) : error ? (
//         <div className="text-center text-red-500 font-semibold">{error}</div>
//       ) : jobs.length > 0 ? (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-2">
//           {jobs.map((job) => (
//             <div key={job._id} className="relative h-[75vh]">
//               {admin && (
//                 <div className="absolute top-2 left-2 z-10 flex gap-2">
//                   <button
//                     onClick={() => handleDelete(job._id)}
//                     className="bg-red-100 hover:bg-red-200 p-1 rounded-full"
//                   >
//                     <FaTrashAlt size={16} className="text-red-600" />
//                   </button>
//                   <button
//                     onClick={() => window.location.href = `/edit-job/${job._id}`}
//                     className="bg-yellow-100 hover:bg-yellow-200 p-1 rounded-full"
//                   >
//                     <FaEdit size={16} className="text-yellow-700" />
//                   </button>
//                 </div>
//               )}
//               <div className="w-full h-full">
//                 <JobCard
//                   title={job.title}
//                   jobImage={job.image}
//                   description={job.description}
//                   experince={job.minExperience}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500">No job openings available right now.</div>
//       )}
//     </div>
//   );
// }

// export default CareerPage;
