module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/pdf");
  eleventyConfig.addPassthroughCopy("src/quiz");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Copy current site assets to maintain backward compatibility during migration
  eleventyConfig.addPassthroughCopy({ "img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "video": "assets/video" });
  eleventyConfig.addPassthroughCopy({ "*.pdf": "pdf" });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Collections for bilingual content
  eleventyConfig.addCollection("posts_en", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/en/**/*.md");
  });

  eleventyConfig.addCollection("posts_fr", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/fr/**/*.md");
  });

  // Custom filter for formatting dates
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Markdown configuration
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true,
    breaks: false,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
