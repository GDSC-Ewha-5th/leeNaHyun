import styled from "styled-components";

const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CloseBtn = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

function CardModal() {
  return (
    <>
      <ModalBg></ModalBg>
      <CloseBtn>X</CloseBtn>
    </>
  );
}

export default CardModal;
