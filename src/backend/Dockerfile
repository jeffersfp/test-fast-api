FROM python:3.11.3-buster

WORKDIR /app

COPY . .

RUN pip install --upgrade pip
RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install

ENTRYPOINT ["uvicorn", "main:app"]
CMD ["--host", "0.0.0.0"]
