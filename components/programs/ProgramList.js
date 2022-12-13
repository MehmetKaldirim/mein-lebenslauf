import ProgramItem from "./ProgramItem";
import classes from "./ProgramList.module.css";

function ProgramList(props) {
  return (
    <ul className={classes.list}>
      {props.programs.map((program) => (
        <ProgramItem
          key={program.id}
          id={program.id}
          title={program.title}
          lectures={program.lectures}
          totalTime={program.totalTime}
        />
      ))}
    </ul>
  );
}

export default ProgramList;
