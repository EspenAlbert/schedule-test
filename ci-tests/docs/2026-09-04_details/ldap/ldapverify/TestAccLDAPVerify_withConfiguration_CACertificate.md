# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-10 00:53](#error-2026-08-10t0053370000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.01s
[2026-08-24 00:46](#error-2026-08-24t0046500000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.06s
[2026-09-04 01:14](#error-2026-09-04t0114360000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes
- 2026-08-08 PASS 3 minutes
- 2026-08-09: MISSING
- 2026-08-10

### Error 2026-08-10T00:53:37+00:00
```
2026-08-10T00:53:37.2271986Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-10T00:53:37.2279813Z    test_step_number=1
2026-08-10T00:53:37.2280763Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-10T00:53:37.2281945Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-08-10T00:53:37.2282981Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-10T00:53:37.2284018Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-10T00:53:37.2284966Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-10T00:53:37.2286006Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.14s)
```

- 2026-08-11 PASS 3 minutes
- 2026-08-12 PASS 3 minutes
- 2026-08-13 PASS 3 minutes
- 2026-08-14 PASS 3 minutes
- 2026-08-15 PASS 3 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 3 minutes
- 2026-08-18 PASS 3 minutes
- 2026-08-19 PASS 3 minutes
- 2026-08-20 PASS 3 minutes
- 2026-08-21 PASS 3 minutes
- 2026-08-22 PASS 3 minutes
- 2026-08-23: MISSING
- 2026-08-24

### Error 2026-08-24T00:46:50+00:00
```
2026-08-24T00:46:50.9089010Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-24T00:46:50.9097964Z   
2026-08-24T00:46:50.9098992Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-24T00:46:50.9100381Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-08-24T00:46:50.9101586Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-24T00:46:50.9106587Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-24T00:46:50.9107768Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-24T00:46:50.9108622Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.55s)
```

- 2026-08-25 PASS 3 minutes
- 2026-08-26 PASS 3 minutes
- 2026-08-27 PASS 3 minutes
- 2026-08-28 PASS 3 minutes
- 2026-08-29 PASS 3 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 3 minutes
- 2026-09-01 PASS 3 minutes
- 2026-09-02 PASS 3 minutes
- 2026-09-03 PASS 3 minutes
- 2026-09-04
  - FAIL 3 minutes

### Error 2026-09-04T01:14:36+00:00
```
2026-09-04T01:14:36.3882651Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-04T01:14:36.3893797Z    test_working_directory=/tmp/plugintest1764012754 test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/4c40a6c7-ab34-467f-a17a-9a5a7075e0e5/terraform
2026-09-04T01:14:36.3896392Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-04T01:14:36.3898335Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-09-04T01:14:36.3900029Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-09-04T01:14:36.3901755Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-09-04T01:14:36.3903549Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-09-04T01:14:36.3904662Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.49s)
```

  - PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-23 00:47](#error-2026-08-23t0047310000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | qa | 181.02s
[2026-08-27 08:52](#error-2026-08-27t0852360000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | qa | 182.02s
[2026-08-30 01:10](#error-2026-08-30t0110430000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | qa | 181.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 3 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 3 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 3 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T00:47:31+00:00
```
2026-08-23T00:47:31.6684290Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-23T00:47:31.6700271Z    test_step_number=1 test_working_directory=/tmp/plugintest1858284563 test_name=TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-23T00:47:31.6702857Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-23T00:47:31.6705473Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-08-23T00:47:31.6717103Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-23T00:47:31.6719326Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-23T00:47:31.6721138Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-23T00:47:31.6722353Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.18s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27

### Error 2026-08-27T08:52:36+00:00
```
2026-08-27T08:52:36.7974581Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-27T08:52:36.7986155Z    test_terraform_path=/home/runner/work/_temp/10488a87-8738-45ba-8400-b15e6e329a9a/terraform test_working_directory=/tmp/plugintest1468643740 test_name=TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-27T08:52:36.7988867Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-27T08:52:36.7990968Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-08-27T08:52:36.7992775Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-27T08:52:36.7994801Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-27T08:52:36.7996497Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-27T08:52:36.7997663Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (182.17s)
```

- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T01:10:43+00:00
```
2026-08-30T01:10:43.6185409Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-08-30T01:10:43.6193334Z    test_working_directory=/tmp/plugintest2789021366
2026-08-30T01:10:43.6194409Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-30T01:10:43.6195629Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-08-30T01:10:43.6196698Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-30T01:10:43.6197963Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-30T01:10:43.6199617Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-30T01:10:43.6200340Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.45s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
