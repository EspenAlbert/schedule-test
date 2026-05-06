# service_account/serviceaccountsecret/TestAccServiceAccountSecret_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053170000) |  | dev | flaky_500 | 1.00s
[2026-04-17 00:49](#error-2026-04-17t0049030000) |  | dev | flaky_500 | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 5 seconds
- 2026-04-08 PASS 4 seconds
- 2026-04-09 PASS 8 seconds
- 2026-04-10 PASS 4 seconds
- 2026-04-11 PASS 6 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14 PASS 6 seconds
- 2026-04-15 PASS 3 seconds
- 2026-04-16

### Error 2026-04-16T00:53:17+00:00
```
2026-04-16T00:53:17.3604040Z === RUN   TestAccServiceAccountSecret_basic
2026-04-16T00:53:17.3607669Z === CONT  TestAccServiceAccountSecret_basic
2026-04-16T00:53:17.3630878Z === NAME  TestAccServiceAccountSecret_basic
2026-04-16T00:53:17.3631627Z     resource_test.go:24: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:17.3632204Z         
2026-04-16T00:53:17.3632666Z         Error: Error calling API in Create
2026-04-16T00:53:17.3633099Z         
2026-04-16T00:53:17.3633609Z           with mongodbatlas_service_account.test,
2026-04-16T00:53:17.3634920Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-16T00:53:17.3636609Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-16T00:53:17.3637104Z         
2026-04-16T00:53:17.3637968Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-16T00:53:17.3638846Z         POST: HTTP 400 Bad Request (Error code:
2026-04-16T00:53:17.3639731Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-16T00:53:17.3640750Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-16T00:53:17.3641659Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-16T00:53:17.3642391Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-16T00:53:17.3642949Z --- FAIL: TestAccServiceAccountSecret_basic (1.04s)
```

- 2026-04-17

### Error 2026-04-17T00:49:03+00:00
```
2026-04-17T00:49:03.4416707Z === RUN   TestAccServiceAccountSecret_basic
2026-04-17T00:49:03.4420347Z === CONT  TestAccServiceAccountSecret_basic
2026-04-17T00:49:03.4445174Z === NAME  TestAccServiceAccountSecret_basic
2026-04-17T00:49:03.4445993Z     resource_test.go:24: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:49:03.4446813Z         
2026-04-17T00:49:03.4447294Z         Error: Error calling API in Create
2026-04-17T00:49:03.4447760Z         
2026-04-17T00:49:03.4448315Z           with mongodbatlas_service_account.test,
2026-04-17T00:49:03.4449476Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-17T00:49:03.4450770Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-17T00:49:03.4451324Z         
2026-04-17T00:49:03.4452268Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-17T00:49:03.4453241Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:49:03.4454208Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:49:03.4455342Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:49:03.4456333Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:49:03.4457340Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:49:03.4489302Z    test_name=TestAccServiceAccountSecret_rotateWithTaint test_terraform_path=/home/runner/work/_temp/bbaec960-69d7-4044-bad6-246373f24e28/terraform test_working_directory=/tmp/plugintest2937473759 test_step_number=1
2026-04-17T00:49:03.4530864Z --- FAIL: TestAccServiceAccountSecret_basic (0.72s)
```

- 2026-04-18 PASS 6 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 seconds
- 2026-04-21 PASS 4 seconds
- 2026-04-22 PASS 5 seconds
- 2026-04-23 PASS 7 seconds
- 2026-04-24 PASS 3 seconds
- 2026-04-25 PASS 5 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 5 seconds
- 2026-04-29 PASS 4 seconds
- 2026-04-30 PASS 6 seconds
- 2026-05-01 PASS 4 seconds
- 2026-05-02 PASS 4 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 seconds
- 2026-05-04 PASS 2 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 4 seconds
