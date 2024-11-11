import InstagramIcon from "@/assets/icons/insta.svg";
import XSocial from "@/assets/icons/x-social.svg";
import TikokIcon from "@/assets/icons/tiktok.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            @ 2024 Your Company Inc. All Rights Reserverd.{" "}
          </div>
          <ul className="flex justify-center  gap-2.5">
            <li>
              {" "}
              <InstagramIcon />{" "}
            </li>
            <li>
              {" "}
              <XSocial />{" "}
            </li>
            <li>
              {" "}
              <TikokIcon />{" "}
            </li>
            <li>
              {" "}
              <YouTubeIcon />{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
