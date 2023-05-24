import React from "react";

function createListItem(item){
  var language = document.createElement('li');
  language.className = 'list-item';
  language.textContent = item;
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
  section1.innerHTML = "Languages:<br/>";
  parent.appendChild(section1);

  var list = document.createElement('ul');
  list.appendChild(createListItem("Java"));
  list.appendChild(createListItem("JavaScript"));

  section1.appendChild(list);


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
  