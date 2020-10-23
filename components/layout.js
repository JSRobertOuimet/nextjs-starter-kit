import Head from "next/head";
import Link from "next/link";

export const title = "Title";

export default function Layout({ title = "Title", postPage, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>
      <main>
        {children}
        {postPage && (
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        )}
      </main>
      <footer>Footer</footer>
    </>
  );
}
