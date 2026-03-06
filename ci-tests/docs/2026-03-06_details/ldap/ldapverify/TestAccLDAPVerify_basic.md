# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:56](#error-2026-02-24t0056440000) |  | dev | flaky_500 | 826.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 19 minutes
- 2026-02-06 PASS 3 minutes
- 2026-02-07 PASS 16 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 minutes
- 2026-02-10 PASS 17 minutes
- 2026-02-11 PASS 3 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13 PASS 3 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 3 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 3 minutes
- 2026-02-19 PASS 22 minutes
- 2026-02-20 PASS 3 minutes
- 2026-02-21 PASS 17 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24

### Error 2026-02-24T00:56:44+00:00
```
2026-02-24T00:56:44.1505137Z === RUN   TestAccLDAPVerify_basic
2026-02-24T00:56:44.1506337Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-7544266097308352386
2026-02-24T00:56:44.1507465Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-6028677021416666987
2026-02-24T00:56:44.1508388Z 2026/02/24 00:36:52 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T00:56:44.1508850Z 2026/02/24 00:39:53 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1509305Z 2026/02/24 00:40:53 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1509731Z 2026/02/24 00:41:03 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1510152Z 2026/02/24 00:42:04 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1510563Z 2026/02/24 00:42:14 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1510985Z 2026/02/24 00:43:14 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1511421Z 2026/02/24 00:43:25 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1511837Z 2026/02/24 00:44:25 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1512281Z 2026/02/24 00:44:35 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1512686Z 2026/02/24 00:45:35 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1513543Z 2026/02/24 00:45:46 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1513958Z 2026/02/24 00:46:46 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1514369Z 2026/02/24 00:46:56 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1514783Z 2026/02/24 00:47:57 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1515191Z 2026/02/24 00:48:07 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1515595Z 2026/02/24 00:49:10 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1515999Z 2026/02/24 00:49:22 [TRACE] Waiting 1m0s before next try
2026-02-24T00:56:44.1516405Z 2026/02/24 00:50:22 [TRACE] Waiting 10s before next try
2026-02-24T00:56:44.1526146Z    test_name=TestAccLDAPVerify_basic test_terraform_path=/home/runner/work/_temp/60a61f55-c8d0-46d6-aa1d-088f925b5e7b/terraform
2026-02-24T00:56:44.1527014Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:44.1527499Z         
2026-02-24T00:56:44.1528365Z         Error: error creating MongoDB LDAPVerify (699cf2a18dfec41eaa84677e): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:44.1529057Z         
2026-02-24T00:56:44.1529418Z           with mongodbatlas_ldap_verify.test,
2026-02-24T00:56:44.1530086Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-02-24T00:56:44.1530714Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-02-24T00:56:44.1531179Z         
2026-02-24T00:56:44.1531480Z --- FAIL: TestAccLDAPVerify_basic (826.36s)
```

- 2026-02-25 PASS 3 minutes
- 2026-02-26 PASS 20 minutes
- 2026-02-27 PASS 3 minutes
- 2026-02-28 PASS 16 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 minutes
- 2026-03-03 PASS 20 minutes
- 2026-03-04 PASS 3 minutes
- 2026-03-05 PASS 18 minutes
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
