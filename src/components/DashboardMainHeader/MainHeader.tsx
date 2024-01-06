import ApplicationsIcon from "../../icons/Applications";
import AttachmentIcon from "../../icons/Attachment";
import IcArrowIcon from "../../icons/IcArrow";
import ImageIcon from "../../icons/Image";
import PhoneIcon from "../../icons/Phone";
import SendIcon from "../../icons/Send";
import VideoIcon from "../../icons/Video";
import PostCard from "../Post/PostCard";
import "./mainheader.css";

const MainHeader = () => {
  return (
    <>
      <div className="mainHeader">
        <div className="u">
          <div className="mainHeaderWrapper">
            <div className="headerTopLeft">
              <PhoneIcon />
              <VideoIcon />
            </div>
            <div className="headerTopCenter">
              <div className="onlineStatusWrapper">
                <span className="onlineStatus"></span>
              </div>
              <span className="username">Dennis Smith</span>
            </div>
            <div className="headerTopRight">
              <IcArrowIcon />
              <ApplicationsIcon />
            </div>
          </div>
          <div className="headerBottom">
            <PostCard
              username="Stella Evans"
              dept="Web Designer"
              time="12:45 PM"
            >
              <div className="postInfo">
                <div className="fileType">
                  <span className="fileName">Human Design Guidelines.pdf</span>
                  <span className="fileSize">760.90 KB</span>
                </div>
                <div className="progressWrapper">
                  <div className="progressHeader">
                    <span className="progressHeading">Downloading...</span>
                    <span className="progressPercentage">65%</span>
                  </div>
                  <div className="progressBarWrapper">
                    <div
                      className="progressBar"
                      style={{
                        width: "65%",
                        background: "#3361FF",
                        height: "5px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </PostCard>
            <PostCard
              username="Stella Evans"
              dept="Web Designer"
              time="12:45 PM"
              isImage
            >
              <div className="postImg">
                <img src="/src/assets/images/post.png" alt="post" />
                <img src="/src/assets/images/post2.png" alt="post" />
              </div>
            </PostCard>
          </div>
          <div className="separator">
            <span> Today</span>
          </div>
          <div className="headerBottom">
            <PostCard
              username="Stella Evans"
              dept="Web Designer"
              time="12:45 PM"
            >
              When you starting a company you are thinking on how to cut
              expenses. One of such options to cut the startup costs is a
              company logo design. But is it good idea to order a cheap logo or
              work without company logo at all?
            </PostCard>
            <PostCard
              username="Stella Evans"
              dept="Web Designer"
              time="12:45 PM"
            >
              When you starting a company you are thinking on how to cut
              expenses. One of such options to cut the startup costs is a
              company logo design. But is it good idea to order a cheap logo or
              work without company logo at all?
            </PostCard>
          </div>
        </div>
        <div className="chatWrapper">
          <div className="chatLeft">
            <AttachmentIcon />
            <ImageIcon />
            <div className="chatInput">
              <input type="text" placeholder="Type Message" />
            </div>
          </div>
          <div className="chatRight">
            <SendIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
