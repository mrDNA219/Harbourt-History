import {useState, useEffect} from 'react';
import {createPerson, getAllPeople} from "../api";

const Descendancy = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(0);
    const [gender, setGender] = useState('');
    const [allPeople, setAllPeople] = useState([]);

    async function getAllPeopleHelper() {
        const result = await getAllPeople();
        if(result){
            setAllPeople(result);
        }
    }

    

    async function handleSubmit(){
        const newPerson = {};
        if(firstName.length){
            newPerson.firstName = firstName;
        }
        if(lastName.length){
            newPerson.lastName = lastName;
        }
        if(birthDate.length){
            newPerson.birthDate = birthDate;
        }
        if(gender.length){
            newPerson.gender = gender;
        }
        await createPerson(newPerson);
    }

    useEffect(() => {
        getAllPeopleHelper();
    }, []);
    return (
        <div>
            <h1 className="align-items-center">Create New Person</h1>
            <input placeholder="first name" onChange={e => setFirstName(e.target.value)}></input>
            <input placeholder="last name" onChange={e => setLastName(e.target.value)}></input>
            <input placeholder="birth date (0000-00-00)" onChange={e => setBirthDate(e.target.value)}></input>
            <input placeholder="gender" onChange={e => setGender(e.target.value)}></input>
            <button onClick={e => {
                e.preventDefault();
                handleSubmit();
                getAllPeopleHelper();
            }}>add person</button>
            <h1>LIST OF ALL PEOPLE</h1>
            {
                allPeople.map(person => {
                    return (
                        <div key={person.id}>
                            <h1>{person.id}</h1>
                            <p>{person.firstName}</p>
                            <p>{person.lastName}</p>
                            <p>{person.birthDate}</p>
                            <p>{person.gender}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Descendancy;