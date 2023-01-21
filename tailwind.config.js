/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '575px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    fontFamily: {
      'nunito':[ 'Nunito Sans', 'sans-serif']
    },
    extend: {
      animation:{
        blink: 'blink 1s infinite',
        banner:'banner 16s infinite',
        banner_text1:'banner_text1 16s ease-out infinite',
        banner_text2:'banner_text2 16s ease-out infinite',
        banner_text3:'banner_text3 16s ease-out infinite',
        banner_div:'banner_div 16s ease-out infinite',
        disappear:'disappear 16s infinite',
        bounce_left:'bounce_left 1s infinite',
        beat:'beat 1.2s infinite',
        rotateY:'rotateY 2s forwards',
        // play_btn_80:'play_btn_80 2s infinite',
        // play_btn_60:'play_btn_60 2s infinite',
        // play_btn_40:'play_btn_40 2s infinite',
        // play_btn_20:'play_btn_20 2s infinite',
        slide_over_left:'slide_over_left 0.5s ease-in-out forwards',
        slide_over_right:'slide_over_right 0.5s ease-in-out forwards',
        fade_in_left:'fade_in_left 1.2s forwards'
      },
      keyframes:{
        blink:{'0%':{opacity:'0.1'},'100%':{opacity:'1'}},
        banner:{
          '0%':{backgroundImage:'url(images/bg1home_banner.jpg)'},
          '38%':{backgroundImage:'url(images/bg1home_banner.jpg)'},
          '50%':{backgroundImage:'url(images/bg2home_banner.jpg)'},
          '88%':{backgroundImage:'url(images/bg2home_banner.jpg)'},
          '100%':{backgroundImage:'url(images/bg1home_banner.jpg)'}
        },
        banner_text1:{
          '13%':{top:'30px'},
          '16%':{top:'0px'},
          '38%':{top:'0px'},
          '38.01%':{top:'30px'},
          '63%':{top:'30px'},
          '66%':{top:'0px'},
          '88%':{top:'0px'},
          '88.01%':{top:'30px'},
          '100%':{top:'30px'},
        },
        banner_text2:{
          '5%':{top:'160px'},
          '11%':{top:'0px'},
          '38%':{top:'0px'},
          '38.01%':{top:'160px'},
          '55%':{top:'160px'},
          '61%':{top:'0px'},
          '88%':{top:'0px'},
          '88.01%':{top:'160px'},
          '100%':{top:'160px'}
        },
        banner_text3:{
          '18%':{top:'90px'},
          '21%':{top:'0px'},
          '38%':{top:'0px'},
          '38.01%':{top:'90px'},
          '68%':{top:'90px'},
          '71%':{top:'0px'},
          '88%':{top:'0px'},
          '88.01%':{top:'90px'},
          '100%':{top:'90px'}
        },
        banner_div:{
          '23%':{top:'126px'},
          '26%':{top:'0px'},
          '38%':{top:'0px'},
          '38.01%':{top:'126px'},
          '73%':{top:'126px'},
          '76%':{top:'0px'},
          '88%':{top:'0px'},
          '88.01%':{top:'126px'},
          '100%':{top:'126px'}
        },
        disappear:{
          '0%':{opacity:'1'},
          '38%':{opacity:'1'},
          '38.01%':{opacity:'0'},
          '50%':{opacity:'0'},
          '50.01%':{opacity:'1'},
          '88%':{opacity:'1'},
          '88.01%':{opacity:'0'},
          '100%':{opacity:'0'}
        },
        bounce_left:{
          '50%':{left:'-8px'},
          '55%':{left:'-16px'},
          '65%':{left:'0px'},
          '71.66%':{left:'0px'},
          '95%':{left:'-12px'},
          '100%':{left:'-8px'},
        },
        beat:{
          '35%':{height:'16px',width:'16px'},
          '48%':{height:'16px',width:'16px'},
          '61%':{height:'22px',width:'22px'},
          '74%':{height:'18px',width:'18px'},
          '87%':{height:'22px',width:'22px'},
          '100%':{height:'16px',width:'16px'}

        },
        rotateY:{
          '0%':{transform:'rotateY(0deg)'},
          '50%':{transform:'rotateY(180deg)'},
          '100%':{transform:'rotateY(360deg)'}
        },
        // play_btn_80:{
        //   '0%':{background:"url('./images/play_btn_80.png')",height:'70px',width:'70px'},
        //   '100%':{background:"url('./images/play_btn_5.png')",height:'100px',width:'100px'}
        // },
        // play_btn_60:{
        //   '0%':{background:"url('./images/play_btn_60.png')",height:'70px',width:'70px'},
        //   '100%':{background:"url('./images/play_btn_5.png')",height:'100px',width:'100px'}
        // },
        // play_btn_40:{
        //   '0%':{background:"url('./images/play_btn_40.png')",height:'100px',width:'100px'},
        //   '100%':{background:"url('./images/play_btn_5.png')",height:'130px',width:'130px'}
        // },
        // play_btn_20:{
        //   '0%':{background:"url('./images/play_btn_20.png')",height:'130px',width:'130px'},
        //   '100%':{background:"url('./images/play_btn_5.png')",height:'160px',width:'160px'}
        // },
        slide_over_left:{
          '0%':{left:'-80px'},
          '100%':{left:'0px'}
        },
        slide_over_right:{
          '0%':{left:'0px'},
          '100%':{left:'80px'}
        },
        fade_in_left:{
          '0%':{opacity:'0',left:'350px'},
          '80%':{opacity:'1',left:'470px'},
          '100%':{opacity:'1',left:'470px'}
        }

    },
  },
  plugins: [],
}
}
