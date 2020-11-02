import React from "react";

import { useGithubIssueComments } from "../api/github-events.api";
import ErrorDetails from "./error-details";
import * as s from "../app.styles";

interface IssueListProps {
    user: string;
    repo: string;
}

const IssueList: React.FC<IssueListProps> = ({ user, repo }) => {
    const { data, isLoading, isError, error } = useGithubIssueComments(
        user,
        repo
    );
    
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isError) {
        return <ErrorDetails error={error} />;
    }

    return (
        <>
            <h1>IssueList</h1>

            {data?.map((issue) => (
                <div key={issue.id}>
                    <s.issuer_title>{issue.title}</s.issuer_title>
                    <pre>{issue.body}</pre>
                    {issue.comments.map((comment) => (
                        <s.comment_body key={comment.id}>
                            <div>
                                {comment.created_at} {comment.user.login}:
                            </div>
                            <pre>{comment.body}</pre>
                        </s.comment_body>
                    ))}
                </div>
            ))}
        </>
    );
};

export default IssueList;
