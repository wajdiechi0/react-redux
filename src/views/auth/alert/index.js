import React from 'react';
import './alert.css';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Close from '@material-ui/icons/Close';
import Error from '@material-ui/icons/Error';

export default function AlertComponent(props) {
    return <div>
        <Dialog
            open={props.open}
            onClose={props.close}
        >
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Error style={{color: 'red', marginLeft: 10}}/>
                <h5 style={{marginLeft: 10, marginRight: 10, color: 'red'}}>
                    veuillez vérifier vos entrées et réessayer
                </h5>
                <IconButton onClick={props.close}>
                    <Close/>
                </IconButton>
            </div>
        </Dialog>
    </div>

}
