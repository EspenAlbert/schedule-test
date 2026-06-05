# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-05-28 01:32](#error-2026-05-28t0132160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-05-30 01:22](#error-2026-05-30t0122090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 17 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09

### Error 2026-05-09T01:25:02+00:00
```
2026-05-09T01:25:02.4909814Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-05-09T01:25:02.4919459Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-05-09T01:25:02.4937748Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-05-09T01:25:02.4938349Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-05-09T01:25:02.4938815Z         
2026-05-09T01:25:02.4939211Z         Error: error creating project: test-acc-tf-p-4303860012114274018
2026-05-09T01:25:02.4939556Z         
2026-05-09T01:25:02.4939863Z           with mongodbatlas_project.test,
2026-05-09T01:25:02.4940615Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-09T01:25:02.4941161Z           13: resource "mongodbatlas_project" "test" {
2026-05-09T01:25:02.4941461Z         
2026-05-09T01:25:02.4941905Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:25:02.4942519Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:25:02.4943067Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:02.4943498Z --- FAIL: TestAccFederatedDatabaseInstance_basic (64.19s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 18 seconds
- 2026-05-12 PASS 14 seconds
- 2026-05-13 PASS 13 seconds
- 2026-05-14 PASS 15 seconds
- 2026-05-15 PASS 14 seconds
- 2026-05-16 PASS 15 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 16 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 17 seconds
- 2026-05-21 PASS 15 seconds
- 2026-05-22 PASS 16 seconds
- 2026-05-23 PASS 17 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 17 seconds
- 2026-05-26 PASS 17 seconds
- 2026-05-27 PASS 15 seconds
- 2026-05-28

### Error 2026-05-28T01:32:16+00:00
```
2026-05-28T01:32:16.3940762Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-05-28T01:32:16.3951444Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-05-28T01:32:16.3965773Z   
2026-05-28T01:32:16.3966431Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-05-28T01:32:16.3967313Z         
2026-05-28T01:32:16.3967773Z         Error: error creating project: test-acc-tf-p-7658033078969562384
2026-05-28T01:32:16.3968167Z         
2026-05-28T01:32:16.3968493Z           with mongodbatlas_project.test,
2026-05-28T01:32:16.3969135Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-28T01:32:16.3969730Z           13: resource "mongodbatlas_project" "test" {
2026-05-28T01:32:16.3970048Z         
2026-05-28T01:32:16.3970557Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:32:16.3971261Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:32:16.3971981Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:32:16.3972642Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:32:16.3973095Z         BadRequestDetail: 
2026-05-28T01:32:16.3973452Z --- FAIL: TestAccFederatedDatabaseInstance_basic (1.06s)
```

- 2026-05-29 PASS 17 seconds
- 2026-05-30

### Error 2026-05-30T01:22:09+00:00
```
2026-05-30T01:22:09.1211635Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-05-30T01:22:09.1220915Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-05-30T01:22:09.1237428Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-05-30T01:22:09.1238115Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-05-30T01:22:09.1238627Z         
2026-05-30T01:22:09.1239082Z         Error: error creating project: test-acc-tf-p-479168082029704026
2026-05-30T01:22:09.1239466Z         
2026-05-30T01:22:09.1239798Z           with mongodbatlas_project.test,
2026-05-30T01:22:09.1240450Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-30T01:22:09.1241048Z           13: resource "mongodbatlas_project" "test" {
2026-05-30T01:22:09.1241546Z         
2026-05-30T01:22:09.1242054Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:22:09.1242739Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:22:09.1243358Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:22:09.1243843Z --- FAIL: TestAccFederatedDatabaseInstance_basic (62.21s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 15 seconds
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2194744Z === RUN   TestAccFederatedDatabaseInstance_basic
2026-06-02T01:12:44.2251389Z === CONT  TestAccFederatedDatabaseInstance_basic
2026-06-02T01:12:44.2319625Z === NAME  TestAccFederatedDatabaseInstance_basic
2026-06-02T01:12:44.2320294Z     resource_federated_database_instance_test.go:43: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:12:44.2320791Z         
2026-06-02T01:12:44.2321406Z         Error: error creating project: test-acc-tf-p-7383561620447034051
2026-06-02T01:12:44.2321794Z         
2026-06-02T01:12:44.2322135Z           with mongodbatlas_project.test,
2026-06-02T01:12:44.2322775Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:44.2323378Z           13: resource "mongodbatlas_project" "test" {
2026-06-02T01:12:44.2323706Z         
2026-06-02T01:12:44.2324236Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:44.2324908Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:44.2325517Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2325985Z --- FAIL: TestAccFederatedDatabaseInstance_basic (100.45s)
```

- 2026-06-03 PASS 13 seconds
- 2026-06-04 PASS 16 seconds
- 2026-06-05 PASS 16 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 18 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 15 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
