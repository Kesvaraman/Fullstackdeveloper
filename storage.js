function checkCheckbox(){
        const nameEl = document.querySelector('.name').value;
        const emailEl = document.querySelector('.email').value;
        const passwordEl = document.querySelector('.password').value;

        const genderEls = document.querySelectorAll('.gender');
        let genderEl = '';
        genderEls.forEach(function (el) {
            if (el.checked) {
                  genderEl = el.value;
               }
        });


        let yourInterestEls = document.querySelectorAll('input[type="checkbox"]:checked');
        let interest=[];

        yourInterestEls.forEach(function(checkbox){
                interest.push(checkbox.value);
        })


        const contactNoEl = document.querySelector('.mobileNo').value;
        const stateEl = document.querySelector('.state').value;


        const aboutYourselfEl = document.querySelector('#description').value;

        const errorEl=document.getElementById('error');
        errorEl.innerHTML=(!nameEl || !emailEl || !passwordEl )? 'You have not entered required details.': '';

        if (nameEl && emailEl && passwordEl) {
                const tableElement = document.getElementById('table');
                const tbodyElement = document.createElement('tbody');
                const trElement = document.createElement('tr');
                const nameElement = document.createElement('td');
                const emailElement = document.createElement('td');
                const passwordElement = document.createElement('td');
                const genderElement = document.createElement('td');
                const interestElement = document.createElement('td');
                const contactElement = document.createElement('td');
                const stateElement = document.createElement('td');
                
                const aboutElement = document.createElement('td');



                nameElement.innerHTML = nameEl;
                emailElement.innerHTML = emailEl;
                passwordElement.innerHTML = passwordEl;
                genderElement.innerHTML = genderEl;
                interestElement.innerHTML = interest.split().join(", ");
                contactElement.innerHTML = contactNoEl;
                stateElement.innerHTML = stateEl;
                
                aboutElement.innerHTML = aboutYourselfEl;
        

                trElement.appendChild(nameElement);
                trElement.appendChild(emailElement);
                trElement.appendChild(passwordElement);
                trElement.appendChild(genderElement);
                trElement.appendChild(interestElement);
                trElement.appendChild(contactElement);
                trElement.appendChild(stateElement);

                
                trElement.appendChild(aboutElement);
        
                tbodyElement.appendChild(trElement);
                tableElement.appendChild(tbodyElement);


                document.querySelector('.name').value = "";
                document.querySelector('.email').value = "";
                document.querySelector('.password').value = "";

                genderEls.forEach(function (el) {
                    el.checked = false;
                });

                yourInterestEls.forEach(function (el) {
                    el.checked = false;
                });

                document.querySelector('.mobileNo').value = "";
                document.querySelector('.state').value = "";
                
                document.querySelector('#description').value = "";

    }

    
}