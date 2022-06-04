// instructor demo on May 21 video time: 2:21:40
// need to install npm Node Package Manager
// node day 2 time spot 1:37

// What is the question I am trying to answer?

// node index.js is run
// 1) program sends out a greeting message - console.log...
// 2) npm-run-reset will reset the dist/ folder
// 3) the program first asks for the managers name and starts running the manager class
// 4) the queston functionality runs like the readme generator project
// 5) for the classes, the employee class is the parent class, the other classes (manager, engineer, intern) are child classes

// need inquirer package for questions
const inquirer = require('inquirer');
// need File System library to use writeFileSync
const fs = require('fs');

// need to import the classes from the lib/ folder
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// this is an array that will store all the Employee objects created
const thePeopleWhoWorkHere = [];

// function for the manager entry
let manager = () => {
    inquirer.prompt([
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
            type: 'input',
            name: 'officenumber',
            message: 'What is the manager\'s office number?',
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'What is the role of the next employee?',
            choices: ['Engineer', 'Intern'],
        },
    ]).then(ans => {
        // the code below creates an object with the Manager class
        let manager = new Manager(ans.Managername, ans.identification, ans.emailaddress, ans.officenumber);
        console.log("The manager's info entered is: ", manager);
        // adding the new manager to the array
        thePeopleWhoWorkHere.push(manager);
        console.log("thePeopleWhoWorkHere ", thePeopleWhoWorkHere);
        // the code below runs the addNewEmployee() function to add
        // additional engineers and interns
        if (ans.nextEmployee === 'Engineer') {
            engineer();
            // .then(engAns => {
            //     if (engAns.addNewEmployee == 'Yes') {
            //         addNewEmployee();
            //     }
            // });
        }
        if (ans.nextEmployee === 'Intern') {
            intern();
            // .then(intAns => {
            //     if (intAns.addNewEmployee == 'Yes') {
            //         addNewEmployee();
            //     }
            // });
        }
    });

};

// function for engineer entries
let engineer = () => {
    inquirer.prompt([
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
            type: 'input',
            name: 'Engineergithub',
            message: 'What is this person\'s GitHub username?',
        },
        {
            type: 'list',
            name: 'addNewEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'],
        },
    ]).then(eresponse => {
        let engineer = new Engineer(eresponse.Engineername, eresponse.Engineeridentification, eresponse.Engineeremailaddress, eresponse.Engineergithub);
        console.log("The engineer's info entered is: ", engineer);
        thePeopleWhoWorkHere.push(engineer);
        console.log("thePeopleWhoWorkHere ", thePeopleWhoWorkHere);
        if (eresponse.addNewEmployee == 'Yes') {
            addNewEmployee();
        }
        if (eresponse.addNewEmployee == 'No') {
            console.log("run the function to create HTML.");
            // The thePeopleWhoWorkHere[] array needs to be passed 
            // into the function as it is called.
            generateHTML(thePeopleWhoWorkHere);
        }
    });
};

// function for intern entries
let intern = () => {
    inquirer.prompt([
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
    ]).then(iresponse => {
        let intern = new Intern(iresponse.internname, iresponse.internidentification, iresponse.internemailaddress, iresponse.school);
        console.log("The intern's info entered is: ", intern);
        thePeopleWhoWorkHere.push(intern);
        console.log("thePeopleWhoWorkHere ", thePeopleWhoWorkHere);
        if (iresponse.addNewEmployee == 'Yes') {
            addNewEmployee();
        }
        if (iresponse.addNewEmployee == 'No') {
            console.log("run the function to create HTML.");
            // The thePeopleWhoWorkHere[] array needs to be passed 
            // into the function as it is called.
            generateHTML(thePeopleWhoWorkHere);
        }
    });
};

// this function runs until the user is done adding entries
let addNewEmployee = () => {
    inquirer.prompt({
        type: 'list',
        name: 'nextEmployee',
        message: 'What is the role of the next employee?',
        choices: ['Intern', 'Engineer'],
    },
).then(newEmpAns => {
    if (newEmpAns.nextEmployee === 'Engineer') {
        engineer();
    }
    if (newEmpAns.nextEmployee === 'Intern') {
        intern();
    }
});
}

// run the manager function to start the program
manager();




// function to write to HTML file
// this function can be put into another file later
function generateHTML() { 

// an empty string that will store all the employee cards generated.
let employeeTemplate = "";

for (let index = 0; index < thePeopleWhoWorkHere.length; index++) {
    switch (thePeopleWhoWorkHere[index].getRole()) {
        case "Manager":
            otherInfo = thePeopleWhoWorkHere[index].getOfficeNumber();
            break;
        case "Engineer":
            otherInfo = thePeopleWhoWorkHere[index].getGithub();
            break;
        case "Intern":
            otherInfo = thePeopleWhoWorkHere[index].getSchool();
            break;
    };

// the employee card template
employeeTemplate = employeeTemplate + `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <p class="card-text">${thePeopleWhoWorkHere[index].getRole()}</p>
                    <p class="card-text">${thePeopleWhoWorkHere[index].getName()}</p>
                    <p class="card-text">${thePeopleWhoWorkHere[index].getId()}</p>
                    <p class="card-text">${thePeopleWhoWorkHere[index].getEmail()}</p>
                    <p class="card-text">${otherInfo}</p>
                    </div>
                </div>
`
};

const htmlDoc = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>

    <header>
        <div>
        <h1>Base HTML template page</h1>
        </div>
    </header>

    <main>

        <section>
            ${employeeTemplate}
        </section>

    </main>
    
</body>
</html>
`
// writing the HTML string to the HTML file.
fs.writeFileSync('./dist/index.html', htmlDoc);
console.log('Successfully wrote to index.html');
};