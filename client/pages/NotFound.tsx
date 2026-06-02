import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-md w-full rounded-3xl bg-card/90 border border-border p-10 shadow-2xl shadow-black/20 text-center">
        <h1 className="text-5xl font-black mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary/80 underline font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
