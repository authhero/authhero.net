import Image from "next/image";
import Layout from "../components/Layout";
import { load } from "outstatic/server";
import ContentGrid from "../components/ContentGrid";
import markdownToHtml from "../lib/markdownToHtml";

export default async function Index() {
  const { content, coverImage, title, allFeatures } = await getData();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        <section className="mt-16 mb-16 md:mb-12 flex flex-col md:flex-row items-start">
          <div
            className="prose lg:prose-2xl home-intro flex-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96 flex-1 md:w-1/2">
            <Image
              alt={title}
              src={coverImage || ""}
              layout="fill"
              className="object-contain object-center"
              priority
            />
          </div>
        </section>
        {allFeatures.length > 0 && (
          <ContentGrid title="" items={allFeatures} collection="projects" />
        )}
      </div>
    </Layout>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "home" }, [
      "content",
      "coverImage",
      "title",
    ])
    .first();

  const content = await markdownToHtml(page.content);

  const allFeatures = await db
    .find({ collection: "features" }, ["title", "slug", "coverImage"])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    ...page,
    content,
    allFeatures,
  };
}
