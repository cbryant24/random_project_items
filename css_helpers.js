import { get, includes, omit, range } from 'lodash';

export const textTransform = style({
  //React prop name
  prop: 'textTransform',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'text-transform',
  // key for theme values
  key: 'textTransform',
  // convert number values to pixels
  numberToPx: false,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'tt'
});

export const minHeight = style({
  prop: 'minHeight',
  cssProperty: 'min-height',
  key: 'minHeight',
  numberToPx: false,
  getter: n => n,
  alias: 'mh'
});

export const fontSmooth = style({
  prop: 'fontSmooth',
  cssProperty: '-webkit-font-smoothing',
  key: 'fontSmooth',
  numberToPx: false,
  getter: n => n,
  alias: 'fsh'
});

export const clipPath = style({
  // React prop name
  prop: 'clipPath',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'clip-path',
  // key for theme values
  key: 'clipPath',
  // convert number values to pixels
  numberToPx: false,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'cp'
});

export const transformOrigin = style({
  prop: 'transformOrigin',
  cssProperty: 'transform-origin',
  key: 'transformOrigin',
  numberToPx: false,
  getter: n => n,
  alias: 'to'
});

export const transform = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'transform',
  numberToPx: false,
  getter: n => n,
  alias: 'tf'
});

export const content = style({
  prop: 'content',
  cssProperty: 'content',
  key: 'content',
  numberToPx: false,
  getter: n => n,
  alias: 'ct'
});

export const all = style({
  prop: 'all',
  cssProperty: 'all',
  key: 'all',
  numberToPx: false,
  getter: n => n,
  alias="all"
});

export const animation = style({
  prop: 'animation',
  cssProperty: 'animation',
  key: 'animation',
  numberToPx: false,
  getter: n => n,
  alias: 'an'
});

export const animationDelay = style({
  props: 'animationDelay',
  cssProperty: 'animation-delay',
  key: 'animation-delay',
  numberToPx: false,
  getter: n => n,
  alias: 'ad'
});

export const animationDirection = style({
  props: 'animationDirection',
  cssProperty: 'animation-direction',
  key: 'animation-direction',
  numberToPx: false,
})

export const animationDuration = style({
  props: 'animationDuration',
  cssProperty: 'animation-duration',
  key: 'animation-duration',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'animation-fill-mode',
  key: 'animation-fill-mode',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'animation-iteration-count',
  key: 'animation-iteration-count',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'animation-name',
  key: 'animation-name',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'animation-play-state',
  key: 'animation-play-state',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'animation-timing-function',
  key: 'animation-timing-function',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'appearance',
  key: 'appearance',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'azimuth',
  key: 'azimuth',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'backdrop-filter',
  key: 'backdrop-filter',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'backface-visibility',
  key: 'backface-visibility',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'background-attachment',
  key: 'background-attachment',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'background-blend-mode',
  key: 'background-blend-mode',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'background-clip',
  key: 'background-clip',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'background-origin',
  key: 'background-origin',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'background-position-x',
  key: 'background-position-x',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'background-position-y',
  key: 'background-position-y',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'block-size',
  key: 'block-size',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-end',
  key: 'border-block-end',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-end-color',
  key: 'border-block-end-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-end-style',
  key: 'border-block-end-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-end-width',
  key: 'border-block-end-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-start',
  key: 'border-block-start',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-start-color',
  key: 'border-block-start-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-start-style',
  key: 'border-block-start-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-block-start-width',
  key: 'border-block-start-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-bottom-color',
  key: 'border-bottom-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-bottom-left-radius',
  key: 'border-bottom-left-radius',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-bottom-right-radius',
  key: 'border-bottom-right-radius',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-bottom-style',
  key: 'border-bottom-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-bottom-width',
  key: 'border-bottom-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-collapse',
  key: 'border-collapse',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-image',
  key: 'border-image',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-image-outset',
  key: 'border-image-outset',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-image-repeat',
  key: 'border-image-repeat',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-image-slice',
  key: 'border-image-slice',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-image-source',
  key: 'border-image-source',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'order-image-width',
  key: 'order-image-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-end',
  key: 'border-inline-end',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-end-color',
  key: 'border-inline-end-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-end-style',
  key: 'border-inline-end-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-end-width',
  key: 'border-inline-end-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-start',
  key: 'border-inline-start',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-start-color',
  key: 'border-inline-start-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-start-style',
  key: 'border-inline-start-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-inline-start-width',
  key: 'border-inline-start-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-left-color',
  key: 'border-left-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-left-style',
  key: 'border-left-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-left-width',
  key: 'border-left-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-right-color',
  key: 'border-right-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-right-style',
  key: 'border-right-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-right-width',
  key: 'border-right-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-spacing',
  key: 'border-spacing',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-top-color',
  key: 'border-top-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-top-left-radius',
  key: 'border-top-left-radius',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'bborder-top-right-radius',
  key: 'bborder-top-right-radius',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-top-style',
  key: 'border-top-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'border-top-width',
  key: 'border-top-width',
  numberToPx: false
});

export const bottom = style({
  props: '',
  cssProperty: 'bottom',
  key: 'bottom',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-align',
  key: 'box-align',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-decoration-break',
  key: 'box-decoration-break',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-direction',
  key: 'box-direction',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-flex',
  key: 'box-flex',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-flex-group',
  key: 'box-flex-group',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-lines',
  key: 'box-lines',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-ordinal-group',
  key: 'box-ordinal-group',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-orient',
  key: 'box-orient',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-pack',
  key: 'box-pack',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'box-sizing',
  key: 'box-sizing',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'break-after',
  key: 'break-after',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'break-before',
  key: 'break-before',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'break-inside',
  key: 'break-inside',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'caption-side',
  key: 'caption-side',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'caret-color',
  key: 'caret-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'clear',
  key: 'clear',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'clip',
  key: 'clip',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-count',
  key: 'column-count',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-fill',
  key: 'column-fill',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: 'column-rule',
  key: 'column-rule',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-rule-color',
  key: 'column-rule-color',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-rule-style',
  key: 'column-rule-style',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-rule-width',
  key: 'column-rule-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-span',
  key: 'column-span',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'column-width',
  key: 'column-width',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'columns',
  key: 'columns',
  numberToPx: false
});

export const contain = style({
  props: 'contain',
  cssProperty: 'contain',
  key: 'contain',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'counter-increment',
  key: 'counter-increment',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'counter-reset',
  key: 'counter-reset',
  numberToPx: false
});

export const cursor = style({
  props: 'cursor',
  cssProperty: 'cursor',
  key: 'cursor',
  numberToPx: false
});

export const direction = style({
  props: 'direction',
  cssProperty: 'direction',
  key: 'direction',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'display-inside',
  key: 'display-inside',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'display-list',
  key: 'display-list',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'display-outside',
  key: 'display-outside',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'empty-cells',
  key: 'empty-cells',
  numberToPx: false
});

export const filter = style({
  props: 'filter',
  cssProperty: 'filter',
  key: 'filter',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'flex-flow',
  key: 'flex-flow',
  numberToPx: false
});

export const float = style({
  props: 'float',
  cssProperty: 'float',
  key: 'float',
  numberToPx: false
});

export const font = style({
  props: 'font',
  cssProperty: 'font',
  key: 'font',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-feature-settings',
  key: 'font-feature-settings',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-kerning',
  key: 'font-kerning',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-language-override',
  key: 'font-language-override',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variation-settings',
  key: 'font-variation-settings',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-size-adjust',
  key: 'font-size-adjust',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-stretch',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-synthesis',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variant',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variant-alternates',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variant-caps',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variant-east-asian',
  key: '',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: 'font-variant-ligatures',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variant-numeric',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'font-variant-position',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'grid-column-end',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'grid-column-start',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'grid-row-end',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'grid-row-start',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'grid-template',
  key: '',
  numberToPx: false
});

export const hyphens = style({
  props: 'hyphens',
  cssProperty: 'hyphens',
  key: 'hyphens',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'image-orientation',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'image-rendering',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'image-resolution',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'ime-mode',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: 'initial-letter',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});
export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});

export const  = style({
  props: '',
  cssProperty: '',
  key: '',
  numberToPx: false
});


export const filterProps = props =>
  omit(props, [
    'theme',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'color',
    'bg',
    'fill',
    'fontSize',
    'fontFamily',
    'fontStyle',
    'f',
    'image',
    'maxWidth',
    'bold',
    'regular',
    'caps',
    'wrap',
    'size',
    'height',
    'boxShadowSize',
    'remSizes',
    "templateRows",
    "templateColumns",
    "alignSelf",
    "justifySelf",
    "gridColumn",
    "gridRow",
    "alignContent",
    "gridGap",
    "textTransform",
    "minHeight",
    "flexDirection",
    "borderColor",
    "justifyContent",
    "borderRadius",
    "borderWidth",
    "bgAnimation",
    "backgroundColor",
    "textShadow",
    "zIndex",
    "backgroundImage",
    "backgroundSize",
    "transformOrigin",
    "alignItems",
    "boxShadow",
    "fontSmooth",
    "bgAnimation",
    "windowBorder",
    "bgAnimationGlow",
    "textAlign",
    "flexGrow",
    "foucsBoxShadowColor",
    "focusColor",
    "borderFocus",
    "maxHeight",
    "foucsBoxShadowColor",
    "focusColor",
    "borderFocus",
    "error"
  ])