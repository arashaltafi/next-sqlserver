FROM  img.hooshmandsepehrco.com/nodejs/node:26-alpine AS deps
WORKDIR /usr/src/app
COPY .npmrc ./
COPY package.json package-lock.json ./
RUN npm install

FROM  img.hooshmandsepehrco.com/nodejs/node:26-alpine AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
COPY .env .env
RUN npm run build

FROM  img.hooshmandsepehrco.com/nodejs/node:26-alpine AS runner
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.* ./
COPY --from=builder /usr/src/app/.env ./.env
EXPOSE 3000
CMD ["npm", "start"]