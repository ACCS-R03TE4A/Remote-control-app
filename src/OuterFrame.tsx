import { AppBar, Toolbar, Typography, Snackbar } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  appbar: {
    title: string;
    leftButton?: ReactNode;
    rightButton?: ReactNode;
  };
  snackbar: {
    state?: boolean;
    setState?: React.Dispatch<React.SetStateAction<boolean>>;
    msg?: string;
  };
  children: ReactNode;
}

const OuterFrame = (props: IProps) => {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <AppBar position="fixed" data-testid="appbar">
        <Toolbar>
          {props.appbar.leftButton}
          <Typography variant="h6" style={{ marginLeft: "10px" }} data-testid="appbartitle">
            {props.appbar.title}
          </Typography>
          <div style={{ marginLeft: "auto", marginRight: "0px" }}>
            {props.appbar.rightButton}
          </div>
        </Toolbar>
      </AppBar>
      <div
        style={{
          marginTop: "80px",
          marginRight: "10px",
          marginLeft: "10px"
        }}
      >
        {props.children}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={props.snackbar.state}
        onClose={() => {
          if (props.snackbar.setState != undefined)
            props.snackbar.setState(false);
        }}
        message={props.snackbar.msg}
        key={"bottomleft"}
        autoHideDuration={3000}
      />
    </div>
  );
};
export default OuterFrame;
