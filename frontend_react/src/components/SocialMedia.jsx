import {
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
} from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/ikramdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/users/13859212/ikram-ul-haq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsStackOverflow />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/ikramdeveloper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/ikramdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
