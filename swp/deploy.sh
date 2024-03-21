echo "Building app..."
npm run build

echo "Deploy files to server..."
scp -r dist/* root@104.248.152.124:/var/www/html/
echo "Done!"