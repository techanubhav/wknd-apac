// module.exports = {
//     // default working directory (can be changed per 'cwd' in every asset option)
//     context: __dirname,

//     // path to the clientlib root folder (output)
//     clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/wknd/clientlibs",

//     libs: [
//         {
//             name: "clientlib-site",
//             allowProxy: true,
//             categories: ["wknd.site"],
//             dependencies: ['aem-core-cif-react-components'],
//             serializationFormat: "xml",
//             cssProcessor : ["default:none", "min:none"],
//             jsProcessor: ["default:none", "min:none"],
//             assets: {
//                 js: [
//                     "dist/clientlib-site/js/vendors~site.*.js",
//                     "dist/clientlib-site/js/site.*.js",
//                     "dist/clientlib-site/js/i18n/*.js"
//                 ],
//                 css: [
//                     "dist/clientlib-site/css/vendors~site.*.css",
//                     "dist/clientlib-site/css/site.*.css"
//                 ],
//                 resources: {
//                     cwd: "./dist/clientlib-site/resources",
//                     flatten: false,
//                     files: ["**/*.*"]
//                 }
//             }
//         }
//     ]
// };

/*******************************************************************************
 *
 *    Copyright 2020 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

 const path = require('path');

 const BUILD_DIR = path.join(__dirname, 'dist');
 const CLIENTLIB_DIR = path.join(
   __dirname,
   '..',
   'ui.apps',
   'src',
   'main',
   'content',
   'jcr_root',
   'apps',
   'wknd',
   'clientlibs'
 );
 
 const libsBaseConfig = {
   allowProxy: true,
   serializationFormat: 'xml',
   cssProcessor: ['default:none', 'min:none'],
   jsProcessor: ['default:none', 'min:none']
 };
 
 // Config for `aem-clientlib-generator`
 module.exports = {
     context: BUILD_DIR,
     clientLibRoot: CLIENTLIB_DIR,
     libs: [
         {
             ...libsBaseConfig,
             name: 'clientlib-site',
             categories: ['wknd.site'],
             dependencies: ['wknd.dependencies', 'aem-core-cif-react-components'],
             assets: {
                 // Copy entrypoint scripts and stylesheets into the respective ClientLib
                 // directories
                 js: {
                     cwd: 'clientlib-site',
                     files: ['**/*.js'],
                     flatten: false
                 },
                 css: {
                     cwd: 'clientlib-site',
                     files: ['**/*.css'],
                     flatten: false
                 },
 
                 // Copy all other files into the `resources` ClientLib directory
                 resources: {
                     cwd: 'clientlib-site',
                     files: ['**/*.*'],
                     flatten: false,
                     ignore: ['**/*.js', '**/*.css']
                 }
             }
         }
     ]
 };
 