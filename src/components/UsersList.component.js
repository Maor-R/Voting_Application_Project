import User from "./User.component";

const UsersList = ({ users, updateUserVote }) => {
  return (
    <section className="container">
      {users.map((user) => {
        return <User key={user.id} {...user} updateUserVote={updateUserVote} />;
      })}
    </section>
  );
};

export default UsersList;
