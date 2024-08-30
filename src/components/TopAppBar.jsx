import AppIcon from "./AppIcon";
import DefaultUserIcon from "./DefaultUserIcon";

export default function TopAppBar() {
  return (
    <div className="relative flex h-16 w-full flex-row items-center justify-between px-5 py-5">
      <AppIcon className="size-10 text-gray-200" />
      <span className="text-2xl font-bold">BartoloBot</span>
      <DefaultUserIcon />
    </div>
  );
}
