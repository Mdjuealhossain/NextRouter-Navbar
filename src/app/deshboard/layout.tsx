import "../blog/style.css";
import BlogNavigation from "../blog/Navigation";
const posts = [
  {
    id: 1,
    name: "CSStr",
    slug: "/css",
  },
  {
    id: 2,
    name: "EEE",
    slug: "/eee",
  },
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <BlogNavigation posts={posts}></BlogNavigation>

      {children}
    </section>
  );
}
