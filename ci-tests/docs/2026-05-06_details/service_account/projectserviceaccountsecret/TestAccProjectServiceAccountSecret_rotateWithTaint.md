# service_account/projectserviceaccountsecret/TestAccProjectServiceAccountSecret_rotateWithTaint Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-17 00:48](#error-2026-04-17t0048490000) |  | dev | flaky_500 | 1.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 seconds
- 2026-04-08 PASS 7 seconds
- 2026-04-09 PASS 11 seconds
- 2026-04-10 PASS 8 seconds
- 2026-04-11 PASS 8 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14 PASS 9 seconds
- 2026-04-15 PASS 5 seconds
- 2026-04-16 PASS 8 seconds
- 2026-04-17

### Error 2026-04-17T00:48:49+00:00
```
2026-04-17T00:48:49.6034103Z === RUN   TestAccProjectServiceAccountSecret_rotateWithTaint
2026-04-17T00:48:49.6038862Z === CONT  TestAccProjectServiceAccountSecret_rotateWithTaint
2026-04-17T00:48:49.6062656Z    test_name=TestAccProjectServiceAccountSecret_basic
2026-04-17T00:48:49.6172851Z === NAME  TestAccProjectServiceAccountSecret_rotateWithTaint
2026-04-17T00:48:49.6173858Z     resource_test.go:52: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:48:49.6174526Z         
2026-04-17T00:48:49.6175025Z         Error: Error calling API in Create
2026-04-17T00:48:49.6175498Z         
2026-04-17T00:48:49.6176137Z           with mongodbatlas_project_service_account.test,
2026-04-17T00:48:49.6177610Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_service_account" "test":
2026-04-17T00:48:49.6178891Z           12: 		resource "mongodbatlas_project_service_account" "test" {
2026-04-17T00:48:49.6179493Z         
2026-04-17T00:48:49.6180489Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e18367abf3dbd56b5c4530/serviceAccounts
2026-04-17T00:48:49.6181495Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:48:49.6182485Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:48:49.6183654Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:48:49.6184686Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:48:49.6185518Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:48:49.6187470Z --- FAIL: TestAccProjectServiceAccountSecret_rotateWithTaint (1.08s)
```

- 2026-04-18 PASS 7 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 9 seconds
- 2026-04-22 PASS 9 seconds
- 2026-04-23 PASS 9 seconds
- 2026-04-24 PASS 6 seconds
- 2026-04-25 PASS 11 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 seconds
- 2026-04-28 PASS 11 seconds
- 2026-04-29 PASS 8 seconds
- 2026-04-30 PASS 12 seconds
- 2026-05-01 PASS 7 seconds
- 2026-05-02 PASS 9 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 seconds
- 2026-05-05 PASS 10 seconds
- 2026-05-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 5 seconds
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
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS 5 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 7 seconds
