// import ejs 
const ejs = require('ejs');


// read data from data/data.json and render using ejs template and output them in a html file
const fs = require('fs');

const data = {};
const user = fs.readFileSync('data/user.json', 'utf8');
data.user = JSON.parse(user);
const about = fs.readFileSync('data/about.json', 'utf8');
data.about = JSON.parse(about);
const skills = fs.readFileSync('data/skills.json', 'utf8');
data.skills = JSON.parse(skills);
const education = fs.readFileSync('data/education.json', 'utf8');
data.education = JSON.parse(education);
const achievements = fs.readFileSync('data/achievements.json', 'utf8');
data.achievements = JSON.parse(achievements);
const experiences = fs.readFileSync('data/experiences2.json', 'utf8');
data.experiences = JSON.parse(experiences);
const projects = fs.readFileSync('data/projects.json', 'utf8');
data.projects = JSON.parse(projects);
const researches = fs.readFileSync('data/researches.json', 'utf8');
data.researches = JSON.parse(researches);
try{
    const template = fs.readFileSync('templates/index.ejs', 'utf8');
    const html = ejs.render(template, data);
    fs.writeFileSync('index.html', html);
}catch(err){
    console.log(err);
}

