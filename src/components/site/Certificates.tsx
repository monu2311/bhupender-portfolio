import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Cert = {
  title: string;
  org: string;
  year: string;
  link?: string;
};

const certs: Cert[] = [
 
  { 
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)", 
    org: "Udemy", 
    year: "Jan '22",
    link: "https://www.udemy.com/certificate/UC-2d7cd0cd-6c18-49bd-8d71-12125f13d656/"
  },
  { 
    title: "Building RESTful APIs with Node.js and Express", 
    org: "LinkedIn", 
    year: "Jul '25",
    link: "https://www.linkedin.com/learning/certificates/bb1c69f765347a0dea097dc54df1c49821204b898937722712b526c1a9ab7306?trk=share_certificate"
  },
 
  { 
    title: "Level Up: JavaScript", 
    org: "LinkedIn", 
    year: "Jul '25",
    link: "https://www.linkedin.com/learning/certificates/5c2982230c3e1d641fa91d6fe42f277d55aa24b3df166c80b00a861dc2d4767f?trk=share_certificate"
  },
  { 
    title: "Python (Basic)", 
    org: "HackerRank", 
    year: "Jul '20",
    link: "https://www.hackerrank.com/certificates/ef0436f444ec"
  },
  { 
    title: "Problem Solving (Basic)", 
    org: "HackerRank", 
    year: "Mar '22",
    link: "https://www.hackerrank.com/certificates/dae12f896211"
  },
  { 
    title: "Learn Spring boot in 100 step - Beginner to Expert", 
    org: "Infosys SpringBoard", 
    year: "Sep '22"
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Certificates</h2>
      <div className="h-1 w-16 bg-primary mt-2 mb-8"></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c) => (
          <Card key={c.title} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="font-medium">{c.org}</p>
              <p>{c.year}</p>
              {c.link && (
                <a 
                  href={c.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-xs mt-2 inline-block"
                >
                  View Certificate →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


