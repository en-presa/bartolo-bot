import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import logo from "./assets/logo.svg";
import "./index.css";

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

  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <style>{style}</style>
      <WebchatProvider
        theme={theme}
        client={client}
        key={JSON.stringify(config)}
        configuration={config}
      >
        <Webchat />
      </WebchatProvider>
    </div>
  );
}
