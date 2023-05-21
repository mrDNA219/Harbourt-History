const Descendancy = () => {
    return (
        <div>
            <h1 className="align-items-center">Family Tree</h1>
            <input placeholder="this is where you will enter family member info"></input>
            <input placeholder="enter birthdate"></input>
            <input placeholder="generation"></input>
            <input placeholder="birth place"></input>
            <input placeholder="first name"></input>
            <input placeholder="last name"></input>
            <input placeholder="middle name"></input>
            <input placeholder="gender"></input>
            <button>add person</button>
            <button onClick={() => {
                <alert></alert>
            }}>add relationship</button>
        </div>
    )
}

export default Descendancy;