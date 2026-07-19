From node:26.5.0-alpine3.24 As build    

USER root

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.31.3-alpine AS Expense-Tracker

COPY --from=build /app/dist /usr/share/nginx/html

CMD [ "nginx","-g","daemon off;" ]