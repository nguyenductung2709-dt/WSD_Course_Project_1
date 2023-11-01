FROM lukechannings/deno:v1.37.0

EXPOSE 2222

WORKDIR /shopping-lists

COPY /shopping-lists/deps.js .

RUN deno cache deps.js

COPY . .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-read", "--allow-write", "--allow-env", "--no-check", "app.js" ]