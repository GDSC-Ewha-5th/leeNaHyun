import profile from "../img/profile.jpg";

function Header() {
  return (
    <>
      <h1>velog</h1>
      <div>
        <span className="material-symbols-outlined" size="xl">
          {" "}
          sunny{" "}
        </span>
        <span className="material-symbols-outlined"> search </span>
        <span id="newPost">
          <a>새 글 작성</a>
        </span>
        <span id="profile">
          <span>
            <img src={profile} />
          </span>
          <span className="material-symbols-outlined"> arrow_drop_down </span>
        </span>
      </div>
    </>
  );
}

export default Header;
