import { motion } from "framer-motion";

const VideoCard = () => {
  return (
    <motion.div
      className="video-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/UCIUXnQJEp8?autoplay=1&mute=1&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* ▶ Hover play overlay */}
        <div className="play-overlay">▶</div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
