import { useState, useEffect } from "react";
import { NotFound } from "../not-found/NotFound";
import { findMatchingRoute } from ".";

export const Router = () => {
  const [path, setPath] = useState(window.location.pathname);

  // Listen for changes in the URL
  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [path]);

  const Component = findMatchingRoute(path);

  if (!Component) {
    console.error("No route matched for path:", path);
    return <NotFound />;
  }
  return Component.component;
};