import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setEntryPoint("./marketing/intro-video/src/index.ts");
// Resolve assets like /audio/keyboard-typing.mp3 against the project's
// public/ folder so we share the same files the website serves.
Config.setPublicDir("./public");
