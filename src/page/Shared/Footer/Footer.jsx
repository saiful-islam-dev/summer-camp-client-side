import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div className=" flex">
        <div className="">
          <Link to="/" className="normal-case text-xl flex items-center">
            <span className="text-4xl text-white uppercase font-mono font-bold">
              Summer<span className="text-yellow-400 lowercase">sports</span>
            </span>
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
      <div className=" border-r-4 border-black h-full"></div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
