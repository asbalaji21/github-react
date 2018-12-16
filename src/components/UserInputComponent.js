import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

import './UserInputComponent.css';

const userInput = (props) => {

    const noRepoError = !props.noRepoForUserName ? null :<div style={{color:"salmon"}}>No Repository available for the user</div>
    return (
    <div>
        <span>
            <TextField onBlur={props.onNameChange} placeholder="User Name" label=" "/>
        </span>
        <span style={{paddingLeft:"10px"}}>
        <Fab onClick={props.onGetReposClick} variant="extended" aria-label="Delete">
        Get Repos
        </Fab>
        </span>
        {noRepoError}
    </div>
    );
}

export default userInput;