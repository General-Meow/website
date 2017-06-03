# website
paulhoang.com

site isn't built with docker but uses another image and volume mounts:

docker run -d --name website -p 80:80 -v /home/ubuntu/website/main:/usr/local/apache2/htdocs armhf/httpd:2.4
