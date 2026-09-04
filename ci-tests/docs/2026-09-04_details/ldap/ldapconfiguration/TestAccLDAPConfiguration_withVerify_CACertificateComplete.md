# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 18 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS 20 minutes
- 2026-08-29 PASS 22 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 21 minutes
- 2026-09-01 PASS 20 minutes
- 2026-09-02 PASS 18 minutes
- 2026-09-03 PASS 19 minutes
- 2026-09-04
  - PASS 26 minutes
  - PASS 19 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-30 01:06](#error-2026-08-30t0106020000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | qa | 1186.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T01:06:02+00:00
```
2026-08-30T01:06:02.6037463Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-30T01:06:02.6058473Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/a4ab5bfa-4ddf-46b5-95ca-154690f60195/terraform
2026-08-30T01:06:02.6060007Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-30T01:06:02.6061577Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-30T01:06:02.6062935Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-30T01:06:02.6064026Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-30T01:06:02.6065011Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-30T01:06:02.6066014Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-30T01:06:02.6066980Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-30T01:06:02.6067972Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-30T01:06:02.6068951Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-30T01:06:02.6069936Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-30T01:06:02.6070900Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-30T01:06:02.6071799Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1186.62s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
