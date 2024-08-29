export default function TextField() {
  return (
    <form className="flex h-16 w-full flex-row items-center justify-between rounded-full bg-neutral pl-7 pr-5">
      <input
        type="text"
        className="bg-transparent text-gray-400 outline-none"
        placeholder="Escribe una instrucción aquí"
      />
      <button
        type="submit"
        className="size-10 rounded-full bg-secondary px-2 py-2"
      >
        ⬆️
      </button>
    </form>
  );
}
