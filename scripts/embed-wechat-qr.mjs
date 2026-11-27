#!/usr/bin/env node
/**
 * 一键无损嵌入个人微信二维码图片至 connect-dark.svg 与 connect-light.svg
 * 用法：node scripts/embed-wechat-qr.mjs /path/to/your-wechat-qr.png
 */
import fs from "node:fs";
import path from "node:path";

const imgPath = process.argv[2];
if (!imgPath || !fs.existsSync(imgPath)) {
  console.error("请传入有效的微信二维码图片路径，例如：node scripts/embed-wechat-qr.mjs ./wechat.png");
  process.exit(1);
}

const ext = path.extname(imgPath).toLowerCase();
const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : ext === ".webp" ? "image/webp" : "image/png";
const b64 = fs.readFileSync(imgPath).toString("base64");
const dataUri = `data:${mime};base64,${b64}`;

const buildSlot = (isDark) => `<!-- Right WeChat QR Slot (WECHAT_QR_SLOT_START) -->
  <g transform="translate(972, 18)">
    <rect x="0" y="0" width="178" height="178" rx="16" fill="${isDark ? "#FFFFFF" : "#FFFFFF"}" stroke="#10B981" stroke-width="2" />
    <image href="${dataUri}" x="8" y="8" width="162" height="162" preserveAspectRatio="xMidYMid slice" />
  </g>
  <!-- WECHAT_QR_SLOT_END -->`;

for (const [file, isDark] of [
  ["assets/connect-dark.svg", true],
  ["assets/connect-light.svg", false],
]) {
  const full = path.resolve(process.cwd(), file);
  const raw = fs.readFileSync(full, "utf8");
  const updated = raw.replace(
    /<!-- Right WeChat QR Slot \(WECHAT_QR_SLOT_START\) -->[\s\S]*?<!-- WECHAT_QR_SLOT_END -->/,
    buildSlot(isDark)
  );
  fs.writeFileSync(full, updated);
  console.log(`[OK] 已将微信二维码无损嵌入 ${file}`);
}
