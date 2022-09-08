import UnitLabel from "@/src/components/unit-label/UnitLabel";
import { unitTypes } from "@/src/utils/Interfaces";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Components/Unit Label",
    argTypes: {
        unit: {
            options: unitTypes,
            control: { type: "radio" }
        }
    },
    component: UnitLabel
} as ComponentMeta<typeof UnitLabel>;

const Template: ComponentStory<typeof UnitLabel> = args => <UnitLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    unit: "opcode"
};
