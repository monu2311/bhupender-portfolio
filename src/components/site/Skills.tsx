import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups: { title: string; items: string[] }[] = [
  { 
    title: "Frontend", 
    items: ["React.js", "React Native", "TypeScript", "JavaScript", "ES6", "HTML", "CSS"] 
  },
  { 
    title: "Backend & Database", 
    items: ["Node.js", "MongoDB", "SQL", "Express.js", "API Integration"] 
  },
  { 
    title: "Tools & Libraries", 
    items: ["Redux", "Redux Toolkit", "Axios", "Webpack", "Npm", "Github", "Firebase"] 
  },
  { 
    title: "Other Skills", 
    items: ["Data Structures And Algorithms", "Web API", "Third Party Integration", "Material-UI"] 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</h2>
      <div className="h-1 w-16 bg-primary mt-2 mb-8"></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle className="text-base">{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


