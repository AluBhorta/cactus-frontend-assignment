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
import { toMomentAgo } from "../util";

interface IssueItemProps {
    issue: GithubIssue;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
    return (
        <>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    style={{ backgroundColor: "#e0f2f1" }}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography
                                component={"span"}
                                variant="h2"
                                color="secondary"
                            >
                                <ReactMarkdown allowDangerousHtml>
                                    {issue.title}
                                </ReactMarkdown>
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography component={"span"}>
                                By <strong>{issue.user.login}</strong> |{" "}
                                {toMomentAgo(issue.created_at)}
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>

                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                component={"span"}
                                className="issue-body"
                                noWrap={false}
                            >
                                <ReactMarkdown allowDangerousHtml>
                                    {issue.body}
                                </ReactMarkdown>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3">Comments</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                {issue.comments.map((comment, j) => (
                                    <CommentItem comment={comment} key={j} />
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <br />
        </>
    );
};

export default IssueItem;
