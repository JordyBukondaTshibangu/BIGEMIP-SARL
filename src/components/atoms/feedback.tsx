import { CheckCircle2, AlertTriangle, X } from "lucide-react";

function Feedback({
  message,
  type,
  onClose,
  dismissLabel = "Dismiss",
}: {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
  dismissLabel?: string;
}) {
  const Icon = type === "success" ? CheckCircle2 : AlertTriangle;
  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-[3px] border px-4 py-3 ${
        type === "success"
          ? "border-emerald-700/30 bg-emerald-50 text-emerald-900"
          : "border-laterite/40 bg-[#fbeee8] text-[#7a3218]"
      }`}
    >
      <Icon aria-hidden="true" size={20} className="mt-0.5 shrink-0" />
      <p className="flex-1 font-medium">{message}</p>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label={dismissLabel}
          className="-m-1 p-1 opacity-60 hover:opacity-100"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default Feedback;
