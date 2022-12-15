// our-domain/programs
import Link from "next/link";

import { Fragment } from "react";

function ProgramsPage() {
  return (
    <Fragment>
      <h1>The Programs Page</h1>
      <ul>
        <li>
          <Link href="/programs/java-core">Java Core</Link>
        </li>
        <li>
          <Link href="/programs/react">Math will learn react</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default ProgramsPage;
