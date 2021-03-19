/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 75,
        maxHeight: 50
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
    },
    content: {
        flex: '1 0 auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
    },
    title: {
        fontSize: 12,
        overflow: 'auto'
    },
    addIcon: {
        height: 12,
        width: 12,
    },
}));


function saveTag(tagName) {
    let tagArray = [];
    chrome.storage.local.get({ tags: [] }, function (result) {
        var tags = result.tag;
        if (typeof tags === "undefined") {
            tagArray.push(tagName);
            chrome.storage.local.set({ tags: tagArray }, function () {
                console.log('Value is set to ' + tagArray);
            });
        } else {
            let tempArray = [...tags];
            tempArray.push(tagName)
            chrome.storage.local.set({ tags: tempArray }, function () {
                console.log('2 Value is set to ' + tempArray);
                tempArray.map(e => console.log(e))
            });
        }
    })

}

export default function TaggedCards(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardContent>


                <Typography className={classes.title} color="textSecondary">
                    {props.tagName}
                    {/* Pass in props here */}
                </Typography>


            </CardContent>

        </Card>
    );
}