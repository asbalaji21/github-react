import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './RepoDetailComponent.css';
import Divider from '@material-ui/core/Divider';

const repoDetail = (props) =>
{
    return (

        <div>
            <Card className="card">
                <CardContent className="cardContent">
                    <div className="padBottom">
                        <Typography className="center-text" color="textSecondary" variant="subheading">
                            {props.repoDetails.name}
                        </Typography>
                        <Divider variant="fullWidth" />
                    </div>
                    <div className="padBottom">
                        <Typography>
                            Description:
                        </Typography>
                        <Typography color="textSecondary" variant="caption">
                            {props.repoDetails.description}
                        </Typography>
                        <Divider variant="fullWidth" />
                    </div>
                    <div className="padBottom">
                        <Typography>
                            Default Branch:
                        </Typography>
                        <Typography color="textSecondary" variant="caption">
                            {props.repoDetails.defaultBranch}
                        </Typography>
                        <Divider variant="fullWidth" />
                    </div>
                    <div className="padBottom">
                        <Typography>
                            Created at:
                        </Typography>
                        <Typography color="textSecondary" variant="caption">
                            {props.repoDetails.createdAt}
                        </Typography>
                        <Divider variant="fullWidth" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default repoDetail;