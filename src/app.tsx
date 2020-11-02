import React, { useState } from "react";
import * as s from "./app.styles";
import IssueForm from "./components/issue-form";
import IssueList from "./components/issue-list";

function App() {
    const [user, setUser] = useState("");
    const [repo, setRepo] = useState("");

    const handleGoFetch = (userInput: string, repoInput: string) => {
        setUser(userInput);
        setRepo(repoInput);
    };

    return (
        <s.container>
            <s.header>Github Issues and Comments</s.header>

            <IssueForm handleGoFetch={handleGoFetch} />

            {user && repo ? (
                <IssueList user={user} repo={repo} />
            ) : (
                <>
                    <h2>No Input found</h2>
                    <p>Enter repo and user; then `Go Fetch`!</p>
                </>
            )}
        </s.container>
    );
}

export default App;
