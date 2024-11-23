document.getElementById('resume-form')?.addEventListener('submit' , function(event){
    event.preventDefault();

    const nameElement = document.getElementById('name')as HTMLInputElement
    const emailElement= document.getElementById('email')as HTMLInputElement
    const phoneElement = document.getElementById('phone')as HTMLInputElement
    const EducationElement = document.getElementById('Education')as HTMLInputElement
    const ExperienceElement = document.getElementById('Experience')as HTMLInputElement
    const skillsElement = document.getElementById('Skills')as HTMLInputElement



if(nameElement && emailElement && phoneElement  && EducationElement  && ExperienceElement  && skillsElement)
{
    const name = nameElement.value;
    const email = emailElement.value;
    const Phone = phoneElement.value;
    const Education = EducationElement.value;
    const Experience = ExperienceElement.value;
    const skill = skillsElement.value;
}






    const resumeOutput = `
    <h2> Editable Resume</h2>
    <p><strong>Name:</strong><span contenteditable ="true">${nameElement.value}</span></p>
    <p><strong>Email:</strong><span conteneditable = "true">${emailElement.value}</span></p>
      <p><strong>Phone Number:</strong><span contenteditable = "true"${phoneElement.value}</span></p> 
        
        <h3>Education</h3> 
        <p contenteditable = "true">${EducationElement.value}</p>
        <p contenteditable = "true">${ExperienceElement.value}</p>
        <p contenteditable = "true">${skillsElement.value}</p> `;

        const resumeOutputElement = document.getElementById('resume-display')
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput
        }
        else{
            console.error('The Resume Output Elements Are Missing')
        }
       
})
