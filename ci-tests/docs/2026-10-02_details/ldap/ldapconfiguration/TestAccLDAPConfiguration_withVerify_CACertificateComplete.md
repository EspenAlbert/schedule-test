# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-07 01:05](#error-2026-09-07t0105410000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev | 1156.03s
[2026-09-07 12:29](#error-2026-09-07t1229440000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev | 1069.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 minutes
- 2026-09-03 PASS 19 minutes
- 2026-09-04
  - PASS 26 minutes
  - PASS 19 minutes
- 2026-09-05 PASS 20 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 19 minutes

### Error 2026-09-07T01:05:41+00:00
```
2026-09-07T01:05:41.6700714Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-09-07T01:05:41.6712712Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/1d4fda61-4325-45fa-b181-10980e3b8f68/terraform test_working_directory=/tmp/plugintest53098661 test_step_number=1
2026-09-07T01:05:41.6714572Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-07T01:05:41.6715994Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-09-07T01:05:41.6717015Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-09-07T01:05:41.6719274Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-09-07T01:05:41.6720257Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-09-07T01:05:41.6721234Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-09-07T01:05:41.6722186Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-09-07T01:05:41.6723157Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-09-07T01:05:41.6724105Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-09-07T01:05:41.6725060Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-09-07T01:05:41.6725998Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-09-07T01:05:41.6726710Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1156.33s)
```

  - FAIL 17 minutes

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
- 2026-09-15 PASS 20 minutes
- 2026-09-16 PASS 20 minutes
- 2026-09-17 PASS 19 minutes
- 2026-09-18 PASS 22 minutes
- 2026-09-19 PASS 18 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 18 minutes
- 2026-09-22 PASS 20 minutes
- 2026-09-23 PASS 19 minutes
- 2026-09-24 PASS 20 minutes
- 2026-09-25 PASS 21 minutes
- 2026-09-26 PASS 19 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 19 minutes
- 2026-09-29 PASS 20 minutes
- 2026-09-30 PASS 19 minutes
- 2026-10-01 PASS 17 minutes
- 2026-10-02 PASS 19 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 20 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 19 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 18 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 20 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 20 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 19 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
