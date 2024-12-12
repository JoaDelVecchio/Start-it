import { defineType } from "sanity";

export const startUp = defineType({
  name: "startUp",
  title: "StartUp",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "views",
      type: "number",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "category",
      type: "string",
    },
    {
      name: "image",
      type: "url",
    },
    {
      name: "pitch",
      type: "markdown",
    },
  ],
});
