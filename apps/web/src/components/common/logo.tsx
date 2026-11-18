import { Link } from "@tanstack/react-router";
import useProjectStore from "@/store/project";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  const { setProject } = useProjectStore();

  return (
    <Link
      onClick={() => {
        setProject(undefined);
      }}
      to="/dashboard"
      className={`w-auto ${className}`}
    >
      <span className="flex items-center gap-2.5">
        <img src="/logo-smk.png" alt="" className="h-9 w-auto" />
        <span className="font-semibold text-[17px] text-primary leading-none tracking-[-0.01em] dark:text-foreground">
          Karyabangsa School
        </span>
      </span>
    </Link>
  );
}
