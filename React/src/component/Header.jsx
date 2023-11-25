import profile from "../img/profile.jpg";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>
        <Title>velog</Title>
        <Box>
          <Icon className="material-symbols-outlined" size="xl">
            {" "}
            sunny{" "}
          </Icon>
          <Icon className="material-symbols-outlined"> search </Icon>
          <Text>새 글 작성</Text>
          <Profile src={profile} />
          <Icon className="material-symbols-outlined"> arrow_drop_down </Icon>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 45px;
`;

const Icon = styled.span`
  font-size: 35px;
  padding-left: 20px;
`;

const Text = styled.span`
  font-size: 23px;
  border-radius: 30px;
  border: 2px solid grey;
  width: 130px;
  height: auto;
  text-align: center;
  padding: 5px 0;
  margin-left: 20px;
`;

const Profile = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 25px;
`;

export default Header;
