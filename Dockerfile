# base image
FROM node:12.13.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY webpack.*.js /app/
COPY .babelrc /app/.babelrc
RUN npm install --silent

# This Absolutely Positively does Not feel Correct. 

# dist
COPY /dist/index.html /app/dist/index.html
COPY /dist/js/main.js /app/dist/js/main.js
COPY /dist/css/main.css /app/dist/css/main.css

# Script
COPY /src/js/index.js /app/src/js/index.js
COPY /src/js/me.js /app/src/js/me.js

# # Pages
COPY /src/js/Pages/About/index.js /app/src/js/Pages/About/index.js
COPY /src/js/Pages/Archives/index.js /app/src/js/Pages/Archives/index.js
COPY /src/js/Pages/Connect/index.js /app/src/js/Pages/Connect/index.js
COPY /src/js/Pages/Home/index.js /app/src/js/Pages/Home/index.js
COPY /src/js/Pages/LiveFeed/index.js /app/src/js/Pages/LiveFeed/index.js
COPY /src/js/Pages/Projects/index.js /app/src/js/Pages/Projects/index.js
COPY /src/js/Pages/Skills/index.js /app/src/js/Pages/Skills/index.js
# # Components
COPY /src/js/Components/AboutMe/index.js /app/src/js/Components/AboutMe/index.js
COPY /src/js/Components/AboutYou/index.js /app/src/js/Components/AboutYou/index.js
COPY /src/js/Components/Contribution/index.js /app/src/js/Components/Contribution/index.js
COPY /src/js/Components/Display/index.js /app/src/js/Components/Display/index.js
COPY /src/js/Components/FeaturedProject/index.js /app/src/js/Components/FeaturedProject/index.js
COPY /src/js/Components/SocialMedia/index.js /app/src/js/Components/SocialMedia/index.js
# # Nav
COPY /src/js/NavBar/index.js /app/src/js/NavBar/index.js
COPY /src/js/NavBar/Mobile/index.js /app/src/js/NavBar/Mobile/index.js
COPY /src/js/NavBar/Web/index.js /app/src/js/NavBar/Web/index.js
# # Footer
COPY /src/js/Footer/index.js /app/src/js/Footer/index.js

# Styles
COPY /src/sass/main.scss /app/src/sass/main.scss
# #  abstracts
COPY /src/sass/abstracts/_mixins.scss /app/src/sass/abstracts/_mixins.scss
COPY /src/sass/abstracts/_variables.scss /app/src/sass/abstracts/_variables.scss
# #  base
COPY /src/sass/base/_animations.scss /app/src/sass/base/_animations.scss
COPY /src/sass/base/_base.scss /app/src/sass/base/_base.scss
COPY /src/sass/base/_typography.scss /app/src/sass/base/_typography.scss
# #  components
COPY /src/sass/components/_button.scss /app/src/sass/components/_button.scss
COPY /src/sass/components/_card.scss /app/src/sass/components/_card.scss
COPY /src/sass/components/_dropdown.scss /app/src/sass/components/_dropdown.scss
# #  layout
COPY /src/sass/layout/_app.scss /app/src/sass/layout/_app.scss
COPY /src/sass/layout/_footer.scss /app/src/sass/layout/_footer.scss
COPY /src/sass/layout/_header.scss /app/src/sass/layout/_header.scss
# #  pages
COPY /src/sass/pages/_about.scss /app/src/sass/pages/_about.scss
COPY /src/sass/pages/_archives.scss /app/src/sass/pages/_archives.scss
COPY /src/sass/pages/_connect.scss /app/src/sass/pages/_connect.scss
COPY /src/sass/pages/_feed.scss /app/src/sass/pages/_feed.scss
COPY /src/sass/pages/_projects.scss /app/src/sass/pages/_projects.scss
COPY /src/sass/pages/_skills.scss /app/src/sass/pages/_skills.scss

# Assets
COPY /src/assets/* /app/src/assets/


# start app
CMD ["npm", "start"]