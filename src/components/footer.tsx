import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <AppBar
                position="fixed"
                style={{
                    top: "auto",
                    bottom: 0,
                }}
            >
                <Toolbar variant="dense">
                    <div style={{ margin: "auto" }}>
                        <Typography color="inherit">
                            Made with {"❤"} by{" "}
                            <a
                                style={{ color: "#fff" }}
                                href="http://github.com/AluBhorta"
                            >
                                AluBhorta
                            </a>
                            .
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Footer;
