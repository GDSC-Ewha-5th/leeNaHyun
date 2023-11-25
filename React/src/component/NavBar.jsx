function NavBar() {
  return (
    <>
      <div>
        <div>
          <div>
            <nav>
              <span className="material-symbols-outlined"> show_chart </span>
              <a href="#">트렌딩</a>
            </nav>
            <nav>
              <span className="material-symbols-outlined"> schedule </span>
              <a href="#">최신</a>
            </nav>
          </div>
          <div>
            <div>
              <span>이번 주</span>
              <span className="material-symbols-outlined">
                {" "}
                arrow_drop_down{" "}
              </span>
            </div>
            <div>
              <a href="#">오늘</a>
              <a className="dropDown_content_clicked" href="#">
                이번 주
              </a>
              <a href="#">이번 달</a>
              <a href="#">올해</a>
            </div>
          </div>
        </div>
        <div>
          <span className="material-symbols-outlined"> more_vert </span>
        </div>
      </div>
    </>
  );
}

export default NavBar;
