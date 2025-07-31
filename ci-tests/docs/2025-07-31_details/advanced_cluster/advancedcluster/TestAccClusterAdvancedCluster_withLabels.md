# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3) TIMEOUT
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339310000) |  | dev |  | 6532.00s
[2025-07-20 01:00](#error-2025-07-20t0100540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4005426db7026b5b48d7/limits | qa | flaky_500 | 38.00s
[2025-07-23 16:34](#error-2025-07-23t1634020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810f393b0bd24e6feea490/limits | qa | flaky_500 | 1073.01s
[2025-07-27 01:03](#error-2025-07-27t0103200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857b1fef1f7377717abe93/limits | qa | flaky_500 | 1136.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 21 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 17 minutes
- 2025-07-08 PASS 16 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 18 minutes
- 2025-07-11

### Error 2025-07-11T03:39:31+00:00
```
2025-07-11T03:39:31.0319630Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-11T03:41:02.0283932Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-11T05:29:53.6625244Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (1h48m52s)
2025-07-11T05:29:53.6625765Z 		TestAccClusterAdvancedCluster_singleShardedMultiCloud (1h48m52s)
2025-07-11T05:29:53.6626250Z 		TestAccClusterAdvancedCluster_withLabels (1h48m52s)
```

- 2025-07-12 PASS 21 minutes
- 2025-07-13 PASS 28 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 19 minutes
- 2025-07-16 PASS 17 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 17 minutes
- 2025-07-19 PASS 19 minutes
- 2025-07-20

### Error 2025-07-20T01:00:54+00:00
```
2025-07-20T01:00:54.5788775Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-20T01:01:52.4059576Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-20T01:02:30.3811005Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-20T01:02:30.3811589Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-07-20T01:02:30.3812005Z         
2025-07-20T01:02:30.3812498Z         Error: error when getting project properties after create
2025-07-20T01:02:30.3812838Z         
2025-07-20T01:02:30.3813176Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:02:30.3813982Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:02:30.3814722Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:02:30.3815247Z         
2025-07-20T01:02:30.3815707Z         error getting project (687c4005426db7026b5b48d7): error getting project's
2025-07-20T01:02:30.3816160Z         limits (687c4005426db7026b5b48d7):
2025-07-20T01:02:30.3816718Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4005426db7026b5b48d7/limits
2025-07-20T01:02:30.3817364Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:02:30.3817923Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:02:30.3818297Z         BadRequestDetail: 
2025-07-20T01:02:30.4267744Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (38.02s)
```

- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - FAIL 17 minutes

### Error 2025-07-23T16:34:02+00:00
```
2025-07-23T16:34:02.6237627Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-23T16:35:00.7059952Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-23T16:49:11.9806920Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-23T16:49:11.9807594Z     resource_advanced_cluster_test.go:693: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T16:49:11.9808072Z         
2025-07-23T16:49:11.9808456Z         Error: error when getting project properties after create
2025-07-23T16:49:11.9808785Z         
2025-07-23T16:49:11.9809127Z           with mongodbatlas_project.cluster_project,
2025-07-23T16:49:11.9810118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T16:49:11.9810762Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T16:49:11.9811083Z         
2025-07-23T16:49:11.9811717Z         error getting project (68810f393b0bd24e6feea490): error getting project's
2025-07-23T16:49:11.9812272Z         limits (68810f393b0bd24e6feea490):
2025-07-23T16:49:11.9812849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810f393b0bd24e6feea490/limits
2025-07-23T16:49:11.9813519Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T16:49:11.9814090Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T16:49:11.9814474Z         BadRequestDetail: 
2025-07-23T16:52:53.8317224Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1073.13s)
```

- 2025-07-24 PASS 17 minutes
- 2025-07-25 PASS 17 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27

### Error 2025-07-27T01:03:20+00:00
```
2025-07-27T01:03:20.0811388Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-27T01:04:27.1026552Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-27T01:18:30.6841729Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-27T01:18:30.6842558Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:18:30.6843024Z         
2025-07-27T01:18:30.6843394Z         Error: error when getting project properties after create
2025-07-27T01:18:30.6843710Z         
2025-07-27T01:18:30.6844043Z           with mongodbatlas_project.cluster_project,
2025-07-27T01:18:30.6844673Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-27T01:18:30.6845370Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-27T01:18:30.6845774Z         
2025-07-27T01:18:30.6846212Z         error getting project (68857b1fef1f7377717abe93): error getting project's
2025-07-27T01:18:30.6846891Z         limits (68857b1fef1f7377717abe93):
2025-07-27T01:18:30.6847594Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857b1fef1f7377717abe93/limits
2025-07-27T01:18:30.6848240Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:18:30.6848797Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:18:30.6849170Z         BadRequestDetail: 
2025-07-27T01:23:23.1839859Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1136.09s)
```

- 2025-07-28 PASS 17 minutes
- 2025-07-29 PASS 17 minutes
- 2025-07-30 PASS 17 minutes
- 2025-07-31 PASS 28 minutes