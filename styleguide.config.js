module.exports = {
    title: 'TodoMVC',
    pagePerSection: true,
    sections: [
        {
            name: "Introduction",
            content: "docs/introduction.md"
        },
        {
            name: "Documentation",
            sections: [
                {
                    name: "Installation",
                    content: "docs/installation.md",
                    description: "The description for the installation section"
                },
                {
                    name: "Live Demo",
                    external: true,
                    href: "https://www.futurice.com"
                }
            ]
        },
        {
            name: "React UI Components",
            content: "docs/reactui.md",
            components: "src/components/**/!(*.spec).js",
            ignore: [
                "src/components/App.js",
                "src/components/Footer.js",
                "src/components/Header.js"
            ],
            exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
            usageMode: "expand" // 'hide' | 'collapse' | 'expand'
        }
    ]
};;