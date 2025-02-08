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
      HOME: "https://garbbha.github.io/-/",
      ABOUT: "https://garbbha.github.io/-/about",
      PHOTOGRAPHY: "https://garbbha.github.io/-/photography",
      GRIEFWORK: "https://garbbha.github.io/-/griefwork",
      ARCHIVE: "https://garbbha.github.io/-/archive",
      CONTACT: "https://garbbha.github.io/-/contacts",
      "upd 01.25": "https://garbbha.github.io/-/upd",
    },
  }),
  left: [],
  right: [],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody:[
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  afterBody: [
    Component.Graph(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
}
