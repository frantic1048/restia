module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-typestyle', // local plugin
            options: {
                styleTargetId: 'pyonpyon-style',
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-ts',
            options: {
                fileName: 'types/graphql-types.ts',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-feed',
    ],
    siteMetadata: {
        title: 'Pyon Pyon Today',
        description: 'Pyon Pyon Today',
        siteUrl: `https://pyonpyon.today`,
        image: '/favicon.png',
    },
}