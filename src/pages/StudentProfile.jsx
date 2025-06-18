import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import { logoPaths } from '../assets/AssetPath.js';
import QRCode from 'qrcode';
// import { useReactToPrint } from 'react-to-print';

const logo = logoPaths.logo;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function StudentProfile() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const navigate = useNavigate();
    const printRef = useRef();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/admin/students/${id}`, {
                    withCredentials: true,
                });
                if (res.data) {
                    setStudent(res.data.data);
                } else {
                    navigate('/dashboard');
                }
            } catch (error) {
                console.error("Error fetching student:", error);
                navigate('/dashboard');
            }
        };

        fetchStudent();
    }, [id, navigate]);

    useEffect(() => {
        if (student) {
            QRCode.toDataURL(`https://www.rkmssatna.in`)
                .then(url => setQrCodeUrl(url))
                .catch(err => console.error("QR generation error:", err));
        }
    }, [student, id]);

    // const handlePrint = useReactToPrint({
    //     content: () => printRef.current,
    //     documentTitle: 'Student Profile',
    //     pageStyle: `
    //     @page {
    //         size: A4;
    //         margin: 10mm;
    //     }
    //     body {
    //         font-family: sans-serif;
    //     }
    //     img {
    //         max-width: 120px;
    //         height: auto;
    //     }
    //     .watermark {
    //         transform: rotate(-90deg);
    //         transform-origin: left center;
    //         position: fixed;
    //         left: 0;
    //         top: 50%;
    //         font-size: 10px;
    //         opacity: 0.3;
    //         color: gray;
    //     }
    //     .print-header {
    //         display: flex;
    //         justify-content: space-between;
    //         font-size: 12px;
    //         margin-bottom: 1rem;
    //     }
    // `,
    // });


    if (!student) {
        return (
            <div className="text-center py-10 text-pink-600 font-semibold text-lg">
                Loading student profile...
            </div>
        );
    }
    if (student.studentStatus === 'DELETED') {
        return (
            <div className="text-center py-10 text-red-600 font-semibold text-lg">
                This student profile has been deleted.
            </div>
        );
    }
    if (student.studentStatus === 'INACTIVE') {
        return (
            <div className="text-center py-10 text-yellow-600 font-semibold text-lg">
                This student profile is inactive.
            </div>
        );
    }

    const dob = student.studentDateOfBirth?.split('T')[0] 
    const doAdmission = student.studentDateOfAdmission?.split('T')[0];
    const formattedDOB = dob ? dob.split('-').reverse().join('-') : '';
    const formattedDoAdmission = doAdmission ? doAdmission.split('-').reverse().join('-') : '';


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen px-2 py-3 bg-gradient-to-br from-pink-50 to-blue-50"
        >
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8 relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-black-400 opacity-20 pointer-events-none select-none">
                    @rkmemorialschoolsatna
                </div>
                <div className="absolute right-0 top-1/4 -translate-y-1/2 -rotate-90 text-xs text-green-400 opacity-20 pointer-events-none select-none">
                    @rkmemorialschoolsatna
                </div>
                {/* Back Button */}
                <Link to="/dashboard" className="absolute top-4 left-4 text-pink-500 hover:text-pink-700">
                    <FaArrowLeft className="w-5 h-5" />
                </Link>
                {/* Header */}
                <div className="text-center mb-5">
                    <img src={logo} alt="School Logo" className="w-24 h-24 md:w-25 md:h-25 mx-auto rounded-full mb-3 md:mb-4" />
                    <h1 className="text-2xl md:text-2xl font-bold text-pink-600">Student Profile</h1>
                </div>
                {/* Main Content */}
                <div
                    ref={printRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start"
                >
                    {/* Left Column: Photo & Basic Info */}
                    <div className="flex flex-col items-center md:items-start ml-3">
                        <img
                            src={student.studentImage || logo}
                            alt={student.fullName || "Student"}
                            className="w-32 h-32 md:w-32 md:h-32 object-cover rounded-lg shadow border"
                        />
                        <h2 className="mt-4 text-lg md:text-xl font-bold text-pink-600 text-center md:text-left">{student.fullName}</h2>
                        <p className="text-md font-semibold text-blue-700 text-center md:text-left">Class: {student.studentClass}</p>
                        <p className="text-md font-bold text-green-500 text-center md:text-left">Admission Status: CONFIRMED</p>
                        {qrCodeUrl && (
                            <img src={qrCodeUrl} alt="QR Code" className="mt-2 w-20 h-20 md:w-24 md:h-24" />
                        )}
                        <p className="text-sm text-blue-500 font-semibold mt-2 text-center md:text-left">
                            www.rkmssatna.in | WhatsApp: 8871049844
                        </p>
                    </div>
                    {/* Right Column: Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Detail label="Father's Name" value={student.fatherName} />
                        <Detail label="Student Id" value={student.studentRollNumber || student._id} />
                        <Detail label="Date of Birth" value={formattedDOB} />
                        <Detail label="Date of Admission" value={formattedDoAdmission} />
                        <Detail label="Apar ID" value={student.studentAparId} />
                        <Detail label="Category" value={student.studentCategory} />
                        <Detail label="Gender" value={student.studentGender} />
                        <Detail label="Phone" value={student.phoneNumber} />
                        <Detail label="Aadhaar Number" value={student.studentAdhaarNumber} />
                        <Detail label="House" value={student.studentHouse} />
                        <Detail label="Email" value={student.studentEmail} />
                        <Detail label="Subject Group" value={student.studentSubjectGroup} />
                        <Detail label="Address" value={student.studentAddress} />
                        <Detail label="Status" value={student.studentStatus}/>
                    </div>
                </div>
                <div className="mt-3 text-center md:text-left text-green-600 text-md font-semibold">
                    Remark:<p>{student.remarks}</p>
                </div>


                {/* Download Button */}
                {/* <div className="mt-5 flex justify-center">
                    <button
                        onClick={handlePrint}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg inline-flex items-center gap-2"
                    >

                    </button>
                </div> */}
            </div>
        </motion.div>
    );
}

function Detail({ label, value }) {
    return (
        <div>
            <p className="text-sm text-blue-500 font-medium">{label}</p>
            <p className="text-base text-gray-800 font-semibold">{value || "N/A"}</p>
        </div>
    );
}

export default StudentProfile;
