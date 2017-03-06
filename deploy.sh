rm -rf public
gulp build
cd public
git init
git add -A
git commit -m 'update songViz'
git push -f git@github.com:ckeisato/songViz.git master:gh-pages
