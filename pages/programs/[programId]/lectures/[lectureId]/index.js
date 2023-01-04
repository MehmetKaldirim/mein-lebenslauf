import { useRouter } from "next/router";

function Lecture() {
  const router = useRouter();
  const { programId, lectureId } = router.query;

  return (
    <h1>
      This is lecture {lectureId} from programs {programId}
    </h1>
  );
}

export default Lecture;
