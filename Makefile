cd.PHONY: build install

build:
	php _build/build.transport.php
install:
	docker-compose -f ../../../docker-compose.yml exec mdx php /var/www/html/public/pkg/mspaymentprops/_build/install.script.php
