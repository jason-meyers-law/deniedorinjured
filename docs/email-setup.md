# Email setup — DeniedOrInjured.com / Jason Meyers Law

How the firm's email authentication and addresses are configured. This
is **configuration state, not secrets** — every DNS value below is
already published in public DNS. No passwords, admin credentials, or
DKIM private keys belong in this file (DKIM private keys never leave
Microsoft; see `DECISIONS.md` §39 for the no-secrets rule).

Both domains share one Microsoft 365 tenant: `JasonMeyersLaw.onmicrosoft.com`.
Mail is Exchange Online. There is one licensed mailbox (Jason); the new
public address is an unlicensed shared mailbox — no extra license cost.

## Verify current state anytime

```sh
for D in jasonmeyerslaw.com deniedorinjured.com; do
  echo "== $D =="
  for R in "$D TXT" "$D MX" "_dmarc.$D TXT" \
           "selector1._domainkey.$D TXT" "selector2._domainkey.$D TXT"; do
    set -- $R
    echo "  $2 $1:"; dig +short "$1" "$2"
  done
done
```

DMARC aggregate reports (the `rua` XML) are summarized into readable
weekly digests by **dmarc.postmarkapp.com** — free, one signup per
domain. Reports contain sending IPs and pass/fail counts only, never
message content. No `ruf` (forensic) tag is used.

---

## jasonmeyerslaw.com — primary sending domain

Hardened 2026-09-01. Previously had no DMARC and no DKIM.

| Record | Name | Value |
|--------|------|-------|
| SPF (TXT) | `@` | `v=spf1 include:spf.protection.outlook.com -all` |
| MX | `@` | `jasonmeyerslaw-com.mail.protection.outlook.com` (pri 0) |
| DKIM | `selector1._domainkey` | CNAME → Microsoft DKIM host (a-v1 format) |
| DKIM | `selector2._domainkey` | CNAME → Microsoft DKIM host (a-v1 format) |
| DMARC (TXT) | `_dmarc` | `v=DMARC1; p=none; sp=reject; rua=mailto:re+s2hkpmedbk1@dmarc.postmarkapp.com` |
| autodiscover | `autodiscover` | CNAME → `autodiscover.outlook.com` |

- DKIM signing is **enabled** in Defender (`security.microsoft.com/dkimv2`).
- **DNS panel gotcha:** registrar is Squarespace, but nameservers are
  custom-delegated to NS1 (`dns1-4.p04.nsone.net`). The Squarespace DNS
  panel is an inactive mirror — records must be edited on the live NS1
  host, or the domain flipped to Squarespace nameservers (the two zones
  matched clean on 2026-09-01, so that flip is low-risk).

## deniedorinjured.com — new site + brand domain

Site is served from GitHub Pages (apex `A` → `185.199.108-111.153`,
`www` → `jason-meyers-law.github.io`). **Never touch those** — they are
the website, not mail. Email added on top of the same tenant.

| Record | Name | Value |
|--------|------|-------|
| SPF (TXT) | `@` | `v=spf1 include:spf.protection.outlook.com -all` |
| MX | `@` | `deniedorinjured-com.mail.protection.outlook.com` (pri 0) |
| DKIM | `selector1._domainkey` | CNAME from the DKIM page — **pending Microsoft refresh** |
| DKIM | `selector2._domainkey` | CNAME from the DKIM page — **pending Microsoft refresh** |
| DMARC (TXT) | `_dmarc` | `v=DMARC1; p=none; sp=reject; rua=mailto:re+si1ln0rizas@dmarc.postmarkapp.com` |
| autodiscover | `autodiscover` | CNAME → `autodiscover.outlook.com` |

- DNS is on **live Squarespace nameservers** (`nsa1-4.squarespacedns.com`)
  — the Squarespace panel is authoritative here (unlike the other domain).
- Replaced the Squarespace parked-domain lockdown (`SPF -all`, strict
  `p=reject`, null DKIM) which had declared "this domain never sends mail."
- Keep the existing `google-site-verification` TXT (Search Console).

### Addresses (DECISIONS.md §4.3)

| Address | Type | Notes |
|---------|------|-------|
| `intake@deniedorinjured.com` | Shared mailbox (unlicensed) | Public intake address on the website. Jason gets Full Access + Send As. |
| `jason@deniedorinjured.com` | Alias on Jason's mailbox | Lands in his existing Outlook. Send-as enabled. |

`jasonmeyerslaw.com` stays Jason's primary SMTP address; the new domain
is a send-capable alias, not a replacement.

### DEFERRED: enable send-from-alias

**Status: not yet done.** Needed only so Jason can *reply as* the
`jason@deniedorinjured.com` **alias**. Everything else already works
without it — the `intake@` shared mailbox sends via its "Send As"
permission, and `jason@` receives fine as an alias. Safe to do anytime.

It is **one tenant-wide setting**, run **once** from any admin machine —
not per-user, not per-device, nothing installed on Jason's computers.
It applies to the whole Microsoft 365 organization server-side:

```powershell
Connect-ExchangeOnline    # sign in as a tenant admin
Set-OrganizationConfig -SendFromAliasEnabled $true
```

There is no admin-center GUI toggle for this — PowerShell only. The
`ExchangeOnlineManagement` module runs on PowerShell 7, which is
cross-platform, so Windows is not required.

> **Note:** the Azure Cloud Shell (shell.azure.com) route does **not**
> work here — it requires a paid Azure subscription with a storage
> account, which the tenant does not have. Use a local PowerShell 7.

**Local Linux / macOS / WSL — no sudo needed.** On this repo's WSL box
PowerShell was installed to `~/.local` (see "No-sudo install" below).
Connect and apply:
```bash
~/.local/bin/pwsh -c 'Connect-ExchangeOnline -Device; \
                      Set-OrganizationConfig -SendFromAliasEnabled $true'
```
`Connect-ExchangeOnline -Device` prints a code and the URL
<https://login.microsoft.com/device> — open it in any browser, enter the
code, and sign in as a **tenant admin** (Exchange or Global Admin role).
The command then applies the setting and returns.

**No-sudo install of PowerShell 7 (what was done here):** the machine
had no `pwsh` and no passwordless sudo, so apt/snap were unusable. Steps:
1. Download the self-contained tarball from the PowerShell GitHub
   releases (`powershell-<ver>-linux-x64.tar.gz`), extract to
   `~/.local/microsoft/powershell/7`.
2. PowerShell needs `libicu`; with no sudo, download the distro's
   `libicuNN` .deb, `dpkg-deb -x` it, and copy `libicu*.so*` into
   `~/.local/lib/icu`.
3. Wrap `pwsh` so it finds those libs — `~/.local/bin/pwsh` is a script
   that sets `LD_LIBRARY_PATH=~/.local/lib/icu` before exec'ing the real
   binary. (Alternatively run with `DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1`
   to skip libicu, but real ICU is more reliable for `Connect-ExchangeOnline`.)
4. `pwsh -c 'Install-Module ExchangeOnlineManagement -Scope CurrentUser -Force'`.

**Verify it took** (either option):
```powershell
Get-OrganizationConfig | Select-Object SendFromAliasEnabled
```
Then in Outlook on the web / new Outlook, the alias appears in the
**From** dropdown when composing (classic desktop Outlook may need
Options → Show From).

---

## DMARC ramp — both domains

Start at `p=none` (monitor only), watch Postmark digests, then tighten.
Only advance when reports show every legitimate sender passing.

| Stage | Record change | Earliest |
|-------|---------------|----------|
| 1. Monitor | `p=none` | done (2026-09-01) |
| 2. Quarantine | `p=quarantine; pct=25` → `pct=100` | ~2026-09-22 |
| 3. Reject | `p=reject` | ~2026-10-06 |

`deniedorinjured.com` can ramp faster than the primary domain (fewer
unknown senders / no legacy mail).

**Blocker before advancing past `p=none`:** confirm **Clio Grow** is not
sending as either domain and failing (the firm uses Clio — `PLAN.md`
§23). If it is, add Clio's SPF include and DKIM before quarantine, or
automated intake mail gets spam-foldered. Watch the digests for it.

## Go-live gate

`intake@deniedorinjured.com` renders on the contact page as a `mailto:`
link but the site stays `noindex` until `STAGING = false`
(`packages/site/src/lib/site.ts`) per `docs/launch-qa.md`. The shared
mailbox must exist and receive before that switch.
