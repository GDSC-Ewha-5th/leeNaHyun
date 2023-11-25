import styled from "styled-components";

import dog from "../img/강아지.jpg";
import dogProfile from "../img/dogprofile.jpg";
import hamster from "../img/햄스터.jpg";
import hamsterProfile from "../img/hamsterprofile.png";
import cat from "../img/고양이.jpg";
import catProfile from "../img/catprofile.jpg";

const CardBlock = styled.div`
  padding: 15px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  section {
    background-color: white;
    height: 470px;
    width: 400px;
    margin: 10px;
    position: relative;
    border-radius: 20px;
  }
`;

const CardImg = styled.img`
  height: 220px;
  width: 400px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const CardArticle = styled.article`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
`;

const CardContents = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    line-height: 20px;
  }
`;

const CardFooter = styled.footer`
  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const FooterInfo1 = styled.div`
  padding-bottom: 10px;
  color: grey;
`;
const FooterInfo2 = styled.div`
  border-top: solid 1px lightgrey;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
  span {
    padding-left: 7px;
  }
  .material-symbols-outlined {
    font-size: 15px;
  }
`;

function CardList() {
  return (
    <>
      <CardBlock>
        {" "}
        <section>
          <CardImg src={dog}></CardImg>
          <CardArticle>
            <CardContents>
              <h3>힙한 강아지</h3>
              <p>
                안녕하세요? 저는 강아지입니다. 저는 선글라스 끼고 드라이브하는
                것을 제일 좋아해요. 이 사진은 날씨 좋은 날 찍은 사진입니다. 저
                좀 귀엽죠
              </p>
            </CardContents>
            <CardFooter>
              <FooterInfo1>
                <span>2023년 10월 25일&nbsp;·&nbsp;</span>
                <span>33개의 댓글</span>
              </FooterInfo1>
              <FooterInfo2>
                <div>
                  <img src={dogProfile} />
                  <h3>by HOTDOG</h3>
                </div>
                <div>
                  <span className="material-symbols-outlined">favorite</span>
                  <span>47</span>
                </div>
              </FooterInfo2>
            </CardFooter>
          </CardArticle>
        </section>
        <section>
          <CardImg src={hamster}></CardImg>
          <CardArticle>
            <CardContents>
              <h3>쪼꼬미 햄스터</h3>
              <p>
                저는 엄청 작아서 제 목소리가 안 들릴 수도 있어요! 하지만 작은
                만큼 엄청 귀엽답니다. 저는 하트 눌러주는 걸 좋아해서 많이
                눌러주셨으면 좋겠어요!
              </p>
            </CardContents>
            <CardFooter>
              <FooterInfo1>
                <span>2023년 10월 20일&nbsp;·&nbsp;</span>
                <span>2개의 댓글</span>
              </FooterInfo1>
              <FooterInfo2>
                <div>
                  <img src={hamsterProfile} />
                  <h3>by Hamzzi</h3>
                </div>
                <div>
                  <span className="material-symbols-outlined">favorite</span>
                  <span>129</span>
                </div>
              </FooterInfo2>
            </CardFooter>
          </CardArticle>
        </section>
        <section>
          <CardImg src={cat}></CardImg>
          <CardArticle>
            <CardContents>
              <h3>미묘입니다</h3>
              <p>
                사진을 봐도 알 수 있듯이 저는 미묘에요. 제가 세상에서 제일 예쁨.
                반박 댓글 안 받음.
              </p>
            </CardContents>
            <CardFooter>
              <FooterInfo1>
                <span>2023년 10월 31일&nbsp;·&nbsp;</span>
                <span>1716개의 댓글</span>
              </FooterInfo1>
              <FooterInfo2>
                <div>
                  <img src={catProfile} />
                  <h3>by kitty</h3>
                </div>
                <div>
                  <span className="material-symbols-outlined">favorite</span>
                  <span>100,291</span>
                </div>
              </FooterInfo2>
            </CardFooter>
          </CardArticle>
        </section>
        <section>
          <CardImg src={dog}></CardImg>
          <CardArticle>
            <CardContents>
              <h3>힙한 강아지</h3>
              <p>
                안녕하세요? 저는 강아지입니다. 저는 선글라스 끼고 드라이브하는
                것을 제일 좋아해요. 이 사진은 날씨 좋은 날 찍은 사진입니다. 저
                좀 귀엽죠
              </p>
            </CardContents>
            <CardFooter>
              <FooterInfo1>
                <span>2023년 10월 25일&nbsp;·&nbsp;</span>
                <span>33개의 댓글</span>
              </FooterInfo1>
              <FooterInfo2>
                <div>
                  <img src={dogProfile} />
                  <h3>by HOTDOG</h3>
                </div>
                <div>
                  <span className="material-symbols-outlined">favorite</span>
                  <span>47</span>
                </div>
              </FooterInfo2>
            </CardFooter>
          </CardArticle>
        </section>
        <section>
          <CardImg src={hamster}></CardImg>
          <CardArticle>
            <CardContents>
              <h3>쪼꼬미 햄스터</h3>
              <p>
                저는 엄청 작아서 제 목소리가 안 들릴 수도 있어요! 하지만 작은
                만큼 엄청 귀엽답니다. 저는 하트 눌러주는 걸 좋아해서 많이
                눌러주셨으면 좋겠어요!
              </p>
            </CardContents>
            <CardFooter>
              <FooterInfo1>
                <span>2023년 10월 20일&nbsp;·&nbsp;</span>
                <span>2개의 댓글</span>
              </FooterInfo1>
              <FooterInfo2>
                <div>
                  <img src={hamsterProfile} />
                  <h3>by Hamzzi</h3>
                </div>
                <div>
                  <span className="material-symbols-outlined">favorite</span>
                  <span>129</span>
                </div>
              </FooterInfo2>
            </CardFooter>
          </CardArticle>
        </section>
        <section>
          <CardImg src={cat}></CardImg>
          <CardArticle>
            <CardContents>
              <h3>미묘입니다</h3>
              <p>
                사진을 봐도 알 수 있듯이 저는 미묘에요. 제가 세상에서 제일 예쁨.
                반박 댓글 안 받음.
              </p>
            </CardContents>
            <CardFooter>
              <FooterInfo1>
                <span>2023년 10월 31일&nbsp;·&nbsp;</span>
                <span>1716개의 댓글</span>
              </FooterInfo1>
              <FooterInfo2>
                <div>
                  <img src={catProfile} />
                  <h3>by kitty</h3>
                </div>
                <div>
                  <span className="material-symbols-outlined">favorite</span>
                  <span>100,291</span>
                </div>
              </FooterInfo2>
            </CardFooter>
          </CardArticle>
        </section>
      </CardBlock>
    </>
  );
}

export default CardList;
