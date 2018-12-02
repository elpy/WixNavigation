import { Navigation } from "react-native-navigation";

import { Main } from "./src/components";
import { Portfolio } from "./src/components";
import { Stocks } from "./src/components";

Navigation.registerComponent(`navigation.app`, () => Main);
Navigation.registerComponent(`navigation.portfolio`, () => Portfolio);
Navigation.registerComponent(`navigation.stocks`, () => Stocks);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        animate: true,
        drawBehind: true,
        children: [
          {
            component: {
              name: 'navigation.portfolio',
              options: {
                bottomTab: {
                  text: 'Portfolio',
                }
              }
            },
          },
          {
            component: {
              name: 'navigation.stocks',
              options: {
                bottomTab: {
                  text: 'Stocks',
                }
              }
            },
          },
        ],
      },
    }
  })
});

/*
Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'example.FirstTabScreen',
              passProps: {
                text: 'This is tab 1'
              }
            }
          }],
          options: {
            bottomTab: {
              text: 'Tab 1',
              icon: require('../images/one.png'),
              testID: 'FIRST_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.playground.TextScreen',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: 'Tab 2',
              icon: require('../images/two.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      }]
    }
  }
});*/
