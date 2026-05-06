# service_account/serviceaccountsecret/TestAccServiceAccountSecret_rotateWithTaint Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053170000) |  | dev | flaky_500 | 1.01s
[2026-04-17 00:49](#error-2026-04-17t0049030000) |  | dev | flaky_500 | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 10 seconds
- 2026-04-10 PASS 7 seconds
- 2026-04-11 PASS 8 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 4 seconds
- 2026-04-14 PASS 8 seconds
- 2026-04-15 PASS 4 seconds
- 2026-04-16

### Error 2026-04-16T00:53:17+00:00
```
2026-04-16T00:53:17.3605113Z === RUN   TestAccServiceAccountSecret_rotateWithTaint
2026-04-16T00:53:17.3608826Z === CONT  TestAccServiceAccountSecret_rotateWithTaint
2026-04-16T00:53:17.3629903Z    test_name=TestAccServiceAccountSecret_basic test_terraform_path=/home/runner/work/_temp/13463158-52ad-4313-ab81-2739a1df01d2/terraform
2026-04-16T00:53:17.3664235Z === NAME  TestAccServiceAccountSecret_rotateWithTaint
2026-04-16T00:53:17.3665034Z     resource_test.go:52: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:17.3665752Z         
2026-04-16T00:53:17.3666198Z         Error: Error calling API in Create
2026-04-16T00:53:17.3666615Z         
2026-04-16T00:53:17.3667306Z           with mongodbatlas_service_account.test,
2026-04-16T00:53:17.3668376Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-16T00:53:17.3669349Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-16T00:53:17.3669837Z         
2026-04-16T00:53:17.3670691Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-16T00:53:17.3671567Z         POST: HTTP 400 Bad Request (Error code:
2026-04-16T00:53:17.3672431Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-16T00:53:17.3673459Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-16T00:53:17.3674346Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-16T00:53:17.3675075Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-16T00:53:17.3675838Z --- FAIL: TestAccServiceAccountSecret_rotateWithTaint (1.11s)
```

- 2026-04-17

### Error 2026-04-17T00:49:03+00:00
```
2026-04-17T00:49:03.4417840Z === RUN   TestAccServiceAccountSecret_rotateWithTaint
2026-04-17T00:49:03.4421561Z === CONT  TestAccServiceAccountSecret_rotateWithTaint
2026-04-17T00:49:03.4443737Z    test_name=TestAccServiceAccountSecret_basic test_terraform_path=/home/runner/work/_temp/bbaec960-69d7-4044-bad6-246373f24e28/terraform test_working_directory=/tmp/plugintest2685474086
2026-04-17T00:49:03.4490962Z === NAME  TestAccServiceAccountSecret_rotateWithTaint
2026-04-17T00:49:03.4491877Z     resource_test.go:52: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:49:03.4492507Z         
2026-04-17T00:49:03.4492983Z         Error: Error calling API in Create
2026-04-17T00:49:03.4493606Z         
2026-04-17T00:49:03.4494174Z           with mongodbatlas_service_account.test,
2026-04-17T00:49:03.4495342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_service_account" "test":
2026-04-17T00:49:03.4496606Z           12: 		resource "mongodbatlas_service_account" "test" {
2026-04-17T00:49:03.4497162Z         
2026-04-17T00:49:03.4498108Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/serviceAccounts
2026-04-17T00:49:03.4499064Z         POST: HTTP 400 Bad Request (Error code:
2026-04-17T00:49:03.4500021Z         "MAX_SERVICE_ACCOUNTS_PER_ORG_EXCEEDED") Detail: Maximum number of Service
2026-04-17T00:49:03.4501150Z         Accounts per org (500) in 64808d5f33a0c71e882ef19c exceeded when trying to
2026-04-17T00:49:03.4502144Z         add a new Service Account. Reason: Bad Request. Params: [500
2026-04-17T00:49:03.4502947Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-04-17T00:49:03.4516241Z    test_name=TestAccServiceAccountSecret_dataSourceErrors test_terraform_path=/home/runner/work/_temp/bbaec960-69d7-4044-bad6-246373f24e28/terraform
2026-04-17T00:49:03.4531550Z --- FAIL: TestAccServiceAccountSecret_rotateWithTaint (0.75s)
```

- 2026-04-18 PASS 8 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 5 seconds
- 2026-04-21 PASS 6 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 9 seconds
- 2026-04-24 PASS 4 seconds
- 2026-04-25 PASS 8 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 7 seconds
- 2026-04-29 PASS 7 seconds
- 2026-04-30 PASS 11 seconds
- 2026-05-01 PASS 5 seconds
- 2026-05-02 PASS 6 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05 PASS 8 seconds
- 2026-05-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 4 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 5 seconds
- 2026-05-04 PASS 3 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 5 seconds
