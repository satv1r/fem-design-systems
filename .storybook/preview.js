import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";

addParameters({
  backgrounds: [
    { name: "Default Theme", value: "#ffffff", default: true },
    { name: "Dark Theme", value: "#050449" },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
