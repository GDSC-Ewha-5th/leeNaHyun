import dog from "../img/강아지.jpg";
import dogProfile from "../img/dogprofile.jpg";
import hamster from "../img/햄스터.jpg";
import hamsterProfile from "../img/hamsterprofile.png";
import cat from "../img/고양이.jpg";
import catProfile from "../img/catprofile.jpg";

function CardList() {
  return (
    <>
      <section>
        <img src={dog} />
        <article>
          <h3>힙한 강아지</h3>
          <p>
            안녕하세요? 저는 강아지입니다. 저는 선글라스 끼고 드라이브하는 것을
            제일 좋아해요. 이 사진은 날씨 좋은 날 찍은 사진입니다. 저 좀 귀엽죠
          </p>
          <div>
            <span>2023년 10월 25일&nbsp;·&nbsp;</span>
            <span>33개의 댓글</span>
          </div>
          <footer>
            <div>
              <img src={dogProfile} />
              <span>by HOTDOG</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>47</span>
            </div>
          </footer>
        </article>
      </section>
      <div>
        <img src={hamster} />
        <div>
          <h3>쪼꼬미 햄스터</h3>
          <span>
            저는 엄청 작아서 제 목소리가 안 들릴 수도 있어요! 하지만 작은 만큼
            엄청 귀엽답니다. 저는 하트 눌러주는 걸 좋아해서 많이 눌러주셨으면
            좋겠어요!
          </span>
          <div>
            <span>2023년 10월 20일&nbsp;·&nbsp;</span>
            <span>2개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={hamsterProfile} />
              <span>by Hamzzi</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>129</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={cat} />
        <div>
          <h3>미묘입니다</h3>
          <span>
            사진을 봐도 알 수 있듯이 저는 미묘에요. 제가 세상에서 제일 예쁨.
            반박 댓글 안 받음.
          </span>
          <div>
            <span>2023년 10월 31일&nbsp;·&nbsp;</span>
            <span>1716개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={catProfile} />
              <span>by kitty</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>100,291</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={dog} />
        <div>
          <h3>힙한 강아지</h3>
          <span>
            안녕하세요? 저는 강아지입니다. 저는 선글라스 끼고 드라이브하는 것을
            제일 좋아해요. 이 사진은 날씨 좋은 날 찍은 사진입니다. 저 좀 귀엽죠
          </span>
          <div>
            <span>2023년 10월 25일&nbsp;·&nbsp;</span>
            <span>33개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={dogProfile} />
              <span>by HOTDOG</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>47</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={hamster} />
        <div>
          <h3>쪼꼬미 햄스터</h3>
          <span>
            저는 엄청 작아서 제 목소리가 안 들릴 수도 있어요! 하지만 작은 만큼
            엄청 귀엽답니다. 저는 하트 눌러주는 걸 좋아해서 많이 눌러주셨으면
            좋겠어요!
          </span>
          <div>
            <span>2023년 10월 20일&nbsp;·&nbsp;</span>
            <span>2개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={hamsterProfile} />
              <span>by Hamzzi</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>129</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={cat} />
        <div>
          <h3>미묘입니다</h3>
          <span>
            사진을 봐도 알 수 있듯이 저는 미묘에요. 제가 세상에서 제일 예쁨.
            반박 댓글 안 받음.
          </span>
          <div>
            <span>2023년 10월 31일&nbsp;·&nbsp;</span>
            <span>1716개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={catProfile} />
              <span>by kitty</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>100,291</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={dog} />
        <div>
          <h3>힙한 강아지</h3>
          <span>
            안녕하세요? 저는 강아지입니다. 저는 선글라스 끼고 드라이브하는 것을
            제일 좋아해요. 이 사진은 날씨 좋은 날 찍은 사진입니다. 저 좀 귀엽죠
          </span>
          <div>
            <span>2023년 10월 25일&nbsp;·&nbsp;</span>
            <span>33개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={dogProfile} />
              <span>by HOTDOG</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>47</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={hamster} />
        <div>
          <h3>쪼꼬미 햄스터</h3>
          <span>
            저는 엄청 작아서 제 목소리가 안 들릴 수도 있어요! 하지만 작은 만큼
            엄청 귀엽답니다. 저는 하트 눌러주는 걸 좋아해서 많이 눌러주셨으면
            좋겠어요!
          </span>
          <div>
            <span>2023년 10월 20일&nbsp;·&nbsp;</span>
            <span>2개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={hamsterProfile} />
              <span>by Hamzzi</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>129</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={cat} />
        <div>
          <h3>미묘입니다</h3>
          <span>
            사진을 봐도 알 수 있듯이 저는 미묘에요. 제가 세상에서 제일 예쁨.
            반박 댓글 안 받음.
          </span>
          <div>
            <span>2023년 10월 31일&nbsp;·&nbsp;</span>
            <span>1716개의 댓글</span>
          </div>
          <div>
            <div>
              <img src={catProfile} />
              <span>by kitty</span>
            </div>
            <div>
              <span className="material-symbols-outlined">favorite</span>
              <span>100,291</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardList;
