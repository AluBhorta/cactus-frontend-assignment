import {
    Card,
    CardContent,
    CircularProgress,
    Typography,
} from "@material-ui/core";
import React from "react";

import { useGithubIssueComments } from "../api/github-events.api";
import ErrorDetails from "./error-details";
import IssueItem from "./issue-item";

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
        return (
            <div className="text-center mt">
                <CircularProgress />
            </div>
        );
    }

    if (isError) {
        return <ErrorDetails error={error} />;
    }

    return (
        <>
            <br />
            <Card>
                <CardContent>
                    <div className="text-center mb">
                        <Typography variant="h1">Issues</Typography>
                    </div>
                    {data?.map((issue, i) => (
                        <IssueItem issue={issue} key={i} />
                    ))}
                </CardContent>
            </Card>
        </>
    );
};

export default IssueList;
