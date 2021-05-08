FROM python:3.9
RUN pip install --upgrade pip
RUN mkdir /src
WORKDIR /src
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY src/ .
CMD ["python", "/src/server.py"]