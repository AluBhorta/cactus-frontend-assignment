import React, { useState } from "react";
import { Box, Container, Typography } from "@material-ui/core";

import IssueForm from "./components/issue-form";
import IssueList from "./components/issue-list";
import NoResults from "./components/no-results";


function App() {
    const [user, setUser] = useState("");
    const [repo, setRepo] = useState("");

    const handleGoFetch = (userInput: string, repoInput: string) => {
        setUser(userInput);
        setRepo(repoInput);
    };

    return (
        <>
            <Box marginTop="5vh">
                <Container maxWidth="md">
                    <div className="text-center mb">
                        <Typography variant="h1" color="secondary">
                            Search Github Issues
                        </Typography>
                    </div>

                    <IssueForm handleGoFetch={handleGoFetch} />

                    {user && repo ? (
                        <IssueList user={user} repo={repo} />
                    ) : (
                        <NoResults />
                    )}
                </Container>
            </Box>
        </>
    );
}

export default App;
