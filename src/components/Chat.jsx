import Message from "./Message";

export default function Chat() {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-end gap-6">
      <Message content="Este es un mensaje de prueba." />
      <Message content="Este es un mensaje de BartoloBot." reverse />
    </div>
  );
}
