import React from 'react';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

const repoList = (props) =>
{
    const repoDataList = props.repoDataList == null ? null : props.repoDataList.map(data => 

        <MenuItem value = {data.full_name} key={data.id}>
            {data.name}
        </MenuItem>
    );
        
    return (
            <div>
                <InputLabel htmlFor="repo-list">Repo List</InputLabel>
                <span style={{paddingLeft:"10px"}}>
                    <Select id="repo-list" style={{minWidth: 230}}
                        value={props.selectedRepo} onChange={props.onChangeRepo}>
                        <MenuItem value = "">
                            None
                        </MenuItem>
                        {repoDataList}
                    </Select>
                </span>
            </div>
        );
    
}


export default repoList;