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
  CodePane,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  kitten: require("../assets/kitten1.jpg"),
  caralho: require("../assets/caralho.png"),
  me: require("../assets/me.jpg"),
  styleguide: require("../assets/styleguide.png"),
  yld: require("../assets/image.gif"),
  soccer: require("../assets/soccer.svg"),
  zombie: require("../assets/zombie.svg"),
  storybook: require("../assets/storybook.png"),
  storybookStart: require("../assets/storybook-start.png"),
  figma: require("../assets/figma.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#100830",
    tertiary: "#73E9AC",
    quartenary: "#9E79F3"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={200} theme={theme}>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
          notes="  I used to work on this project that had a lot of legacy css or in this case less and you may think that being less made it better but oh no it didn't."
        >
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Story Time
          </Heading>
          <Appear>
            <Heading size={4} caps lineHeight={1} textColor="primary">
              How I fell in love with styleguides
            </Heading>
          </Appear>
        </Slide>
        <Slide
          notes="It mainly just did this what was a not a whole of a lot better"
          transition={["fade"]}
          bgColor="secondary"
        >
          <CodePane
            lang="css"
            theme="dark"
            source={`
ul li span a { background: green; }
              `}
          />
          <Appear>
            <CodePane
              lang="css"
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
        <Slide
          notes="To get the context here is how specificity works in css:"
          transition={["fade"]}
          bgColor="secondary"
        >
          <Image
            width="100%"
            height="100%"
            src="https://designshack.net/wp-content/uploads/css-specificity-10.jpg"
          />
        </Slide>
        <Slide
          notes="Of course important overrides all of the above"
          transition={["fade"]}
          bgColor="secondary"
        >
          <Heading size={2} textColor="primary" caps>
            !important overrides all of this
          </Heading>
        </Slide>
        <Slide
          notes="so how do you override this:"
          transition={["fade"]}
          bgColor="secondary"
        >
          <Heading size={3} textColor="primary" caps>
            How do you override this ?
          </Heading>
          <CodePane
            lang="css"
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
          notes="I mean how do you override this without inline styles because everytime you use them little kitten dies and look at them: We have feelings we don't want to do that."
          transition={["fade"]}
          bgImage={images.kitten}
          align="center flex-end"
        />
        <Slide
          notes="Basically, you have to go back to the beginning and override it with classes or tags and add !important and do a 360 round on the specificity wheel."
          transition={["fade"]}
          bgColor="secondary"
        >
          <CodePane
            lang="css"
            source={`
body .button {
 .generic-class-that-should-not-have-anything-specific {
   background: red !important
 }
}
              `}
          />
        </Slide>
        <Slide
          notes="This pain I felt every time I placed an important in my code I wanted everyone to feel so this is also the story of this:"
          transition={["fade"]}
          bgColor="secondary"
        >
          <Image src={images.caralho} width="100%" height="100%" />
        </Slide>
        <Slide
          notes="So, my name is Sara and I am FE developer for YLD, a react and node consultancy that works out of london and lisbon.I'm always on twitter and you should follow me there if you like this sort of weird humor and rants."
          transition={["fade"]}
          bgColor="secondary"
        >
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
                <ListItem textColor="primary">Developer Advocate</ListItem>
                <ListItem textColor="primary">@NikkitaFTW</ListItem>
                <ListItem
                  textColor="primary"
                  style={{ display: "flex", marginTop: 20 }}
                >
                  <Image
                    src={images.soccer}
                    style={{
                      width: 50,
                      height: 50,
                      margin: 0
                    }}
                  />
                  <Text textColor="primary" style={{ margin: 0 }}>
                    Football{" "}
                  </Text>
                </ListItem>
                <ListItem
                  textColor="primary"
                  style={{ display: "flex", marginTop: 20 }}
                >
                  <Image
                    src={images.zombie}
                    style={{
                      width: 50,
                      height: 50,
                      margin: 0
                    }}
                  />
                  <Text textColor="primary" style={{ margin: 0 }}>
                    Horror Movies
                  </Text>
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
        <Slide
          notes="Would you code this ? Your first idea may be to just start hacking away and make this page in one go and make it look awesome"
          transition={["fade"]}
          bgColor="secondary"
        >
          <div style={{ overflow: "scroll", height: "100vh" }}>
            <Image
              src="https://cdn.dribbble.com/users/1018923/screenshots/3545743/attachments/787979/landingpage_highfid.png"
              width="100%"
            />
          </div>
        </Slide>
        <Slide
          notes="Just start hacking aways in your webopacks and jsxs and all the cool kid stuff.this will create inconsenticies and will also force you to make a lot of custom css and.."
          transition={["fade"]}
          bgColor="secondary"
        >
          <Image src="https://media0.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" />
        </Slide>
        <Slide
          notes="custom css causes specific bugs and a general lack of inconsistency in the code you build. Who has ever worked with opera mini ? You know my pain then"
          transition={["fade"]}
          bgColor="secondary"
        >
          <Heading size={1} textColor="primary" caps>
            Custom CSS is the death of a developer
          </Heading>
          <Appear>
            <Heading size={6} textColor="tertiary" caps>
              So is opera mini but that's for another day
            </Heading>
          </Appear>
        </Slide>
        <Slide
          notes="As you can see I basically divided this page into little chunks that are composable into an awesome UI.
The idea of having a styleguide or a UI Toolkit is to define everything in one place so that you have to write the least amount of CSS and avoid stuff like I said at the top

As you can see I am not here to teach you a craft or a skill, I'm here to trying and get a shift in thinking and basically start thinking a little like designers do and create a living styleguide. We should all have our very own bootstrap, that's my idea"
          transition={["fade"]}
          bgColor="secondary"
        >
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
            Storybook
          </Heading>
          <Layout align="center center">
            <Image src="https://github.com/storybooks/storybook/raw/master/media/storybook-intro.gif" />
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} textColor="primary" caps>
            Quick Start
          </Heading>
          <Terminal
            title="1. sara@flying-unicorn-away: ~(zsh)"
            output={[
              <div style={{ color: "#33B969" }}>> create-react-app my-app</div>,
              <div>> cd my-app</div>,
              <div style={{ color: "#33B969" }}>
                > npm i -g @storybook/cli@rc
              </div>,
              <div>> sb init</div>,
              <div style={{ color: "#33B969" }}>> yarn storybook</div>
            ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Link
            textColor="primary"
            href="https://storybook-boilerplate.now.sh/"
            target="_blank"
          >
            Starter
          </Link>
          <div style={{ overflow: "scroll", height: "100vh" }}>
            <Image src={images.storybookStart} width="100%" />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <CodePane
            lang="bash"
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
│   ├── stories
│   └─────  button.js
├── .out (build)
├── package.json
        `}
          />
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/code.example")}
          ranges={[
            { loc: [0, 270], title: "Button.js" },
            { loc: [0, 5], title: "Import all the things" },
            { loc: [6, 13], title: "Define your component" },
            { loc: [18, 24], title: "Define your propTypes" },
            { loc: [25, 35], title: "Define your defaultProps" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          bgColor="secondary"
          code={require("raw-loader!../assets/story.example")}
          ranges={[
            { loc: [0, 270], title: "stories/index.js" },
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
          bgColor="secondary"
          code={require("raw-loader!../assets/config.example")}
          ranges={[
            { loc: [0, 270], title: ".storybook/config.js" },
            { loc: [0, 1], title: "Import configuration" },
            { loc: [2, 5], title: "Require your stories" },
            { loc: [6, 7], title: "Set configuration" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            What makes this tool amazing ? 😍
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            An amazing Community
          </Heading>
          <Appear>
            <Heading size={4} caps lineHeight={1} textColor="primary">
              Over 168 PRs merged last month for example by over 50 people
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            No Hate
          </Heading>
          <Appear>
            <Heading size={4} caps lineHeight={1} textColor="primary">
              Support for 11 Frameworks and also plain HTML
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Addons
          </Heading>
          <Appear>
            <Heading size={4} caps lineHeight={1} textColor="primary">
              Official and Community addons for everything
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Component Isolation
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            How to integrate in a project and in a team?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Developers
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                Use within your own repo in a separate folder
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Create an NPM package with versioning and keep updating that
                package
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                User lerna and create a Monorepo
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Designers
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                Well, have all design folders in dropbox
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Use Sketch with{" "}
                <Link textColor="primary" href="https://kactus.io/">
                  Cactus
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Use{" "}
                <Link textColor="primary" href="https://www.figma.com">
                  Figma
                </Link>
                <Image
                  src={images.figma}
                  style={{ width: 700, display: "block" }}
                />
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            FRAMER X
          </Heading>
          <video
            autoPlay
            style={{ maxWidth: "100%" }}
            src="https://static.framer.com/x/frontpage/hero.mp4"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Why ?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <List>
            <ListItem textColor="primary">More maintainable styles</ListItem>
            <Appear>
              <ListItem textColor="primary">Less specific bugs</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">One source of truth!</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">Better for unit testing</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                UI Development is generally better!
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Thank you
          </Heading>
          <div>
            <Link
              textColor="primary"
              href="https://github.com/SaraVieira/styleguide-driven-development"
            >
              github.com/SaraVieira/styleguide-driven-development
            </Link>
          </div>
          <Link
            textColor="primary"
            href="https://styleguide-driven-development.now.sh/"
          >
            styleguide-driven-development.now.sh
          </Link>
        </Slide>
      </Deck>
    );
  }
}
