import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
