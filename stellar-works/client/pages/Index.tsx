import { Link } from "react-router-dom";
import Header from "@/components/Header";

const skills = [
  {
    icon: "🔍",
    title: "Vulnerability Assessment",
    description: "Penetration testing & vulnerability scanning on web, network, and system levels",
    tools: "Nmap • Burp Suite • SQLMap • Metasploit",
  },
  {
    icon: "🐧",
    title: "Linux Mastery",
    description: "Advanced system administration, automation, kernel tuning, and performance optimization",
    tools: "Bash • System Administration • VirtualBox/VMware",
  },
  {
    icon: "⚙���",
    title: "Coding & Automation",
    description: "Expert-level scripting and automation in Bash, Python, PHP, JavaScript, and C",
    tools: "Python • Bash • FastAPI/Flask • CI/CD",
  },
  {
    icon: "🎨",
    title: "System Customization",
    description: "KDE/GNOME desktop optimization, kernel tweaks, and visual effect mastery",
    tools: "Desktop Environments • Window Managers • Theming",
  },
  {
    icon: "👁️",
    title: "OSINT & Recon",
    description: "Open-source intelligence gathering, fingerprinting, and ethical reconnaissance",
    tools: "OSINT Tools • Public Data Analysis • Recon Automation",
  },
  {
    icon: "📋",
    title: "Audit Documentation",
    description: "Comprehensive security reports, POC documentation, and compliance reporting",
    tools: "Markdown • PDF Generation • Report Templates",
  },
];

const features = [
  {
    title: "Ethical Framework",
    description: "Always operates within legal and responsible disclosure boundaries. No illegal content.",
  },
  {
    title: "Hinglish Communication",
    description: "Natural, conversational communication with technical precision. Professional mentoring style.",
  },
  {
    title: "Proof-of-Concept Focus",
    description: "Emphasizes educational explanations and demonstrations over exploitation techniques.",
  },
  {
    title: "Real-World Examples",
    description: "Practical commands, code snippets, and actionable guidance for every topic.",
  },
];

const responseStyle = [
  { title: "Structured", description: "Clear organization with Steps, Examples, and Pro Tips" },
  { title: "Confident", description: "Senior engineer mentoring approach with direct communication" },
  { title: "Concise", description: "Practical and to-the-point answers without unnecessary fluff" },
  { title: "Educational", description: "Focus on understanding concepts, not just running commands" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="relative container mx-auto max-w-4xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary">🚀 Advanced Cybersecurity Assistant</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gradient">CyberNova</span>
              <br />
              <span className="text-foreground">Ethical Hacking Mastery</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A hyper-intelligent, ethical hacking assistant built for cybersecurity professionals, penetration testers, and red-team researchers. Master cybersecurity, Linux, scripting, and automation with expert guidance and real-world examples.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="button-gradient">
                Start Interactive Session
              </button>
              <button className="button-outline-cyber">
                Explore Documentation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <p className="text-sm text-muted-foreground">Core Skills</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Ethical</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master six critical domains of cybersecurity and ethical hacking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="card-cyber group cursor-pointer"
                style={{
                  animation: `slide-up 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.split(" • ").map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why CyberNova?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with ethical boundaries and professional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">✓ {feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Style Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Communication Style</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear, confident, and educational approach to technical mentoring
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {responseStyle.map((item, idx) => (
              <div
                key={idx}
                className="card-cyber text-center"
                style={{
                  animation: `slide-up 0.6s ease-out ${idx * 0.15}s both`,
                }}
              >
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Level Up?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start an interactive session with CyberNova and get expert guidance on any cybersecurity topic. From vulnerability assessments to Linux mastery, we've got you covered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="button-gradient text-lg py-3 px-8">
              Launch CyberNova Session
            </button>
            <button className="button-outline-cyber text-lg py-3 px-8">
              View Documentation
            </button>
          </div>

          <div className="pt-8 border-t border-border text-muted-foreground text-sm">
            <p>
              📚 Complete documentation • 🛡️ Ethical guidelines • ⚡ Real-world examples • 🔒 Private & Secure
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl font-bold text-gradient">CyberNova</span>
              <span className="text-sm text-muted-foreground">Ethical Hacking Assistant</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/docs" className="hover:text-primary transition-colors">
                Docs
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </div>
            <div className="text-xs text-muted-foreground/70 mt-4 md:mt-0">
              © 2024 CyberNova. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
