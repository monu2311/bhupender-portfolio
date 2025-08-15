import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
        <Card className="md:sticky md:top-24 overflow-hidden">
          {/* <div className="relative h-64">
            <Image src="/me.jpg" alt="Portrait" fill className="object-cover" />
          </div> */}
          <CardHeader className="items-center justify-center flex flex-col">  
            <Avatar className="h-20 w-20 -mt- border-4 border-background">
              <AvatarImage src="/projects/myself.jpg" alt="Portrait" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-2">Bhupender Sharma</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground text-center">
            Software Engineer • React Native / React.js
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Me</h2>
          <Separator className="my-4" />
          <p className="leading-7 text-muted-foreground">
          I’m a results-driven Web & Mobile Application Developer specializing in React Native, JavaScript, and modern front-end technologies. With 3 years of experience, I’ve built robust, scalable, and secure applications for domains ranging from fintech platforms handling sensitive transactions to enterprise solutions and consumer-facing products.
          </p>
          <p className="leading-7 text-muted-foreground mt-4">
          I focus on clean code, efficient architecture, and intuitive UI/UX to deliver applications that perform flawlessly and engage users. My expertise spans the entire SDLC, CI/CD pipelines, API integrations, and performance optimization for both web and mobile ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
}


