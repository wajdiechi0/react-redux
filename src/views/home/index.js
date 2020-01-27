import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel
} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';
import {getUsersDetails} from "../../actions";

class Home extends React.Component {

    state = {
        loading: true,
        details: '',
        selected: -1
    };

    render() {
        return (
            <div>
                {
                    (!this.state.loading) ?
                        <div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
                            <h2>Liste des clients</h2>
                            <Paper style={{width: 500}}>
                                <div>
                                    <Table>
                                        <TableHead >
                                            <TableRow
                                                style={{
                                                    backgroundColor: "#f5f5f5"
                                                }}
                                            >
                                                <TableCell> </TableCell>
                                                <TableCell align={'center'}><h4>Nom</h4></TableCell>
                                                <TableCell align={'center'}><h4>Prenom</h4></TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                    <div style={{overflow: 'auto', height: '225px'}}>
                                        <RadioGroup name="user" value={this.state.selected}>
                                            <Table>
                                                <TableBody>
                                                    {this.props.usersReducer.userList.map((val, i) => {
                                                        return (
                                                            <TableRow
                                                                style={{backgroundColor: this.state.selected === i ? '#b5fff0' : ''}}
                                                                key={i} hover={true} onClick={() => {
                                                                this.setState({
                                                                    details: 'Adresse : ' + val.address.suite + ', ' + val.address.street + '\n        ' + val.address.zipcode + ' ' + val.address.city,
                                                                    selected: i
                                                                })
                                                            }}>
                                                                <TableCell>
                                                                    <FormControlLabel value={i}
                                                                                      control={<Radio/>}/>
                                                                </TableCell>
                                                                <TableCell
                                                                    align={'left'}>{val.name.split(' ')[0]}</TableCell>
                                                                <TableCell
                                                                    align={'left'}>{val.name.split(' ')[1]}</TableCell>
                                                            </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </RadioGroup>

                                    </div>
                                </div>
                            </Paper>
                            {
                                (this.state.details !== '') ?
                                    <TextField
                                        color={'red'}
                                        label="Détails"
                                        multiline
                                        rows="4"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.details}
                                        style={{width: 500}}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    /> : ''
                            }

                        </div>

                        :
                        <div className={'loadingdsaads'} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh'
                        }}>
                            <CircularProgress/>
                        </div>
                }
            </div>

        )
    }

    componentDidMount() {
        this.props.dispatch(getUsersDetails());
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.usersReducer.userList)&&(this.props!==prevProps)) {
            this.setState({
                loading: false
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        usersReducer: state.usersReducer
    }
}

export default connect(mapStateToProps)(Home)

