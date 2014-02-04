sudo apt-get install nginx
sudo service nginx start

#edit nginx conf to server_names_hash_bucket_size 64;
#update-rc.d nginx to start on runlevel

#sites-available
#use server.com

#sites-enabled
#symlink server.com
