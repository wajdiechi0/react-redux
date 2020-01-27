import React from 'react'
import {connect} from 'react-redux';
import './auth.css'
import {TextField, Button} from "@material-ui/core";
import {checkUserAuth} from './../../actions'
import Alert from './alert';
class Auth extends React.Component {

    state = {
        user: '',
        password: '',
        openAlert:false
    };

    CloseAlert=()=>{
        this.setState({
            openAlert:false
        })
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'inputBox'}>
                    <h3>Veuillez vous authentifier</h3>
                    <div className={'authInput'}>
                        <h5 style={{width: 100}}>Utilisateur</h5>
                        <TextField
                            label="Utilisateur"
                            type="password"
                            margin="dense"
                            variant="outlined"
                            style={{width: 'auto'}}
                            onChange={(event => this.setState({user: event.target.value}))}
                        />
                    </div>
                    <div className={'authInput'}>
                        <h5 style={{width: 100}}>Mot de passe</h5>
                        <TextField
                            label="Mot de passe"
                            type="password"
                            margin="dense"
                            variant="outlined"
                            onChange={(event => this.setState({password: event.target.value}))}
                        />
                    </div>
                    <Button variant="contained" color="primary" style={{marginLeft: 'auto'}}
                            onClick={()=>this.props.dispatch(checkUserAuth(this.state.user, this.state.password))}
                    >
                        Valider
                    </Button>
                </div>
                <Alert open={this.state.openAlert} close={this.CloseAlert}/>
            </div>

        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if((this.props.auth.authResult)&&(this.props!==prevProps)){
            this.props.navigate('/home');
        }else if((!this.props.auth.authResult)&&(this.props!==prevProps)){
            this.setState({
                openAlert:true
            })
        }
    }
}


function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Auth)
