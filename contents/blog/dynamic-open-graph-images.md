---
date: 2022-03-01
title: "Dynamic Open Graph images: Your website's free social media ad (that's always up-to-date)"
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
author: ["cory-watilo"]
categories: ["Inside PostHog"]
featuredImage: ../images/blog/actual-post-open-graph-image.png
featuredImageType: full
excerpt: The image preview you see when sharing a link is a great opportunity to get your brand’s message in front of people without them even clicking through to your website. Most sites just opt to display a logo and some brand elements.
---

## The TL;DR version:

The image preview you see when sharing a link is a great opportunity to get your brand’s message in front of people without them even clicking through to your website. Most sites just opt to display a logo and some brand elements.

### Before

This is what ours used to look like. There’s a lot of untapped potential here.

![Our previous site-wide Open Graph image](../images/blog/open-graph-images/og-0.png)
<figcaption class="text-center text-primary text-opacity-70 font-semibold !text-sm -mt-4 mb-4 hover:text-primary dark:text-white dark:hover:text-white">Our previous site-wide Open Graph image</figcaption>

### After

We decided to make better use of the space that Open Graph provides by creating custom layouts and images for most individual pages of our website. Some dynamically generated every time we update [posthog.com](http://posthog.com) (like [this Docs article](/docs)).

![Dynamically-generated Open Graph image with live data from our website](../images/blog/open-graph-images/og-12.png)
<figcaption class="text-center text-primary text-opacity-70 font-semibold !text-sm -mt-4 mb-4 hover:text-primary dark:text-white dark:hover:text-white">Dynamically-generated Open Graph image with live data from our website</figcaption>

This project is now generating hundreds of Open Graph image previews daily and appearing in Twitter and LinkedIn timelines, and in Slack channels everywhere.

## Now for the extended version...

Now that I've drawn you in with the short version, I'll explain in more detail about Open Graph, why we decided to put effort into ours, some inspiration behind it, and how we built our end result in a static website environment.

### What is an Open Graph image?

When you share a link on social sites like Twitter, LinkedIn, and Facebook, a special image called the [Open Graph image](https://ogp.me/) will often appear with the URL. Other apps like Slack, iMessage, and Telegram also use it too.

It’s a great way for websites to make links more visually enticing and websites will often use the same type of imagery as they use in their company’s header image on Twitter, LinkedIn, or Facebook.

### Some examples

**Stripe** uses a gradient background that is synonymous with anyone who’s ever seen Stripe’s website (it’s on brand).

![Stripe's Open Graph image](../images/blog/open-graph-images/og-2.png)

**Squarespace** uses the space to feature some lifestyle imagery, and an example of the product they offer.

![Squarespace's Open Graph image](../images/blog/open-graph-images/og-3.png)

**Webflow** displays some cool interface elements and product examples within their image.

![Webflow's Open Graph image](../images/blog/open-graph-images/og-4.png)

There are also a lot of major brands who have seemingly put zero effort into link previews.

**Apple**

![Apple's Open Graph image](../images/blog/open-graph-images/og-5.png)

**Shopify**

![Shopify's Open Graph Image](../images/blog/open-graph-images/og-6.png)

**Microsoft**

![Microsoft's Open Graph Image](../images/blog/open-graph-images/og-7.png)

There’s a lot of missed opportunity - our customers are essentially giving us free ad space in front of their friends, followers, and colleagues. Whatever their connections see here needs to encourage them to want to see more.

## Concept: Open Graph images as a digital billboard
### Our blog

We frequently post content [on our blog](/blog), and we frequently create custom artwork for posts we're planning on promoting.

Last year [for a product update](/blog/the-posthog-array-1-26-0), we used artwork manually created in Figma that contained a summary of what was in the update. This was our first step in starting to think of better ways to use this space.

![The first unique Open Graph image we used for a product update](../images/blog/open-graph-images/array-custom-art.png)
<figcaption class="text-center text-primary text-opacity-70 font-semibold !text-sm -mt-4 mb-4 hover:text-primary dark:text-white dark:hover:text-white">The first unique Open Graph image we used for a product update</figcaption>

### Just days before, GitHub made Open Graph images 10x better!

GitHub [had just improved link previews](https://github.blog/2021-06-22-framework-building-open-graph-images) when sharing various links across their site.

Now when sharing links to repositories or pull requests, you can see more context before clicking through.

**For example, here’s what sharing a link to [a pull request](https://github.com/PostHog/posthog/pull/8142) looks like.**

![GitHub's new Open Graph image example](../images/blog/open-graph-images/og-8.png)

Aside from being more visually interesting than a static image, it also serves to prepare the reader on what they’re about to click. Even this brief context is valuable - and definitely more valuable than a single static site-wide image.

I should point out that GitHub also allows repos to upload a custom Open Graph image, which we use as an opportunity to communicate the highlights of our product.

This served as inspiration for PostHog: *How could we take this concept but 10x what GitHub did?*

![Our GitHub repo's Open Graph image](../images/blog/open-graph-images/og-9.png)
<figcaption class="text-center text-primary text-opacity-70 font-semibold !text-sm -mt-4 mb-4 hover:text-primary dark:text-white dark:hover:text-white">Finally, an Open Graph image (for our GitHub repo) that was really designed to be looked at.</figcaption>

## Making Open Graph images 100x better

As PostHog is a developer-first product and we see our website as a leading sales channel, we’re constantly optimizing for our technical audience. We ask ourselves the question, “What would resonate with us?” and then we try to build that.

It’s important for our business that we capture a potential visitor’s attention regardless of their entry point and traffic source. They might discover PostHog on the feed of a social network or from a colleague sharing a link in their company’s Slack.

As a designer, I often think to myself, “If I were standing over someone’s shoulder as they see the PostHog brand for the first time, would I be proud of what they see?”

As a company, we typically agree spending a little extra time on these details is worth it for our brand.

### Our approach

We decided to use a hybrid approach, generating some images on-the-fly, and also employing static images for content that doesn’t change too frequently.

Our content is split into two main types:

1. Static, marketing content - pages that aren’t frequently updated
    _Eg: Product pages (`/product`, `/product/session-recording`, etc)_
1. Dynamic, editable content - Docs, Handbook, Blog
    - Docs pages (often shared internally when discussing deployment or installation)
    - Blog posts - all of which have artwork, many of them custom
    - Careers - obviously highly dynamic

### Designing the concepts

In [our website’s Figma project](https://www.figma.com/file/g1UCTW9ZX21GU85hLsWB31/Website-concepts?node-id=3133%3A76407), I used a [template](https://www.figma.com/community/file/820337605519256142) by [Ryan Warner](https://twitter.com/RyanWarnerCodes) that let me design on a single artboard (as a component) while simultaneously previewing the result for Twitter, Discord, Slack, and Facebook.

(It's useful to verify image sizing, since sometimes images are scaled down. Also, don’t forget how small text is going to appear on mobile!)

### Evolving the concept

We posed some questions about what would make these Open Graph images useful:

- What if the image preview was a screenshot of the webpage? Is this type of thumbnail captivating?
- What if you could read part of an article (Docs, Handbook, Blog) in the image preview (like when reading a news article before hitting the paywall)? Would this draw you in and make you want to read more?

## **Static Open Graph images**

[In this PR](https://github.com/PostHog/posthog.com/issues/2785), we created static Open Graph images for each of our main product pages. These images don’t need to be frequently updated, so it was okay to put a little more time in crafting one-off pieces for each.

Here’s what you’ll see when sharing [posthog.com/product/session-recording](/product/session-recording):

![PostHog's Session Recording Open Graph image](../images/blog/open-graph-images/og-10.png)

We also build custom artwork for pages we know are likely to be shared, like for an event we’ll be hosting soon.

![Personalized Open Graph image for an event](../images/blog/open-graph-images/og-11.png)

## **Dynamic Open Graph images**

*Now for the fun part...*

Similar to GitHub’s approach, we automatically generate some Open Graph images so our Graphic Designer, Lottie, doesn’t have to be on call 24x7 for whenever we publish a blog post.

### Before/after: Sharing a `/docs` URL

**Before (previous site-wide Open Graph image)**

We shared a single static image across all Docs articles

![Open Graph image](../images/blog/open-graph-images/og-0.png)

**After**

Now we show a preview from the article, along with some relevant information about it that you might like to know.

![Open Graph image](../images/blog/open-graph-images/og-12.png)

### Other examples

**Blog post**

There are a considerations for our blog posts:

- If we place an image in the background, text layered on top needs to be readable. The fix? We added subtle text shadows and partially transparent gradients layered between the text and image.
- Some posts have multiple authors, so that needs to be factored in.
- Some post images have text [inside the image](https://posthog.com/blog/yc-top-companies). In this case, we don't want to auto-generate an Open Graph image for these, we have a parameter in our blog post’s front matter to skip this image generation.

![Blog Open Graph image](../images/blog/open-graph-images/og-13.png)

**Customer stories**

- Since each customer story involves two logos, we placed them at the top along with a heart in between.

![Example of Open Graph image in a customer story](../images/blog/open-graph-images/og-14.png)

**Careers**

Especially useful for the PostHog team when posting roles on LinkedIn, this image is always up to date with the latest roles we’re hiring.

![Careers Open Graph image](../images/blog/open-graph-images/og-1.png)

**Personalized pages for customers and prospects**

We’ve even designed (and plan to implement) custom “Getting started” pages for prospective customers, so PostHog feels a little more personalized when our link is shared around a company’s Slack.

![Next Steps Open Graph image](../images/blog/open-graph-images/og-15.png)

## How it works

A more technical explanation of how we built this can be found [in this pull request](https://github.com/PostHog/posthog.com/pull/2695), but here’s a summary:

- We use headless Chrome via Puppeteer.
- We load images and our custom font and screenshot the preview.
- Images are generated at build time. (We use Gatsby, a static site generator, so nothing is technically on-the-fly, but rather generated at build.)

### Testing Open Graph previews

There are a handful of tools to test Open Graph previews, but my personal favorite has become [metatags.io](https://metatags.io/), as it’s fast, simple, and not cluttered with ads. (It will even generate your Open Graph meta tags for you!)

It's important to note that some websites cache Open Graph on their servers. If you think you uploaded a new version of an Open Graph image to your website but your changes aren't appearing, this might be why! Facebook has a useful [Graph debugging/cache busting tool](https://developers.facebook.com/tools/debug/).

## In summary...

This was a really fun project to work on, as it adds immediate value on a daily basis to anyone seeing a link to posthog.com. On a personal note, it’s pretty special to work at a company where this type of polish is valued.

We still consider this a v1 approach, as there are plenty of edge cases to work through - not to mention what to do with article's begin with images or titles - like how to format it all.

In a future update, we plan to [make our Tutorials Open Graph images transparent](https://github.com/PostHog/posthog.com/issues/2720) so they naturally work in both light and dark modes.

![Opaque tutorial Open Graph images](../images/blog/open-graph-images/opaque-tutorials.png)

But this first step is lightyears more interesting to look at than a simple PostHog logo on a white background. (If you see opportunity for improvement, we invite you to submit a pull request [on our website’s repo](http://github.com/posthog/posthog.com)!)

A big shout out goes to the team at GitHub who worked on their new Open Graph images, as it served as a starting point in inspiring what we ultimately built.

We really hope you enjoy seeing our Open Graph previews as much as we enjoyed making them!