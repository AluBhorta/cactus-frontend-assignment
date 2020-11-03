import { ListItem, Typography, Box } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";

import { GithubComment } from "../api/github-events.model";
import { toMomentAgo } from "../util";

interface CommentItemProps {
    comment: GithubComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    return (
        <>
            <ListItem alignItems="center" style={{ width: "80%" }}>
                <Box
                    p={2}
                    style={{
                        backgroundColor: "#ecf1f0",
                        borderRadius: "4px",
                        width: "100%",
                    }}
                >
                    <div>
                        <Typography component={"span"}>
                            <div>
                                By <strong>{comment.user.login}</strong> |{" "}
                                {toMomentAgo(comment.created_at)}
                            </div>
                        </Typography>

                        <Typography component={"span"} noWrap={false}>
                            <ReactMarkdown allowDangerousHtml>
                                {comment.body}
                            </ReactMarkdown>
                        </Typography>
                    </div>
                </Box>
            </ListItem>
        </>
    );
};

export default CommentItem;
