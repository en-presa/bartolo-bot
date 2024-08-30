import Message from "./Message";

export default function Chat() {
  return (
    <div className="flex h-full w-1/2 flex-col items-end justify-end gap-6">
      <Message content="Proident ea adipisicing esse velit consectetur velit laboris aliqua est anim aliquip ex ad culpa. Mollit veniam magna nostrud nulla anim incididunt laboris nulla irure et incididunt voluptate officia pariatur. Est culpa duis elit mollit magna voluptate exercitation. Commodo amet eu enim deserunt et dolor aliqua enim irure pariatur aute. Pariatur esse id sint deserunt irure duis. Est ut deserunt in aliquip sint." />
      <Message
        content="Pariatur velit ex consectetur nulla non commodo non occaecat ad fugiat exercitation dolore culpa est. Tempor enim quis et ipsum consectetur irure occaecat sunt sunt duis. Minim proident culpa culpa sunt qui sint elit anim anim eu qui. Amet incididunt et et exercitation cupidatat amet mollit ipsum Lorem sint amet adipisicing. Ipsum aliquip tempor quis eiusmod laborum. Reprehenderit officia sit tempor do ipsum sint do excepteur incididunt tempor reprehenderit officia excepteur proident."
        botMessage
      />
    </div>
  );
}
