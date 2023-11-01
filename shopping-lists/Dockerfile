FROM lukechannings/deno:v1.37.0

EXPOSE 2222

WORKDIR /shoppping-lists

COPY deps.js .

RUN deno cache deps.js

COPY . .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-read", "--allow-env", "--no-check", "app.js" ]