import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    slash: {
        fontSize: "2rem",
    },
});

interface IssueFormProps {
    handleGoFetch: (userInput: string, repoInput: string) => void;
}

const IssueForm: React.FC<IssueFormProps> = ({ handleGoFetch }) => {
    const [userInput, setUserInput] = useState("");
    const [repoInput, setRepoInput] = useState("");

    const classes = useStyles();

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
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
            <Card>
                <CardContent>
                    <form>
                        <Grid
                            container
                            alignItems="center"
                            justify="center"
                            spacing={3}
                        >
                            <Grid item>
                                <TextField
                                    label="User"
                                    variant="outlined"
                                    value={userInput}
                                    onChange={(e) =>
                                        setUserInput(e.target.value)
                                    }
                                    placeholder="Enter Github user..."
                                    size="small"
                                    required
                                    aria-required
                                />
                            </Grid>

                            <Grid item>
                                <span className={classes.slash}>/</span>
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="Repo"
                                    variant="outlined"
                                    placeholder="Enter Github repo..."
                                    value={repoInput}
                                    onChange={(e) =>
                                        setRepoInput(e.target.value)
                                    }
                                    size="small"
                                    required
                                    aria-required
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) => handleSubmit(e)}
                                    size="large"
                                >
                                    Go Fetch
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default IssueForm;
