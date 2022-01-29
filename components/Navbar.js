import Link from 'next/link';

export default function NavBar() {
    const user = null;

    return (
        <nav className="navbar">
          <ul>
            <li>
              <Link href="/">
                <button className="btn-logo">Logo</button>
              </Link>
            </li>
    
            {/* user is signed-in and has username */}
            {user && (
              <>
                <li className="push-left">
                  <Link href="/admin">
                    <button className="btn-blue">Write Posts</button>
                  </Link>
                </li>
                <li>
                  <Link href={`/${username}`}>
                    <img src={user?.photoURL} />
                  </Link>
                </li>
              </>
            )}
    
            {/* user is not signed OR has not created username */}
            {!user && (
              <li>
                <Link href="/enter">
                  <button className="btn-blue">Log in</button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      );
}