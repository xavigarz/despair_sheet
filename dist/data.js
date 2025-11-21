console.log("Data loaded");

const marksData = {
  "Destruction": {
    "description": "You feel the fire of hell burning inside you.",
    "attributes": ["Physical", "Reflexes"],
    "flaw": "Pyromania",
    "flaw_desc": "",
    "talent": "Cauterise",
    "talent_desc": "",
    "traits": {1: "", 2: ""}
  },
  "Corruption": {
    "description": "B.",
    "attributes": ["Physical", "Body"],
    "flaw": "Plague bearer",
    "talent": "Decay"
  },
  "Oblivion": {
    "description": "Touched from beyond",
    "attributes": ["Mind", "Reflexes"],
    "flaw": "Haunted",
    "talent": "Intangibility"
  },
  "Rage": {
    "description": "Feral instincts",
    "attributes": ["Physical", "Reflexes"],
    "flaw": "Incontrolable",
    "talent": "Carnage"
  },
  "Temptation": {
    "description": "Twisted mind",
    "attributes": ["Reflexes", "Social"],
    "talent": "Devotion",
    "flaw": "Egomaniac"
  },
  "Aberration": {
    "description": "Twisted mind",
    "attributes": ["Mind", "Social"],
    "talent": "Mental force",
    "flaw": "Mental confusion"
  },
  "Hunger": {
    "description": "Insatiable",
    "attributes": ["Reflexes ", "Social"],
    "talent": "Blood hunt",
    "flaw": "Blood thirst"
  },
  "Shadows": {
    "description": "You are one with the night.",
    "attributes": ["Body", "Mind"],
    "talent": "Shadow play",
    "flaw": "Photophobia"
  }
};

const backgroundsData = {
    "Artisan" : {
        "description": "You joined as an apprentice of a local artisan, maybe a baker or a smith or a glassblower. You managed to achieve the level of. Apprentice - Journeyman - The Master",
        "attributes": ["Physical", "Mind"],
        "skills": ["Crafts","Arts","Athletics"],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Scholar" : {
        "description": "A",
        "attributes": ["Reflexes", "Mind"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Noble" : {
        "description": "A",
        "attributes": ["Social", "Mind"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Artist" : {
        "description": "A",
        "attributes": ["Social", "Reflexes"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Traveller" : {
        "description": "A",
        "attributes": ["Social", "Body"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Worker" : {
        "description": "A",
        "attributes": ["Physical", "Body"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Criminal" : {
        "description": "A",
        "attributes": ["Physical", "Reflexes"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Low life" : {
        "description": "A",
        "attributes": ["Reflexes", "Body"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    },
    "Soldier" : {
        "description": "A",
        "attributes": ["Physical", "Body"],
        "skills": ["","",""],
        "feat" : "",
        "talent": "",
        "resources": "",
        "equipement" : ""
    }

};