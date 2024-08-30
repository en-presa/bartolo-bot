import TextField from "./TextField";

export default function UserInput() {
  return (
    <div className="flex w-1/2 flex-col items-center justify-start gap-2.5">
      <TextField />
      <p className="text-sm text-gray-400">
        ¿Te está gustando BartoloBot? Cuéntanos qué te parece a través del
        siguiente <a href="">enlace</a>.
      </p>
    </div>
  );
}
