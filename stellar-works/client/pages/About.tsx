import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">About CyberNova</h1>
              <p className="text-lg text-muted-foreground">
                Learn more about CyberNova, the ethical hacking assistant, and its mission.
              </p>
            </div>

            <div className="card-cyber text-center py-16">
              <h2 className="text-2xl font-bold mb-4">ℹ️ Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                Detailed information about CyberNova's capabilities, ethical framework, and origin story.
              </p>
              <p className="text-sm text-muted-foreground">
                Curious about something specific? Start a session to learn more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
