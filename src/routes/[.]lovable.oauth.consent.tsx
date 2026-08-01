import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = {
  redirect_url?: string;
  redirect_to?: string;
  client?: { name?: string; client_id?: string };
  redirect_uri?: string;
  scope?: string;
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/auth", search: { next: location.pathname + location.searchStr } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  errorComponent: ({ error }) => (
    <main dir="rtl" className="min-h-screen flex items-center justify-center bg-background px-4">
      <p className="text-sm text-destructive">
        تعذّر تحميل طلب الصلاحية: {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
  component: Consent,
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientName = details?.client?.name ?? "التطبيق";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorization_id)
      : await oauth().denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      return setError(error.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("لم يتم إرجاع رابط إعادة التوجيه من خادم الصلاحيات.");
    }
    window.location.href = target;
  }

  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/70 backdrop-blur p-8 shadow-xl">
        <h1 className="text-xl font-bold text-foreground mb-2">ربط {clientName} بحسابك في Code Forge</h1>
        <p className="text-sm text-muted-foreground mb-4">
          سيتمكّن {clientName} من استخدام أدوات Code Forge نيابةً عنك أثناء تسجيل دخولك.
        </p>
        {details?.redirect_uri && (
          <p className="text-xs text-muted-foreground mb-2 break-all">وجهة الرجوع: {details.redirect_uri}</p>
        )}
        {details?.scope && (
          <p className="text-xs text-muted-foreground mb-4">الصلاحيات المطلوبة: {details.scope}</p>
        )}
        <p className="text-xs text-muted-foreground mb-6">
          هذا لا يتجاوز صلاحيات التطبيق أو سياسات الحماية في قاعدة البيانات.
        </p>
        {error && <p role="alert" className="text-sm text-destructive mb-3">{error}</p>}
        <div className="flex gap-3">
          <button
            disabled={busy}
            onClick={() => void decide(true)}
            className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            موافقة
          </button>
          <button
            disabled={busy}
            onClick={() => void decide(false)}
            className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground disabled:opacity-60"
          >
            إلغاء
          </button>
        </div>
      </div>
    </main>
  );
}
