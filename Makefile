# Include external make configurations
include .make/tag.mk

# Application name
APP_NAME := ts-universal-package

# Set default target to help
.DEFAULT_GOAL := help

# Remove dist folder
rmdist:
	@echo "Removing dist folder..."
	@pnpm rmdist

# Build the package
build: rmdist
	@echo "Building package..."
	@pnpm build

# Run tests
test:
	@echo "Running tests..."
	@pnpm test

# Update version
version-up:
	@echo "Updating version..."
	@pnpm version-up

# Run pre-commit checks
pre:
	@echo "Running pre-commit checks..."
	@pnpm pre-commit

# Help target
help:
	@echo "Available targets:"
	@echo "  rmdist         - Remove dist folder"
	@echo "  build          - Build the package"
	@echo "  test           - Run the test suite"
	@echo "  version-up 	- Update version"
	@echo "  pre            - Run pre-commit checks"
	@echo "  help           - Show this help message"

# Declare phony targets
.PHONY: all rmdist build build-prod dev run test version-up pre help
