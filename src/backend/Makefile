test:
	pytest --verbose --cov-report term-missing --cov-report html --cov-branch --cov ./src/

lint:
	# @echo
	# ruff ./src
	@echo
	blue --check --diff --color .
	# @echo
	# mypy ./src
	# @echo
	# pip-audit ./src

format:
	ruff --silent --exit-zero --fix ./src
	blue ./src

build:
	@echo Building project
