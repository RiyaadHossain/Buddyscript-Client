
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import MainFeeds from "./MainFeeds";
import RightSidebar from "./RightSidebar";

const Feed = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1320px] mx-auto flex justify-between gap-1">
        <LeftSidebar />
        <MainFeeds />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
