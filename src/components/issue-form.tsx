import React, { useState } from "react";

interface IssueFormProps {
    handleGoFetch: (userInput: string, repoInput: string) => void;
}

const IssueForm: React.FC<IssueFormProps> = ({ handleGoFetch }) => {
    const [userInput, setUserInput] = useState("");
    const [repoInput, setRepoInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userInput && repoInput) {
            handleGoFetch(userInput, repoInput);
            clearFields();
        }
    };

    const clearFields = () => {
        setUserInput("");
        setRepoInput("");
    };

    return (
        <>
            <h1>Issue Form</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="user"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="repo"
                    value={repoInput}
                    onChange={(e) => setRepoInput(e.target.value)}
                />
                <input type="submit" value="Go Fetch" />
            </form>
        </>
    );
};

export default IssueForm;
