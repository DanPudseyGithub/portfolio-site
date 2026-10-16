import parse from "html-react-parser";
import { cabin, sourceCodePro } from "@fonts/Fonts";
import Image from "next/image";
import styleNames from "@utils/styleNames";
import PanelTileLink from "./PanelTileLink";
import { LinkType } from "@type/LinkType";
import styles from "../Panel.module.scss";

type PanelTileProps = {
  projectHeading?: string;
  description?: string;
  imageUrl?: string;
  isDark?: boolean;
  video?: {
    webm: string;
    mp4: string;
    poster: string;
  };
  siteLinks?: LinkType[];
};

const PanelTile = ({
  projectHeading,
  description,
  imageUrl,
  isDark = false,
  video,
  siteLinks,
}: PanelTileProps) => {
  const isMedia = video || imageUrl;
  return (
    <article
      className={styleNames(styles, [
        "PanelTile",
        imageUrl && "PanelTile--Image",
        video && "PanelTile--Video",
        isDark ? "PanelTile--Dark" : "PanelTile--Light",
        isMedia ? "PanelTile--Media" : "PanelTile--Copy",
      ])}
    >
      <div className={styles.PanelTileInner}>
        {projectHeading && (
          <p
            className={`${styleNames(styles, [
              "ProjectHeading",
              isDark ? "ProjectHeading--Dark" : "ProjectHeading--Light",
            ])} ${cabin.className}`}
          >
            {projectHeading}
          </p>
        )}
        {description && (
          <div
            className={`${styleNames(styles, [
              "ProjectDescription",
              isDark ? "ProjectDescription--Dark" : "ProjectDescription--Light",
            ])} ${sourceCodePro.className}`}
          >
            {parse(description)}
          </div>
        )}
        {siteLinks && siteLinks.length > 0 && (
          <div className={styles.PanelTileLinkWrapper}>
            {siteLinks.map(({ url, linkText, target, isDark, wip }, index) => (
              <PanelTileLink
                key={index}
                url={url}
                linkText={linkText}
                target={target}
                isDark={isDark}
                wip={wip}
              />
            ))}
          </div>
        )}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={projectHeading || "Project image"}
            className={styles.Image}
            fill={false}
            width={348}
            height={348}
            quality={100}
          />
        )}
        {video && (
          <div className={styles.VideoWrapper}>
            <video muted autoPlay loop playsInline poster={video.poster} width="532" height="376">
              <source src={video.webm} type="video/webm" />
              <source src={video.mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </article>
  );
};

export default PanelTile;
