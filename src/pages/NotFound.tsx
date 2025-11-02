import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <div className="text-center animate-fade-in">
        
        <h1 className="text-7xl md:text-8xl font-serif font-bold text-primary mb-2">
          404
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
          Page Not Found
        </p>

        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for might have been moved, deleted, or never existed.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
