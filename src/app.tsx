import React, { useState } from "react";
import { Container } from "@material-ui/core";

import IssueForm from "./components/issue-form";
import IssueList from "./components/issue-list";

import "./styles/index.css";

function App() {
    const [user, setUser] = useState("");
    const [repo, setRepo] = useState("");

    const handleGoFetch = (userInput: string, repoInput: string) => {
        setUser(userInput);
        setRepo(repoInput);
    };

    return (
        <>
            <Container maxWidth="md">
                <h1>Github Issues and Comments</h1>

                <IssueForm handleGoFetch={handleGoFetch} />

                {user && repo ? (
                    <IssueList user={user} repo={repo} />
                ) : (
                    <>
                        <h2>No Input found</h2>
                        <p>Enter repo and user; then `Go Fetch`!</p>
                    </>
                )}
            </Container>
        </>
    );
}

export default App;
