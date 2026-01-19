# ----------- Build Stage (Frontend) -----------
FROM node:18-alpine AS build-frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./src ./src
COPY public ./public
COPY tailwind.config.js postcss.config.js .
RUN npm run build

# ----------- Production Stage (Backend & Runtime) -----------
FROM node:18-alpine AS production
WORKDIR /app

# Backend dependencies
COPY backend/package.json backend/package-lock.json ./backend/
RUN cd backend && npm install --omit=dev

# Copy backend/server
COPY backend ./backend

# Copy frontend build output
COPY --from=build-frontend /app/build ./backend/build

# Copy .env if provided
COPY .env* ./backend/

EXPOSE 5000
WORKDIR /app/backend
CMD ["node", "server.js"]
