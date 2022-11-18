import { Fragment } from 'react';
import { fetchUser } from '../../api';

import Navbar from '../../components/Navbar';

export default function Home() {
  fetchUser(12);
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}
