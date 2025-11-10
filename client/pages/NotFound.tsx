import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist yet. Let us know what you'd like to see and we'll build it!
            </p>
          </div>

          <div className="card-cyber text-left">
            <h3 className="font-bold text-primary mb-3">Available Pages:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="text-primary hover:underline">
                  → Home
                </Link>
              </li>
              <li className="text-sm">Tools - Coming soon</li>
              <li className="text-sm">Documentation - Coming soon</li>
              <li className="text-sm">About - Coming soon</li>
            </ul>
          </div>

          <Link to="/">
            <button className="button-gradient">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
