import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <div>USER : {userId}</div>;
};

export default User;
