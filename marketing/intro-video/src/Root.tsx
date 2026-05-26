import { Composition } from "remotion";
import { IntroComposition, INTRO_FPS, INTRO_TOTAL_FRAMES } from "./IntroComposition";

/**
 * Three flavours of the same intro at the resolutions LinkedIn (square),
 * YouTube/presentation (landscape) and Stories/Reels (vertical) ingest
 * natively. Render with:
 *
 *   npx remotion render intro-square   -> 1080x1080
 *   npx remotion render intro-landscape-> 1920x1080
 *   npx remotion render intro-vertical -> 1080x1920
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="intro-square"
        component={IntroComposition}
        durationInFrames={INTRO_TOTAL_FRAMES}
        fps={INTRO_FPS}
        width={1080}
        height={1080}
      />
      <Composition
        id="intro-landscape"
        component={IntroComposition}
        durationInFrames={INTRO_TOTAL_FRAMES}
        fps={INTRO_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="intro-vertical"
        component={IntroComposition}
        durationInFrames={INTRO_TOTAL_FRAMES}
        fps={INTRO_FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
