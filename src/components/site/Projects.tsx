"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMemo, useState } from "react";
import { allProjects } from "@/data/projects";
import Modal from "@/components/ui/modal";

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
          <div className="h-1 w-16 bg-primary mt-2"></div>
        </div>
        {allProjects.length > 3 && (
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="text-sm"
          >
            {showAll ? "Show Less" : `Show ${allProjects.length - 3} More`}
          </Button>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((p) => (
          <Card key={p.title} className="overflow-hidden cursor-pointer pt-0" onClick={() => setOpenSlug(p.slug)}>
            <div className="relative h-70">
              <Image src={p.image} alt={p.title} fill  />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-muted px-2 py-1 text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectModal openSlug={openSlug} onClose={() => setOpenSlug(null)} />
    </section>
  );
}

function ProjectModal({ openSlug, onClose }: { openSlug: string | null; onClose: () => void }) {
  const project = useMemo(() => allProjects.find((p) => p.slug === openSlug) || null, [openSlug]);
  return (
    <Modal open={!!project} onClose={onClose} title={project?.title}>
      {!project ? null : (
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="relative h-80 w-full max-w-2xl overflow-hidden rounded-lg">
              <Image src={project.banner} alt={`${project.title} banner`} fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground italic leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.content.map((feature, i) => (
                  <li key={i} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-sm rounded-full bg-muted px-3 py-1.5 text-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}


