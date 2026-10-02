# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 36 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:14](#error-2026-09-04t0114360000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.05s
[2026-09-07 01:11](#error-2026-09-07t0111340000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.06s
[2026-09-07 12:38](#error-2026-09-07t1238270000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.10s
[2026-09-09 01:08](#error-2026-09-09t0108200000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,12 | dev | 181.08s
[2026-09-15 01:05](#error-2026-09-15t0105460000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,11,12 | dev | 181.08s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 3 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 3 minutes

### Error 2026-09-07T01:11:34+00:00
```
2026-09-07T01:11:34.8455093Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-07T01:11:34.8462852Z   
2026-09-07T01:11:34.8463781Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-07T01:11:34.8464968Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-09-07T01:11:34.8466180Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-09-07T01:11:34.8467513Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-09-07T01:11:34.8468508Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-09-07T01:11:34.8469200Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.58s)
```

  - FAIL 3 minutes

### Error 2026-09-07T12:38:27+00:00
```
2026-09-07T12:38:27.6343496Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-07T12:38:27.6350235Z   
2026-09-07T12:38:27.6351049Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-07T12:38:27.6352307Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-09-07T12:38:27.6356749Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-09-07T12:38:27.6357749Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-09-07T12:38:27.6358624Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-09-07T12:38:27.6359257Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.96s)
```

- 2026-09-08 PASS 3 minutes
- 2026-09-09

### Error 2026-09-09T01:08:20+00:00
```
2026-09-09T01:08:20.0552089Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-09T01:08:20.0556641Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-09T01:08:20.0557893Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-09T01:08:20.0559275Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' expected "OK", got "FAIL"
2026-09-09T01:08:20.0560062Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.79s)
```

- 2026-09-10 PASS 3 minutes
- 2026-09-11
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-09-12 PASS 3 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 minutes
- 2026-09-15

### Error 2026-09-15T01:05:46+00:00
```
2026-09-15T01:05:46.2183033Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-15T01:05:46.2189788Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate
2026-09-15T01:05:46.2191059Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-09-15T01:05:46.2192270Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-09-15T01:05:46.2193282Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-09-15T01:05:46.2194511Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-09-15T01:05:46.2195223Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.80s)
```

- 2026-09-16 PASS 3 minutes
- 2026-09-17 PASS 3 minutes
- 2026-09-18 PASS 3 minutes
- 2026-09-19 PASS 3 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 3 minutes
- 2026-09-22 PASS 3 minutes
- 2026-09-23 PASS 3 minutes
- 2026-09-24 PASS 3 minutes
- 2026-09-25 PASS 3 minutes
- 2026-09-26 PASS 3 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 3 minutes
- 2026-09-29 PASS 3 minutes
- 2026-09-30 PASS 3 minutes
- 2026-10-01 PASS 3 minutes
- 2026-10-02 PASS 3 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 3 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 3 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 3 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 3 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 3 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
