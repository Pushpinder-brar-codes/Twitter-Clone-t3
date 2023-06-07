import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

interface Props {
    
}

export const SideNav = (props: Props) => {

    const session = useSession();
    const user = session.data?.user;

    return (
      <nav className="sticky top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
          <li>
            <Link href="/">Home</Link>
          </li>
          {user && (
            <li>
              <Link href={`/profiles/${user.id}`}>Profile</Link>
            </li>
          )}
          {user == null ? (
            <li>
              <button onClick={() =>signOut()}>Log out</button>
            </li>
          ) : (
            <li>
              <button onClick={() => signIn()}>Log In</button>
            </li>
          )}
        </ul>
      </nav>
    );
}
