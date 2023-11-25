// import { useState } from "react";
import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./component/Header";
import NavBar from "./component/NavBar";
import CardList from "./component/CardList";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

input:focus {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  outline: none;
  font-family: "Gaegu", sans-serif;
}

body {
  background-color: #ebddf5;
  font-family: "Gaegu", sans-serif;
  padding: 30px 7% 30px 7%;

}

`;

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* isModalOpen이 true일 때만 CardModal컴포넌트가 로드되도록 조건부 렌더링 */}
      {/* {isModalOpen && <CardModal setIsModalOpen={setIsModalOpen} />} */}
      <GlobalStyle></GlobalStyle>
      <Header />
      <NavBar />
      <CardList />
    </>
  );
}

export default App;
