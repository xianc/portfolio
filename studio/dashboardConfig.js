export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62509c5be43dfb09e9535bf7',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-wxjfjajk',
                  apiId: 'eab12ed9-4b34-4cd7-8a86-4d0696de18f9'
                },
                {
                  buildHookId: '62509c5bb201ff0a7843745b',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-ufqg2yhd',
                  apiId: '927d9065-6588-433a-ac0b-8c6758105571'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xianc/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-ufqg2yhd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
