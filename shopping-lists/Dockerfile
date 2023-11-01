FROM lukechannings/deno:v1.37.0

EXPOSE 2222

WORKDIR /app

COPY deps.js .

RUN deno cache deps.js

COPY . .

CMD [ "run", "--allow-net", "--allow-env",  "--allow-read", "--watch", "--unstable", "app.js" ]
