# OverFive — Gaming Launcher Website (Portfolio Demo)

A static, responsive multi-page website created for an OverFive/FiveM roleplay launcher concept. This project was not launched by the intended client and is shown here as a **portfolio demonstration**, not an official product or active service.

## What is included

- Five HTML pages: Home, About, Launcher Demo, Servers, Gallery.
- HTML, CSS, and vanilla JavaScript frontend with English and Persian language support.
- Theme switching, server search/filter/sort using local **sample** data, and an image gallery.
- A compressed background video and the gallery-manifest Python utility.

**No launcher, installer, anti-cheat package, live server backend, or official downloads are included.** The download button on the Launcher Demo page is intentionally disabled.

## Run locally

From the directory containing `index.html`:

```sh
python -m http.server 8000
```

Open <http://localhost:8000/>. A local server is recommended for any JavaScript that reads JSON files.

## Live demo

Add your GitHub Pages link here after publishing, e.g. `https://YOUR-USERNAME.github.io/overfive-website/`.

## Scope and project status

This repository documents a frontend portfolio project. Page content about launcher capabilities, server availability, and product features reflects the original concept and should not be taken as evidence of a deployed service. Server listings are sample demonstration data.

## Authorship and publication

Add your name and your personal contributions here. Before making this repository public, confirm you have permission to publish any client branding, code, images, and video. No open-source license is granted by this README; add a license only if you hold the rights and wish to grant reuse permissions.

## Gallery images

The gallery displays the three bundled screenshots when opened directly from disk or when the JSON request fails. On a hosted website, it also reads `assets/gallery/manifest.json` to discover additional screenshots.

To add screenshots, place the images in `assets/gallery/`, then run `python scripts/gen_gallery_manifest.py` and commit the updated `manifest.json` alongside the new images. When testing via a local server (`python -m http.server 8000`), changes to the manifest appear on refresh.
