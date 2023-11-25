import styled from "styled-components";

function NavBar() {
  return (
    <>
      <div>
        <div>
          <div>
            <nav>
              <Icon className="material-symbols-outlined"> show_chart </Icon>
              <a href="#">트렌딩</a>
            </nav>
            <nav>
              <Icon className="material-symbols-outlined"> schedule </Icon>
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

const Icon = styled.span`
  font-size: 35px;
`;

export default NavBar;
