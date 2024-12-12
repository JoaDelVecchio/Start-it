import { type SchemaTypeDefinition } from "sanity";
import { author } from "@/sanity/schemaTypes/author";
import { startUp } from "./startUp";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startUp],
};
