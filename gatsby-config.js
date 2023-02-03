/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Adobe Express Embed SDK',
        path: '/',
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'Reference',
        menu: [{
          title: 'v2.0.1',
          description: 'v2 Reference', // optional,
          path: '/v2/reference/'
        }, {
         title: 'v1.5.4',
         description: 'v1 Reference', // optional,
         path: '/reference/'
       }],
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Quickstart',
        path: '/guides/',
      },
      {
        title: 'Configure OAuth', 
        path: '/guides/authorization/'
      },
      {
        title: 'Local Development',
        path: '/guides/local/'
      },
      {
        title: 'Full editor',
        path: '/guides/full_editor/',
        pages: [
          {
            title: 'Create new project',
            path: '/guides/full_editor/create_project/'
          },
          {
            title: 'Edit existing project',
            path: '/guides/full_editor/edit_project/'
          }, 
          {
            title: 'Customization',
            path: '/guides/full_editor/customization/'
          }
        ]
      },
      {
        title: 'Quick actions',
        path: '/guides/quick_actions/',
        pages: [
          {
            title: 'Image quick actions',
            path: '/guides/quick_actions/image/'
          },
          {
            title: 'Video quick actions',
            path: '/guides/quick_actions/video/'
          }
        ]
      },
      {
        title: 'Submission and Review',
        path: '/guides/review/'
      },
      {
        title: 'Changelog',
        path: '/guides/changelog/'
      },
      {
        title: 'Reference',
        path: '/reference/',
        header: true,
        pages: [
          {
            title: 'Initialize SDK', 
            path: '/reference/', 
          },
          {
            title: 'Full editor', 
            path: '/reference/full_editor/'
          },
          {
            title: 'Quick actions', 
            path: '/reference/quick_actions/'
          },
          {
            title: 'Shared types', 
            path: '/reference/shared_types/'
          }
        ]
      },
      {
        title: 'Reference',
        path:'/v2/reference/',
        header: true, 
        // pages: require('./v2-reference')
        pages: [
          {
            title: 'Initialize SDK', 
            path: '/v2/reference/', 
          },
          {
            title: 'Full editor', 
            path: '/v2/reference/full_editor/'
          },
          {
            title: 'Quick actions', 
            path: '/v2/reference/quick_actions/'
          },
          {
            title: 'Shared types', 
            path: '/v2/reference/shared_types/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/embed-sdk/docs/'
};
