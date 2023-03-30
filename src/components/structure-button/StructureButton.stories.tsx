import StructureButton from "@/src/components/structure-button/StructureButton";
import { Meta, StoryFn } from "@storybook/react";

export default {
    title: "Components/Structure Button",
    component: StructureButton
} as Meta<typeof StructureButton>;

const Template: StoryFn<typeof StructureButton> = args => <StructureButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: "Opcode",
    onClick: (): void => alert("hello")
};
