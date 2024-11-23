var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var EducationElement = document.getElementById('Education');
    var ExperienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('Skills');
    if (nameElement && emailElement && phoneElement && EducationElement && ExperienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var Phone = phoneElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var skill = skillsElement.value;
    }
    var resumeOutput = "\n    <h2> Editable Resume</h2>\n    <p><strong>Name:</strong><span contenteditable =\"true\">".concat(nameElement.value, "</span></p>\n    <p><strong>Email:</strong><span conteneditable = \"true\">").concat(emailElement.value, "</span></p>\n      <p><strong>Phone Number:</strong><span contenteditable = \"true\"").concat(phoneElement.value, "</span></p> \n        \n        <h3>Education</h3> \n        <p contenteditable = \"true\">").concat(EducationElement.value, "</p>\n        <p contenteditable = \"true\">").concat(ExperienceElement.value, "</p>\n        <p contenteditable = \"true\">").concat(skillsElement.value, "</p> ");
    var resumeOutputElement = document.getElementById('resume-display');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The Resume Output Elements Are Missing');
    }
});
