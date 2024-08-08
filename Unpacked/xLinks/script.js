        time = new Date().getHours();
        nameID = document.getElementById("name");
        input = document.getElementById("usr_input");

        function updateGreeting() {
            if (time >= 12 && time < 18) {
                document.getElementById('greeting').innerHTML = "Good Afternoon, ";
            } else if (time < 12) {
                document.getElementById('greeting').innerHTML = "Good Morning, ";
            } else {
                document.getElementById('greeting').innerHTML = "Good Evening, ";
            }
        }

        document.getElementById('cu').addEventListener('click', nameChange);

        function getName() {
            let person = localStorage.getItem('person');
            if (person === null || person.trim() === '') {
                person = input.value.trim();
                if (person !== '') {
                    localStorage.setItem('person', person);
                }
            }
            return person;
        }

        function nameChange() {
            let newPerson = input.value.trim();
            if (newPerson !== '') {
                localStorage.setItem('person', newPerson);
                nameID.innerHTML = 'Successful';
                document.getElementById('greeting').innerHTML = 'Change ';
                setTimeout(() => {
                    updateGreeting();
                    nameID.innerHTML = newPerson;
                }, 5000);
            } else {
                let person = getName();
                if (person && person !== '') {
                    nameID.innerHTML = person;
                } else {
                    nameID.innerHTML = 'User';
                }
                updateGreeting();
            }
        }

        function displayStoredName() {
            let person = getName();
            if (person && person !== '') {
                nameID.innerHTML = person;
            } else {
                nameID.innerHTML = 'User';
            }
            updateGreeting();
        }
        displayStoredName();	
