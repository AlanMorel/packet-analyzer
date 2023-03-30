import UnitLabel from "@/src/components/unit-label/UnitLabel";
import { unitTypes } from "@/src/utils/Interfaces";
import { Meta, StoryFn } from "@storybook/react";

export default {
    title: "Components/Unit Label",
    argTypes: {
        unit: {
            options: unitTypes,
            control: { type: "radio" }
        }
    },
    component: UnitLabel
} as Meta<typeof UnitLabel>;

const Template: StoryFn<typeof UnitLabel> = args => <UnitLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    unit: "opcode"
};
