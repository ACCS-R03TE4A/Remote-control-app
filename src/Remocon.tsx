import "./Remocon.css";
import OuterFrame from "./OuterFrame";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import config from "./AppConfig.json";

const remItems = [
  ["暑い", "#b54200"],
  ["少し暑い", "#b57c00"],
  ["ちょうどいい", "#00b503"],
  ["少し寒い", "#00b5a6"],
  ["寒い", "#0009b5"]
];

export const sendTemperatureSensation = async (temperatureSensation: number) => {
  let retData = "";
  await fetch(
    `${config.protocol}://${config.controlServerHost}/${config.tempSenseEndPointURL}?tSense=${temperatureSensation}`,
    {
      mode: 'cors',
    })
    .then((response) => response.json())
    .then((data) => (data = retData))
    .catch((e) => (retData = e));
  return retData;
};

export default function Remocon() {
  const [snackbarState, setSnackbarState] = useState(false);

  return (
    <OuterFrame
      appbar={{
        title: "リモコンアプリ",
        rightButton: (
          <IconButton component={Link} to="Settings" data-testid="setting_button">
            <SettingsIcon />
          </IconButton>
        )
      }}
      snackbar={{
        state: snackbarState,
        setState: setSnackbarState,
        msg: "送信しました！"
      }}
    >
      <div id="vertically">
        {remItems.map((e, index) => (
          <Button
            variant="contained"
            key={e[0]}
            style={{ backgroundColor: e[1], marginBottom: "50px" }}
            onClick={() => {
              setSnackbarState(true);
              sendTemperatureSensation(index);
            }}
          >
            {e[0]}
          </Button>
        ))}
      </div>
      <TemperatureDisplay/>
    </OuterFrame >
  );
}

const TemperatureDisplay = () => {
  const [ambient, setAmbient] = useState("未取得");
  const [target, setTarget] = useState("未取得");
  useEffect(() => {
    fetch(
      `${config.protocol}://${config.controlServerHost}/${config.getTempEndPoint}`,
      {
        mode: 'cors',
      })
      .then((response) => response.json())
      .then((data) => {
        setAmbient(data.tCurrent.tActual);
        setTarget(data.tCurrent.tSuitable);
      });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row",  justifyContent: "space-around" }}>
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <Typography variant="body1">近辺温度</Typography>
        <Typography variant="h6">{`${ambient}℃`}</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <Typography variant="body1" >目標温度</Typography>
        <Typography variant="h6">{`${target}℃`}</Typography>
      </div>
    </div>
  );
}
