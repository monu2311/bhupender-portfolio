import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
      <div className="h-1 w-16 bg-primary mt-2 mb-8"></div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Software Engineer – SN Software Solutions</CardTitle>
            <p className="text-sm text-muted-foreground">Jul 2024 – Present • Full-time</p>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>Designed and developed full UI/UX from scratch for web (ReactJS) and mobile (React Native) applications based on Figma specifications</li>
              <li>Integrated REST APIs for real-time data flow and collaborated with design/backend teams for seamless delivery</li>
              <li>Led a team of developers, handled code reviews, and ensured quality through testing, Git version control, and client demos</li>
              <li>Associated Project: Rival Finance</li>
            </ul>
            <div className="mt-3">
              <p className="text-xs font-medium text-foreground">Key Skills:</p>
              <p className="text-xs text-muted-foreground">React.js, React Native, JavaScript, Web Socket, Material UI, Redux State Management, Node.js, MongoDB</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Software Engineer – Mobiloitte Technologies</CardTitle>
            <p className="text-sm text-muted-foreground">Sep 2022 – Jun 2024 • Full-time</p>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>Built cross-platform applications using React Native and React.js, creating custom UI components from Figma designs</li>
              <li>Integrated REST APIs and managed state efficiently using Redux Toolkit and Context API</li>
              <li>Collaborated with cross-functional teams and used Git for version control and smooth project delivery</li>
              <li>Associated Project: Ponttual</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


