import classes from "./ProgramDetail.module.css";

function MeetupDetail(props) {
  const listLectures = props.lectures.map((element) => {
    return (
      <ul type="disc">
        <li
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {element.lectureName}
        </li>
        <li>{element.duration}</li>
      </ul>
    );
  });

  return (
    <section className={classes.detail}>
      <div>{listLectures}</div>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
