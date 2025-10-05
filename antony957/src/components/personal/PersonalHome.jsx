import '../../output.css';
import Navi from '../common/Navi.jsx';
import Bio from './Bio.jsx';
import News from "./News.jsx";
import SelfIntro from "./SelfIntro.jsx";
import Projects from "./Projects.jsx";


function PersonalHome() {
  return (
      <>
          {/* 固定在顶部的导航栏 */}
          <div className="sticky inset-x-0 top-0 h-16 w-full bg-gray-100 p-4 shadow z-50">
              <Navi />
          </div>

          {/* 主区域：占满除去导航后的视口高；自己不滚动 */}
          <div className="flex w-screen overflow-hidden" style={{ height: "calc(100vh - 4rem)" }}>
              <aside className="h-full flex flex-col overflow-auto" style={{ width: "max(20%, 300px)" }}>
                  <SelfIntro />
              </aside>

              {/* 右栏：在自身内部滚动 */}
              <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
                  <Bio />
                  {/*<News />*/}
                  <Projects />
              </main>
          </div>
      </>
  );
}

export default PersonalHome;
