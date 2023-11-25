import profile from "../img/profile.jpg";
import styled from "styled-components";

const HeadBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 70px;

  h1 {
    font-size: 45px;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 35px;
    margin-left: 20px;
  }
  h3 {
    font-size: 23px;
    border-radius: 30px;
    border: 2px solid grey;
    width: 130px;
    height: auto;
    text-align: center;
    padding: 5px 0;
  }
`;

const Profile = styled.div`
  align-items: center;
  margin-left: 30px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  span {
    font-size: 25px;
    margin-left: 10px;
  }
`;

function Header() {
  return (
    <>
      <HeadBlock>
        <h1>velog</h1>
        <div>
          <span className="material-symbols-outlined" size="xl">
            {" "}
            sunny{" "}
          </span>
          <span className="material-symbols-outlined"> search </span>
          <span>
            <h3>새 글 작성</h3>
          </span>
          <Profile>
            <img src={profile} />
            <span className="material-symbols-outlined"> arrow_drop_down </span>
          </Profile>
        </div>
      </HeadBlock>
    </>
  );
}

export default Header;
