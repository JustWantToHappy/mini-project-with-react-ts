module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    //如果设置了colors,就只能够使用这里的color样式了。
    colors: {
      orange: {
        light: '#FBBF24',
        DEFAULT: '#ff6900',
        dark: '#F59E0B',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      border: {
        DEFAULT: '#d4d4d4',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        light: '#404040',
        DEFAULT: '#262626',
        dark: '#171717',
      },
    },
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        100: '100',
      },
    },
  },
  //设置变体，可以在不同状态(比如焦点、悬停等)应用不同的样式
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
};
