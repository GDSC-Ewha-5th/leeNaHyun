import styled from "styled-components";

const DropDownBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  margin-top: 10px;

  .first {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .last {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const DropDownContents = styled.a`
  background-color: whitesmoke;
  font-size: 20px;
  padding: 15px;
  border-bottom: 1px solid lightgrey;
  width: 200px;
  height: 20px;
  align-items: center;
  &:hover {
    color: purple;
    background-color: lightgray;
  }
`;

function ShowDropDown() {
  return (
    <>
      <DropDownBlock>
        <DropDownContents className="first" href="#">
          오늘
        </DropDownContents>
        <DropDownContents className="dropDown_content_clicked" href="#">
          이번 주
        </DropDownContents>
        <DropDownContents href="#">이번 달</DropDownContents>
        <DropDownContents className="last" href="#">
          올해
        </DropDownContents>
      </DropDownBlock>
    </>
  );
}

export default ShowDropDown;
