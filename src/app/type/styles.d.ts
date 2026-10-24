// Global stylesheets are imported for their side effects only, e.g. import "@globals";
// Next only declares CSS modules, so plain stylesheets need declaring here
declare module "@globals";
declare module "*.css";
declare module "*.scss";

declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}
