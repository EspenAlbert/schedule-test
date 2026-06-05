# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-07 01:25](#error-2026-05-07t0125400000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,9,10,11,12,13,14,15,16,17,18 | dev | 1862.00s
[2026-05-07 10:28](#error-2026-05-07t1028210000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,9,10,11,12,13,14,15,16,17,18 | dev | 3278.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL 31 minutes

### Error 2026-05-07T01:25:40+00:00
```
2026-05-07T01:25:40.9082431Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-05-07T01:25:40.9092713Z   
2026-05-07T01:25:40.9093747Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-05-07T01:25:40.9094649Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "0"
2026-05-07T01:25:40.9095376Z         Check 9/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.validation_type' not found
2026-05-07T01:25:40.9096081Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' not found
2026-05-07T01:25:40.9096994Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-05-07T01:25:40.9097691Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-05-07T01:25:40.9098428Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-05-07T01:25:40.9099119Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-05-07T01:25:40.9099842Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-05-07T01:25:40.9100551Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-05-07T01:25:40.9101260Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-05-07T01:25:40.9101970Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-05-07T01:25:40.9102531Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1862.01s)
```

  - FAIL 54 minutes

### Error 2026-05-07T10:28:21+00:00
```
2026-05-07T10:28:21.6398299Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-05-07T10:28:21.6412087Z   
2026-05-07T10:28:21.6413042Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-05-07T10:28:21.6414231Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "0"
2026-05-07T10:28:21.6415194Z         Check 9/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.validation_type' not found
2026-05-07T10:28:21.6416133Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' not found
2026-05-07T10:28:21.6417327Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-05-07T10:28:21.6418478Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-05-07T10:28:21.6419437Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-05-07T10:28:21.6420369Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-05-07T10:28:21.6421324Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-05-07T10:28:21.6422279Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-05-07T10:28:21.6423240Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-05-07T10:28:21.6424167Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-05-07T10:28:21.6424877Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (3278.15s)
```

- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 25 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 22 minutes
- 2026-05-14 PASS 28 minutes
- 2026-05-15 PASS 19 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 26 minutes
- 2026-05-19 PASS 16 minutes
- 2026-05-20 PASS 17 minutes
- 2026-05-21 PASS 26 minutes
- 2026-05-22 PASS 26 minutes
- 2026-05-23 PASS 22 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 20 minutes
- 2026-05-26 PASS 18 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28 PASS 21 minutes
- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 17 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 20 minutes
- 2026-06-02 PASS 17 minutes
- 2026-06-03 PASS 25 minutes
- 2026-06-04 PASS 30 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 21 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 22 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 21 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
