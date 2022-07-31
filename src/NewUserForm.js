

const NewUserForm = (props)=>{

    const submitHandler = (event)=>{
        const name = event.target.userName.value
        const age = event.target.age.value

        const user = {
            name: name,
            age: age
        }

        props.onAdd(user)
        event.preventDefault()
    }

    return (
        <div className="userForm">
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input type="text"name="userName"/>
                <label>Age (Years)</label>
                <input type="text" name="age"/>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}



export default NewUserForm;