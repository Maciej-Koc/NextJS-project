import { useRouter } from "next/Router";

export default function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>The Detail Page</h1>;
}
