import Ellipsis from "../../icons/Ellipsis";
import FavouriteIcon from "../../icons/Favourite";
import FlagIcon from "../../icons/Flag";
import "./post.css";

interface Post {
  username: string;
  dept: string | number;
  time?: number | string;
  children: React.ReactNode;
  isImage?: boolean;
}

const PostCard = ({ username, dept, time, children, isImage }: Post) => {
  return (
    <div className="post">
      <div className="postCardWrapper">
        <div className="postCardLeft">
          <div className="userAvatar">
            <img src="/src/assets/images/Avatar.png" alt="avatar" />
          </div>
          <div className="postCardInfo">
            <div className="postCardInfoTop">
              <span className="username">{username}</span>
              <span className="userDept">{dept}</span>
              <span className="timeCreated">{time}</span>
            </div>
            <div className={isImage ? "" : "postCardInfoBottom"}>
              <p>{children}</p>
            </div>
          </div>
        </div>
        <div className="postCardRight">
          <FavouriteIcon />
          <FlagIcon />
          <Ellipsis />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
