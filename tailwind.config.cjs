module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        100: '100',
      },
      //自定义动画样式
      animation: {
        //spin是tailwind中内置的一个帧
        //'spin-slow': 'spin 10s linear infinite',
        //使用自定义的帧
        'bounce-up-down': 'bounce-up-down 2s ease infinite'
      },
      //自定义过渡
      keyframes: {
        'bounce-up-down': {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0.12, 0.32, 1.03)' },
          '50%': { transform: 'translateY(0px)', animationTimingFunction: 'cubic-bezier(0.78, -0.48, 0.21, 1.35)' },
        },
      }
    },
  },
  //设置变体，可以在不同状态(比如焦点、悬停等)应用不同的样式
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [
  ],
};
