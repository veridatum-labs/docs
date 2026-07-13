import fs from "node:fs";
import path from "node:path";
import AdmZip from "adm-zip";

const root = process.cwd();
const zipPath = path.join(root, "export.zip");
const outputDir = path.join(root, "out");

if (!fs.existsSync(zipPath)) {
  throw new Error("Missing export.zip. Run `mintlify export --output export.zip` first.");
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const zip = new AdmZip(zipPath);
zip.extractAllTo(outputDir, true);

fs.rmSync(zipPath, { force: true });

