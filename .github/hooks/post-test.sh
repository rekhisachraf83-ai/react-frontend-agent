#!/bin/bash

# Frontend React Agent - Post-test Hook
# Runs after tests to check coverage

echo "📊 Running Post-test Coverage Check..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Run coverage
echo -e "${YELLOW}Generating coverage report...${NC}"
npm run test:coverage -- --coverage --coverageReporters=text

# Check minimum coverage threshold (80%)
COVERAGE=$(npm run test:coverage -- --coverage --coverageReporters=json 2>/dev/null | grep -o '"lines":[^,]*' | grep -o '[0-9.]*' || echo "0")

echo ""
echo "Coverage: ${COVERAGE}%"

if (( $(echo "$COVERAGE >= 80" | bc -l) )); then
    echo -e "${GREEN}✓ Coverage threshold met (80%)${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠ Coverage below threshold (${COVERAGE}% < 80%)${NC}"
    echo "Please add more tests to improve coverage."
    exit 0  # Don't fail, just warn
fi
