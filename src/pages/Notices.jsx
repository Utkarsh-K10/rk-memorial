import { useEffect, useState } from 'react';
import NoticeCard from '../components/NoticeCard';
import NoticeModal from '../components/NoticeModal';
import { useAdmin } from '../context/useAdmin';
import { FaTrashAlt } from "react-icons/fa";

function Notices() {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const { admin } = useAdmin();

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/v1/user/notice');
                const result = await res.json();

                if (!res.ok || !result.success) {
                    throw new Error(result.message || 'Failed to fetch notices');
                }

                if (!Array.isArray(result.data)) {
                    throw new Error('Unexpected data format received from server.');
                }

                setNotices(result.data);
            } catch (err) {
                console.error('[Notice Fetch Error]', err);
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, []);

    const openModal = (notice) => setSelectedNotice(notice);
    const closeModal = () => setSelectedNotice(null);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this notice?');
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:5000/api/v1/admin/delete-notice/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            const result = await res.json();

            if (!res.ok || !result.success) throw new Error(result.message);

            setNotices(notices.filter(notice => notice._id !== id));
            alert('Notice deleted successfully.');
        } catch (err) {
            console.error('[Delete Error]', err);
            alert('Failed to delete notice.');
        }
    };

    return (
        <div className="p-6 max-w-8xl mx-auto relative flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white to-blue-200 opacity-50 -z-10"></div>
            <h1 className="text-4xl font-bold mb-5 text-center text-orange-700 mt-2">School Notices</h1>
            {loading ? (
                <div className="text-center text-blue-500 font-medium">Loading notices...</div>
            ) : error ? (
                <div className="text-center text-red-500 font-semibold">{error}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notices.length > 0 ? (
                        notices
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((notice) => (
                                <div key={notice._id} className="relative">
                                    {admin && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(notice._id);
                                            }}
                                            className="absolute top-2 left-2 z-10 bg-red-100 hover:bg-red-200 p-1 rounded-full"
                                        >
                                                <FaTrashAlt size={16} className="text-red-600" />
                                        </button>
                                    )}
                                    <div onClick={() => openModal(notice)}>
                                        <NoticeCard
                                            title={notice.noticeName}
                                            description={notice.noticeDescription}
                                            date={new Date(notice.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                            imageUrl={notice.noticeImage || '/placeholder-image.png'}
                                        />
                                    </div>
                                </div>
                            ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No notices available at the moment.
                        </div>
                    )}
                </div>
            )}
            <NoticeModal
                isOpen={!!selectedNotice}
                onClose={closeModal}
                image={selectedNotice?.noticeImage}
                title={selectedNotice?.noticeName}
            />
        </div>
    );
}

export default Notices;
