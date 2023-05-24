import React from "react";
import JavaImg from "../images/java.png";
import javascriptImg from "../images/javascript.png";
import csImg from "../images/c-sharp.png"
import html from "../images/html.png"
import css from "../images/css.png"
import typescript from "../images/typescript.png"


function createListItem(item){
  var language = document.createElement('img');
  language.className = 'list-item';
  language.src = item;
  return language;
}

function proceedToSkills(){
  const info_div = document.getElementById('info-div');
  const parent = document.createElement('div');
  info_div.innerHTML = "";
  const title = document.createElement('h1');
  title.id = 'welcome-h1';
  title.innerText = "My Skill Set";
  parent.appendChild(title);

  const section1 = document.createElement('h2');
  section1.className = "sentence-sec";
  section1.innerHTML = "Languages (Markup, Styling Included):<br/>";
  parent.appendChild(section1);

  var list = document.createElement('ul');
  list.appendChild(createListItem(JavaImg));
  list.appendChild(createListItem(javascriptImg));
  list.appendChild(createListItem(csImg));
  list.appendChild(createListItem(html));
  list.appendChild(createListItem(css));
  list.appendChild(createListItem(typescript));
  section1.appendChild(list);

  const next_btn = document.createElement('button');
  next_btn.id = 'next-btn';
  const arrow_one = document.createElement('i');
  arrow_one.className = 'right-arrow i-one';
  const arrow_two = document.createElement('i');
  arrow_two.className = 'right-arrow i-two';
  const arrow_three = document.createElement('i');
  arrow_three.className = 'right-arrow i-three';
  next_btn.innerHTML = 'NEXT';
  next_btn.appendChild(arrow_one);
  next_btn.appendChild(arrow_two);
  next_btn.appendChild(arrow_three);
  section1.appendChild(next_btn);
  info_div.appendChild(parent);

    (
      <div>
          <h1 id='welcome-h1'>
            My Skill Set
          </h1>
          <h2 className='sentence-sec'>
           Programming Languages:
          </h2>
          <h2 className='sentence-sec'>
            And this is my online resume
          </h2>
          <h2 className='sentence-sec'>
             And Portfolio.
          </h2>
          <button id='next-btn'>
            NEXT
            <i className='right-arrow i-one'/>
            <i className='right-arrow i-two'/>
            <i className='right-arrow i-three'/>        </button>
      </div>
    );
 
}
export const welcomeHTML = 
  (
    <div>
        <h1 id='welcome-h1'>
          Welcome
        </h1>
        <h2 className='sentence-sec'>
         My name is Nicolas Korsunski
        </h2>
        <h2 className='sentence-sec'>
          And this is my online resume
        </h2>
        <h2 className='sentence-sec'>
           And Portfolio.
        </h2>
        <button id='next-btn' onClick={proceedToSkills}>
          NEXT
          <i className='right-arrow i-one'/>
          <i className='right-arrow i-two'/>
          <i className='right-arrow i-three'/>        
        </button>
    </div>
);

// const skillsHTML = 
  