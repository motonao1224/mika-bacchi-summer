import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the summer festival invitation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ja"/i);
  assert.match(html, /<title>Mika × Bacchi \| SUMMER FESTIVAL 2026<\/title>/i);
  assert.match(html, /美伽ちゃんへ。/);
  assert.match(html, /深川八幡祭り/);
  assert.match(html, /一緒に行こう。/);
  assert.match(html, /2026年8月16日/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("includes all eight requested sections", async () => {
  const response = await render();
  const html = await response.text();
  const sectionCount = (html.match(/<section\b/g) ?? []).length;

  assert.equal(sectionCount, 8);
  assert.match(html, /暑さ/);
  assert.match(html, /水濡れ/);
  assert.match(html, /浴衣/);
  assert.match(html, /Mika <i>×<\/i> Bacchi/);
});
