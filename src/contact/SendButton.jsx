import React,{useContext} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { init, send } from '@emailjs/browser';
import { FormParam } from './Contact';

const SendButton = (props) => {
    //送信内容を取得
    const {from_name,from_email,message} = useContext(FormParam);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //メッセージ送信処理
    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        
        if(userID && serviceID && templateID) {
            init(userID);
        }else{
            console.log("送信失敗:必要な設定情報が不足しています。");
            return;
        }
        
        const params = {
            from_name: from_name,
            from_email:　from_email,
            message: message
        }
        
        try {
            await send(serviceID, templateID, params);
        } catch (error) {
            alert(error);
        }
        
        handleClose();
    }

  return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            送信確認
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"以下の内容で、送信してもよろしいですか？"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    お名前：{from_name}<br />
                    メールアドレス：{from_email}<br />
                    お問い合わせ内容：{message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>キャンセル</Button>
                <Button onClick={sendMessage} autoFocus>送信</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
};

export default SendButton;