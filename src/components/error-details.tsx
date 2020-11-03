import { Typography } from "@material-ui/core";
import React from "react";

type ErrorDisplayProps = {
    error?: Error | null;
};

const ErrorDetails: React.FC<ErrorDisplayProps> = ({ error }) => (
    <div style={{ color: "red" }}>
        <Typography variant="h1">Oops, an error occurred</Typography>
        <Typography variant="h2">{error?.message}</Typography>
        <hr />
        <pre>{error?.stack}</pre>
    </div>
);

export default ErrorDetails;
