import img1 from "../../assets/home/p1.jpg";
import img2 from "../../assets/home/p2.jpg";
import img3 from "../../assets/home/p3.jpg";
import img4 from "../../assets/home/p5.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center w-full h-full left-0 top-0 bg-black opacity-70">
          <div className="text-white space-y-7 text-center mx-auto w-1/2">
            <h2 className="text-6xl font-bold">
            Dive into the Fun of Summer!
            </h2>
            <p>
            Experience the ultimate summer adventure at our camp, where laughter, friendships, and unforgettable memories are made. From exciting outdoor activities to creative workshops, get ready for a summer filled with fun, learning, and endless possibilities
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center w-full h-full left-0 top-0 bg-black opacity-70">
          <div className="text-white space-y-7 text-center mx-auto w-1/2">
            <h2 className="text-6xl font-bold">
            Step into the Boxing Ring of Fun!
            </h2>
            <p>
            Experience the ultimate summer adventure at our camp, where laughter, friendships, and unforgettable memories are made. From exciting outdoor activities to creative workshops, get ready for a summer filled with fun, learning, and endless possibilities
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center w-full h-full left-0 top-0 bg-black opacity-70">
          <div className="text-white space-y-7 text-center mx-auto w-1/2">
            <h2 className="text-6xl font-bold">
            Swing into an Unforgettable Summer
            </h2>
            <p>
            Experience the ultimate summer adventure at our camp, where laughter, friendships, and unforgettable memories are made. From exciting outdoor activities to creative workshops, get ready for a summer filled with fun, learning, and endless possibilities
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center w-full h-full left-0 top-0 bg-black opacity-70">
          <div className="text-white space-y-7 text-center mx-auto w-1/2">
            <h2 className="text-6xl font-bold">
            Score Big at our Summer Football Camp
            </h2>
            <p>
            Experience the ultimate summer adventure at our camp, where laughter, friendships, and unforgettable memories are made. From exciting outdoor activities to creative workshops, get ready for a summer filled with fun, learning, and endless possibilities
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
      </div>
    </div>
  );
};

export default Banner;
