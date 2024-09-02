import AppIcon from "./AppIcon";
import DefaultUserIcon from "./DefaultUserIcon";

export default function TopAppBar() {
  return (
    <header className="fixed inset-x-0 top-0 flex h-16 flex-row items-center justify-between bg-accent px-5 py-5">
      <AppIcon className="size-10 text-gray-200" />
      <span className="text-2xl font-bold">BartoloBot</span>
      <DefaultUserIcon />
    </header>
  );
}
