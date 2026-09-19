from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
gallery_dir = root / "assets" / "gallery"
manifest_path = gallery_dir / "manifest.json"

entries = []
for f in sorted(gallery_dir.glob("*")):
    if f.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        continue
    rel = f.relative_to(root).as_posix()
    name = f.stem
    entries.append({"src": rel, "title": name, "alt": name})

manifest_path.write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"wrote {manifest_path} ({len(entries)} items)")
