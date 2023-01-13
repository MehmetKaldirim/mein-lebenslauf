import React, { useState, useEffect, useRef } from "react";

import Card from "../ui/Card";
import ErrorModal from "./ErrorModal";
import useHttp from "../../hooks/http";
import classes from "./Search.module.css";

const ProgramTasak = React.memo((props) => {
  return (
    <Card>
      <h1>Programin tasaklari burda</h1>
    </Card>
  );
});

export default ProgramTasak;
