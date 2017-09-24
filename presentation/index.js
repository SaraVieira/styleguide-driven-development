// Import React
import React from "react";
import Terminal from "spectacle-terminal";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  Layout,
  Fit,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text,
  Appear,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  kitten: require("../assets/kitten.jpg"),
  caralho: require("../assets/caralho.png"),
  me: require("../assets/me.jpg"),
  styleguide: require("../assets/styleguide.png"),
  yld: require("../assets/image.gif"),
  soccer: require("../assets/soccer.svg"),
  zombie: require("../assets/zombie.svg"),
  styleguidist: require("../assets/styleguidist.png"),
  styleguidistStart: require("../assets/styleguidist-start.png"),
  storybook: require("../assets/storybook.png"),
  storybookStart: require("../assets/storybook-start.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#FCFEFF",
    secondary: "#383F51",
    tertiary: "#3C4F76",
    quartenary: "#D1BEB0",
    fifth: "#AB9F9D",
    yld: "#1F024F"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={200}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Story Time
          </Heading>
          <Appear>
            <Heading size={4} caps lineHeight={1} textColor="primary">
              How I fell in love with styleguides
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <CodePane
            language="css"
            source={`
ul li span a { background: green; }
              `}
          />
          <Appear>
            <CodePane
              language="css"
              source={`
ul {
  li {
    span {
      a {
        background: green;
      }
    }
  }
}
              `}
            />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image
            width="100%"
            height="100%"
            src="https://designshack.net/wp-content/uploads/css-specificity-10.jpg"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            !important overrides all of this
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} textColor="primary" caps>
            How do you override this ?
          </Heading>
          <CodePane
            language="css"
            source={`
.button {
 .generic-class-that-should-not-have-anything-specific {
   background: red !important
 }
}
              `}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.kitten}
          align="center flex-end"
        >
          <Text>Photo by Q'AILA on Unsplash</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <CodePane
            language="css"
            source={`
body .button {
 .generic-class-that-should-not-have-anything-specific {
   background: red !important
 }
}
              `}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.caralho} width="100%" height="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="yld">
          <Layout style={{ minWidth: 500 }}>
            <Fit>
              <List
                style={{
                  padding: 0,
                  listStyle: "none",
                  margin: 0,
                  minWidth: 500
                }}
              >
                <ListItem textColor="primary">Sara Vieira</ListItem>
                <ListItem textColor="primary">Full Stack Developer</ListItem>
                <ListItem textColor="primary">@NikkitaFTW</ListItem>
                <ListItem textColor="primary" style={{ display: "flex" }}>
                  <Image
                    src={images.soccer}
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <Text textColor="primary">Football </Text>
                </ListItem>
                <ListItem textColor="primary" style={{ display: "flex" }}>
                  <Image
                    src={images.zombie}
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <Text textColor="primary">Horror Movies</Text>
                </ListItem>
                <ListItem textColor="primary" style={{ display: "flex" }}>
                  <Image src="https://i.imgur.com/7zkiG.gif" />
                </ListItem>
              </List>
            </Fit>
            <Fit>
              <Image src={images.yld} />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Portugal
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image
            src="http://starecat.com/content/wp-content/uploads/do-you-ever-look-at-stuff-and-wonder-how-it-got-there-portugal-national-team-euro-2016.jpg"
            height="80vh"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            StyleGuide Driven Development
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <List>
            <ListItem textColor="primary">What ?</ListItem>
            <Appear>
              <ListItem textColor="primary">How ?</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">Why ?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>
            What is styleguide driven development ?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            A change in perspective
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <div style={{ overflow: "scroll", height: "100vh" }}>
            <Image
              src="https://cdn.dribbble.com/users/1018923/screenshots/3545743/attachments/787979/landingpage_highfid.png"
              width="100%"
            />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image src="https://media0.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Custom CSS is the death of a developer
          </Heading>
          <Appear>
            <Heading size={6} textColor="quartenary" caps>
              So is opera mini but that's for another day
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <div style={{ overflow: "scroll", height: "100vh" }}>
            <Image src={images.styleguide} width="100%" />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>
            Recap
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                Styleguide driven development is a mentality not a skill
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Divide your layouts in building blocks
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Think of your website from a design standpoint and not as 1's as
                0's
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            How ?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Tools
          </Heading>
          <Layout align="center center">
            <Fit style={{ marginTop: 40, marginRight: 40 }}>
              <Image
                width="350"
                src="https://github.com/styleguidist/brand/blob/master/rs-logo-with-type.png?raw=true"
              />
            </Fit>
            <Fit
              style={{
                alignItems: "center",
                display: "flex"
              }}
            >
              <Image
                src=" data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0MCIgaGVpZ2h0PSI1NzYiIHZpZXdCb3g9IjAgMCAyMDQwIDU3NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPnN0b3J5Ym9vay1sb2dvLWZpbmFsPC90aXRsZT48ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPjxnIHRyYW5zZm9ybT0ibWF0cml4KDIgMCAwIDIgLTQzMjIgLTUwNikiPjxjbGlwUGF0aCBpZD0iYSIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjE2MSAyNTNoMTAyMHYyODhIMjE2MVYyNTN6IiBmaWxsPSIjRkZGIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNjYgMjc1KSIgZmlsbD0iI0I1N0VFNSIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxODAgMjYxKSIgZmlsbD0iI0YxNjE4QyIvPjx1c2UgeGxpbms6aHJlZj0iI2QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMjYgMjYxLjUpIiBmaWxsPSIjRkZGIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM5MyAzMDApIj48dXNlIHhsaW5rOmhyZWY9IiNlIiBmaWxsPSIjNkRBQkY1Ii8+PHVzZSB4bGluazpocmVmPSIjZiIgZmlsbD0iI0YzQUQzOCIvPjx1c2UgeGxpbms6aHJlZj0iI2ciIGZpbGw9IiNCNTdFRTYiLz48dXNlIHhsaW5rOmhyZWY9IiNoIiBmaWxsPSIjRjE2MTYxIi8+PHVzZSB4bGluazpocmVmPSIjaSIgZmlsbD0iI0I1N0VFNSIvPjx1c2UgeGxpbms6aHJlZj0iI2oiIGZpbGw9IiNBMkUwNUUiLz48L2c+PHVzZSB4bGluazpocmVmPSIjayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIyMCAzMDEpIiBmaWxsPSIjRkZGIi8+PC9nPjwvZz48ZGVmcz48cGF0aCBpZD0iYiIgZD0iTTIxIDI0Nkw5IDBIMGw5IDI0NmgxMnoiLz48cGF0aCBpZD0iYyIgZD0iTTEyIDI2MEwwIDE0IDE5NiAwdjI2OWwtMTg0LTl6Ii8+PHBhdGggaWQ9ImQiIGQ9Ik0wIDM1LjVMMi41IDIgMjYgMHYzNS41TDE0LjE4MiAyNC44MSAwIDM1LjV6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik0zNDcuMDQxIDU3LjJoLTMyLjc4djE4LjI2YzAgMjMuNTQtLjIyIDQyLjQ2LS4yMiA0Mi40NiAwIDExLjY2LTQuODQgMTQuNzQtMTEgMTQuNzQtNi4zOCAwLTkuNjgtMi44Ni05LjY4LTE1LjE4IDAtMTguMDQgMS4zMi01My42OCAxLjMyLTUzLjY4bC0zMi43OC0uODhjMC0uNDQtMS4xIDI3LjI4LTEuMSA2MC4wNnMyMC42OCAzNS4yIDMwLjE0IDM1LjJjOS4wMiAwIDE4LjkyLTMuNTIgMjQuMi05LjI0IDAgMTguNy01Ljk0IDI0Ljg2LTE5LjE0IDI0Ljg2LTguMzYgMC0xOC40OC00LjE4LTIzLjk4LTguOHYzMC4xNGM5LjI0IDUuNSAxOS41OCA3LjkyIDI5LjkyIDcuOTIgMjIgMCA0My41Ni0xMi43NiA0NC00OS41LjY2LTQwLjkyLjg4LTgxLjg0IDEuMS05Ni4zNnptMTY1LjU1LS4yMmMtMzMuNDQgMC00Ny43NCAyNi44NC00Ny43NCA1OC43NCAwIDI3LjA2IDEzLjIgNDcuMyA0NC42NiA0Ny4zIDM1LjIgMCA0Ny43NC0yNi40IDQ3Ljc0LTU2Ljk4IDAtMjguMzgtMTIuMzItNDkuMDYtNDQuNjYtNDkuMDZ6bTExLjY2IDUzLjI0YzAgMTQuMy00Ljg0IDI1LjMtMTQuNzQgMjUuMy04LjM2IDAtMTEuNjYtOS42OC0xMS42Ni0xOS44IDAtMTYuMjggNS43Mi0yOC44MiAxNC43NC0yOC44MiA5LjI0IDAgMTEuNjYgMTIuMSAxMS42NiAyMy4zMnoiLz48cGF0aCBpZD0iZiIgZD0iTTIwLjY4IDE2My4yNGMxNi45NC4yMiAzMy4yMi0xLjk4IDMzLjIyLTEuOTggMC0yOC44MiAwLTU1Ljg4LjIyLTc2LjM0IDguOC0uODggMTYuMDYtMS45OCAxNi4wNi0xLjk4LjQ0LTEzLjg2LS42Ni0yNi40LS42Ni0yNi40bC0xNC45Ni44OGMuNDQtMjAuOS44OC0zMS42OC44OC0zMS42OGwtMzUuMiAyLjJzMCAxMi45OC4yMiAzMi43OGMtMTAuNzggMS4zMi0xOC43IDMuNTItMTguNyAzLjUyLjQ0IDExLjY2IDQuNjIgMjQuMiA0LjYyIDI0LjJsMTQuMy0uNjZ2NzUuNDZ6Ii8+PHBhdGggaWQ9ImciIGQ9Ik0yMTkuMjc2IDcwLjYyYzAtMy4zLjIyLTYuODIuNDQtMTAuMzRsLTMwLjU4LTEuMXMtMi44NiA0NC44OC0yLjY0IDEwMy44NGMxNC43NCAxLjEgMzEuOSAxLjEgMzEuOSAxLjEtLjIyIDAgMC0xOS41OC44OC00OS4wNi40NC0xNy4xNiA2LjYtMjIuNDQgMTUuODQtMjIuNDQgNS41IDAgMTIuMzIgMi40MiAxMi4zMiAyLjQybDMuNTItMzAuNThjLTE0LjMtNC44NC0yNy41LS42Ni0zMS42OCA2LjE2eiIvPjxwYXRoIGlkPSJoIiBkPSJNMzk2LjAyNiAxNjIuNThjMC00Ljg0LjQ0LTkuMjQuNDQtMTEgMy43NCA1LjUgMTEgMTAuMzQgMjAuMDIgMTAuMzQgMjUuMyAwIDM2LjMtMjQuODYgMzYuOTYtNTQuMzQuNDQtMjcuOTQtMTAuMTItNTEuMjYtMzMuNDQtNTEuMjYtOC41OCAwLTE1Ljg0IDQuNjItMTkuOCA5LjQ2IDEuOTgtMzIuNzggMy41Mi01My42OCAzLjUyLTUzLjY4bC0zMy4yMi0yLjQyYy0xLjk4IDIyLjg4LTUuMDYgOTguNTYtNC42MiAxNTMuNzggMTkuMTQuNDQgMzAuMTQtLjg4IDMwLjE0LS44OHptMS45OC00My43OGMtLjQ0LTUuOTQtMS41NC0zMi4zNCAxMS4yMi0zMi4zNCA5LjAyIDAgMTEuMjIgMTEgMTAuNzggMjItLjIyIDExLjg4LTIuNjQgMjUuMy0xMS44OCAyNS4zLTYuMzggMC05LjQ2LTQuNjItMTAuMTItMTQuOTZ6Ii8+PHBhdGggaWQ9ImkiIGQ9Ik03NzYuNDA5IDY0LjI0bC0zNC41NC00LjYycy0xMS44OCAxNy44Mi0yOC42IDM4LjI4YzIuNjQtNDYuODYgNS45NC03OC4zMiA1Ljk0LTc4LjMybC0zNS44Ni0zLjNzLTMuOTYgODEuNC00Ljg0IDE0Ni4wOGMxNC45NiAxLjc2IDMyLjM0IDEuNzYgMzIuMzQgMS43NmwxLjEtMzguNzJjMTYuMjggMTguNDggMzQuNTQgMzcuNjIgMzQuNTQgMzcuNjJsMzguMDYtNi4xNmMtMjItMjItMzYuOTYtMzcuNC00NC4yMi00Ny4wOCA4LjM2LTExLjIyIDIzLjMyLTI5LjA0IDM2LjA4LTQ1LjU0eiIvPjxwYXRoIGlkPSJqIiBkPSJNMTI2LjA4OCA1Ni45OGMtMzMuNDQgMC00Ny43NCAyNi44NC00Ny43NCA1OC43NCAwIDI3LjA2IDEzLjIgNDcuMyA0NC42NiA0Ny4zIDM1LjIgMCA0Ny43NC0yNi40IDQ3Ljc0LTU2Ljk4IDAtMjguMzgtMTIuMzIxLTQ5LjA2LTQ0LjY2LTQ5LjA2em0xMS42NiA1My4yNGMwIDE0LjMtNC44NDEgMjUuMy0xNC43NCAyNS4zLTguMzYgMC0xMS42Ni05LjY4LTExLjY2LTE5LjggMC0xNi4yOCA1LjcxOS0yOC44MiAxNC43NC0yOC44MiA5LjI0IDAgMTEuNjYgMTIuMSAxMS42NiAyMy4zMnpNNjE3LjIyIDU2Ljk4Yy0zMy40NCAwLTQ3Ljc0IDI2Ljg0LTQ3Ljc0IDU4Ljc0IDAgMjcuMDYgMTMuMiA0Ny4zIDQ0LjY2IDQ3LjMgMzUuMiAwIDQ3Ljc0LTI2LjQgNDcuNzQtNTYuOTggMC0yOC4zOC0xMi4zMi00OS4wNi00NC42Ni00OS4wNnptMTEuNjYgNTMuMjRjMCAxNC4zLTQuODQgMjUuMy0xNC43NCAyNS4zLTguMzYgMC0xMS42Ni05LjY4LTExLjY2LTE5LjggMC0xNi4yOCA1LjcyLTI4LjgyIDE0Ljc0LTI4LjgyIDkuMjQgMCAxMS42NiAxMi4xIDExLjY2IDIzLjMyeiIvPjxwYXRoIGlkPSJrIiBkPSJNNzQuNjQgNjUuMjhsMzguNjQtLjk2QzExNC4yNCAyNi44OCA5NC44IDguNCA2MC45NiA4LjRzLTUyLjggMTkuMi01Mi44IDQ4YzAgNTAuMTYgNjQuOCA1MS4xMiA2NC44IDc4LjQ4IDAgNy42OC0zLjYgMTIuMjQtMTEuNTIgMTIuMjQtMTAuMzIgMC0xNC40LTYuNzItMTMuOTItMjUuNDRINi45NmMtMy4xMiA0Ni4zMiAyNCA1Ni44OCA1NC45NiA1Ni44OCAzMCAwIDUzLjUyLTEzLjkyIDUzLjUyLTQ0LjE2IDAtNTMuNzYtNjUuNzYtNTIuMzItNjUuNzYtNzguOTYgMC0xMC44IDcuNjgtMTIuMjQgMTIuMjQtMTIuMjQgNC44IDAgMTMuNDQgMS45MiAxMi43MiAyMi4wOHoiLz48L2RlZnM+PC9zdmc+"
                style={{
                  fontWeight: 800,
                  width: 500
                }}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} textColor="primary" caps>
            React Styleguidist
          </Heading>
          <Image src={images.styleguidist} width="747" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} textColor="primary" caps>
            React Styleguidist Boilerplate
          </Heading>
          <Terminal
            title="1. sara@flying-unicorn-away: ~(zsh)"
            output={[
              <div style={{ color: "#33B969" }}>
                > git clone
                git@github.com:SaraVieira/react-styleguidist-boilerplate.git
              </div>,
              <div>> cd react-styleguidist-boilerplate</div>,
              <div style={{ color: "#33B969" }}>> rm -rf .git</div>,
              <div>> yarn</div>,
              <div style={{ color: "#33B969" }}>> yarn start</div>
            ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <div style={{ overflow: "scroll", height: "100vh" }}>
            <Image src={images.styleguidistStart} width="100%" />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <CodePane
            language="bash"
            source={`
├── app
│   ├── src
│   │──── components
│   │   └───── Button
│   │     └────── index.js
│   │     └────── Button.js
│   │     └────── Button.css
│   │     └────── Readme.md
├── styleguide (build)
├── package.json
├── .styleguide.config.js
├── .babelrc
├── .eslintrc
└── .gitignore
        `}
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/code.example")}
          ranges={[
            { loc: [0, 270], title: "Button.js" },
            { loc: [0, 5], title: "Import all the things" },
            { loc: [6, 20], title: "Define your component" },
            { loc: [24, 33], title: "Define your propTypes" },
            { loc: [34, 42], title: "Define your defaultProps" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="markdown"
          code={require("raw-loader!../assets/markdown.example")}
          ranges={[
            { loc: [0, 270], title: "Readme.md" },
            { loc: [0, 4], title: "Render default Button" },
            { loc: [6, 11], title: "Render with props" },
            { loc: [13, 17], title: "Disable Editor" },
            { loc: [19, 23], title: "Render Static" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} textColor="primary" caps>
            Storybook
          </Heading>
          <Image src={images.storybook} width="747" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} textColor="primary" caps>
            Storybook Boilerplate
          </Heading>
          <Terminal
            title="1. sara@flying-unicorn-away: ~(zsh)"
            output={[
              <div style={{ color: "#33B969" }}>
                > git clone git@github.com:SaraVieira/storybook-boilerplate.git
              </div>,
              <div>> cd storybook-boilerplate</div>,
              <div style={{ color: "#33B969" }}>> rm -rf .git</div>,
              <div>> yarn</div>,
              <div style={{ color: "#33B969" }}>> yarn start</div>
            ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <div style={{ overflow: "scroll", height: "100vh" }}>
            <Image src={images.storybookStart} width="100%" />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <CodePane
            language="bash"
            source={`
├── app
│   ├── .storybook
│   ├─────  config.js
│   ├── src
│   │──── components
│   │   └───── Button
│   │     └────── index.js
│   │     └────── Button.js
│   │     └────── Button.css
│   │     └────── Readme.md
│   ├── stories
│   └─────  button.js
├── .out (build)
├── package.json
├── .babelrc
├── .eslintrc
└── .gitignore
        `}
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/code.example")}
          ranges={[
            { loc: [0, 270], title: "Button.js" },
            { loc: [0, 5], title: "Import all the things" },
            { loc: [6, 20], title: "Define your component" },
            { loc: [24, 33], title: "Define your propTypes" },
            { loc: [34, 42], title: "Define your defaultProps" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/story.example")}
          ranges={[
            { loc: [0, 270], title: "stories/button.js" },
            { loc: [0, 4], title: "Import all the things" },
            { loc: [5, 6], title: "Define name of the story" },
            { loc: [7, 9], title: "Add variants of your component" },
            { loc: [10, 12], title: "Add variants of your component" },
            { loc: [13, 17], title: "Add variants of your component" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/config.example")}
          ranges={[
            { loc: [0, 270], title: ".storybook/config.js" },
            { loc: [0, 1], title: "Import configuration" },
            { loc: [2, 5], title: "Require your stories" },
            { loc: [6, 7], title: "Set configuration" }
          ]}
        />
      </Deck>
    );
  }
}
