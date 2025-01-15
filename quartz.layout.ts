import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      THIS: "https://garbbha.github.io/quartz/1pages/this",
      THAT: "https://garbbha.github.io/quartz/1pages/that",
      THIP: "https://garbbha.github.io/quartz/1pages/this",
      THAI: "https://garbbha.github.io/quartz/1pages/that",
      THIR: "https://garbbha.github.io/quartz/1pages/this",
      THAY: "https://garbbha.github.io/quartz/1pages/that",
      THIE: "https://garbbha.github.io/quartz/1pages/this",
      THAD: "https://garbbha.github.io/quartz/1pages/that",
      THAW: "https://garbbha.github.io/quartz/1pages/that",
      THAH: "https://garbbha.github.io/quartz/1pages/that",
      THAQ: "https://garbbha.github.io/quartz/1pages/that",
      THAZ: "https://garbbha.github.io/quartz/1pages/that",
    },
  }),
  left: [],
  right: [],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 2, // how many hops of notes to display
        scale: 1, // default view scale antoine
        repelForce: 1, // how much nodes should repel each other antoine
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 10, // how long should the links be by default? antoine
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 0.5, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 1, //antoine
        repelForce: 0.3, //antoine
        centerForce: 1, //antoine
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
  }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
}
