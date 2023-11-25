import styled from "styled-components";

function NavBar() {
  return (
    <>
      <Container>
        <Box1>
          <Icon className="material-symbols-outlined"> show_chart </Icon>
          <Text>트렌딩</Text>

          <Icon className="material-symbols-outlined"> schedule </Icon>
          <Text>최신</Text>

          <Text>이번 주</Text>
          <Icon className="material-symbols-outlined"> arrow_drop_down </Icon>
          <DropDown>
            <Text>오늘</Text>
            <Text className="dropDown_content_clicked" href="#">
              이번 주
            </Text>
            <Text href="#">이번 달</Text>
            <Text href="#">올해</Text>
          </DropDown>
        </Box1>
        <Box2>
          <Icon className="material-symbols-outlined"> more_vert </Icon>
        </Box2>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
`;

const Box1 = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 25px;
`;

const DropDown = styled.span``;

const Box2 = styled.div``;

const Icon = styled.span`
  font-size: 35px;
`;

export default NavBar;
