import styled from 'styled-components';

const FooterStyle = styled.footer`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

position: fixed;
bottom: 0;

.menu{
margin: 0;
display: flex;
/* Works well with 100% width  */
width: 100%;
max-width: 600px;
font-size: 1.5em;
padding: 0 5vw;
position: relative;
align-items: center;
justify-content: space-evenly;
background-color: gold;
/* background-color: #1d1d27; */

}

.menu__item{

all: unset;
flex-grow: 1;
z-index: 100;
display: flex;
cursor: pointer;
position: relative;
border-radius: 50%;
align-items: center;
will-change: transform;
justify-content: center;
padding: 0.55em 0 0.85em;
transition: transform 0.7s;

}

.menu__item::before{

content: "";
z-index: -1;
width: 4.2em;
height: 4.2em;
border-radius: 50%;
position: absolute;
transform: scale(0);
transition: background-color 0.7s, transform 0.7s;

}


.menu__item.active {

transform: translate3d(0, -.8em , 0);

}

.menu__item.active::before{

transform: scale(1);
background-color: firebrick;

}

.new-icon{
aspect-ratio: 1;
stroke: white;
width: 2.6em;
height: 2.6em;
stroke-width: 2pt;
stroke-miterlimit: 10;
stroke-linecap: round;
stroke-linejoin: round;

}

.menu__border{

left: 0;
bottom: 95%;
width: 10.8em;
height: 2.4em;
position: absolute;
margin: 0 auto;
clip-path: url(#menu);
/* will-change: transform; */
background-color: gold;
transition: transform 0.7s;
padding: 10px;
}

hidden {
  display: hidden !important;
}

.svg-container {
width: 0;
height: 0;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 50em) {
.menu{
    font-size: .8em;
}
}
width: 100%;
max-width: 600px;
margin-bottom: -5px;
`;

export default FooterStyle;
