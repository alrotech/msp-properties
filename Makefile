PHONY: build release install proceed

build:
	php _build/build.transport.php

release:
	php _build/build.transport.php release

install:
	docker-compose -f ../../../docker-compose.yml exec mdx php /var/www/html/public/pkg/mspaymentprops/_build/install.script.php

proceed:
	$(MAKE) build && $(MAKE) install