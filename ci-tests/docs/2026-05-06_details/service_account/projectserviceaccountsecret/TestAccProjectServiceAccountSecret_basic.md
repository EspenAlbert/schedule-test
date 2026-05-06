# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-17 00:48](#error-2026-04-17t0048490000) |  | dev | flaky_500 | 3.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 7 seconds
- 2026-04-08 PASS 9 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 8 seconds
- 2026-04-11 PASS 12 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 6 seconds
- 2026-04-16 PASS 9 seconds
- 2026-04-17

### Error 2026-04-17T00:48:49+00:00
```
2026-04-17T00:48:49.6031468Z === RUN   TestAccProjectServiceAccountSecret_basic
2026-04-17T00:48:49.6032541Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-1234497903389003978
2026-04-17T00:48:49.6037417Z === CONT  TestAccProjectServiceAccountSecret_basic
2026-04-17T00:48:49.6063340Z === NAME  TestAccProjectServiceAccountSecret_basic
2026-04-17T00:48:49.6064300Z     resource_test.go:24: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:48:49.6065131Z         
2026-04-17T00:48:49.6065702Z         Error: Error calling API in Create
2026-04-17T00:48:49.6066280Z         
2026-04-17T00:48:49.6067334Z           with mongodbatlas_project_service_account.test,
2026-04-17T00:48:49.6068682Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_service_account" "test":
2026-04-17T00:48:49.6070060Z           12: 		resource "mongodbatlas_project_service_account" "test" {
2026-04-17T00:48:49.6070713Z         
2026-04-17T00:48:49.6071799Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e18367abf3dbd56b5c4530/serviceAccounts
2026-04-17T00:48:49.6072813Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:48:49.6073789Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:48:49.6074933Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:48:49.6075996Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:48:49.6077245Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:48:49.6077929Z --- FAIL: TestAccProjectServiceAccountSecret_basic (3.91s)
```

- 2026-04-18 PASS 9 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 7 seconds
- 2026-04-21 PASS 10 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 45 seconds
- 2026-04-24 PASS 9 seconds
- 2026-04-25 PASS 19 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 seconds
- 2026-04-28 PASS 16 seconds
- 2026-04-29 PASS 8 seconds
- 2026-04-30 PASS 58 seconds
- 2026-05-01 PASS 7 seconds
- 2026-05-02 PASS 8 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 seconds
- 2026-05-05 PASS 9 seconds
- 2026-05-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 7 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04 PASS 6 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 seconds
