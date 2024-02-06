echo -e "Store puppeteer executable in cache\n"

mkdir ./.cache

mv /app/.cache/puppeteer ./.cache

echo -e "Install libnss3\n"

apt-get install libnss3-dev