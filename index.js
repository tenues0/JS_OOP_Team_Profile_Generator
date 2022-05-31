// instructor demo on May 21 video time: 2:21:40
// need to install npm Node Package Manager
// node day 2 time spot 1:37

// node index.js is run
// 1) program sends out a greeting message
// 2) npm-run-reset will reset the dist/ folder
// 3) the program first asks for the managers name and starts running the manager class
// 4) the queston functionality runs like the readme generator project
// 5) for the classes, the employee class is the parent class, the other classes (manager, engineer, intern) are child classes

// need inquirer package for questions
const inquirer = require('inquirer');
// need File System library to use writeFileSync
const fs = require('fs');

// need to import the classes from the lib/ folder
const employeeImport = require('./lib/employee');
const managerImport = require('./lib/manager');
const engineerImport = require('./lib/engineer');
const internImport = require('./lib/intern');
const Manager = require('./lib/manager');

// the manager questions need to appear first,
// after that the questions will be based on the next
// role the user wants to add to the teamlist.

// want the questions to populate the fields contained 
// within the objects.

const manager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Managername',  // the varible from one of the classes
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'identification',
            message: 'What is this person\'s id?',
        },
        {
            type: 'input',
            name: 'emailaddress',
            message: 'What is this person\'s email?',
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'What is the role of the next employee?',
            choices: ['Intern', 'Engineer'],
        },
    ]);

};

// function for engineer entries
const engineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Engineername',
            message: 'What is the name of the engineer?',
        },
        {
            type: 'input',
            name: 'Engineeridentification',
            message: 'What is this person\'s id?',
        },
        {
            type: 'input',
            name: 'Engineeremailaddress',
            message: 'What is this person\'s email?',
        },
        {
            type: 'list',
            name: 'addNewEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'],
        },
    ]);
};

// function for intern entries
const intern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What is the name of the intern?',
        },
        {
            type: 'input',
            name: 'internidentification',
            message: 'What is this person\'s id?',
        },
        {
            type: 'input',
            name: 'internemailaddress',
            message: 'What is this person\'s email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where does the intern go to school?',
        },
        {
            type: 'list',
            name: 'addNewEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'],
        },
    ]);
};

const addNewEmployee = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'nextEmployee',
        message: 'What is the role of the next employee?',
        choices: ['Intern', 'Engineer'],
    },
).then(newEmpAns => {
    if (newEmpAns.nextEmployee === 'Engineer') {
        engineer().then(engAns => {
            if (engAns.addNewEmployee === 'Yes') {
                addNewEmployee();
            }
        });
    }
    if (newEmpAns.nextEmployee === 'Intern') {
        intern().then(intAns => {
            if (intAns.addNewEmployee === 'Yes') {
                addNewEmployee();
            }
        });
    }
});
};

// function is only used once
manager().then(ans => {
    if (ans.nextEmployee === 'Engineer') {
        engineer().then(engAns => {
            if (engAns.addNewEmployee == 'Yes') {
                addNewEmployee();
            }
        });
    }
    if (ans.nextEmployee === 'Intern') {
        intern().then(intAns => {
            if (intAns.addNewEmployee == 'Yes') {
                addNewEmployee();
            }
        });
    }
})