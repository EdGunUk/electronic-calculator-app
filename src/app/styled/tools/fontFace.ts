interface FontFaceProps {
    name: string;
    path: string;
    path2: string;
    fontWeight?: string;
    fontStyle?: string;
}

const fontFace = ({name, path, path2, fontWeight = 'normal', fontStyle = 'normal'}: FontFaceProps): string =>
    `
        @font-face{
            font-family: "${name}";
            src: url(${path2}) format("woff2"),
                 url(${path}) format("woff");
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
        }
    `;

export default fontFace;
