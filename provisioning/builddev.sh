#!/bin/bash
# In addition to being used for Vagrant the goal of this script is to be able 
# install on a Linux (RHEL. Debian, Ubuntu) machines easily, currently support
# 64-bit Ubuntu only (don't try on Amazon free tree 1GB is minimum RAM)

export DEBIAN_FRONTEND=noninteractive

sudo apt-get -y install git \
                   make \
                   python-yaml \
                   python-jinja2 \
                   python-paramiko \
                   software-properties-common

$INSTALL_TYPE = "InboxApp_Only"

if [ $INSTALL_TYPE = "Direct"]; then
	# install ansible
	cd /tmp
	git clone https://github.com/ansible/ansible.git
	cd ansible
	git checkout release1.2.2
	sudo make install
	cd /tmp
	sudo rm -rf ansible

	# install direct using josh's ansible playbook
	# TODO: Make direct server multitenant (various certificates etc.)
	cd /tmp
	git clone https://github.com/jmandel/ansible-ccda
	cd /tmp/ansible-ccda
	sudo ansible-playbook -c local -i hosts -v playbook.yml
fi

if [ $INSTALL_TYPE == "InboxApp_Only"]; then
	# Install Node.js, ember.js
	# Shortly, we will persist data in postgres via rails, and cache with Redis
	
fi