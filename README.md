# OverFive — Gaming Launcher Website

[English](README.md) | [فارسی](README.fa.md)

**[Live demo](https://astheking.github.io/OverFive-Website/)** · **[Source code](https://github.com/ASTHEKING/OverFive-Website)**

A responsive, bilingual website built as a frontend concept for an OverFive / FiveM roleplay launcher. The intended client did not launch the project; it is published here as a **portfolio demonstration**, not as an official launcher or active gaming service.

## Features

- Five pages: Home, About, Launcher Demo, Servers, and Gallery.
- English and Persian interface with right-to-left support for Persian.
- Light/dark theme and responsive navigation.
- Server browser with search, filters, and sorting using **local sample data**.
- Image gallery with a full-size image viewer and a JSON image manifest.
- Optimized background video on the homepage.
- Launcher download button intentionally disabled for this portfolio version.

## Tech stack

HTML5 · CSS3 · Vanilla JavaScript · JSON · Python (optional gallery-manifest utility)

No frontend framework or build step is required. GitHub Pages hosts the static website.

## Run locally

From the project directory (the one containing `index.html`), run:

```bash
python -m http.server 8000
```

Then visit **http://localhost:8000/**. If your system uses `python3` instead of `python`, run `python3 -m http.server 8000`.

Using a local HTTP server is recommended because the website loads gallery and server data from JSON files.

## Gallery images

The gallery includes three bundled images and reads `assets/gallery/manifest.json` when available. To add an image:

1. Put the image in `assets/gallery/` (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.gif`).
2. From the project directory, run `python scripts/gen_gallery_manifest.py` (or use `python3`).
3. Commit both the new image and the updated `assets/gallery/manifest.json`.

## Project scope

This repository contains the **website frontend only**. The server browser uses example data, and descriptions of launcher features on the pages are part of the original concept—not claims that a working launcher, live API, anti-cheat system, or downloadable installer is available. The launcher download is disabled.

## Credits and usage

Repository: [@ASTHEKING](https://github.com/ASTHEKING). This was an unlaunched client project presented as a portfolio demo; the original branding and other project assets may belong to their respective owners.

**No open-source license has been added.** Public access to the repository does not, by itself, grant general permission to reuse its code or assets.
