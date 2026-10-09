import { getNavigationMetricParams } from "./node_modules/expo-observe/src/integrations/navigationConfig.ts";

const withParams = getNavigationMetricParams(
  { filteredParams: ["*"] },
  { id: "779", tab: "timeline" },
  "/incidents/779",
);

const noParams = getNavigationMetricParams(
  { filteredParams: ["*"] },
  {},
  "/incidents",
);

console.log("with params:", JSON.stringify(withParams));
console.log("no params:", JSON.stringify(noParams));
