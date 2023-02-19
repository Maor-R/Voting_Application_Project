import { GrUpdate } from "react-icons/gr";

import { FcApprove, FcDisapprove } from "react-icons/fc";

const User = ({ id, name, didVote, updateUserVote }) => {
  return (
    <article className="card">
      <h4>{name}</h4>
      <h5>{id}</h5>
      <button
        className="btn btn-transparent mt"
        onClick={() => updateUserVote(id)}
      >
        {!didVote && <FcDisapprove />}
        {didVote && <FcApprove />}
        <GrUpdate />
      </button>
    </article>
  );
};

export default User;
