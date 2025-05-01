import { motion } from "framer-motion";
import std from '/7.png';
const TopPerformer = () => {
    return (
        <section className = "bg-gradient-to-br from-white to-orange-100 px-4 md:px-10 py-14 border-b-2 border-white" >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">Board Achievements</h2>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">Proudly delivering excellence in academics since <strong className="text-pink-600">1996</strong>. Our students consistently shine in 5<sup>th</sup>, 8<sup>th</sup>, 10<sup>th</sup>, and 12<sup>th</sup> <strong className="text-pink-600">Board</strong> examinations.</p>

                {/* Score Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: 'Class 5th Avg.', score: '92%' },
                        { title: 'Class 8th Avg.', score: '94%' },
                        { title: 'Class 10th Avg.', score: '96%' },
                        { title: 'Class 12th Avg.', score: '95%' },
                    ].map(({ title, score }, i) => (
                        <div key={i} className="bg-gradient-to-br from-orange-100 to-pink-100 shadow-md rounded-xl p-6 text-center">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
                            <p className="text-2xl font-bold text-orange-600">{score}</p>
                        </div>
                    ))}
                </div>

                {/* Academic Excellence Track (Timeline Style) */}
                <div className="relative border-l-4 border-pink-300 pl-6 mb-12">
                    {[
                        { year: '2023', result: 'Overall School Result: 96.4%' },
                        { year: '2022', result: 'Overall School Result: 94.8%' },
                        { year: '2021', result: 'Overall School Result: 93.2%' },
                        { year: '2020', result: 'Overall School Result: 92.7%' },
                    ].map(({ year, result }, i) => (
                        <div key={i} className="mb-6">
                            <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-pink-500 border-4 border-pink-200"></div>
                            <p className="text-sm text-gray-500">{year}</p>
                            <p className="font-medium text-gray-700">{result}</p>
                        </div>
                    ))}
                </div>

                {/* Top Performers */}
                <h3 className="text-2xl font-semibold text-center text-pink-600 mb-6">🏆 Some of Our Top Performers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { name: 'Riya Sharma', percent: '96.6%', img:std },
                        { name: 'Atul Singh', percent: '94.4%', img:std },
                        { name: 'Priya Yadav', percent: '93.9%', img:std },
                    ].map(({ name, percent, img }, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition border-2 border-pink-200">
                            <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover mb-3" />
                            <h4 className="text-lg font-bold text-gray-800">{name}</h4>
                            <p className="text-pink-600 font-semibold">{percent}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>    
);
}

export default TopPerformer;