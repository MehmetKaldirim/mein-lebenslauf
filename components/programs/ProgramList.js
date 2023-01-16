import React from "react";

import Card from "../ui/Card";
import classes from "./ProgramList.module.css";

const ProgramList = (props) => {
  return (
    <Card>
      <section className={classes.program}>
        <h2>Loaded Programs</h2>
        <ul>
          {props.programs.map((prg) => (
            <li key={prg.id} onClick={props.onRemoveItem.bind(this, prg.id)}>
              <span>{prg.programCode}</span>
              <span>{prg.programName}</span>
              <span>{prg.duration}x</span>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default ProgramList;
