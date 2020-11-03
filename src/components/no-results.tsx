import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const NoResults: React.FC = () => {
    return (
        <>
            <Box margin="1rem">
                <Grid container justify="center">
                    <Grid item>
                        <div className="text-center mb">
                            <Typography variant="h2" color="secondary">
                                No Issues found...
                            </Typography>
                        </div>
                        <div className="text-center">
                            <Typography>
                                Enter <strong>user</strong> and{" "}
                                <strong>repo</strong>; then{" "}
                                <strong>GO FETCH</strong>!
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default NoResults;
