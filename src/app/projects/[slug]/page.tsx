import { notFound } from "next/navigation";
import Image from "next/image";
import { allProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="font-sans">
      <div className="relative h-64 w-full">
        <Image src={project.banner} alt={`${project.title} banner`} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-[1fr_280px]">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          {project.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
        <aside className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}


