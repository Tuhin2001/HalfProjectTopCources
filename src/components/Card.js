import React from 'react';
import {FcLike} from "react-icons/fc";


 const Card = ({cource}) => {
  return (
    <div>
    {/* image */}
      <div>
        <img src={cource.image.url} alt={cource.title} />
        {/* Icon */}
        <div>
          <button>
            <FcLike fontSize="1.75rem"/>
          </button>
        </div>
      </div>
      

      {/* course title */}
      <div>
        <p>{cource.title}</p>
        <p>{cource.description}</p>
      </div>

    </div>
  )
}
export default Card; 