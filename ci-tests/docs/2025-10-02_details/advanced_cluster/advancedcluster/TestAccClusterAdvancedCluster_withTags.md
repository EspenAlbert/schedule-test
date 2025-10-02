# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd225df5af52d2d4d8357/limits | qa | flaky_500 | 36.10s
[2025-09-08 09:32](#error-2025-09-08t0932470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea3000cddbf4f6e4a06ad/limits | qa | flaky_500 | 1063.08s
[2025-09-21 00:29](#error-2025-09-21t0029380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474c5ccc8c441718ccfd/limits | qa | flaky_500 | 39.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 25 minutes
- 2025-09-04 PASS 25 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 28 minutes
- 2025-09-07

### Error 2025-09-07T00:29:24+00:00
```
2025-09-07T00:29:24.3765786Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-09-07T00:30:25.1305232Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-09-07T00:31:02.0206542Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-09-07T00:31:02.0207490Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running apply: exit status 1
2025-09-07T00:31:02.0207951Z         
2025-09-07T00:31:02.0208468Z         Error: error when getting project properties after create
2025-09-07T00:31:02.0208809Z         
2025-09-07T00:31:02.0209265Z           with mongodbatlas_project.cluster_project,
2025-09-07T00:31:02.0210065Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T00:31:02.0210803Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T00:31:02.0211144Z         
2025-09-07T00:31:02.0211770Z         error getting project (68bcd225df5af52d2d4d8357): error getting project's
2025-09-07T00:31:02.0212307Z         limits (68bcd225df5af52d2d4d8357):
2025-09-07T00:31:02.0212936Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd225df5af52d2d4d8357/limits
2025-09-07T00:31:02.0231844Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:02.0232822Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:02.0233299Z         BadRequestDetail: 
2025-09-07T00:31:02.0703105Z --- FAIL: TestAccClusterAdvancedCluster_withTags (36.96s)
```

- 2025-09-08
  - PASS 26 minutes
  - FAIL 17 minutes

### Error 2025-09-08T09:32:47+00:00
```
2025-09-08T09:32:47.9291212Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-09-08T09:33:47.8022726Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-09-08T09:46:16.9901523Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-09-08T09:46:16.9902583Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:46:16.9903349Z         
2025-09-08T09:46:16.9904012Z         Error: error when getting project properties after create
2025-09-08T09:46:16.9904535Z         
2025-09-08T09:46:16.9905237Z           with mongodbatlas_project.cluster_project,
2025-09-08T09:46:16.9906332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-08T09:46:16.9907353Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-08T09:46:16.9907864Z         
2025-09-08T09:46:16.9908608Z         error getting project (68bea3000cddbf4f6e4a06ad): error getting project's
2025-09-08T09:46:16.9909372Z         limits (68bea3000cddbf4f6e4a06ad):
2025-09-08T09:46:16.9910330Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea3000cddbf4f6e4a06ad/limits
2025-09-08T09:46:16.9911441Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:16.9912386Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:16.9913026Z         BadRequestDetail: 
2025-09-08T09:46:21.6831490Z    test_name=TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-09-08T09:51:31.5828946Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1063.78s)
```

  - PASS 23 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 17 minutes
- 2025-09-20 PASS 17 minutes
- 2025-09-21

### Error 2025-09-21T00:29:38+00:00
```
2025-09-21T00:29:38.8147212Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-09-21T00:31:04.3657313Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-09-21T00:31:43.9652761Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-09-21T00:31:43.9653409Z     resource_test.go:556: Step 1/4 error: Error running apply: exit status 1
2025-09-21T00:31:43.9653786Z         
2025-09-21T00:31:43.9654174Z         Error: error when getting project properties after create
2025-09-21T00:31:43.9654704Z         
2025-09-21T00:31:43.9655344Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:43.9655990Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:43.9656600Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:43.9656905Z         
2025-09-21T00:31:43.9657346Z         error getting project (68cf474c5ccc8c441718ccfd): error getting project's
2025-09-21T00:31:43.9657787Z         limits (68cf474c5ccc8c441718ccfd):
2025-09-21T00:31:43.9658345Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474c5ccc8c441718ccfd/limits
2025-09-21T00:31:43.9658991Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:43.9659547Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:43.9659922Z         BadRequestDetail: 
2025-09-21T00:31:44.0202636Z --- FAIL: TestAccClusterAdvancedCluster_withTags (39.66s)
```

- 2025-09-22 PASS 16 minutes
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 20 minutes
- 2025-09-26 PASS 24 minutes
- 2025-09-27 PASS 23 minutes
- 2025-09-28 PASS 14 minutes
- 2025-09-29
  - PASS 33 minutes
  - PASS 14 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS an hour
  - PASS 34 minutes
  - PASS an hour
  - PASS an hour
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 35 minutes
- 2025-10-02 PASS 2 hours