# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:42](#error-2026-04-11t0042390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.05s
[2026-04-16 00:53](#error-2026-04-16t0053080000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032f981002038a8a12196/clusters | dev | out_of_capacity | 7.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 48 minutes
- 2026-04-08 PASS 24 minutes
- 2026-04-09 PASS 30 minutes
- 2026-04-10 PASS 37 minutes
- 2026-04-11

### Error 2026-04-11T00:42:39+00:00
```
2026-04-11T00:42:39.8534097Z === RUN   TestAccCluster_WithTags
2026-04-11T00:43:40.2045160Z === CONT  TestAccCluster_WithTags
2026-04-11T00:44:59.6751771Z === NAME  TestAccCluster_WithTags
2026-04-11T00:44:59.6752688Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:44:59.6753319Z         
2026-04-11T00:44:59.6754090Z         Error: error creating project: test-acc-tf-p-5331746406328754844
2026-04-11T00:44:59.6754665Z         
2026-04-11T00:44:59.6755181Z           with mongodbatlas_project.cluster_project,
2026-04-11T00:44:59.6756332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-04-11T00:44:59.6757387Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-04-11T00:44:59.6757944Z         
2026-04-11T00:44:59.6758720Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:44:59.6759804Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:44:59.6760747Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:59.7174472Z --- FAIL: TestAccCluster_WithTags (79.53s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14 PASS 23 minutes
- 2026-04-15 PASS 25 minutes
- 2026-04-16

### Error 2026-04-16T00:53:08+00:00
```
2026-04-16T00:53:08.4139911Z === RUN   TestAccCluster_WithTags
2026-04-16T00:53:12.0719802Z === CONT  TestAccCluster_WithTags
2026-04-16T00:53:18.5967725Z === NAME  TestAccCluster_WithTags
2026-04-16T00:53:18.5968585Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:53:18.5969592Z         
2026-04-16T00:53:18.5971451Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032f981002038a8a12196/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:18.5972626Z         
2026-04-16T00:53:18.5972967Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:18.5973835Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:18.5974458Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:18.5974779Z         
2026-04-16T00:53:18.9444945Z    test_name=TestAccCluster_basic_RedactClientLogData
2026-04-16T00:53:19.3158051Z --- FAIL: TestAccCluster_WithTags (7.24s)
```

- 2026-04-17 PASS 24 minutes
- 2026-04-18 PASS 30 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 22 minutes
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 59 minutes
- 2026-04-23 PASS 30 minutes
- 2026-04-24 PASS 24 minutes
- 2026-04-25 PASS 23 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 25 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 29 minutes
- 2026-04-30 PASS 35 minutes
- 2026-05-01 PASS 43 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 26 minutes
- 2026-05-05 PASS 30 minutes
- 2026-05-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 25 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 22 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 minutes
  - PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 28 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 minutes
- 2026-05-04 PASS 42 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 minutes
