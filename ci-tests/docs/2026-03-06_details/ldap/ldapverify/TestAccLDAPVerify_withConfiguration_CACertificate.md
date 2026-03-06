# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:56](#error-2026-02-24t0056440000) |  | dev | flaky_500 | 183.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 3 minutes
- 2026-02-07 PASS 3 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 minutes
- 2026-02-10 PASS 3 minutes
- 2026-02-11 PASS 3 minutes
- 2026-02-12 PASS 3 minutes
- 2026-02-13 PASS 3 minutes
- 2026-02-14 PASS 3 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 3 minutes
- 2026-02-17 PASS 3 minutes
- 2026-02-18 PASS 3 minutes
- 2026-02-19 PASS 3 minutes
- 2026-02-20 PASS 3 minutes
- 2026-02-21 PASS 3 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24

### Error 2026-02-24T00:56:44+00:00
```
2026-02-24T00:56:44.1531922Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-02-24T00:56:44.1541442Z    test_terraform_path=/home/runner/work/_temp/60a61f55-c8d0-46d6-aa1d-088f925b5e7b/terraform test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_working_directory=/tmp/plugintest1356297001
2026-02-24T00:56:44.1544357Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:56:44.1545102Z         
2026-02-24T00:56:44.1618760Z         Error: error creating MongoDB LDAPConfiguration (699cf2a18dfec41eaa84677e): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:44.1619879Z         
2026-02-24T00:56:44.1620435Z           with mongodbatlas_ldap_configuration.test,
2026-02-24T00:56:44.1621192Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_ldap_configuration" "test":
2026-02-24T00:56:44.1621896Z           45: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-02-24T00:56:44.1622297Z         
2026-02-24T00:56:44.1622691Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (183.51s)
```

- 2026-02-25 PASS 3 minutes
- 2026-02-26 PASS 3 minutes
- 2026-02-27 PASS 3 minutes
- 2026-02-28 PASS 3 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 minutes
- 2026-03-03 PASS 3 minutes
- 2026-03-04 PASS 3 minutes
- 2026-03-05 PASS 3 minutes
- 2026-03-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 3 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 3 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 3 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
