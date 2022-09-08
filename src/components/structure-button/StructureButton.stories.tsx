import StructureButton from "@/src/components/structure-button/StructureButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Components/Structure Button",
    component: StructureButton
} as ComponentMeta<typeof StructureButton>;

const Template: ComponentStory<typeof StructureButton> = args => <StructureButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: "Opcode",
    onClick: (): void => console.log("hello")
};
