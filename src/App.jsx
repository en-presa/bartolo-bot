import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import "./index.css";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "6f2700a3-2f33-45d4-8112-08fc6fb63141";

const config = {
  composerPlaceholder: "Escribe una instrucción",
  botName: "BartoloBot",
  botAvatar: "./assets/logo.svg",
  botDescription: "¡Hola! 👋 Soy un ChatBot para Ingeniería.",
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
