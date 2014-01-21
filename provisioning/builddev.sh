#!/bin/bash
# In addition to being used for Vagrant the goal of this script is to be able 
# install on a Linux (RHEL. Debian, Ubuntu) machines easily, currently support
# 64-bit Ubuntu only (don't try on Amazon free tree 1GB is minimum RAM)
# to install direct in a box do 
# UBUNTU>wget -O- http://bit.ly/install-directserver | sh

export DEBIAN_FRONTEND=noninteractive

sudo apt-get update -qq
sudo apt-get -y install git \
                   make \
                   python-yaml \
                   python-jinja2 \
                   python-paramiko \
                   software-properties-common

INSTALL_TYPE="Direct"

if [ "$INSTALL_TYPE" = "Direct" ] ; then
	# install ansible
	cd /tmp
	git clone https://github.com/ansible/ansible.git
	cd ansible
	git checkout release1.2.2
	sudo make install
	cd /tmp
	sudo rm -rf ansible
	
	cd /tmp
	git clone https://github.com/vaibhavb/directinabox
	
	# install direct using josh's ansible playbook
	# TODO: Make direct server multitenant (various certificates etc.)
	cd /tmp
	git clone https://github.com/jmandel/ansible-ccda
	cd /tmp/ansible-ccda
	# copy local settings TODO:make this interactive to get user input
	cp /tmp/directinabox/provisioning/direct_server.yml /tmp/ansible-ccda/settings/direct_server.yml
	sudo ansible-playbook -c local -i hosts -v playbook.yml
fi

if [ "$INSTALL_TYPE" = "Inbox_AppOnly" ] ; then
	# Install Node.js, ember.js
	# Shortly, we will persist data in postgres via rails, and cache with Redis
fi
