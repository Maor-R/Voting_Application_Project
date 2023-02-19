import { GrUpdate } from "react-icons/gr";
import { useState, useEffect } from 'react';

import { FcApprove, FcDisapprove } from "react-icons/fc";

const User = ({ id, name, didVote, updateUserVote }) => {
  const [isVote, setIsVote] = useState(didVote)


  return (
    <article className="card">
      <h5>{name}</h5>
      <h4>{id}</h4>
      <button
        className="btn btn-transparent mt"
        onClick={() => {if(isVote){ setIsVote(false) ;updateUserVote(id)}}}
      >
        {!isVote && <FcDisapprove />}
        {isVote && <FcApprove />}
        <GrUpdate />
      </button>
    </article>
  );
};

export default User;
