import styled from "styled-components";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  margin-top: 10px;

  a {
    background-color: whitesmoke;
    font-size: 20px;
    padding: 15px;
    border-bottom: 1px solid lightgrey;
    width: 200px;
    height: 20px;
    align-items: center;
  }

  .first {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .last {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

function ShowDropDown() {
  return (
    <>
      <Block>
        <a className="first" href="#">
          오늘
        </a>
        <a className="dropDown_content_clicked" href="#">
          이번 주
        </a>
        <a href="#">이번 달</a>
        <a className="last" href="#">
          올해
        </a>
      </Block>
    </>
  );
}

export default ShowDropDown;
