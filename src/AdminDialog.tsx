import {RuxButton, RuxDialog, RuxInput} from "@astrouxds/react";
import {useState, useRef} from "react";

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

    const [input, setInput] = useState(userInput)

    const handleChange = (e) => {
        console.log("here")
        const value = e.target.value;
        setInput({
            ...input,
            [e.target.name]: value
        });
        e.preventDefault();
    }
    const handleSubmit = () => {
        setUser(userInput.concat(input))

    };

    return (<RuxDialog open={open}>
            <span slot="header">Add User</span>
            <RuxInput label="name" type={"text"} placeholder="Enter Name" onChange = {handleChange} />
            <RuxInput label="email" type={"email"} placeholder="Enter Email" onChange = {handleChange} />
            <div slot="footer">
                <RuxButton>Test</RuxButton>
                <RuxButton className="cancel-button" onClick={() => setDialogOpen(false)}>Cancel</RuxButton>
                <RuxButton className="confirm-button" onClick = {handleSubmit}>Submit</RuxButton>
            </div>

    </RuxDialog>
    )}

export default adminDialog
