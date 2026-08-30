#!/bin/bash

# Frontend React Agent - Pre-commit Hook
# Validates code quality before commits

echo "🔍 Running Pre-commit Validation..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for errors
ERRORS=0

# 1. ESLint Check
echo -e "${YELLOW}1. Running ESLint...${NC}"
if npm run lint > /dev/null 2>&1; then
    echo -e "${GREEN}✓ ESLint passed${NC}"
else
    echo -e "${RED}✗ ESLint failed${NC}"
    npm run lint:fix
    ERRORS=$((ERRORS + 1))
fi

# 2. Prettier Check
echo -e "${YELLOW}2. Checking code formatting...${NC}"
if npm run format:check > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Prettier check passed${NC}"
else
    echo -e "${RED}✗ Code formatting needed${NC}"
    npm run format
fi

# 3. TypeScript Type Check
echo -e "${YELLOW}3. Running TypeScript type check...${NC}"
if npm run type-check > /dev/null 2>&1; then
    echo -e "${GREEN}✓ TypeScript check passed${NC}"
else
    echo -e "${RED}✗ TypeScript errors found${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 4. Check for console.log in production code
echo -e "${YELLOW}4. Checking for debug statements...${NC}"
if grep -r "console\." src/ --include="*.ts" --include="*.tsx" | grep -v "\.test\." | grep -v "\.spec\."; then
    echo -e "${RED}✗ Found console statements in production code${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✓ No debug statements found${NC}"
fi

# 5. Check for TODO/FIXME comments
echo -e "${YELLOW}5. Checking for TODO/FIXME comments...${NC}"
TODO_COUNT=$(grep -r "TODO\|FIXME" src/ --include="*.ts" --include="*.tsx" | wc -l)
if [ $TODO_COUNT -gt 0 ]; then
    echo -e "${YELLOW}⚠ Found $TODO_COUNT TODO/FIXME comments${NC}"
else
    echo -e "${GREEN}✓ No TODO/FIXME comments${NC}"
fi

# Summary
echo ""
echo "================================"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ All validations passed!${NC}"
    exit 0
else
    echo -e "${RED}✗ Some validations failed (errors: $ERRORS)${NC}"
    exit 1
fi
