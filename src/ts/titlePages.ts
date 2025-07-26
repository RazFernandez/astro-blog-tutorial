
/**
 * An array of objects representing the titles for different pages.
 * Each object contains:
 * - `tabTitle`: The title to be displayed on the browser tab.
 * - `bodyTitle`: The title to be displayed in the body of the page.
 *
 * @remarks
 * This constant is useful for managing page titles in a centralized way.
 *
 * @example
 * ```
 * {
 *   tabTitle: "Home Page",
 *   bodyTitle: "Home"
 * }
 * ```
 *
 * @type {Array<{ tabTitle: string; bodyTitle: string }>}
 */
interface Pages{
    tabTitle: string;
    bodyTitle: string;
}

const titlePagesNames = [
    { tabTitle: "Home Page", bodyTitle: "Home" },
    { tabTitle: "About", bodyTitle: "About Me" },
    { tabTitle: "Blog", bodyTitle: "Blogs" }
];

export default titlePagesNames;