import * as ReactRouterDom from "../../node_modules/react-router-dom/dist/index";

declare module "react-router-dom" {
  export const Routes: React.FC<any>;
}