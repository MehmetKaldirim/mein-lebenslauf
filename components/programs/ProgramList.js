import ProgramItem from "./ProgramItem";
import classes from "./ProgramList.module.css";

function ProgramList(props) {
  return (
    <ul className={classes.list}>
      {props.programs.map((program) => (
        <ProgramItem
          key={program.id}
          id={program.id}
          lectures={program.lectures}
          title={program.title}
          totalTime={program.totalTime}
        />
      ))}
    </ul>
  );
}

export default ProgramList;
