import Header from "@/components/Header";

export default function Tools() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">Security Tools Hub</h1>
              <p className="text-lg text-muted-foreground">
                Curated collection of tools, commands, and utilities for ethical hacking and cybersecurity work.
              </p>
            </div>

            <div className="card-cyber text-center py-16">
              <h2 className="text-2xl font-bold mb-4">🚧 Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                This section is being built with comprehensive tool guides, command references, and practical examples.
              </p>
              <p className="text-sm text-muted-foreground">
                Ask me in a conversation about any specific security tool and I'll provide detailed guidance!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
