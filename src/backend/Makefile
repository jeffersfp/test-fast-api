PROJECT_NAME := items-backend

test:
	pytest --verbose --cov-report term-missing --cov-report html --cov-branch --cov ./

lint:
	@echo
	blue --check --diff --color .

format:
	ruff --silent --exit-zero --fix ./
	blue ./
