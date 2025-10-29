# Some Directions to Help Make Navigating Easier

## Content Collections for Blogs
Inside 'src', you'll see a directory called 'content' - this contains subdirectories for 'blogs' and 'services'. The 'blogs' folder will have one markdown for a post along with its cover image specified in the frontmatter. For example, one blog I already made called 'prevent-frozen-pipes' has the 'frozen-pipes.jpg' cover image. So, whenever you create a new markdown for a blog, place it and its corresponding cover image inside 'src/content/blogs'. You can use follow the frontmatter format from the markdowns that are already made as a reference for future blogs. 

## Content Collections for Services
Most of what was said for 'blogs' applies to 'services'. The main difference is that each service markdown doesn't have a cover image. Instead, there's simply an image (and its alt of course) for each service route. 

I've already set it to list out all the blogs and services dynamically, so you should be able to just add a new markdown and it'll pop up on the pages.

### Also, I commented out the HTML that displays the latest blogs in the home page. I also have an '<a>' element commented out inside the Navigation component that takes you to the blogs page.  

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
