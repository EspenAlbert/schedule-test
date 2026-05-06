# service_account/serviceaccountsecret/TestAccServiceAccountSecret_dataSourceErrors Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-17 00:49](#error-2026-04-17t0049030000) |  | dev | flaky_500 | 0.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 seconds
- 2026-04-08 PASS a second
- 2026-04-09 PASS 3 seconds
- 2026-04-10 PASS 2 seconds
- 2026-04-11 PASS 2 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS a second
- 2026-04-14 PASS 2 seconds
- 2026-04-15 PASS a second
- 2026-04-16 PASS 2 seconds
- 2026-04-17

### Error 2026-04-17T00:49:03+00:00
```
2026-04-17T00:49:03.4419115Z === RUN   TestAccServiceAccountSecret_dataSourceErrors
2026-04-17T00:49:03.4420926Z === CONT  TestAccServiceAccountSecret_dataSourceErrors
2026-04-17T00:49:03.4517922Z === NAME  TestAccServiceAccountSecret_dataSourceErrors
2026-04-17T00:49:03.4519120Z     resource_test.go:108: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-17T00:49:03.4519977Z         
2026-04-17T00:49:03.4520458Z         Error: Error calling API in Create
2026-04-17T00:49:03.4520916Z         
2026-04-17T00:49:03.4521472Z           with mongodbatlas_service_account.test,
2026-04-17T00:49:03.4522646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-17T00:49:03.4523736Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-17T00:49:03.4524274Z         
2026-04-17T00:49:03.4525216Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-17T00:49:03.4526173Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:49:03.4527341Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:49:03.4528469Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:49:03.4529466Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:49:03.4530267Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:49:03.4532470Z --- FAIL: TestAccServiceAccountSecret_dataSourceErrors (0.76s)
```

- 2026-04-18 PASS 3 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS a second
- 2026-04-21 PASS 2 seconds
- 2026-04-22 PASS 2 seconds
- 2026-04-23 PASS 4 seconds
- 2026-04-24 PASS a second
- 2026-04-25 PASS 3 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS a second
- 2026-04-28 PASS 2 seconds
- 2026-04-29 PASS 2 seconds
- 2026-04-30 PASS 3 seconds
- 2026-05-01 PASS a second
- 2026-05-02 PASS 2 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 seconds
- 2026-05-05 PASS 2 seconds
- 2026-05-06 PASS a second

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a second
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a second
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a second
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a second
- 2026-05-04 PASS a second
- 2026-05-05: MISSING
- 2026-05-06 PASS a second
