# Content

This repository contains example content for running a Streamwall, including background and foreground overlays. This is similar to how we operate the woke.net stream.

## Building overlays for Streamwall

Run `npm build` to compile each overlay into a single HTML file which embeds all of its resources. The build process also outputs `overlays.json`, a data source which can be included into Streamwall to automatically add the overlays.

To use the built overlays in a production Streamwall setup:

1. Set the baseURL in `overlayData.js` to reflect where the overlays will be hosted.
2. Run `npm run build`.
3. Upload the contents of the `dist` folder to your static file host.
4. Add `https://your.static.host/overlays/overlay.json` to Streamwall as a JSON data source.

## Credits

background.mp4 is by [motionstock](https://pixabay.com/users/motionstock-13298494) via [Pixabay](https://pixabay.com/videos/particles-sparkling-pink-abstract-27584/)
