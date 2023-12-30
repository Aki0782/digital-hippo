import Image from "next/image";

import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Home = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl"></div>
    </MaxWidthWrapper>
  );
};

export default Home;
