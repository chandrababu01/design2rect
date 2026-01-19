import CurvedVideoSlider from "./components/lightswind/CurvedVideoSlider";

export default function Dvideo() {
  const items = [
    {
      videoId: "S7eKLLMK_mM",
      thumbnail: "https://img.youtube.com/vi/S7eKLLMK_mM/hqdefault.jpg",
    },
    {
      videoId: "Enm6CnRRoXc",
      thumbnail: "https://img.youtube.com/vi/Enm6CnRRoXc/hqdefault.jpg",
    },
    {
      videoId: "6Apl9gi2_qI",
      thumbnail: "https://img.youtube.com/vi/6Apl9gi2_qI/hqdefault.jpg",
    },
    {
      videoId: "swRpY0EkvS0",
      thumbnail: "https://img.youtube.com/vi/swRpY0EkvS0/hqdefault.jpg",
    },
    {
      videoId: "efGnXYVS9bs",
      thumbnail: "https://img.youtube.com/vi/efGnXYVS9bs/hqdefault.jpg",
    },
    {
      videoId: "HBtEq2Cy2Uo", // duplicate link removed (only once)
      thumbnail: "https://img.youtube.com/vi/HBtEq2Cy2Uo/hqdefault.jpg",
    },
    {
      videoId: "5jurqGqhz0U",
      thumbnail: "https://img.youtube.com/vi/5jurqGqhz0U/hqdefault.jpg",
    },
    {
      videoId: "5lF8KOXTT2A",
      thumbnail: "https://img.youtube.com/vi/5lF8KOXTT2A/hqdefault.jpg",
    },
    {
      videoId: "w7Kppi-J5Qk",
      thumbnail: "https://img.youtube.com/vi/w7Kppi-J5Qk/hqdefault.jpg",
    },
    {
      videoId: "_kNtiiFIO14",
      thumbnail: "https://img.youtube.com/vi/_kNtiiFIO14/hqdefault.jpg",
    },
  ];

  return <CurvedVideoSlider items={items} />;
}
