# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-07 12:29](#error-2026-09-07t1229440000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev | 1069.09s

### Timeline
- 2026-09-07

### Error 2026-09-07T12:29:44+00:00
```
2026-09-07T12:29:44.7284483Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-09-07T12:29:44.7293194Z   
2026-09-07T12:29:44.7299221Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-07T12:29:44.7300353Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-09-07T12:29:44.7301086Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-09-07T12:29:44.7302063Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-09-07T12:29:44.7302717Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-09-07T12:29:44.7303388Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-09-07T12:29:44.7304030Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-09-07T12:29:44.7304674Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-09-07T12:29:44.7305323Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-09-07T12:29:44.7305985Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-09-07T12:29:44.7306631Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-09-07T12:29:44.7307134Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1069.94s)
```

- 2026-09-08 PASS 18 minutes
- 2026-09-09 PASS 21 minutes
- 2026-09-10 PASS 19 minutes
- 2026-09-11
  - PASS an hour
  - PASS 21 minutes
- 2026-09-12 PASS 18 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 19 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
