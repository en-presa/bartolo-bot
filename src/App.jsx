import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import logo from "./assets/logo.svg";
import "./index.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const { theme, style } = buildTheme({
  themeName: "bartoloTheme",
  themeColor: "#9290C3",
  backgroundColor: "#f5f5f5",
  textColorOnBackground: "#333333",
  botMessageColor: "#a3c9a8",
  botMessageBackgroundColor: "#272727",
  userMessageColor: "#ffffff",
  userMessageBackgroundColor: "#00aaff",
});

//Add your Client ID here ⬇️
const clientId = "6f2700a3-2f33-45d4-8112-08fc6fb63141";

const config = {
  composerPlaceholder: "Escribe una instrucción",
  botName: "BartoloBot",
  botAvatar: logo,
};

export default function App() {
  const client = getClient({ clientId });

  const mathJaxConfig = {
    loader: { load: ["input/tex", "output/svg"] }, // Configura MathJax
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div style={{ height: "100svh", width: "100wh" }}>
        <style>{style}</style>
        <WebchatProvider
          theme={theme}
          client={client}
          key={JSON.stringify(config)}
          configuration={config}
        >
          <Webchat renderMarkdown={(text) => <MathJax>{text}</MathJax>} />
        </WebchatProvider>
      </div>
    </MathJaxContext>
  );
}
