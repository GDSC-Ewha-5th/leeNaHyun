// import { useState } from "react";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import CardList from "./component/CardList";

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* isModalOpen이 true일 때만 CardModal컴포넌트가 로드되도록 조건부 렌더링 */}
      {/* {isModalOpen && <CardModal setIsModalOpen={setIsModalOpen} />} */}
      <Header />
      <NavBar />
      <CardList />
    </>
  );
}

export default App;
