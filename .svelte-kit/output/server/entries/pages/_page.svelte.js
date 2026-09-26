import { W as sanitize_props, X as rest_props, Y as attributes, Z as clsx, V as slot, _ as element, $ as bind_props, a0 as store_get, a1 as head, a2 as attr_style, a3 as ensure_array_like, a4 as attr_class, a5 as stringify, a6 as attr, a7 as unsubscribe_stores } from "../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
import { g as getContext, f as fallback, e as escape_html } from "../../chunks/context.js";
import { w as writable } from "../../chunks/index.js";
function Button($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  $$renderer.component(($$renderer2) => {
    const group = getContext("group");
    let pill = fallback($$props["pill"], false);
    let outline = fallback($$props["outline"], false);
    let size = fallback($$props["size"], group ? "sm" : "md");
    let href = fallback($$props["href"], () => void 0, true);
    let type = fallback($$props["type"], "button");
    let color = fallback($$props["color"], group ? outline ? "dark" : "alternative" : "primary");
    let shadow = fallback($$props["shadow"], false);
    let tag = fallback($$props["tag"], "button");
    let checked = fallback($$props["checked"], () => void 0, true);
    let disabled = fallback($$props["disabled"], false);
    const colorClasses = {
      alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
      blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
      dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
      green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
      light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
      primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
      purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
      red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
      yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
      none: ""
    };
    const colorCheckedClasses = {
      alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
      blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
      dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
      green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
      light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
      primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
      purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
      red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
      yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
      none: ""
    };
    const coloredFocusClasses = {
      alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
      blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
      dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
      green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
      light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
      primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
      purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
      red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
      yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
      none: ""
    };
    const coloredShadowClasses = {
      alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
      blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
      dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
      green: "shadow-green-500/50 dark:shadow-green-800/80",
      light: "shadow-gray-500/50 dark:shadow-gray-800/80",
      primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
      purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
      red: "shadow-red-500/50 dark:shadow-red-800/80 ",
      yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
      none: ""
    };
    const outlineClasses = {
      alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
      blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
      dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
      green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
      light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
      primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
      purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
      red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
      yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
      none: ""
    };
    const sizeClasses = {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    };
    const hasBorder = () => outline || color === "alternative" || color === "light";
    let buttonClass;
    buttonClass = twMerge(
      "text-center font-medium",
      group ? "focus-within:ring-2" : "focus-within:ring-4",
      group && "focus-within:z-10",
      group || "focus-within:outline-hidden",
      "inline-flex items-center justify-center " + sizeClasses[size],
      outline && checked && "border dark:border-gray-900",
      outline && checked && colorCheckedClasses[color],
      outline && !checked && outlineClasses[color],
      !outline && checked && colorCheckedClasses[color],
      !outline && !checked && colorClasses[color],
      color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"),
      outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
      coloredFocusClasses[color],
      hasBorder() && group && "not-first:-ms-px",
      group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg",
      shadow && "shadow-lg",
      shadow && coloredShadowClasses[color],
      disabled && "cursor-not-allowed opacity-50",
      $$sanitized_props.class
    );
    if (href && !disabled) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attributes({
        href,
        ...$$restProps,
        class: clsx(buttonClass),
        role: "button"
      })}><!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]--></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (tag === "label") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<label${attributes({ ...$$restProps, class: clsx(buttonClass) })}><!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]--></label>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (tag === "button") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button${attributes({ type, ...$$restProps, disabled, class: clsx(buttonClass) })}><!--[-->`);
          slot($$renderer2, $$props, "default", {});
          $$renderer2.push(`<!--]--></button>`);
        } else {
          $$renderer2.push("<!--[!-->");
          element(
            $$renderer2,
            tag,
            () => {
              $$renderer2.push(`${attributes({ ...$$restProps, class: clsx(buttonClass) })}`);
            },
            () => {
              $$renderer2.push(`<!--[-->`);
              slot($$renderer2, $$props, "default", {});
              $$renderer2.push(`<!--]-->`);
            }
          );
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      pill,
      outline,
      size,
      href,
      type,
      color,
      shadow,
      tag,
      checked,
      disabled
    });
  });
}
const STORAGE_KEY = "conference-cue-desk-v1";
const speakers = [
  { id: "sp-1", name: "Dr. Maya Chen", title: "首席气候科学家", language: "英语 → 中文", color: "#0f766e" },
  { id: "sp-2", name: "刘启明", title: "城市韧性研究员", language: "中文 → 英语", color: "#b45309" },
  { id: "sp-3", name: "Prof. Daniel Ortiz", title: "公共卫生政策顾问", language: "西班牙语 → 中文", color: "#6d28d9" },
  { id: "sp-4", name: "佐藤 美咲", title: "社区能源设计师", language: "日语 → 中文", color: "#be123c" }
];
const sessions = [
  { id: "se-1", order: 1, time: "09:00", title: "开幕式与议程说明", speakerId: "sp-2", room: "主会场 A", status: "done" },
  { id: "se-2", order: 2, time: "09:20", title: "城市热岛与适应性基础设施", speakerId: "sp-1", room: "主会场 A", status: "live" },
  { id: "se-3", order: 3, time: "10:05", title: "社区健康数据的地方行动", speakerId: "sp-3", room: "主会场 A", status: "upcoming" },
  { id: "se-4", order: 4, time: "10:45", title: "分布式能源与社区共治", speakerId: "sp-4", room: "主会场 A", status: "upcoming" }
];
const terms = [
  { id: "term-1", source: "urban heat island", target: "城市热岛", note: "首次出现完整译出，后可简称热岛", speakerId: "sp-1", priority: "high" },
  { id: "term-2", source: "resilience", target: "韧性", note: "不使用“恢复力”", speakerId: "sp-1", priority: "high" },
  { id: "term-3", source: "co-benefit", target: "协同效益", note: "环境与健康共同收益", speakerId: "sp-1", priority: "normal" },
  { id: "term-4", source: "distributed energy resource", target: "分布式能源资源", note: "缩写 DER", speakerId: "sp-4", priority: "high" },
  { id: "term-5", source: "health equity", target: "健康公平", note: "不译为健康平等", speakerId: "sp-3", priority: "high" }
];
function initialCues() {
  const now = Date.now();
  return [
    { id: "cue-101", sessionId: "se-2", speakerId: "sp-1", text: "The urban heat island effect is not evenly distributed across a city.", receivedAt: now - 36e3, status: "confirmed", manual: false, offline: false, delaySeconds: 4, duplicateOf: null, followupText: "", tags: ["城市热岛"], originSessionId: null, carriedAt: null },
    { id: "cue-102", sessionId: "se-2", speakerId: "sp-1", text: "Neighborhoods with less tree canopy can be several degrees warmer at night.", receivedAt: now - 19e3, status: "confirmed", manual: false, offline: false, delaySeconds: 6, duplicateOf: null, followupText: "补译：“夜间温差可达数摄氏度。”", tags: ["树冠覆盖率"], originSessionId: null, carriedAt: null },
    { id: "cue-103", sessionId: "se-2", speakerId: "sp-1", text: "Our resilience strategy links cooling corridors with public health investments.", receivedAt: now - 9e3, status: "pending", manual: false, offline: false, delaySeconds: 11, duplicateOf: null, followupText: "", tags: ["韧性", "协同效益"], originSessionId: null, carriedAt: null },
    { id: "cue-104", sessionId: "se-2", speakerId: "sp-1", text: "That data also reveals health equity gaps between districts.", receivedAt: now - 2500, status: "pending", manual: false, offline: false, delaySeconds: 4, duplicateOf: null, followupText: "", tags: ["健康公平"], originSessionId: null, carriedAt: null }
  ];
}
function initialArchives() {
  const now = Date.now();
  return [
    {
      id: "arc-se-1",
      sessionId: "se-1",
      title: "开幕式与议程说明",
      time: "09:00",
      room: "主会场 A",
      speakerId: "sp-2",
      sealedAt: now - 24e5,
      summary: { received: 3, confirmed: 2, avgDelay: 5, duplicates: 0 },
      cues: [
        { id: "cue-91", sessionId: "se-1", speakerId: "sp-2", text: "欢迎各位来到本届城市韧性大会，请先确认同传频道。", receivedAt: now - 27e5, status: "confirmed", manual: false, offline: false, delaySeconds: 3, duplicateOf: null, followupText: "", tags: [], originSessionId: null, carriedAt: null },
        { id: "cue-92", sessionId: "se-1", speakerId: "sp-2", text: "Channel one is Chinese, channel two is English. Please test your volume.", receivedAt: now - 268e4, status: "confirmed", manual: false, offline: false, delaySeconds: 5, duplicateOf: null, followupText: "", tags: [], originSessionId: null, carriedAt: null },
        { id: "cue-93", sessionId: "se-1", speakerId: "sp-2", text: "开幕式结束后，请移步侧厅服务台领取同传设备。", receivedAt: now - 265e4, status: "followup", manual: false, offline: false, delaySeconds: 7, duplicateOf: null, followupText: "设备领取地点口误，需与场务再确认后补译。", tags: [], originSessionId: null, carriedAt: null }
      ]
    }
  ];
}
function demoState() {
  return {
    speakers,
    sessions,
    terms,
    cues: initialCues(),
    reminders: [],
    archives: initialArchives(),
    activeCueId: "cue-103",
    fontScale: 100,
    announcements: [
      { id: "ann-1", level: "info", text: "十点整有消防联动测试，请提醒会场人员保持镇定。", visibleOnStage: false, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
      { id: "ann-2", level: "urgent", text: "请下一位发言人提前到侧台候场。", visibleOnStage: false, createdAt: (/* @__PURE__ */ new Date()).toISOString() }
    ],
    online: true,
    liveSimulation: true,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function normalize(state) {
  if (!Array.isArray(state.archives)) state.archives = [];
  const liveId = state.sessions.find((item) => item.status === "live")?.id || "";
  state.cues.forEach((cue) => {
    if (!cue.sessionId) cue.sessionId = liveId;
    if (cue.originSessionId === void 0) cue.originSessionId = null;
    if (cue.carriedAt === void 0) cue.carriedAt = null;
  });
  return state;
}
function loadState() {
  if (typeof localStorage === "undefined") return demoState();
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? normalize({ ...demoState(), ...JSON.parse(saved), online: navigator.onLine }) : demoState();
  } catch {
    return demoState();
  }
}
const history = [];
const future = [];
const desk = writable(loadState());
const canUndo = () => history.length > 0;
const canRedo = () => future.length > 0;
function getDelay(cue, now = Date.now()) {
  return Math.max(cue.delaySeconds, Math.round((now - cue.receivedAt) / 1e3));
}
function speakerName(state, id) {
  return state.speakers.find((item) => item.id === id)?.name || "未指定";
}
function sessionTitle(state, id) {
  return state.sessions.find((item) => item.id === id)?.title || state.archives.find((item) => item.sessionId === id)?.title || "上一场";
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentSession, activeCue, pendingCount, offlineCount, lateCount, duplicateCount, activeSpeaker, activeTerms, unreadReminders, carryableCount;
    let tab = "live";
    let now = Date.now();
    let followup = "";
    function formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
    }
    function delayClass(seconds) {
      if (seconds > 12) return "bg-red-100 text-red-800 border-red-200";
      if (seconds > 8) return "bg-amber-100 text-amber-900 border-amber-200";
      return "bg-emerald-50 text-emerald-800 border-emerald-200";
    }
    function statusLabel(status) {
      return { pending: "待传", confirmed: "已确认", followup: "有补充" }[status];
    }
    currentSession = store_get($$store_subs ??= {}, "$desk", desk).sessions.find((item) => item.status === "live") || store_get($$store_subs ??= {}, "$desk", desk).sessions[0];
    activeCue = store_get($$store_subs ??= {}, "$desk", desk).cues.find((item) => item.id === store_get($$store_subs ??= {}, "$desk", desk).activeCueId) || store_get($$store_subs ??= {}, "$desk", desk).cues.at(-1);
    pendingCount = store_get($$store_subs ??= {}, "$desk", desk).cues.filter((item) => item.status === "pending").length;
    offlineCount = store_get($$store_subs ??= {}, "$desk", desk).cues.filter((item) => item.offline).length;
    lateCount = store_get($$store_subs ??= {}, "$desk", desk).cues.filter((item) => getDelay(item, now) > 8 && item.status !== "confirmed").length;
    duplicateCount = store_get($$store_subs ??= {}, "$desk", desk).cues.filter((item) => item.duplicateOf).length;
    activeSpeaker = store_get($$store_subs ??= {}, "$desk", desk).speakers.find((item) => item.id === activeCue?.speakerId);
    activeTerms = store_get($$store_subs ??= {}, "$desk", desk).terms.filter((item) => item.speakerId === activeCue?.speakerId || activeCue?.tags.includes(item.target));
    unreadReminders = store_get($$store_subs ??= {}, "$desk", desk).reminders.filter((item) => !item.acknowledged);
    carryableCount = store_get($$store_subs ??= {}, "$desk", desk).archives.reduce((count, archive) => count + archive.cues.filter((item) => item.status === "followup" && !item.carriedAt).length, 0);
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>会议同传提示台 · Live Cue Desk</title>`);
      });
    });
    $$renderer2.push(`<a class="fixed left-2 top-2 z-[100] -translate-y-20 rounded-lg bg-white px-4 py-2 font-bold shadow focus:translate-y-0" href="#main">跳到主要内容</a> <div class="min-h-full bg-paper text-ink"${attr_style(`font-size:${store_get($$store_subs ??= {}, "$desk", desk).fontScale}%`)}><header class="sticky top-0 z-40 border-b border-slate-800 bg-ink text-white shadow-xl"><div class="mx-auto flex max-w-[1800px] flex-wrap items-center gap-3 px-4 py-3"><div class="mr-3 flex items-center gap-3"><div class="grid h-10 w-10 place-items-center rounded-xl bg-orange-500 font-black">译</div> <div><strong class="block tracking-tight">会议同传提示台</strong><span class="block text-[10px] uppercase tracking-[.16em] text-slate-400">Live Interpreter Cue Desk</span></div></div> <nav class="order-3 flex w-full gap-1 overflow-x-auto rounded-xl bg-slate-800/80 p-1 lg:order-none lg:w-auto" aria-label="工作区"><!--[-->`);
    const each_array = ensure_array_like([
      ["live", "现场传译"],
      ["backstage", "后台准备"],
      ["terms", "术语与通知"],
      ["offline", "离线暂存"],
      ["archive", "场次档案"]
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`focus-ring whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold transition ${stringify(tab === item[0] ? "bg-white text-ink shadow" : "text-slate-300 hover:bg-slate-700")}`)}${attr("aria-current", tab === item[0] ? "page" : void 0)}>${escape_html(item[1])} `);
      if (item[0] === "live" && pendingCount) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="ml-2 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] text-white">${escape_html(pendingCount)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (item[0] === "offline" && offlineCount) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="ml-2 rounded-full bg-amber-500 px-1.5 py-0.5 text-[10px] text-white">${escape_html(offlineCount)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (item[0] === "archive" && carryableCount) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="ml-2 rounded-full bg-violet-500 px-1.5 py-0.5 text-[10px] text-white">${escape_html(carryableCount)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="ml-auto flex flex-wrap items-center gap-2"><span${attr_class(`rounded-full border px-3 py-1.5 text-[11px] font-bold ${stringify(store_get($$store_subs ??= {}, "$desk", desk).online ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300" : "border-amber-500/40 bg-amber-500/15 text-amber-300")}`)}><span${attr_class(`mr-2 inline-block h-2 w-2 rounded-full ${stringify(store_get($$store_subs ??= {}, "$desk", desk).online ? "bg-emerald-400" : "bg-amber-400")}`)}></span>${escape_html(store_get($$store_subs ??= {}, "$desk", desk).online ? "现场连接正常" : "离线 · 本地暂存")}</span> <div class="flex items-center rounded-lg bg-slate-800 p-1"><button class="focus-ring h-7 w-7 rounded text-lg" title="缩小字号">−</button> <span class="w-12 text-center text-[11px]">${escape_html(store_get($$store_subs ??= {}, "$desk", desk).fontScale)}%</span> <button class="focus-ring h-7 w-7 rounded text-lg" title="放大字号">＋</button></div> `);
    Button($$renderer2, {
      size: "sm",
      color: "light",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->快捷键`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div></header> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <main id="main" class="mx-auto max-w-[1800px] p-4 lg:p-6">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-4 flex flex-wrap items-end justify-between gap-4"><div><p class="text-[10px] font-black uppercase tracking-[.18em] text-teal-700">当前场次 · ${escape_html(store_get($$store_subs ??= {}, "$desk", desk).online ? "LIVE" : "OFFLINE MODE")}</p> <h1 class="mt-1 text-2xl font-black tracking-tight lg:text-4xl">${escape_html(currentSession?.title)}</h1> <p class="mt-2 text-sm text-slate-500">${escape_html(currentSession?.time)} · ${escape_html(currentSession?.room)} · ${escape_html(store_get($$store_subs ??= {}, "$desk", desk).speakers.find((item) => item.id === currentSession?.speakerId)?.name)}</p></div> <div class="grid grid-cols-3 gap-2 text-center"><div class="rounded-xl border bg-white px-4 py-2"><strong class="block text-xl">${escape_html(pendingCount)}</strong><span class="text-[10px] text-slate-500">待传</span></div> <div class="rounded-xl border bg-white px-4 py-2"><strong class="block text-xl text-amber-700">${escape_html(lateCount)}</strong><span class="text-[10px] text-slate-500">偏高延迟</span></div> <div class="rounded-xl border bg-white px-4 py-2"><strong class="block text-xl text-red-700">${escape_html(duplicateCount)}</strong><span class="text-[10px] text-slate-500">疑似重复</span></div></div></div> <div class="grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,.75fr)]"><div class="space-y-4"><section class="overflow-hidden rounded-2xl border border-teal-800 bg-[#0d3b36] text-white shadow-lg"><div class="flex items-center justify-between border-b border-white/10 px-4 py-3"><div><span class="text-[10px] font-black uppercase tracking-[.16em] text-teal-200">现场可见内容</span><h2 class="mt-1 font-bold">舞台字幕与紧急通知</h2></div> <span class="rounded-full bg-teal-600 px-2.5 py-1 text-[10px] font-black text-white">STAGE OUTPUT</span></div> <div class="space-y-3 p-4"><!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$desk", desk).announcements.filter((item) => item.visibleOnStage));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array_1[$$index_1];
        $$renderer2.push(`<div class="rounded-xl border border-orange-300/30 bg-orange-500/15 p-3"><strong class="text-xs text-orange-200">紧急通知</strong><p class="mt-1 text-lg font-bold">${escape_html(item.text)}</p></div>`);
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$desk", desk).cues.filter((item) => item.status === "confirmed").slice(-2));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let cue = each_array_2[$$index_2];
        $$renderer2.push(`<div class="rounded-xl bg-white/10 p-3"><div class="mb-1 flex justify-between text-[10px] text-teal-200"><span>${escape_html(speakerName(store_get($$store_subs ??= {}, "$desk", desk), cue.speakerId))}</span><span>${escape_html(formatTime(cue.receivedAt))}</span></div> <p class="text-base leading-relaxed lg:text-lg">${escape_html(cue.text)}</p></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (!store_get($$store_subs ??= {}, "$desk", desk).cues.some((item) => item.status === "confirmed") && !store_get($$store_subs ??= {}, "$desk", desk).announcements.some((item) => item.visibleOnStage)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="py-5 text-center text-sm text-teal-100/60">确认传译或发布通知后，现场可见内容将在这里出现。</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></section> <section class="rounded-2xl border bg-white shadow-sm"><div class="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3"><div><span class="text-[10px] font-black uppercase tracking-[.16em] text-slate-400">后台传译队列 · 仅本场内容</span><h2 class="mt-1 font-bold">待确认与遗漏补充</h2></div> <div class="flex items-center gap-3 text-xs text-slate-500"><span>自动接入</span><button type="button" role="switch" aria-label="自动接入现场文字"${attr("aria-checked", store_get($$store_subs ??= {}, "$desk", desk).liveSimulation)}${attr_class(`focus-ring h-6 w-11 rounded-full p-1 transition ${stringify(store_get($$store_subs ??= {}, "$desk", desk).liveSimulation ? "bg-teal-600" : "bg-slate-300")}`)}><span${attr_class(`block h-4 w-4 rounded-full bg-white transition ${stringify(store_get($$store_subs ??= {}, "$desk", desk).liveSimulation ? "translate-x-5" : "")}`)}></span></button></div></div> <div class="max-h-[600px] space-y-2 overflow-y-auto p-3 scrollbar-thin"><!--[-->`);
      const each_array_3 = ensure_array_like(store_get($$store_subs ??= {}, "$desk", desk).cues);
      for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
        let cue = each_array_3[index];
        $$renderer2.push(`<article role="button" tabindex="0"${attr_class(`cue-enter cursor-pointer rounded-xl border p-3 transition ${stringify(cue.id === store_get($$store_subs ??= {}, "$desk", desk).activeCueId ? "border-teal-600 bg-teal-50 shadow-md" : "border-slate-200 bg-white hover:border-slate-300")}`)}><div class="flex flex-wrap items-start gap-3"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-900 text-xs font-black text-white">${escape_html(index + 1)}</span> <div class="min-w-0 flex-1"><div class="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-bold"><span class="rounded-md bg-slate-100 px-2 py-1 text-slate-600">${escape_html(speakerName(store_get($$store_subs ??= {}, "$desk", desk), cue.speakerId))}</span> <span${attr_class(`rounded-md border px-2 py-1 ${stringify(delayClass(getDelay(cue, now)))}`)}>${escape_html(formatTime(cue.receivedAt))} · 延迟 ${escape_html(getDelay(cue, now))}s</span> <span${attr_class(`rounded-md px-2 py-1 ${stringify(cue.status === "confirmed" ? "bg-emerald-100 text-emerald-800" : cue.status === "followup" ? "bg-amber-100 text-amber-900" : "bg-blue-100 text-blue-800")}`)}>${escape_html(statusLabel(cue.status))}</span> `);
        if (cue.offline) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="rounded-md bg-amber-100 px-2 py-1 text-amber-900">离线暂存</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (cue.manual) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="rounded-md bg-slate-100 px-2 py-1 text-slate-600">手工</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (cue.originSessionId) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="rounded-md bg-violet-100 px-2 py-1 text-violet-800">顺延自「${escape_html(sessionTitle(store_get($$store_subs ??= {}, "$desk", desk), cue.originSessionId))}」</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <p class="text-sm leading-6 lg:text-base">${escape_html(cue.text)}</p> `);
        if (cue.duplicateOf) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-2 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800"><span><strong>疑似重复：</strong>与第 ${escape_html(store_get($$store_subs ??= {}, "$desk", desk).cues.findIndex((item) => item.id === cue.duplicateOf) + 1)} 条高度相似</span> <button class="font-black underline">确认非重复</button></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (cue.followupText) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900"><strong>补译：</strong>${escape_html(cue.followupText)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="mt-2 flex flex-wrap gap-1"><!--[-->`);
        const each_array_4 = ensure_array_like(cue.tags);
        for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
          let tag = each_array_4[$$index_3];
          $$renderer2.push(`<span class="rounded-full bg-teal-100 px-2 py-1 text-[10px] font-bold text-teal-800">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div></div></div></article>`);
      }
      $$renderer2.push(`<!--]--></div></section></div> <div class="space-y-4"><section class="rounded-2xl border bg-white p-4 shadow-sm"><div class="mb-3 flex items-start justify-between gap-3"><div><span class="text-[10px] font-black uppercase tracking-[.16em] text-teal-700">当前口译位</span><h2 class="mt-1 font-bold">${escape_html(activeSpeaker?.name || "等待队列")}</h2><p class="text-xs text-slate-500">${escape_html(activeSpeaker?.language)}</p></div> <div class="flex gap-1"><button class="focus-ring rounded-lg border px-2 py-1 text-xs" aria-label="上一条">↑</button><button class="focus-ring rounded-lg border px-2 py-1 text-xs" aria-label="下一条">↓</button></div></div> `);
      if (activeCue) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="rounded-xl bg-slate-50 p-3"><p class="text-sm leading-6">${escape_html(activeCue.text)}</p><p class="mt-2 text-[10px] text-slate-500">快捷键：J / K 移动，C 确认，T 发送首条高优先术语提醒</p></div> <div class="mt-3 grid grid-cols-2 gap-2">`);
        Button($$renderer2, {
          color: "green",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->确认已传 <kbd class="ml-1 text-[10px]">C</kbd>`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!---->`);
        Button($$renderer2, {
          color: "yellow",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->手工补充`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div> <label for="followup-input" class="mt-4 block text-[10px] font-black uppercase tracking-wider text-slate-500">遗漏补译</label> <textarea id="followup-input" class="focus-ring mt-2 w-full rounded-xl border p-3 text-sm" rows="3" placeholder="输入遗漏内容或修正术语…">`);
        const $$body = escape_html(followup);
        if ($$body) {
          $$renderer2.push(`${$$body}`);
        }
        $$renderer2.push(`</textarea> `);
        Button($$renderer2, {
          class: "mt-2 w-full",
          color: "light",
          disabled: !followup.trim(),
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->标记补充完成`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></section> <section class="rounded-2xl border bg-white p-4 shadow-sm"><div class="mb-3 flex items-center justify-between"><div><span class="text-[10px] font-black uppercase tracking-[.16em] text-slate-400">术语提醒</span><h2 class="mt-1 font-bold">当前发言人术语</h2></div><span class="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-black text-emerald-800">${escape_html(activeTerms.length)}</span></div> <div class="space-y-2"><!--[-->`);
      const each_array_5 = ensure_array_like(activeTerms);
      for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
        let term = each_array_5[$$index_5];
        $$renderer2.push(`<div class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"><div><strong class="block text-xs">${escape_html(term.target)}</strong><span class="text-[10px] text-slate-500">${escape_html(term.source)} · ${escape_html(term.note)}</span></div> `);
        Button($$renderer2, {
          size: "xs",
          color: term.priority === "high" ? "yellow" : "light",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->提醒`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div></section> <section class="rounded-2xl border bg-white p-4 shadow-sm"><div class="mb-3 flex items-center justify-between"><h2 class="font-bold">已发送提醒</h2><span class="text-xs text-slate-500">${escape_html(unreadReminders.length)} 条未确认</span></div> <div class="max-h-52 space-y-2 overflow-y-auto"><!--[-->`);
      const each_array_6 = ensure_array_like(store_get($$store_subs ??= {}, "$desk", desk).reminders);
      for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
        let reminder = each_array_6[$$index_6];
        $$renderer2.push(`<div${attr_class(`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs ${stringify(reminder.acknowledged ? "bg-slate-50 text-slate-400" : "bg-teal-50 text-teal-900")}`)}><span><strong>${escape_html(reminder.target)}</strong> · ${escape_html(formatTime(reminder.createdAt))}</span> `);
        if (!reminder.acknowledged) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button class="font-bold underline">已看到</button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (!store_get($$store_subs ??= {}, "$desk", desk).reminders.length) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="py-4 text-center text-xs text-slate-400">尚未发送术语提醒。</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></section></div></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></main> <footer class="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-3 px-4 pb-6 text-[11px] text-slate-500 lg:px-6"><span>本机自动保存 · 最近更新 ${escape_html(new Date(store_get($$store_subs ??= {}, "$desk", desk).updatedAt).toLocaleTimeString("zh-CN", { hour12: false }))}</span><span>后台准备内容与现场可见内容严格分离</span><div class="flex gap-2"><button class="font-bold underline disabled:opacity-40"${attr("disabled", !canUndo(), true)}>撤销</button><button class="font-bold underline disabled:opacity-40"${attr("disabled", !canRedo(), true)}>重做</button></div></footer></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
