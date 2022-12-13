import { useRouter } from "next/router";

function ProgramDetails() {
  const router = useRouter();
  console.log(router.query.newsId);
  const newsId = router.query.newsId;
  // send a request to the backend API
  // to fetch the news item with newsId

  return;
  <>
    <h1>The Detail Page</h1>;<p1>{newsId}</p1>
  </>;
}

export default ProgramDetails;
