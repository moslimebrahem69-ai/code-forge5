import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

function safeNext(value: unknown): string {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({ next: safeNext(s.next) }),
  head: () => ({
    meta: [
      { title: "تسجيل الدخول | Code Forge" },
      { name: "description", content: "سجّل الدخول إلى Code Forge للوصول إلى المحتوى والأدوات المرتبطة بحسابك." },
      { property: "og:title", content: "تسجيل الدخول | Code Forge" },
      { property: "og:description", content: "سجّل الدخول إلى Code Forge للوصول إلى المحتوى والأدوات المرتبطة بحسابك." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(next);
    });
  }, [next]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setMsg(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setErr(error.message);
      window.location.replace(next);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + next },
      });
      setBusy(false);
      if (error) return setErr(error.message);
      if (!data.session) return setMsg("تم إنشاء الحساب — راجع بريدك لتأكيد الحساب.");
      window.location.replace(next);
    }
  }

  async function google() {
    setErr(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/auth?next=" + encodeURIComponent(next),
    });
    if (result.error) return setErr(String(result.error.message ?? result.error));
    if (result.redirected) return;
    window.location.replace(next);
  }

  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/70 backdrop-blur p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          {mode === "signin" ? "تسجيل الدخول" : "إنشاء حساب"}
        </h1>
        <p className="text-sm text-muted-foreground mb-6">Code Forge</p>

        <button
          type="button"
          onClick={() => void google()}
          className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition"
        >
          المتابعة باستخدام Google
        </button>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> أو <span className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={submit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الإلكتروني"
            className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {err && <p role="alert" className="text-sm text-destructive">{err}</p>}
          {msg && <p className="text-sm text-primary">{msg}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {busy ? "..." : mode === "signin" ? "دخول" : "إنشاء حساب"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-5 w-full text-sm text-muted-foreground hover:text-foreground"
        >
          {mode === "signin" ? "ليس لديك حساب؟ إنشاء حساب" : "لديك حساب؟ تسجيل الدخول"}
        </button>

        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="mt-2 w-full text-xs text-muted-foreground hover:text-foreground"
        >
          العودة للرئيسية
        </button>
      </div>
    </main>
  );
}
