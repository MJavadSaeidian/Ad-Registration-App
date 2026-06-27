"use client"
import styles from '@/module/LogoutButton.module.css'
import { signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi'

function LogoutButton() {

 const logoutHandler = () => {
    signOut({
      callbackUrl: "/",
    });
  };

    return (
        <div className={styles.button} onClick={logoutHandler}>
            <FiLogOut />
            خروج
        </div>
    )
}

export default LogoutButton

