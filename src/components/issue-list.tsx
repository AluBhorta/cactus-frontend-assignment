import React from "react";
import ReactMarkdown from "react-markdown";

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
            <h1>Issue List</h1>

            {data?.map((issue, i) => (
                <>
                    <div key={i}>
                        <h2>
                            <ReactMarkdown allowDangerousHtml>
                                {issue.title}
                            </ReactMarkdown>
                        </h2>
                        <ReactMarkdown allowDangerousHtml>
                            {issue.body}
                        </ReactMarkdown>

                        {issue.comments.map((comment, j) => (
                            <div key={j}>
                                <div>
                                    <pre>
                                        <div>
                                            {comment.created_at}{" "}
                                            {comment.user.login}:
                                        </div>
                                    </pre>
                                    <pre>
                                        <ReactMarkdown allowDangerousHtml>
                                            {comment.body}
                                        </ReactMarkdown>
                                    </pre>
                                </div>
                                <br/>
                            </div>
                        ))}

                        <hr />
                    </div>
                </>
            ))}
        </>
    );
};

export default IssueList;
