import React from "react";
import JavaImg from "../images/java.png";
import javascriptImg from "../images/javascript.png";
import csImg from "../images/c-sharp.png"
import html from "../images/html.png"
import css from "../images/css.png"
import typescript from "../images/typescript.png"
import refresh from "../images/refresh.png";

function backToStart(){
  // const info_div = document.getElementById('info-div');
  // info_div.innerHTML = "";
  // info_div.insert(welcomeHTML);
}

function DownloadResumeHTML(){
  const info_div = document.getElementById('info-div');
  const parent = document.createElement('div');
  info_div.innerHTML = "";
  info_div.appendChild(parent);

  const title = document.createElement('h1');
  title.id = 'welcome-h1';
  title.innerText = "There are cool features within the website!";
  parent.appendChild(title);

  const p1 = document.createElement('h2');
  p1.className = "sentence-sec";
  p1.innerText = "Some Hidden some not. so Explore and have fun!";
  parent.appendChild(p1);
  const p2 = document.createElement('h2');
  p2.className = "sentence-sec";
  p2.innerText = "If you'd like you may download my resume below!";
  parent.appendChild(p2);

  const button_container = document.createElement('div');
  button_container.id = 'button-container';
  button_container.className = 'sentence-sec';
  const download = document.createElement('button');
  download.id = 'download-button';
  download.innerText = 'Download';
  const da1 = document.createElement('i');
  da1.className = 'down-arrow';
  da1.id = 'da1';
  const da2 = document.createElement('i');
  da2.className = 'down-arrow';
  da2.id = 'da2';
  const da3 = document.createElement('i');
  da3.className = 'down-arrow';
  da3.id = 'da3';
  download.appendChild(da1);
  download.appendChild(da2);
  download.appendChild(da3);
  const downloadlink = document.createElement('a');
  downloadlink.href = process.env.REACT_APP_RESUME_LINK;
  downloadlink.appendChild(download);

  const restart = document.createElement('button');
  restart.id = 'restart-button';
  restart.innerText = 'Back to start';
  restart.addEventListener('click', e => backToStart());
  const icon2 = document.createElement('img');
  icon2.src = refresh;
  icon2.id = 'icon2';
  restart.appendChild(icon2);
  button_container.appendChild(restart);
  button_container.appendChild(downloadlink);
  parent.appendChild(button_container);
  
}

function createListPointHTML(item){
  const list_item = document.createElement('li');
  list_item.className = 'list-item-points';
  list_item.innerText = item;
  return list_item;
}

function createCSSStickMan(){
  const master_div = document.createElement('div');
  master_div.className = 'right-figure';
  const head = document.createElement('div');
  head.id = 'stick-head';
  master_div.appendChild(head);

  const body = document.createElement('div');
  body.id = 'stick-body';
  const midbody = document.createElement('div');
  midbody.id = 'stick-weist';
  body.appendChild(midbody);

  const rArm = document.createElement('div');
  rArm.id = 'right-arm';
  const lArm = document.createElement('div');
  lArm.id = 'left-arm';
  body.appendChild(rArm);
  body.appendChild(lArm);

  const rLeg = document.createElement('div');
  rLeg.id = 'right-leg';
  const lLeg = document.createElement('div');
  lLeg.id = 'left-leg';
  body.appendChild(rLeg);
  body.appendChild(lLeg);
  master_div.appendChild(body);

  return master_div;
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
  list.className = 'list-of-points';

  list.appendChild(createListPointHTML('Multi-tasker'));
  list.appendChild(createListPointHTML('Time-oriented'));
  list.appendChild(createListPointHTML('Team-oriented'));
  list.appendChild(createListPointHTML('Dedicated to my work'));
  list.appendChild(createListPointHTML('Quick learner'));
  list.appendChild(createListPointHTML('Willing to learn'));
  list.appendChild(createListPointHTML('Motivated'));
  list.appendChild(createListPointHTML('Problem solver'));
  list.appendChild(createListPointHTML('Creative'));
 
  const container = document.createElement('div');
  container.appendChild(list);
  container.className = 'sentence-sec';
  container.appendChild(createCSSStickMan());
  parent.appendChild(container);
  
  const button_holder = document.createElement('div');
  button_holder.id = 'button-div';
  const next_btn = document.createElement('button');
  next_btn.id = 'next-btn';
  next_btn.addEventListener('click', e => DownloadResumeHTML());
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
  button_holder.appendChild(next_btn);
  info_div.appendChild(button_holder);

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