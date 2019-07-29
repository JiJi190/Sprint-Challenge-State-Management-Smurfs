import React from "react";



const SmurfForm = props => {

    const changeHandle = e => {
        e.preventDefault();
    }

    const handleAdd = e => {
        e.preventDefault();

        const newSmurf = {
            name: props.smurfs.name,
            age: props.smurfs.age,
            height: props.smurfs.height
        }

        addSmurf(newSmurf);

        this.setState({
            name: "",
            age: "",
            height: ""
        })
    }
    
    return(
        <div>
         <form onSubmit={handleAdd}>
            <input
            type="text"
            name="name"
            value={props.smurfs.name}
            onChange={changeHandle}
            />
            <input
            type="text"
            name="age"
            value={props.smurfs.age}
            onChange={changeHandle}
            />
            <input
            type="text"
            name="height"
            value={props.smurfs.height}
            onChange={changeHandle}
            />
            <button type="submit">Submit</button>
         </form>
        </div>
    )

      }

export default SmurfForm