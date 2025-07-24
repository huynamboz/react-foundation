import type { JSX } from "react";
import { About } from "../about/About";
import { Home } from "../home/Home";
import { UserDetail } from "../user-detail/UserDetail";

export type Route = {
  path: string;
  component: JSX.Element;
};

const routes: Route[] = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/users/:id", component: <UserDetail /> },
];

// Find a matching route based on the current path
export function findMatchingRoute(path: string): { component: JSX.Element; params?: Record<string, string> } | undefined {
  // return { component, params };
  const route = routes.find((route) => {
    const routePath = route.path.replace(/:\w+/, "([^/]+)");
    const regex = new RegExp(`^${routePath}$`);
    return regex.test(path);
  });

  // EXTRACT PARAMETERS FROM THE PATH
  if (route) {
    const params: Record<string, string> = {};

    // convert /user/:id to /user/([^/]+)
    const routePath = route.path.replace(/:\w+/g, "([^/]+)");
    const regex = new RegExp(`^${routePath}$`);

    const match = path.match(regex);
    if (match) {
      const keys = route.path.match(/:\w+/g);
      keys?.forEach((key, index) => {
        params[key.slice(1)] = match[index + 1];
      });
    }
    return { component: route.component, params };
  }
}

export const navigate = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
