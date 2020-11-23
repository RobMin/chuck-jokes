import shared from 'scss/shared.module.scss';

const parsePx = (cssVar: string) => parseInt(cssVar, 10);

export const desktopBreakpoint = parsePx(shared.desktopBreakpoint);
