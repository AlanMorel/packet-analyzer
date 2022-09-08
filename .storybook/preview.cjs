import "@/assets/scss/colors.scss";
import "@/assets/scss/fonts.scss";
import "@/assets/scss/base.scss";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
