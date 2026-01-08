# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 20 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 3)
Success rate: 85.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 00:34](#error-2026-01-05t0034120000) |  | dev | timeout | 11562.04s
[2026-01-05 07:56](#error-2026-01-05t0756320000) |  | dev | timeout | 11502.05s
[2026-01-07 00:30](#error-2026-01-07t0030360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/test-acc-tf-c-959061186506584909 | dev | flaky_500 | 34.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 34 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 28 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 31 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 32 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 32 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 32 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 26 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 30 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 31 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05
  - FAIL 3 hours

### Error 2026-01-05T00:34:12+00:00
```
2026-01-05T00:34:12.8599204Z === RUN   TestMigSearchDeployment_basic
2026-01-05T00:34:17.4521103Z === CONT  TestMigSearchDeployment_basic
2026-01-05T03:43:53.3740030Z === NAME  TestMigSearchDeployment_basic
2026-01-05T03:43:53.3740693Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-05T03:43:53.3741088Z         
2026-01-05T03:43:53.3741422Z         Error: error during search deployment creation
2026-01-05T03:43:53.3741724Z         
2026-01-05T03:43:53.3742051Z           with mongodbatlas_search_deployment.test,
2026-01-05T03:43:53.3742696Z           on terraform_plugin_test.tf line 47, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T03:43:53.3743294Z           47: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-05T03:43:53.3743604Z         
2026-01-05T03:43:53.3744034Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T03:43:53.3744440Z         timeout: 3h0m0s)
2026-01-05T03:43:53.3744921Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T03:43:53.3745550Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T03:46:56.3254307Z --- FAIL: TestMigSearchDeployment_basic (11562.39s)
```

  - FAIL 3 hours

### Error 2026-01-05T07:56:32+00:00
```
2026-01-05T07:56:32.5448908Z === RUN   TestMigSearchDeployment_basic
2026-01-05T07:56:36.4415632Z === CONT  TestMigSearchDeployment_basic
2026-01-05T11:06:13.3679998Z === NAME  TestMigSearchDeployment_basic
2026-01-05T11:06:13.3682379Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-05T11:06:13.3683088Z         
2026-01-05T11:06:13.3683675Z         Error: error during search deployment creation
2026-01-05T11:06:13.3684190Z         
2026-01-05T11:06:13.3684780Z           with mongodbatlas_search_deployment.test,
2026-01-05T11:06:13.3685926Z           on terraform_plugin_test.tf line 47, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T11:06:13.3686838Z           47: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-05T11:06:13.3687169Z         
2026-01-05T11:06:13.3687635Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T11:06:13.3688059Z         timeout: 3h0m0s)
2026-01-05T11:06:13.3688558Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T11:06:13.3689222Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T11:08:12.8109411Z   diagnostic_detail=
2026-01-05T11:08:12.8113647Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation"
2026-01-05T11:08:12.8176250Z   
2026-01-05T11:08:16.1945982Z --- FAIL: TestMigSearchDeployment_basic (11502.49s)
```

- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:36+00:00
```
2026-01-07T00:30:36.8116783Z === RUN   TestMigSearchDeployment_basic
2026-01-07T00:30:39.8493924Z === CONT  TestMigSearchDeployment_basic
2026-01-07T00:31:12.1600610Z === NAME  TestMigSearchDeployment_basic
2026-01-07T00:31:12.1601177Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:12.1601579Z         
2026-01-07T00:31:12.1601838Z         Error: Error in create
2026-01-07T00:31:12.1602081Z         
2026-01-07T00:31:12.1602406Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:12.1603047Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:12.1603638Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:12.1603951Z         
2026-01-07T00:31:12.1604397Z         cluster=test-acc-tf-c-959061186506584909 didn't reach desired state: IDLE,
2026-01-07T00:31:12.1604788Z         error:
2026-01-07T00:31:12.1605502Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/test-acc-tf-c-959061186506584909
2026-01-07T00:31:12.1606302Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:12.1606880Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:12.1607270Z         BadRequestDetail: 
2026-01-07T00:31:12.3176179Z --- FAIL: TestMigSearchDeployment_basic (34.58s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 30 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 27 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 25 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 25 minutes
- 2026-01-05 PASS 21 minutes
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
