# Security Scanning Automation

This repository includes comprehensive security scanning automation to ensure code quality and security compliance.

## Security Workflow Overview

The security scanning workflow runs automatically on:
- **Push events** to main and develop branches
- **Pull requests** targeting the main branch
- **Scheduled runs** every Monday at 6 AM UTC

## Security Scans Included

### 1. Dependency Vulnerability Scan
- **Tool**: OWASP Dependency Check
- **Purpose**: Detects known vulnerabilities in project dependencies
- **Output**: HTML report with vulnerability details

### 2. Code Security Analysis
- **Tools**: ESLint Security Plugin + GitHub CodeQL
- **Purpose**: Identifies security issues in source code
- **Checks**: SQL injection, XSS, insecure file operations, etc.

### 3. Secret Detection Scan
- **Tools**: TruffleHog + Gitleaks
- **Purpose**: Detects accidentally committed secrets and API keys
- **Patterns**: AWS keys, GitHub tokens, Stripe keys, etc.

### 4. Vulnerability Assessment
- **Tools**: Snyk + npm audit
- **Purpose**: Comprehensive vulnerability assessment
- **Severity**: High and critical vulnerabilities only

## Configuration Files

### `.github/workflows/security-scan.yml`
Main workflow configuration with parallel job execution.

### `.eslintrc.security.js`
ESLint configuration for security-specific rules.

### `.gitleaks.toml`
Gitleaks configuration for secret detection patterns.

## Artifacts Generated

Each scan generates downloadable artifacts:
- Dependency scan reports
- Code security analysis results
- Secret detection findings
- Vulnerability assessment summaries

## Security Summary Report

A consolidated security summary is generated after all scans complete, providing an overview of security status.

## Manual Execution

To run security scans manually:

```bash
# Run dependency scan
npm run security:dependency

# Run code security analysis
npm run security:code

# Run secret detection
npm run security:secrets

# Run vulnerability assessment
npm run security:vulnerability
```

## Security Alerts

High and critical security findings will:
- Fail the workflow run
- Generate detailed reports
- Require remediation before merge

## Best Practices

1. **Regular Updates**: Keep dependencies updated
2. **Secret Management**: Use environment variables, never commit secrets
3. **Code Review**: Always review security findings
4. **Automation**: Let the workflow handle routine security checks