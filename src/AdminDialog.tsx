import {RuxButton, RuxDialog, RuxInput} from "@astrouxds/react";
import {useState} from "react";
import "./css/Admin.css";

type User = {
    id: string;
    name: string;
    email: string;
}

type Props = {
    open: boolean;
    setDialogOpen: (open: boolean) => void;
    setUser: (newuser: Array<User>) => void;
    userInput: Array<User>;
}

const adminDialog = ({open, setDialogOpen, setUser, userInput}: Props) => {

    const [input, setInput] = useState({id: String(Math.random()*100000), name: "", email: ""})

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.id]: e.target.value
        });
        e.preventDefault();
    }
    const handleSubmit = () => {
        setUser(userInput.concat(input))
        setDialogOpen(false)
        setInput({id: String(Math.floor(Math.random()*100000)), name: "", email: ""})
    };

    return (<RuxDialog open={open} >
            <span slot="header">Add User</span>
            <form onSubmit={handleSubmit}>
            <RuxInput id="name" label="Name" type={"text"}  placeholder="Enter Name" onInput = {handleChange} />
            <RuxInput id="email" label="Email" type={"email"} placeholder="Enter Email" onInput = {handleChange} />
            <div slot="footer">
                <RuxButton style={{padding: "2%"}} className="cancel-button" onClick={() => setDialogOpen(false)}>Cancel</RuxButton>
                <RuxButton style={{padding: "2%"}} className="confirm-button" onClick = {handleSubmit}>Submit</RuxButton>
            </div>
            </form>
    </RuxDialog>
    )}

export default adminDialog
