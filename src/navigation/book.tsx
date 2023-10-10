import React, { ReactElement } from "react";

const base = "/";

type PageType = ReactElement | (() => ReactElement);

interface RouteType {
  url: string;
  page: PageType;
}

export const book: { [key: string]: RouteType } = Object.freeze({
  root: {
    url: `${base}`,
    page: <>Dashboard</>,
  },
  login: {
    url: `${base}login`,
    page: () => <h1>Login</h1>,
  },
  registration: {
    url: `${base}registration`,
    page: () => <h1>Registration</h1>,
  },
  profile: {
    url: `${base}profile`,
    page: () => <h1>Profile</h1>,
  },
});

export type BookType = typeof book;
