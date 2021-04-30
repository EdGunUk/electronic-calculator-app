import RobotoBlack from 'app/assets/fonts/Roboto-Black.woff';
import RobotoBlack2 from 'app/assets/fonts/Roboto-Black.woff2';
import RobotoMedium from 'app/assets/fonts/Roboto-Medium.woff';
import RobotoMedium2 from 'app/assets/fonts/Roboto-Medium.woff2';
import RobotoRegular from 'app/assets/fonts/Roboto-Regular.woff';
import RobotoRegular2 from 'app/assets/fonts/Roboto-Regular.woff2';
import RobotoThin from 'app/assets/fonts/Roboto-Thin.woff';
import RobotoThin2 from 'app/assets/fonts/Roboto-Thin.woff2';
import * as colors from 'app/styled/settings/colors';
import * as fonts from 'app/styled/settings/fonts';
import fontFace from 'app/styled/tools/fontFace';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;    
    }

    body {
        margin: 0;
        background: ${colors.SPACE_02};
        color: ${colors.WHITE};
        user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-touch-callout: none;
    }

    #root {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        min-height: 100vh;
        max-width: 520px;
        font-family: ${fonts.ROBOTO_MEDIUM};
        letter-spacing: 1px;
    }

    ${fontFace({name: fonts.ROBOTO_BLACK, path: RobotoBlack, path2: RobotoBlack2})}    
    ${fontFace({name: fonts.ROBOTO_MEDIUM, path: RobotoMedium, path2: RobotoMedium2})}    
    ${fontFace({name: fonts.ROBOTO_REGULAR, path: RobotoRegular, path2: RobotoRegular2})}    
    ${fontFace({name: fonts.ROBOTO_THIN, path: RobotoThin, path2: RobotoThin2})}  
`;

export default GlobalStyle;
