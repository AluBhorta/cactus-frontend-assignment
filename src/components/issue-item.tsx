import React from "react";
import ReactMarkdown from "react-markdown";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    List,
    ListItem,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { GithubIssue } from "../api/github-events.model";
import CommentItem from "./comment-item";

interface IssueItemProps {
    issue: GithubIssue;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
    return (
        <>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h2" color="secondary">
                                <ReactMarkdown allowDangerousHtml>
                                    {issue.title}
                                </ReactMarkdown>
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography>
                                By <strong>{issue.user.login}</strong> |{" "}
                                {issue.created_at}
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>

                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Typography noWrap={false}>
                                <ReactMarkdown allowDangerousHtml>
                                    {issue.body}
                                </ReactMarkdown>
                            </Typography>
                        </ListItem>

                        <ListItem>
                            <Typography variant="h3">Comments</Typography>
                        </ListItem>

                        <ListItem>
                            <List>
                                {issue.comments.map((comment, j) => (
                                    <CommentItem comment={comment} key={j} />
                                ))}
                            </List>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>

            <br />
        </>
    );
};

export default IssueItem;
