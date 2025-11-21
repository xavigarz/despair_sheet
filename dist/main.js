console.log("JS loaded");

var character = 
    {
        name: "Aristarco",
        concept: "Choose a concept",
        player: "Player Name",
        background: "Select Background",
        mark: "Select Mark",
        mark_level: 1,

        hope: 1,
        hope_max: 5,
        despair: 0,
        despair_max: 1,

        speed: 1,
        defense: 1,
        wounds: 1,

        version: 0.1
    };

// Define values of the Attributes Table
var attributes = {
    "Physical" : {base: 1, background: 0, mark: 0, bonus: 0, total: 1},
    "Body"     : {base: 1, background: 0, mark: 0, bonus: 0, total: 1},
    "Reflexes" : {base: 1, background: 0, mark: 0, bonus: 0, total: 1},
    "Mind"     : {base: 1, background: 0, mark: 0, bonus: 0, total: 1},
    "Social"   : {base: 1, background: 0, mark: 0, bonus: 0, total: 1}
};

var skills = {
  "Academics"    : {background: 0, bonus: 0,total: 0},
  "Athletics"    : {background: 0, bonus: 0,total: 0},
  "Art"          : {background: 0, bonus: 0,total: 0},
  "Conversation" : {background: 0, bonus: 0,total: 0},
  "Crafts"       : {background: 0, bonus: 0,total: 0},
  "Infiltration" : {background: 0, bonus: 0,total: 0},
  "Instinct"     : {background: 0, bonus: 0,total: 0},
  "Fight"        : {background: 0, bonus: 0,total: 0},
  "Firearms"     : {background: 0, bonus: 0,total: 0},
  "Science"      : {background: 0, bonus: 0,total: 0}
};

const maxSkillPoints = 10;
let SkillPoints = maxSkillPoints;

function updateAttributes(){
    const attributesList = Object.keys(attributes);
    attributesList.forEach(attribute => {
        attributes[attribute].total = attributes[attribute].base + attributes[attribute].background + attributes[attribute].mark + attributes[attribute].bonus
    });
};

function updateSkills(){
    const skillList = Object.keys(skills);
    skillList.forEach(skill => {
        skills[skill].total = skills[skill].background + skills[skill].bonus
    });
};

const attributesTableBody = document.querySelector("#attributesTable tbody");

function renderAttributesTable(){
    attributesTableBody.innerHTML = "";

    const attributesList = Object.keys(attributes);

    attributesList.forEach(attribute => {
        const att = attributes[attribute];
        //const total = att.base + att.background + att.mark + att.bonus;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${attribute}</td>
        <td>${att.base}</td>
        <td>${att.background}</td>
        <td>${att.mark}</td>
        <td>${att.bonus}</td>
        <td>${att.total}</td>
        `;
        attributesTableBody.appendChild(tr)
    });
};

const remainingSkillPoints = document.querySelector("#remainingSkillPoints");
const bonusSkillsTable = document.querySelector("#bonusSkillsTable");

function renderSkillsTable(){
  bonusSkillsTable.innerHTML = "";

  const skillsList = Object.keys(skills);
  skillsList.forEach(skill => {
    const tr = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = skill;
    tr.appendChild(nameCell);

    const backgroundCell = document.createElement("td");
    backgroundCell.textContent = skills[skill].background;
    tr.appendChild(backgroundCell);

    const bonusCell = document.createElement("td");
    bonusCell.textContent = skills[skill].bonus;
    tr.appendChild(bonusCell);

    const totalCell = document.createElement("td");
    totalCell.textContent = skills[skill].total;
    tr.appendChild(totalCell);

    // Action buttons
    const actionCell = document.createElement("td");

    const addBtn = document.createElement("button");
    addBtn.textContent = "+";
    addBtn.onclick = () => changeSkillPoints(skill,+1);
    if (SkillPoints <=0 || skills[skill].bonus >=3 || skills[skill].total >= 5 ) addBtn.classList.add("disabled");

    const subBtn = document.createElement("button");
    subBtn.textContent = "-";
    subBtn.onclick = () => changeSkillPoints(skill,-1);
    if (skills[skill].bonus <=0) subBtn.classList.add("disabled");

    actionCell.appendChild(addBtn);
    actionCell.appendChild(subBtn);

    tr.appendChild(actionCell);


    // Add row
    bonusSkillsTable.appendChild(tr);

  });

  remainingSkillPoints.textContent = SkillPoints;

};

function changeSkillPoints(skill,delta){
  console.log(skill,delta);
  if (delta > 0 && SkillPoints > 0) {
    skills[skill].bonus += 1;
    SkillPoints -= 1;
  } else if  (delta < 0 && skills[skill].bonus > 0) {
    skills[skill].bonus -= 1;
    SkillPoints += 1;
  };
  updateAll();
};


const bonusSkillList = document.querySelector("#bonus-skill-list");

function renderSkillsTable_old(){

  const skillsList = Object.keys(skills);
  bonusSkillList.innerHTML = "";
  skillsList.forEach(skill => {
    const tr = document.createElement("p");

    tr.innerHTML = `<strong>${skill}</strong>: ${skills[skill].total}`;
    bonusSkillList.appendChild(tr)
  });

};

const summaryName = document.querySelector("#summary-name");
const summaryPlayer = document.querySelector("#summary-player");
const summaryConcept = document.querySelector("#summary-concept");
const summaryBackground = document.querySelector("#summary-background");
const summaryMark = document.querySelector("#summary-mark");
const summaryMarkLevel = document.querySelector("#summary-mark_level");

const summaryAttributesTable = document.querySelector("#summaryAttributesTable");

function updateSummary(){
    summaryName.innerHTML = `<strong>Name:</strong> ${character.name}`;
    summaryPlayer.innerHTML = `<strong>Player:</strong> ${character.player}`;
    summaryConcept.innerHTML = `<strong>Concept:</strong> ${character.concept}`;

    summaryBackground.innerHTML = `<strong>Background:</strong> ${character.background}`;
    summaryMark.innerHTML = `<strong>Mark:</strong> ${character.mark}`;
    summaryMarkLevel.innerHTML = `<strong>Mark Level:</strong> ${character.mark_level}`;

    const attributesList = Object.keys(attributes);

    summaryAttributesTable.innerHTML = "";
    attributesList.forEach(attribute => {
        const tr = document.createElement("tr");
        const att = attributes[attribute];

        tr.innerHTML = `
        <td>${attribute}</td>
        <td>${att.total}</td>
        `;
        summaryAttributesTable.appendChild(tr)
    });
};

// Initiate the Background Selector
const backgroundSelect = document.querySelector("#backgroundSelect");
function initBackgroundSelect(){
    backgroundSelect.innerHTML = "";

    const option = document.createElement('option');
    option.textContent = "Select Background";
    backgroundSelect.appendChild(option);

    const backgroundList = Object.keys(backgroundsData);
    // Loop the Backgrounds
    backgroundList.forEach( bg => {
        const option = document.createElement('option');
        option.value = bg;
        option.textContent = bg;
        backgroundSelect.appendChild(option);
    });
};

// Initiate the Mark Selector
const markSelect = document.querySelector("#markSelect");
function initMarkSelect(){
    markSelect.innerHTML = "";

    const option = document.createElement('option');
    option.textContent = "Select Mark";
    markSelect.appendChild(option);

    const marksList = Object.keys(marksData);
    // Loop the marks
    marksList.forEach( mark => {
        const option = document.createElement('option');
        option.value = mark;
        option.textContent = mark;
        markSelect.appendChild(option);
    });
};

// Initiate the Mark Selector
const bonusAttributesSelect = document.querySelector("#bonusAttributesSelect");
function initBonusSelect(){
    bonusAttributesSelect.innerHTML = "";

    const option = document.createElement('option');
    option.textContent = "Select Attribute";
    bonusAttributesSelect.appendChild(option);

    const attributesList = Object.keys(attributes);
    // Loop the marks
    attributesList.forEach( att => {
        const option = document.createElement('option');
        option.value = att;
        option.textContent = att;
        bonusAttributesSelect.appendChild(option);
    });
};

function updateAll(){
  updateAttributes();
  updateSkills();
  updateSummary();

  renderAttributesTable();
  renderSkillsTable();
  //renderSkillsTable2();
};


// Initiate
initBackgroundSelect();
initMarkSelect();
initBonusSelect();

updateAll();


// Events
const bgAttributesSelect1 = document.querySelector("#bgAttributesSelect1");
const bgAttributesSelect2 = document.querySelector("#bgAttributesSelect2");
const bgSkillsSelect      = document.querySelector("#bgSkillsSelect");

const markAttributesSelect = document.querySelector("#markAttributesSelect");
const markInfo = document.querySelector("#markInfo");

markSelect.addEventListener('change', () => {
    const selectedMark = markSelect.value;
    //console.log(selectedMark);
    character.mark = selectedMark;

    markAttributesSelect.innerHTML = "";
    const option = document.createElement('option');
    option.textContent = "Select attribute";
    markAttributesSelect.appendChild(option);

    const marksAttributesList = marksData[selectedMark].attributes;
    // Loop the marks attributes
    marksAttributesList.forEach( att => {
        const option = document.createElement('option');
        option.value = att;
        option.textContent = att;
        markAttributesSelect.appendChild(option);
    });

    markInfo.innerHTML = marksData[selectedMark].description;
    markInfo.innerHTML = `
    <strong>Description</strong>
    <p><i>
        ${marksData[selectedMark].description}
    </i></p>
    <ul>
        <li>Attribute increase: ${marksData[selectedMark].attributes}</li>
        <li>Talent: ${marksData[selectedMark].talent}</li>
        <li>Flaw: ${marksData[selectedMark].flaw}</li>
        <li>Physical traits:</li>
    </ul>
    `
    updateAll();
});

markAttributesSelect.addEventListener('change', () => {
  const selectedMarkAttribute = markAttributesSelect.value;

  const attributesList = Object.keys(attributes);

  attributesList.forEach( att => {
    if (att == selectedMarkAttribute) {
      attributes[att].mark = 1
    } else {
      attributes[att].mark = 0
    }
  });
  updateAll();
});

backgroundSelect.addEventListener('change', () => {
    const selectedBackground = backgroundSelect.value;

    character.background = selectedBackground;

    bgAttributesSelect1.innerHTML = "";
    bgAttributesSelect2.innerHTML = "";
    bgSkillsSelect.innerHTML = "";

    const option1 = document.createElement('option');
    option1.textContent = "Select attribute";
    bgAttributesSelect1.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = "Select attribute";
    bgAttributesSelect2.appendChild(option2);

    const option = document.createElement('option');
    option.textContent = "Select skill";
    bgSkillsSelect.appendChild(option);

    const backgroundsAttributesList = backgroundsData[selectedBackground].attributes;
    const backgroundsSkillsList = backgroundsData[selectedBackground].skills;
    // Loop the marks attributes
    backgroundsAttributesList.forEach( att => {
        const option = document.createElement('option');
        option.value = att;
        option.textContent = att;
        bgAttributesSelect1.appendChild(option);
    });

    backgroundsAttributesList.forEach( att => {
        const option = document.createElement('option');
        option.value = att;
        option.textContent = att;
        bgAttributesSelect2.appendChild(option);
    });

    backgroundsSkillsList.forEach( skill => {
        const option = document.createElement('option');
        option.value = skill;
        option.textContent = skill;
        bgSkillsSelect.appendChild(option);
    });

    updateAll();
});


bgAttributesSelect1.addEventListener('change', () => {
  const selectedBgAttribute = bgAttributesSelect1.value;

  const attributesList = Object.keys(attributes);

  attributesList.forEach( att => {
    if (attributes[att].background == 1) {
      attributes[att].background = 0
    }
    if (att == selectedBgAttribute) {
      attributes[att].background = 1
    }
  });
  updateAll();
});

bgAttributesSelect2.addEventListener('change', () => {
  const selectedBgAttribute = bgAttributesSelect2.value;

  const attributesList = Object.keys(attributes);

  attributesList.forEach( att => {
    if (attributes[att].background == 2) {
      attributes[att].background = 0
    }
    if (att == selectedBgAttribute) {
      attributes[att].background = 2
    }
  });
  updateAll();
});


bonusAttributesSelect.addEventListener('change', () => {
  const selectedBonusAttribute = bonusAttributesSelect.value;

  const attributesList = Object.keys(attributes);

  attributesList.forEach( att => {
    if (attributes[att].bonus == 1) {
      attributes[att].bonus = 0
    }
    if (att == selectedBonusAttribute) {
      attributes[att].bonus = 1
    }
  });
  updateAll();
});

bgSkillsSelect.addEventListener('change', () => {
  const selectedBackgroundSkill = bgSkillsSelect.value;

  const skillList = Object.keys(skills);

  skillList.forEach(skill => {
    if (skills[skill].background == 3) {
      skills[skill].background = 0;
    }
    if (skill == selectedBackgroundSkill) {
      skills[skill].background = 3;
    }
  });
  updateAll();
});

