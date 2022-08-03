import Link from "next/link";

export default function News() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href={`/news/a-great-framework`}>
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <Link href={`/news/`}>Something Else</Link>
        </li>
      </ul>
    </>
  );
}
