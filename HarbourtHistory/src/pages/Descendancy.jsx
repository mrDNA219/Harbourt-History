import {useState, useEffect} from 'react';
import {createPerson, getAllPeople, getAllRelationships} from "../api";
//Design notes on Family Tree
//Static Harbourt Family Tree. Each person that is mentioned in a story should have a link to their position on the family tree. The link should appear only once and be clearly defined and positioned appropriately.
const Descendancy = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(0);
    const [gender, setGender] = useState('');
    const [allPeople, setAllPeople] = useState([]);
    const [allRelationships, setAllRelationships] = useState([]);

    async function getAllPeopleHelper() {
        const result = await getAllPeople();
        if(result){
            setAllPeople(result);
        }
    }

    async function getAllRelationshipsHelper() {
        const result = await getAllRelationships();
        if(result){
            setAllRelationships(result);
        }
    }

    // async function populateNames(allPeople){
    //     let firstPerson = '';
    //     let secondPerson = '';
    //     allRelationships.map(relationship => {
    //         for(let i = 0; i < allPeople.length; i++){
    //             let currentPerson = allPeople[i];
    //             if(currentPerson.id === relationship.personId){
    //                 firstPerson = `${currentPerson.firstName},${currentPerson.lastName}`
    //             } else if(currentPerson.id === relationship.relatedPersonId){
    //                 secondPerson = `${currentPerson.firstName},${currentPerson.lastName}`
    //             }
    //         }
    //     })
    //     return firstPerson, secondPerson;
    // }
    
    function findNames(relationship, allPeople){
        let firstPersonId = relationship.personId;
        let secondPersonId = relationship.relatedPersonId;
        let people = [];
        for(let i = 0; i < allPeople.length; i++){
            let currentPerson = allPeople[i]
            if(firstPersonId === currentPerson.id){
                people[0] = `${currentPerson.firstName} ${currentPerson.lastName}`
            } else if(secondPersonId === currentPerson.id){
                people[1] = `${currentPerson.firstName} ${currentPerson.lastName}`
            }
        }
        return people;
    }

    // let peopleToDisplay = allRelationships.map((relationship) => findNames(relationship, allPeople));
    
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
        getAllPeopleHelper(),
        getAllRelationshipsHelper()
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
                            {
                                allRelationships.map(relationship => {
                                    if(relationship.personId === person.id || relationship.relatedPersonId === person.id){
                                        let names = findNames(relationship, allPeople)
                                        return (
                                            <div key={relationship.id}>
                                                <h4>Relationship</h4>
                                                <p>{relationship.relationshipType} to:</p>
                                                <p>{names[0].includes(person.firstName) ? names[1] : names[0]}</p>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Descendancy;