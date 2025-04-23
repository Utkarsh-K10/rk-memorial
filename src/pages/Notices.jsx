// src/pages/Notices.jsx
import { useEffect, useState } from 'react';
import NoticeCard from '../components/NoticeCard';
import NoticeModal from '../components/NoticeModal';

function Notices() {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedNotice, setSelectedNotice] = useState(null);

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

    const openModal = (notice) => {
        setSelectedNotice(notice);
    }
    const closeModal = () => {
        setSelectedNotice(null);
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">School Notices</h1>

            {loading ? (
                <div className="text-center text-blue-500 font-medium">Loading notices...</div>
            ) : error ? (
                <div className="text-center text-red-500 font-semibold">{error}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notices.length > 0 ? (
                        notices
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by most recent date
                            .map((notice) => (
                                <div key={notice._id} onClick={() => openModal(notice)}>
                                    <NoticeCard
                                        key={notice._id}
                                        title={notice.noticeName}
                                        description={notice.noticeDescription}
                                        date={new Date(notice.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                        imageUrl={notice.noticeImage || '/placeholder-image.png'} // Fallback image
                                    />
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
