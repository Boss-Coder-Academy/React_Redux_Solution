import cardImage from '../utils/images/card.jpeg';
import playButton from '../utils/images/playbutton.png';
import likeButton from '../utils/images/white-thumbs-up-icon-26.jpg';
import DislikeButton from '../utils/images/white-thumbs-down-icon-26.jpg';
import drop from '../utils/images/dropdown_logo.png';
import {toggleDescription, incrementLikes} from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';



const VideoCard = () => {

const isDescriptionVisible = useSelector((store) => store.app.isDescriptionVisible);
const likeCount1 = useSelector((store) => store.app.likeCount);
const dispatch = useDispatch();


const toggleDescriptionHandler = () => {
  dispatch(toggleDescription()); // Dispatch action to toggle description visibility
};

const handleLikeClick1 = () => {
    dispatch(incrementLikes()); // Dispatch action to increment likes
  };

  
 


//   useEffect(() => {
//     // Monitor changes in likeCount if needed
//     // console.log('Like count changed:', likeCount);
//   }, [likeCount1]);


//   const handleLikeClick = () => {
//     setLikeCount(likeCount + 1);
//   };


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4 relative">
      {/* Video Thumbnail */}
      <img
        className="w-full h-40 object-cover object-center"
        src={cardImage}
        alt="Video Thumbnail"
      />
      {/* Video Information */}
      <div className="px-4 py-2 relative">
        <div className='flex justify-between'>
          <div className="font-bold text-xl mb-2 text-white">
            <button><img className='w-12' src={playButton} alt="Play Button" /></button>
            <button onClick={handleLikeClick1}>
        <img className='w-7 mr-2 mb-4' src={likeButton} alt="Like Button" />
      </button>
            <button><img className='w-7 mb-4' src={DislikeButton} alt="Dislike Button" /></button>
          </div>
          <button
            onMouseEnter={toggleDescriptionHandler}
            onMouseLeave={toggleDescriptionHandler}
            onFocus={toggleDescriptionHandler}
            onBlur={toggleDescriptionHandler}
            onClick={toggleDescriptionHandler}

        >
            <img className='w-5 mb-4' src={drop} alt="Drop Button" />
            {/* Floating Description */}
            {isDescriptionVisible ? (
          <div className="absolute bg-gray-700 text-white p-1 rounded-lg shadow-md top-8 left-6 z-10 text-sm">
            {/* Description content goes here */}
            <p>Chandramukhi 2 is a 2023 Indian Tamil-language comedy horror film written and
               directed by P. Vasu.</p>
          </div>
        ) : null}
          </button>
        </div>
        <p className="text-gray-300">{likeCount1} likes</p>
        <div className='flex'>
          <p className="mr-2 text-green-500">97% Match</p>
          <p className="text-gray-300 text-base">2h 35m</p>
        </div>
        <div>
          <ol className='flex'>
            <li className="text-gray-300 text-base mr-2">Horror</li>
            <li className="text-gray-300 text-base mr-2">Adventure</li>
            <li className="text-gray-300 text-base">Mystery</li>
          </ol>
        </div>
      </div>
    </div>
  );
};


export default VideoCard;
