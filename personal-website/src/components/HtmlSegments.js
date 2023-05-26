import React from "react";
import JavaImg from "../images/java.png";
import javascriptImg from "../images/javascript.png";
import csImg from "../images/c-sharp.png"
import html from "../images/html.png"
import css from "../images/css.png"
import typescript from "../images/typescript.png"

function createListPointHTML(item){
  const list_item = document.createElement('li');
  list_item.className = 'list-item-points';
  list_item.innerText = item;
  return list_item;
}

function proceedToWhoAmI(){
  const info_div = document.getElementById('info-div');
  const parent = document.createElement('div');
  info_div.innerHTML = "";
  info_div.appendChild(parent);

  const title = document.createElement('h1');
  title.id = 'welcome-h1';
  title.innerText = "Who Am I";
  parent.appendChild(title);

  const section = document.createElement('h2');
  section.className = "sentence-sec";
  section.innerHTML = "I am: <br/>";
  parent.appendChild(section);

  const list = document.createElement('ul');
  list.className = 'list-of-points sentence-sec';
  
  list.appendChild(createListPointHTML('Multi-tasker'));
  list.appendChild(createListPointHTML('Time-oriented'));
  list.appendChild(createListPointHTML('Team-oriented'));

  parent.appendChild(list);


}

function createListItem(item, name){
  var language = document.createElement('img');
  language.className = 'list-item';
  language.id = name;
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
  section1.innerHTML = "I am proficient in: <br/>";
  parent.appendChild(section1);

  var list = document.createElement('ul');
  list.appendChild(createListItem(JavaImg, 'Java'));
  list.appendChild(createListItem(javascriptImg, 'JavaScript'));
  list.appendChild(createListItem(csImg, 'CSharp'));
  list.appendChild(createListItem(html, 'HTML5'));
  list.appendChild(createListItem(css, 'CSS'));
  list.appendChild(createListItem(typescript, 'TypeScript'));
  section1.appendChild(list);
  section1.appendChild(document.createElement('br'));

  //next button in js
  const next_btn = document.createElement('button');
  next_btn.id = 'next-btn';
  next_btn.addEventListener('click', e => proceedToWhoAmI());
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