# Seventy-Five Days

One quest set a day for 75 days: theory as a table of contents you crush topic by topic, a bench quest you build or measure, the log and a sketchbook page. Quests name topics, not platforms.

Everything stays in your browser's localStorage. Nothing is tracked. Works offline and installs to the home screen.

Live: https://zufichris.github.io/quests/

## Files

- `index.html`: the whole app, including the topic tables and all 75 days.
- `sw.js`, `manifest.webmanifest`, `icon.svg`: offline cache and install metadata.

## Preview any day

Append `?day=N`, for example `?day=37`. Add `&done=1` for the completed state, `&theme=dark` to force a theme, `&ref=board` to open the Reference at a section, `&all=1` for the whole sprint, or `&missed=5` to see the missed-day notice. Preview never writes to storage.
