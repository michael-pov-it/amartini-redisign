# syntax=docker/dockerfile:1

# ----- Base Stage -----
FROM node:22-alpine AS base

# Install security updates and required dependencies
RUN apk upgrade --no-cache && \
  apk add --no-cache libc6-compat && \
  rm -rf /var/cache/apk/*

WORKDIR /app

# ----- Dependencies Stage -----
FROM base AS deps

# Copy only package files for better layer caching
COPY package.json package-lock.json ./

# Install all dependencies (needed for build)
RUN npm ci

# ----- Builder Stage -----
FROM base AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code (respecting .dockerignore)
COPY . .

# Build arguments for build-time configuration
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_TELEMETRY_DISABLED=1

# Set build environment variables
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED} \
  NODE_ENV=production

# Build the application
RUN npm run build

# ----- Runner Stage (Production) -----
FROM base AS runner

WORKDIR /app

# Production environment variables
ENV NODE_ENV=production \
  NEXT_TELEMETRY_DISABLED=1 \
  PORT=3000 \
  HOSTNAME="0.0.0.0"

# Create non-root user with specific UID/GID for security
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs && \
  mkdir .next && \
  chown nextjs:nodejs .next

# Copy built application from builder
# Next.js standalone output includes only needed dependencies
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port (documentation only, doesn't actually publish)
EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Use exec form for proper signal handling
CMD ["node", "server.js"]
