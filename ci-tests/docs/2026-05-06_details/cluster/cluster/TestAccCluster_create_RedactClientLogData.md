# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:45](#error-2026-04-07t0045070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s
[2026-04-11 00:43](#error-2026-04-11t0043400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.07s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032f91ec945fedc7317b0/clusters | dev | out_of_capacity | 8.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:45:07+00:00
```
2026-04-07T00:45:07.9993574Z === RUN   TestAccCluster_create_RedactClientLogData
2026-04-07T00:45:08.0004812Z === CONT  TestAccCluster_create_RedactClientLogData
2026-04-07T00:46:11.9653663Z === NAME  TestAccCluster_create_RedactClientLogData
2026-04-07T00:46:11.9654510Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-04-07T00:46:11.9654948Z         
2026-04-07T00:46:11.9655381Z         Error: error creating project: test-acc-tf-p-7455643217317477034
2026-04-07T00:46:11.9655846Z         
2026-04-07T00:46:11.9656154Z           with mongodbatlas_project.test,
2026-04-07T00:46:11.9656904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:46:11.9657478Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:46:11.9657879Z         
2026-04-07T00:46:11.9658475Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:46:11.9659246Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:46:11.9660120Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:12.0103343Z --- FAIL: TestAccCluster_create_RedactClientLogData (64.01s)
```

- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 25 minutes
- 2026-04-10 PASS 34 minutes
- 2026-04-11

### Error 2026-04-11T00:43:40+00:00
```
2026-04-11T00:43:40.1811789Z === RUN   TestAccCluster_create_RedactClientLogData
2026-04-11T00:43:40.1817988Z === CONT  TestAccCluster_create_RedactClientLogData
2026-04-11T00:44:54.8146262Z === NAME  TestAccCluster_create_RedactClientLogData
2026-04-11T00:44:54.8149140Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:44:54.8149678Z         
2026-04-11T00:44:54.8150323Z         Error: error creating project: test-acc-tf-p-3540729656675951520
2026-04-11T00:44:54.8150712Z         
2026-04-11T00:44:54.8151137Z           with mongodbatlas_project.test,
2026-04-11T00:44:54.8152090Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:44:54.8152697Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:44:54.8153013Z         
2026-04-11T00:44:54.8153507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:44:54.8154398Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:44:54.8154995Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:54.8565546Z --- FAIL: TestAccCluster_create_RedactClientLogData (74.68s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 21 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.0712071Z === RUN   TestAccCluster_create_RedactClientLogData
2026-04-16T00:53:12.0759194Z === CONT  TestAccCluster_create_RedactClientLogData
2026-04-16T00:53:19.5112121Z === NAME  TestAccCluster_create_RedactClientLogData
2026-04-16T00:53:19.5112977Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:53:19.5113536Z         
2026-04-16T00:53:19.5115321Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032f91ec945fedc7317b0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:19.5116501Z         
2026-04-16T00:53:19.5116896Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:19.5117558Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:19.5118424Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:19.5118976Z         
2026-04-16T00:53:20.3132640Z --- FAIL: TestAccCluster_create_RedactClientLogData (8.24s)
```

- 2026-04-17 PASS 21 minutes
- 2026-04-18 PASS 27 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 minutes
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS 59 minutes
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 23 minutes
- 2026-04-30 PASS 30 minutes
- 2026-05-01 PASS 39 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 26 minutes
- 2026-05-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 20 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 21 minutes
  - PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 39 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
