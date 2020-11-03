import { Divider, ListItem, Typography, Box } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GithubComment } from "../api/github-events.model";

interface CommentItemProps {
    comment: GithubComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    return (
        <>
            <ListItem>
                <Box>
                    <div>
                        <Typography>
                            <div>
                                By <strong>{comment.user.login}</strong> |{" "}
                                {comment.created_at}
                            </div>
                        </Typography>
                        <Typography noWrap={false}>
                            <ReactMarkdown allowDangerousHtml>
                                {comment.body}
                            </ReactMarkdown>
                        </Typography>
                    </div>
                </Box>
            </ListItem>
            <Divider />
        </>
    );
};

export default CommentItem;
