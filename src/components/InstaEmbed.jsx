import { useEffect } from "react";

const InstagramEmbed = ({ postUrl }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "//www.instagram.com/embed.js");
        script.setAttribute("async", "true");
        document.body.appendChild(script);

        // Re-run Instagram parsing
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center p-4">
            <div className="w-full max-w-[280px] h-[400px] rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white p-2 transition-transform hover:scale-105 duration-300 flex items-center justify-center">
                    <blockquote
                        className="instagram-media w-full h-full"
                        data-instgrm-permalink={postUrl}
                        data-instgrm-version="14"
                        style={{
                            background: "#FFF",
                            border: "none",
                            margin: 0,
                            padding: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ></blockquote>
                </div>
            </div>
        </div>
    );
};

export default InstagramEmbed;


// import { useEffect } from "react";

// const InstagramEmbed = ({ postUrl }) => {
//     useEffect(() => {
//         if (window.instgrm) {
//             window.instgrm.Embeds.process();
//         }
//     }, []);

//     return (
//         <div className="w-full max-w-[280px] h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white p-2 transition-transform hover:scale-105 duration-300">
//             <blockquote
//                 className="instagram-media"
//                 data-instgrm-permalink={postUrl}
//                 data-instgrm-version="14"
//                 style={{ background: "#FFF", border: "none", margin: 0, padding: 0 }}
//             ></blockquote>
//         </div>
//     );
// };

// export default InstagramEmbed;
