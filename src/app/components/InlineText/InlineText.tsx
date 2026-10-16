import { Fragment } from "react";
import { InlineText as InlineTextType } from "@type/ContentTypes";

// Matches [link text](https://url)
const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

type InlineTextProps = {
  text: InlineTextType;
};

// Renders text with inline links, which always open in a new tab
const InlineText = ({ text }: InlineTextProps) => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of Array.from(text.matchAll(LINK_PATTERN))) {
    const [whole, linkText, url] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) parts.push(text.slice(lastIndex, index));
    parts.push(
      <a key={index} href={url} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    );
    lastIndex = index + whole.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return <Fragment>{parts}</Fragment>;
};

export default InlineText;
