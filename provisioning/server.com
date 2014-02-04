server {
        listen   80; ## listen for ipv4; this line is default and implied
        #listen   [::]:80 default ipv6only=on; ## listen for ipv6

        server_name hieofone.vitraag.com;
        access_log /var/log/nginx/hieofone.access.log;
        error_log /var/log/nginx/hieofone.error.log;

        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://127.0.0.1:6000/;
                proxy_redirect off;
      }
}

server {
        listen 80;

        server_name test.vitraag.com;
        access_log /var/log/nginx/msgpack.access.log;
        error_log /var/log/nginx/msgpack.error.log;

        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://127.0.0.1:3000/;
                proxy_redirect off;
      }
}
