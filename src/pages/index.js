import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

const Poem = () => (
  <div>
    <h3>The Things I Know That I Love</h3>
    <p><em>By Olivia</em></p>

    <p>
      I know that I love the sky, I look up at it with awe.<br />
      I know I love the clouds with their intriguing designs.<br />
      I love my friends and I love my family.<br />
      I love stories of things that could never exist.<br />
      I like the way things make me feel, even anger and pain.<br />
      Then those millions of times when they don&apos;t have a name.
    </p>

    <p>
      I love the smell of the outside air every time I open the window.<br />
      I long to lie on the ground and stare up at the sky of brave blue.<br />
      I love the feel of the world beneath me, surrounding me, renewing me.
    </p>

    <p>
      The clouds in the sky are like fictional dragons, horses, and whales with wings.<br />
      They migrate across the ocean above me to somewhere I won&apos;t ever see.
    </p>

    <p>
      The sunlight reaching through the leaves is a wonderful thing indeed.<br />
      It struggles peacefully through the green and shines on through the leaves.
    </p>

    <p>
      I love to read others&apos; writing and wander around lost in their art.<br />
      I wish I could go back and meet them to ask them how they think.
    </p>

    <p>
      I love the thought of time, the immortal queen of the universe.<br />
      I love my friends and would never leave them even if they are endlessly annoying.
    </p>

    <p>
      I love the ones I know I&apos;ll lose, and I love the things I won&apos;t.<br />
      The chirping of the birds, ringing on all day.<br />
      As the crickets take over for the change of night to day.
    </p>

    <p>
      I love the world. I love the life, I love the time we have.<br />
      I don&apos;t know if there&apos;s something I don&apos;t love because I love a lot.
    </p>

    <p>
      I never am sure if love is the right word, maybe it&apos;s awe, maybe it&apos;s amazement, maybe it&apos;s my envy of the birds.<br />
      I think I happen to be a wolf, loyal to her pack.<br />
      Though I am a wolf, I am a wolf—a wolf who longs to fly.<br />
      I want to feel the wind under my wings and feel the brave blue of the sky.<br />
      I want to look down at the earth from somewhere up high.
    </p>

    <p>
      I love the things I have and the things I don&apos;t.<br />
      I love the things that could be and the questions of the world.<br />
      I love the number 7, and the number 5, and perhaps all of them from 1 to 9.
    </p>

    <p>
      I love the way eyes look when they&apos;re caught within the sun.<br />
      The transparent color that presents all others.
    </p>

    <p>
      I love the darkness of my room.<br />
      The glowing blue-black from the bank.
    </p>

    <p>
      I love the way my life is and the way it isn&apos;t.<br />
      I also always fall for the smell of an old book, that will tell a story other than mine.<br />
      Open up the pages of golden dirty brown, put the thoughts in your head of the story you&apos;ve found.
    </p>
  </div>
);

export default Poem;
