import React from "react";

export default function VideoModal({ open, videoId, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          maxWidth: "900px",
          background: "#000",
          borderRadius: "14px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-45px",
            right: "0",
            fontSize: "30px",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video"
        />
      </div>
    </div>
  );
}
