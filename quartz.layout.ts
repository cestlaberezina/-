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
      "upd 01.25": "https://garbbha.github.io/-/upd"
    },
  }),
  left: [],
  right: [],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody:[ // [Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: false,//true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 2, // how many hops of notes to display
        scale: 1, // default view scale
        repelForce: 2, // how much nodes should repel each other
        centerForce: 0.1, // how much force to use when trying to center the nodes
        linkDistance: 10, // how long should the links be by default?
        fontSize: 2, // what size should the node labels be?
        opacityScale: 3, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
      globalGraph: {
        drag: false,
        zoom: true,
        depth: 2,
        scale: 1, 
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 2,
        opacityScale: 1,
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
}
