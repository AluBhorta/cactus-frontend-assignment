import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const NoResults: React.FC = () => {
    return (
        <>
            <Box margin="1rem">
                <Grid container justify="center">
                    <Grid item>
                        <div className="text-center">
                            <Typography variant="h2" color="secondary">
                                No Results found...
                            </Typography>
                        </div>
                        <div className="text-center">
                            <Typography>
                                Enter <strong>User</strong> and{" "}
                                <strong>Repo</strong>; then{" "}
                                <strong>Go Fetch</strong>!
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default NoResults;
