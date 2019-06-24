cd.PHONY: install

install:
	docker-compose -f ../../../docker-compose.yml exec mdx php /var/www/html/public/pkg/mspaymentprops/_build/install.script.php
