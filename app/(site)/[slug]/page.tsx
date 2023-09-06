import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="h-screen m-5">
      <h1 className="text-3xl">
        {page?.title}
      </h1>
      <div className="text-sm mt-5">
        <PortableText value={page?.content} />
      </div>
    </div>
  );
}
