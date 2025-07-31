# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 01:01](#error-2025-07-20t0101000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4005823af9166ef94a4c/limits | qa | flaky_500 | 37.02s
[2025-07-23 16:34](#error-2025-07-23t1634060000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810f3993a06a13914bca3e/limits | qa | flaky_500 | 924.00s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 15 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 13 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 17 minutes
- 2025-07-11 PASS 15 minutes
- 2025-07-12 PASS 26 minutes
- 2025-07-13 PASS 24 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 20 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 26 minutes
- 2025-07-19 PASS 19 minutes
- 2025-07-20

### Error 2025-07-20T01:01:00+00:00
```
2025-07-20T01:01:00.7529877Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-07-20T01:01:52.4217784Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-07-20T01:02:29.5527373Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-07-20T01:02:29.5528045Z     resource_advanced_cluster_test.go:885: Step 1/2 error: Error running apply: exit status 1
2025-07-20T01:02:29.5528540Z         
2025-07-20T01:02:29.5528914Z         Error: error when getting project properties after create
2025-07-20T01:02:29.5529331Z         
2025-07-20T01:02:29.5529675Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:02:29.5530429Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:02:29.5531273Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:02:29.5531690Z         
2025-07-20T01:02:29.5532191Z         error getting project (687c4005823af9166ef94a4c): error getting project's
2025-07-20T01:02:29.5532630Z         limits (687c4005823af9166ef94a4c):
2025-07-20T01:02:29.5533190Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4005823af9166ef94a4c/limits
2025-07-20T01:02:29.5533839Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:02:29.5534690Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:02:29.5535380Z         BadRequestDetail: 
2025-07-20T01:02:29.6023473Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (37.19s)
```

- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 18 minutes
  - PASS 13 minutes
  - FAIL 15 minutes

### Error 2025-07-23T16:34:06+00:00
```
2025-07-23T16:34:06.4311425Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-07-23T16:35:00.7428635Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-07-23T16:46:42.8762370Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-07-23T16:46:42.8763217Z     resource_advanced_cluster_test.go:885: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T16:46:42.8763793Z         
2025-07-23T16:46:42.8764178Z         Error: error when getting project properties after create
2025-07-23T16:46:42.8764594Z         
2025-07-23T16:46:42.8764939Z           with mongodbatlas_project.cluster_project,
2025-07-23T16:46:42.8765710Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T16:46:42.8766456Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T16:46:42.8767007Z         
2025-07-23T16:46:42.8767462Z         error getting project (68810f3993a06a13914bca3e): error getting project's
2025-07-23T16:46:42.8767907Z         limits (68810f3993a06a13914bca3e):
2025-07-23T16:46:42.8768475Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810f3993a06a13914bca3e/limits
2025-07-23T16:46:42.8769133Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T16:46:42.8769951Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T16:46:42.8770334Z         BadRequestDetail: 
2025-07-23T16:46:56.4406363Z 2025/07/23 16:46:56 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-07-23T16:50:24.7496899Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (924.04s)
```

- 2025-07-24 PASS 18 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 19 minutes
- 2025-07-27 PASS 17 minutes
- 2025-07-28 PASS 16 minutes
- 2025-07-29 PASS 21 minutes
- 2025-07-30 PASS 16 minutes
- 2025-07-31 PASS 38 minutes