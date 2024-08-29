import Icon from "./Icon";

export default function TopAppBar() {
  return (
    <div className="relative flex h-16 w-full flex-row items-center justify-center px-5">
      <span className="text-2xl font-bold">BartoloBot</span>
      <Icon position="absolute right-3 top-3"></Icon>
    </div>
  );
}
