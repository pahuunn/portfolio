import React, { useState } from 'react';
import SendButton from './SendButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import './Contact.css'

export const FormParam = React.createContext();

const Contact = (props) => {
    const [from_name, setName] = useState('');
    const [from_email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formValue = {from_name,from_email,message};
    
    return (
        <section>
            <h1>Contact</h1>
            <p>以下の問い合わせフォームより、ご連絡ください。</p>            
            <Grid container direction="column">
                <Grid item>
                    <TextField
                        required
                        id="required_naem"
                        label="お名前"
                        variant="standard"
                        margin="normal"
                        className="TextField"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="required_mail_address"
                        label="メールアドレス"
                        variant="standard"
                        margin="normal"
                        className="TextField"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="required_content"
                        label="お問い合わせ内容"
                        multiline
                        rows="4"
                        margin="normal"
                        className="TextField"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <FormParam.Provider value={formValue}>
                        <SendButton />
                    </FormParam.Provider>
                </Grid>
            </Grid>
        </section>
    );
};
export default Contact;