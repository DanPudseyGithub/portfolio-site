interface StylesKey {
  [key: string]: string;
}

function styleNames(styles: StylesKey, classes: any[]) {
  const newArray: string[] = [];
  classes.map((themeItem: string | string[]) => {
    if (typeof themeItem === "string" && styles[themeItem])
      newArray.push(styles[themeItem]);
    if (Array.isArray(themeItem)) {
      themeItem.map((arrayThemeItem) => {
        if (styles[arrayThemeItem]) newArray.push(styles[arrayThemeItem]);
      });
    }
    return;
  });
  return newArray.join(" ");
}

export default styleNames;
