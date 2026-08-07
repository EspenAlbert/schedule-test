# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:49](#error-2026-07-09t0049030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-07-16 00:42](#error-2026-07-16t0042530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-07-18 00:47](#error-2026-07-18t0047460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.05s
[2026-07-21 00:52](#error-2026-07-21t0052290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.09s
[2026-07-23 00:48](#error-2026-07-23t0048220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:49:03+00:00
```
2026-07-09T00:49:03.1058965Z === RUN   TestAccCluster_WithTags
2026-07-09T00:55:38.8826931Z === CONT  TestAccCluster_WithTags
2026-07-09T00:56:43.9594355Z === NAME  TestAccCluster_WithTags
2026-07-09T00:56:43.9595095Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-07-09T00:56:43.9595681Z         
2026-07-09T00:56:43.9596148Z         Error: error creating project: test-acc-tf-p-4528094464222242397
2026-07-09T00:56:43.9596656Z         
2026-07-09T00:56:43.9597060Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:56:43.9597848Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:56:43.9598632Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:56:43.9599092Z         
2026-07-09T00:56:43.9599675Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:56:43.9600537Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:56:43.9601149Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:56:44.0105514Z --- FAIL: TestAccCluster_WithTags (65.13s)
```

- 2026-07-10 PASS 34 minutes
- 2026-07-11 PASS 23 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 30 minutes
- 2026-07-14 PASS 30 minutes
- 2026-07-15 PASS 34 minutes
- 2026-07-16

### Error 2026-07-16T00:42:53+00:00
```
2026-07-16T00:42:53.9401817Z === RUN   TestAccCluster_WithTags
2026-07-16T00:43:22.3819950Z === CONT  TestAccCluster_WithTags
2026-07-16T00:44:31.9148667Z === NAME  TestAccCluster_WithTags
2026-07-16T00:44:31.9149472Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-07-16T00:44:31.9152782Z         
2026-07-16T00:44:31.9153556Z         Error: error creating project: test-acc-tf-p-2246702900551706350
2026-07-16T00:44:31.9154246Z         
2026-07-16T00:44:31.9154904Z           with mongodbatlas_project.cluster_project,
2026-07-16T00:44:31.9156216Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-16T00:44:31.9157436Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-16T00:44:31.9158085Z         
2026-07-16T00:44:31.9158977Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:31.9160205Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:31.9161317Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:31.9736965Z --- FAIL: TestAccCluster_WithTags (69.62s)
```

- 2026-07-17 PASS 37 minutes
- 2026-07-18

### Error 2026-07-18T00:47:46+00:00
```
2026-07-18T00:47:46.0246059Z === RUN   TestAccCluster_WithTags
2026-07-18T00:49:47.3840023Z === CONT  TestAccCluster_WithTags
2026-07-18T00:51:18.8003578Z === NAME  TestAccCluster_WithTags
2026-07-18T00:51:18.8004319Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-07-18T00:51:18.8005051Z         
2026-07-18T00:51:18.8005759Z         Error: error creating project: test-acc-tf-p-112249146366229086
2026-07-18T00:51:18.8006326Z         
2026-07-18T00:51:18.8006748Z           with mongodbatlas_project.cluster_project,
2026-07-18T00:51:18.8007658Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-18T00:51:18.8008387Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-18T00:51:18.8008968Z         
2026-07-18T00:51:18.8009489Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:18.8010205Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:18.8010866Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:18.8499923Z --- FAIL: TestAccCluster_WithTags (91.47s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:29+00:00
```
2026-07-21T00:52:29.2169967Z === RUN   TestAccCluster_WithTags
2026-07-21T00:52:33.5627501Z === CONT  TestAccCluster_WithTags
2026-07-21T00:52:35.3857555Z === NAME  TestAccCluster_WithTags
2026-07-21T00:52:35.3858165Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-07-21T00:52:35.3858668Z         
2026-07-21T00:52:35.3859117Z         Error: error creating project: test-acc-tf-p-7520825780056706137
2026-07-21T00:52:35.3859505Z         
2026-07-21T00:52:35.3859880Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:52:35.3860914Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:52:35.3861631Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:52:35.3861988Z         
2026-07-21T00:52:35.3862499Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:52:35.3863200Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:52:35.3863885Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:52:35.3864550Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:52:35.3865005Z         BadRequestDetail: 
2026-07-21T00:52:35.4353479Z --- FAIL: TestAccCluster_WithTags (1.89s)
```

- 2026-07-22 PASS 39 minutes
- 2026-07-23

### Error 2026-07-23T00:48:22+00:00
```
2026-07-23T00:48:22.6858100Z === RUN   TestAccCluster_WithTags
2026-07-23T00:48:24.6504282Z === CONT  TestAccCluster_WithTags
2026-07-23T00:48:26.3638785Z === NAME  TestAccCluster_WithTags
2026-07-23T00:48:26.3639526Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:48:26.3640214Z         
2026-07-23T00:48:26.3640893Z         Error: error creating project: test-acc-tf-p-2994653775501121454
2026-07-23T00:48:26.3641386Z         
2026-07-23T00:48:26.3642019Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:48:26.3643125Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:48:26.3644170Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:48:26.3644723Z         
2026-07-23T00:48:26.3645599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:48:26.3646767Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:48:26.3647798Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:48:26.3648882Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:48:26.3649571Z         BadRequestDetail: 
2026-07-23T00:48:26.3740044Z   
2026-07-23T00:48:26.4362323Z --- FAIL: TestAccCluster_WithTags (1.79s)
```

- 2026-07-24 PASS 41 minutes
- 2026-07-25 PASS 32 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 55 minutes
- 2026-07-29 PASS 30 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 23 minutes
- 2026-08-01 PASS 22 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 22 minutes
- 2026-08-04 PASS 22 minutes
- 2026-08-05 PASS 23 minutes
- 2026-08-06 PASS 22 minutes
- 2026-08-07 PASS 24 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 32 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 30 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 24 minutes
  - PASS 30 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 23 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
