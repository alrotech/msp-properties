.PHONY: install

install:
	docker-compose -f ../../../docker-compose.yml exec php php /var/www/html/public/pkg/mspconf/_build/install.script.php