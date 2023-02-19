import { useState, useEffect } from "react";

import { PAGES } from "../constants";

import Wrapper from "../styles/styled/Voting.styled";
import { Confirm, PartiesList } from "../components";

import { PARTIES } from "../constants";
import catImg from '../assets/images/cat.PNG';
import lionImg from '../assets/images/lion.PNG';
import dogImg from '../assets/images/dog.PNG';
import cowImg from '../assets/images/caw.PNG';
const images = [catImg, dogImg, cowImg, lionImg]

const userData = JSON.parse(localStorage.getItem("userData"));

const partiesVotesAmount = JSON.parse(
  localStorage.getItem("partiesVotesAmount")
);

const Voting = ({ setPage }) => {
  // const [user, setUser] = useState(userData.name);
  const [openModal, setOpenModal] = useState(false);
  const [voteStatus, setVoteStatus] = useState(userData.isVote);
  const [voteStatusMsg, setVoteStatusMsg] = useState(userData.isVote);

  let partiesArr = [];
  for (let i = 0; i < 4; i++) {
    partiesArr.push({
      name: PARTIES[i].charAt(0).toUpperCase() + PARTIES[i].slice(1),
      image: images[i],
      votes: partiesVotesAmount[i],
    });
  }
  const [parties, setParties] = useState(partiesArr);
  // useEffect(() => {
  //   if (!user) {
  //     setPage(landing);
  //   }
  // }, [setPage, user]);

  const [sum, setSum] = useState(
    partiesVotesAmount.reduce((sum, val) => {
      return (sum += val);
    }, 0)
  );

  const closeModal = () => {
    setSum((prevSum) => prevSum - 1);
    setOpenModal(false);
  };
  const logout = () => {
    setPage(PAGES[0]);
    localStorage.removeItem('userData');
  };

  const done = () => {
    if (userData.type == "admin") {
      setPage(PAGES[1]);
    } else {
      setVoteStatus(true);
      setVoteStatusMsg(true);
      setOpenModal(false);

      const userDataObj = { ...userData, isVote: true };
      localStorage.setItem("userData", JSON.stringify(userDataObj));
    }
  };

  const updateParty = (name) => {
    let i = 0;
    let stopLoop = false;

    while (i < parties.length && !stopLoop) {
      if (parties[i].name === name) {
        stopLoop = true;
      } else {
        i++;
      }
    }
    parties[i].votes = ++parties[i].votes;
    setParties(parties);
    setSum((prevSum) => prevSum + 1);
    setTimeout(() => {
      setOpenModal(true);
    }, 1500);
  };

  return (
    <Wrapper>
      <main className="page">
        <div className="data-msg">
          Hello, {userData.name}
          <button className="logout-btn btn" onClick={logout}>
            Logout
          </button>
        </div>
        {!voteStatus && <h2 className="center">Whom do you wanna vote?</h2>}
        {!voteStatus && (
          <div className="dashboard">
            <PartiesList parties={parties} updateParty={updateParty} />
          </div>
        )}
        {voteStatusMsg && (
          <div className="thanks-msg center">Thank you for voting</div>
        )}
        <div className="data-msg center">Total voted: {sum}</div>
      </main>
      {openModal && <Confirm done={done} closeModal={closeModal} />}
    </Wrapper>
  );
};

export default Voting;
