import Header from "@/components/Header";

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Complete guides, tutorials, and references for cybersecurity, ethical hacking, and Linux.
              </p>
            </div>

            <div className="card-cyber text-center py-16">
              <h2 className="text-2xl font-bold mb-4">📚 Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive documentation is being compiled with detailed guides on all core topics.
              </p>
              <p className="text-sm text-muted-foreground">
                Start a session with CyberNova to get personalized guidance on any topic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
