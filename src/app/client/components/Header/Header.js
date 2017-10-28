import React from 'react';
import { Button } from '../';

import styles from './Header.css';

const Header = () =>
  <div className={styles.header}>
    <div className={styles.signin}>
      <p>Logo - Links and so forth</p>
    </div>
    <div className={styles.login}>
      <Button to="/">Get started</Button>
    </div>
  </div>;

export default Header;
