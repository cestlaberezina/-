import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Breadcrumbs from "./quartz/components/Breadcrumbs";  // No need for relative path

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      home: "https://cestlaberezina.github.io/-/",
      about: "https://cestlaberezina.github.io/-/about",
      photography: "https://cestlaberezina.github.io/-/photography",
      griefwork: "https://cestlaberezina.github.io/-/griefwork",
      archive: "https://cestlaberezina.github.io/-/archive",
      contact: "https://cestlaberezina.github.io/-/contacts",
      "upd 04.04": "https://cestlaberezina.github.io/-/upd",
    },
  }),
  left: [],
  right: [],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody:[
    Component.ArticleTitle(),
  ],
  afterBody: [
    Component.Graph(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
}
