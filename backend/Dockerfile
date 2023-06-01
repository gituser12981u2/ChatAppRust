# Start from a Rust base image
FROM rust:1.69 as builder

WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Install dependencies and build
RUN cargo build --release

# Create a new stage with a minimal image because we don't need the Rust toolchain for running the binary
FROM debian:buster-slim

WORKDIR /usr/src/app

# Copy the binary from the "builder" stage
COPY --from=builder /usr/src/app/target/release/backend .

# Run the binary
CMD ["./backend"]
