import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../src/components/Button/Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ))
  .add("with deeppink", () => (
    <Button size="large" color="deeppink">
      Lick Me
    </Button>
  ));
