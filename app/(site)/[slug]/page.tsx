import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="m-5">
      <h1 className="text-4xl font-extrabold">
        {page?.title}
      </h1>
      <div className="text-lg mt-5">
        <PortableText value={page?.content} />
      </div>
    </div>
  );
}
