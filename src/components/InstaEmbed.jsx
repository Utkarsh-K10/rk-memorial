import { useEffect } from "react";

const InstagramEmbed = ({ postUrl }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={{ background: "#FFF", border: "none", margin: 0, padding: 0 }}
        ></blockquote>
    );
};

export default InstagramEmbed;
