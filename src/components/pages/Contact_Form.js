

function contactInfo() => {
    const handleSubmit = (e) => {
        e.preventDefault();
        return (
            <div>
                <form className = "form" onSubmit={handleSubmit}>
                    <div className = "formInput" >
                    <h2> Get in Touch </h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={input}
                        name="text"
                        onChange = {handleChange}
                    ></input>
                    <input
                    type = "text"
                    placeholder = "Email"
                    value = {input}
                    name = "text"
                    onChange = {handleChange}
                    ></input>
                    <input
                    type = "text"
                    placeholder = "Send a message"
                    value = {input}
                    name = "text"
                    

                    >
                    </input>
                

                </form>
            </div>
        )



}

// go back in and update className formatting (CSS)
// 