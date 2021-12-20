import OuterFrame from "./OuterFrame";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import config from "./AppConfig.json";
import "./Remocon.css";

export const sendPostNumber = async (postNumber: string) => {
  let retData = "";
  await fetch(
    `${config.protocol}://${config.controlServerHost}/${config.postNumberEndPoint}?pNumber=${postNumber}`,
    {
      mode: 'cors',
    })
    .then((response) => response.json())
    .then((data) => (data = retData))
    .catch((e) => (retData = e));
  return `${retData}`;
};

export default function Settings() {
  const [snackbarState, setSnackbarState] = useState(false);
  const [postNumber, setPostNumber] = useState("");
  return (
    <OuterFrame
      appbar={{
        title: "設定",
        leftButton: (
          <IconButton component={Link} to="/" data-testid="setting_backbutton">
            <ArrowBackIosNewIcon />
          </IconButton>
        )
      }}
      snackbar={{
        state: snackbarState,
        setState: setSnackbarState,
        msg: "送信します..."
      }}
    >
      <div className="vertically">
        <Box component="form">
          <TextField
            data-testid="postNumberField"
            variant="outlined"
            placeholder="郵便番号"
            label="郵便番号"
            style={{ width: "100%" }}
            onChange={(event) => {
              setPostNumber(event.target.value);
              sendPostNumber(event.target.value);
            }}
          />
        </Box>
      </div>
    </OuterFrame>
  );
}
