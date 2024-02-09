// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/saurav-verma-01")
  //     .then((res) => res.json())
  //     .then((resData) => {
  //       console.log(resData);
  //       setData(resData);
  //     });
  // }, []);

  const data = useLoaderData();
  return (
    <div className="p-8 w-full text-center m-5 bg-green-800 text-3xl text-white">
      GITHUB Followers: {data.followers}
      <img src={data.avatar_url} alt="" className="" width={250} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/saurav-verma-01");
  return res.json();
};
