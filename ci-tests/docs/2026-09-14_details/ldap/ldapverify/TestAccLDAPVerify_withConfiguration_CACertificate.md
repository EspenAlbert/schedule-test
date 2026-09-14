# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-07 12:38](#error-2026-09-07t1238270000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev | 181.10s
[2026-09-09 01:08](#error-2026-09-09t0108200000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,12 | dev | 181.08s

### Timeline
- 2026-09-07

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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 minutes
- 2026-09-14: MISSING
