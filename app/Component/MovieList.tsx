import React, {useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from 'react-slideshow-image';
import 'swiper/swiper-bundle.css';
import Modal from 'react-modal';
import YouTube from 'react-youtube';


const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};



interface Movie {
  id: number;
  poster_path: string;
  title: string;
  origin_title?: string;
}

interface MovieListProps {
  title: string;
  data: Movie[];
}


const MovieList: React.FC<MovieListProps> = ({ title, data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [traulerKey, setTrailerKey] = useState("")

  const handleTrailer = async (e:any) => {
    setTrailerKey('')

    try{
      const url = `https://api.themoviedb.org/3/movie/${e}/videos?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,  }
};
    const movieKey = await fetch(url, options)
    const data = await movieKey.json() 
    setTrailerKey(data.results[0].key)
    setIsOpen(true)
    } catch(error){
      setIsOpen(false)
      console.log(error )
    }
  }



  // const responsive = {
  //   superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  //   desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  //   tablet: { breakpoint: { max: 1024, min: 464 }, items: 5 },
  //   mobile: { breakpoint: { max: 464, min: 0 }, items: 5 }
  // };

  return (
    <div className='text-white p-10 mb-10'>
      <h2 className='uppercase text-xl mb-4'>{title}</h2>
      <div className='flex items-center space-x-1'>
        {data.length > 0 && data.map((item) => (
          <div className='w-[200px] h-[300px] relative group' key={item.id} onClick={() => handleTrailer(item.id)}>
            <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
              <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-4 left-2'>
                <p className='uppercase text-md'>{item.title || item.origin_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose = {() => setIsOpen(false) }
        style={{
          overlay:{
            position:"fixed",
            zIndex:999,
          },
          content:{
            top:'50px',
            left:'50%',
            right:'auto',
            bottom:'auto',
            marginRight:'-50%',
            transform:"translate(-50, -50%)"
          }
          }}
        contentLabel="Example Modal" >
        <YouTube videoId={traulerKey} opts={opts}/>;      
      </Modal>
    </div>
  );
}

export default MovieList;
