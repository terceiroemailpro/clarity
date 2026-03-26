import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFoundView = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold font-mono text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundView;
