# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd225df5af52d2d4d837e/limits | qa | flaky_500 | 37.09s
[2025-09-21 00:29](#error-2025-09-21t0029370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474c5ccc8c441718cd1b/limits | qa | flaky_500 | 36.03s
[2025-09-26 00:27](#error-2025-09-26t0027140000) |  | dev |  | 10839.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 55 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 59 minutes
- 2025-09-07

### Error 2025-09-07T00:29:22+00:00
```
2025-09-07T00:29:22.3876691Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-07T00:30:25.1307033Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-07T00:31:02.9395013Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-07T00:31:02.9395650Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-09-07T00:31:02.9396159Z         
2025-09-07T00:31:02.9396600Z         Error: error when getting project properties after create
2025-09-07T00:31:02.9396938Z         
2025-09-07T00:31:02.9397470Z           with mongodbatlas_project.cluster_project,
2025-09-07T00:31:02.9398411Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T00:31:02.9399043Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T00:31:02.9399369Z         
2025-09-07T00:31:02.9399819Z         error getting project (68bcd225df5af52d2d4d837e): error getting project's
2025-09-07T00:31:02.9400276Z         limits (68bcd225df5af52d2d4d837e):
2025-09-07T00:31:02.9400850Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd225df5af52d2d4d837e/limits
2025-09-07T00:31:02.9401514Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:02.9402094Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:02.9402491Z         BadRequestDetail: 
2025-09-07T00:31:02.9872607Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (37.88s)
```

- 2025-09-08
  - PASS an hour
  - PASS 45 minutes
  - PASS 51 minutes
- 2025-09-09 PASS 50 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 50 minutes
- 2025-09-20 PASS 47 minutes
- 2025-09-21

### Error 2025-09-21T00:29:37+00:00
```
2025-09-21T00:29:37.3309193Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-21T00:31:04.3710614Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-21T00:31:40.6640969Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-21T00:31:40.6641529Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:31:40.6641895Z         
2025-09-21T00:31:40.6642267Z         Error: error when getting project properties after create
2025-09-21T00:31:40.6642584Z         
2025-09-21T00:31:40.6642917Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:40.6643708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:40.6644431Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:40.6644740Z         
2025-09-21T00:31:40.6645508Z         error getting project (68cf474c5ccc8c441718cd1b): error getting project's
2025-09-21T00:31:40.6645963Z         limits (68cf474c5ccc8c441718cd1b):
2025-09-21T00:31:40.6646534Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474c5ccc8c441718cd1b/limits
2025-09-21T00:31:40.6647206Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:40.6647768Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:40.6648150Z         BadRequestDetail: 
2025-09-21T00:31:40.7095137Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (36.34s)
```

- 2025-09-22 PASS 43 minutes
- 2025-09-23 PASS 47 minutes
- 2025-09-24 PASS 46 minutes
- 2025-09-25 PASS 46 minutes
- 2025-09-26

### Error 2025-09-26T00:27:14+00:00
```
2025-09-26T00:27:14.4551619Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-26T00:28:51.0170020Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:59.2635543Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:59.2636476Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-09-26T03:28:59.2637043Z         
2025-09-26T03:28:59.2637363Z         Error: Error in create
2025-09-26T03:28:59.2637756Z         
2025-09-26T03:28:59.2638189Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T03:28:59.2639091Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T03:28:59.2639706Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T03:28:59.2640013Z         
2025-09-26T03:28:59.2640462Z         cluster=test-acc-tf-c-4211018845190498295 didn't reach desired state: IDLE,
2025-09-26T03:28:59.2640921Z         error: context deadline exceeded
2025-09-26T03:29:30.1254615Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10839.12s)
```

- 2025-09-27 PASS 40 minutes
- 2025-09-28 PASS 47 minutes
- 2025-09-29
  - PASS an hour
  - PASS 33 minutes
- 2025-09-30
  - PASS 40 minutes
  - PASS 35 minutes
  - PASS 38 minutes
  - PASS 36 minutes
  - PASS 31 minutes
- 2025-10-01
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS an hour
  - PASS 46 minutes
  - PASS 51 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 31 minutes
- 2025-10-02 PASS 51 minutes