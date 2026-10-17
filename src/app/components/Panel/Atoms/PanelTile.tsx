import Image from "next/image";
import { cabin, sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import Icon from "@components/Icon/Icon";
import InlineText from "@components/InlineText/InlineText";
import { ContentLink, CurrentlyItem, Highlight, ProjectMedia } from "@type/ContentTypes";
import PanelTileLink from "./PanelTileLink";
import styles from "../Panel.module.scss";

type PanelMediaTileProps = {
  media: ProjectMedia;
  /** Fallback alt text when the image has none of its own */
  alt: string;
};

export const PanelMediaTile = ({ media, alt }: PanelMediaTileProps) => {
  const isVideo = media.kind === "video";
  const aspectRatio = media.kind === "image" ? media.aspectRatio : undefined;
  return (
    <article
      className={styleNames(styles, [
        "PanelTile",
        isVideo ? "PanelTile--Video" : "PanelTile--Image",
        "PanelTile--Dark",
        "PanelTile--Media",
      ])}
    >
      <div
        className={styles.PanelTileInner}
        style={
          aspectRatio ? ({ "--tile-aspect-ratio": aspectRatio } as React.CSSProperties) : undefined
        }
      >
        {media.kind === "image" && (
          <Image
            src={media.src}
            alt={media.alt ?? alt}
            className={styles.Image}
            width={348}
            height={348}
            quality={100}
          />
        )}
        {media.kind === "video" && (
          <div className={styles.VideoWrapper}>
            <video muted autoPlay loop playsInline poster={media.poster} width="532" height="376">
              <source src={media.webm} type="video/webm" />
              <source src={media.mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </article>
  );
};

type PanelCopyTileProps = {
  heading: string;
  body?: string;
  highlights?: Highlight[];
  currently?: CurrentlyItem[];
  links?: ContentLink[];
};

export const PanelCopyTile = ({
  heading,
  body,
  highlights,
  currently,
  links,
}: PanelCopyTileProps) => {
  const hasDescription = body || highlights?.length;
  return (
    <article className={styleNames(styles, ["PanelTile", "PanelTile--Light", "PanelTile--Copy"])}>
      <div className={styles.PanelTileInner}>
        <p
          className={`${styleNames(styles, ["ProjectHeading", "ProjectHeading--Light"])} ${
            cabin.className
          }`}
        >
          {heading}
        </p>
        {hasDescription && (
          <div
            className={`${styleNames(styles, [
              "ProjectDescription",
              "ProjectDescription--Light",
            ])} ${sourceCodePro.className}`}
          >
            {body && (
              <p>
                <InlineText text={body} />
              </p>
            )}
            {highlights && highlights.length > 0 && (
              <ol>
                {highlights.map((highlight, index) =>
                  typeof highlight === "string" ? (
                    <li key={index}>
                      <InlineText text={highlight} />
                    </li>
                  ) : (
                    <li key={index}>
                      <InlineText text={highlight.text} />
                      <ol>
                        {highlight.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <InlineText text={item} />
                          </li>
                        ))}
                      </ol>
                    </li>
                  )
                )}
              </ol>
            )}
          </div>
        )}
        {currently && currently.length > 0 && (
          <dl className={`${styles.Currently} ${sourceCodePro.className}`}>
            {currently.map(({ icon, label, value }, index) => (
              <div key={index} className={styles.CurrentlyItem}>
                <dt className={styles.CurrentlyLabel}>
                  <Icon name={icon} className={styles.CurrentlyIcon} />
                  {label}:
                </dt>
                <dd>
                  <InlineText text={value} />
                </dd>
              </div>
            ))}
          </dl>
        )}
        {links && links.length > 0 && (
          <div className={styles.PanelTileLinkWrapper}>
            {links.map((link, index) => (
              <PanelTileLink key={index} {...link} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
