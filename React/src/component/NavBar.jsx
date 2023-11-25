import styled from "styled-components";
import { useState } from "react";
import ShowDropDown from "./ShowDropDown";

const NavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 30px;
    padding-right: 7px;
  }
  a {
    font-size: 25px;
  }
`;
const CardNav = styled.div`
  display: flex;

  nav {
    display: flex;
    align-items: center;
    padding-right: 20px;
  }
`;

const DropDown = styled.div`
  position: relative;
`;
const SeenDropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  width: 95px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0px 10px;

  h3 {
    font-size: 20px;
  }
  span {
    font-size: 25px;
    padding-right: 0px;
  }
`;

const Right = styled.div``;

function NavBar() {
  const [view, setView] = useState(false);

  return (
    <>
      <NavBlock>
        <Left>
          <CardNav>
            <nav>
              <span className="material-symbols-outlined"> show_chart </span>
              <a href="#">트렌딩</a>
            </nav>
            <nav>
              <span className="material-symbols-outlined"> schedule </span>
              <a href="#">최신</a>
            </nav>
          </CardNav>
          <DropDown>
            <SeenDropDown onClick={() => setView(!view)}>
              <h3>이번 주</h3>
              <span className="material-symbols-outlined">
                {" "}
                arrow_drop_down{" "}
              </span>
            </SeenDropDown>
            {view && <ShowDropDown />}
          </DropDown>
        </Left>
        <Right>
          <span className="material-symbols-outlined"> more_vert </span>
        </Right>
      </NavBlock>
    </>
  );
}

export default NavBar;
