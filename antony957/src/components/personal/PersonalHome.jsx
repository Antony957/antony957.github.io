import '../../output.css';
import Navi from '../common/Navi.jsx';
import Bio from '../common/Bio.jsx';
import News from "../common/News.jsx";
import SelfIntro from "../common/SelfIntro.jsx";


function PersonalHome() {
  return (
      <>
      <Navi />
      <div className="flex flex-col md:flex-row">
          <SelfIntro/>
          <div className="flex-1 bg-gray-50 ">
              <Bio />
              <News />
              {/*<Projects />*/}
          </div>
      </div>
      </>
  );
}

export default PersonalHome;
