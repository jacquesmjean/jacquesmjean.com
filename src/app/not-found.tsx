import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <LayoutShell>
      <section className="pt-32 pb-24 px-6 min-h-screen flex items-start justify-center">
        <div className="mx-auto max-w-xl text-center mt-20">
          <h1 className="font-heading text-6xl font-bold text-gold-400">404</h1>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="mt-4 text-slate-400">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/">Return Home</Button>
          </div>
        </div>
      </section>
    </LayoutShell>
  );
}
