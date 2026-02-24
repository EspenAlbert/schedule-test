# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveSetToUnset Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.01s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.01s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.05s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1185.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 22 minutes
- 2026-01-30 PASS 34 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5964823Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-01-31T00:36:56.2137470Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-01-31T03:37:01.3020947Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-01-31T03:37:01.3021956Z     effective_fields_test.go:58: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.3022684Z         
2026-01-31T03:37:01.3023120Z         Error: Error in create
2026-01-31T03:37:01.3023722Z         
2026-01-31T03:37:01.3024327Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.3025582Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.3026754Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.3027342Z         
2026-01-31T03:37:01.3028148Z         cluster=test-acc-tf-c-6542136746205867952 didn't reach desired state: IDLE,
2026-01-31T03:37:01.3028995Z         error: context deadline exceeded
2026-01-31T03:37:01.3245489Z   
2026-01-31T03:37:01.3706737Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (10805.14s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9967277Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-02-02T00:40:19.9759534Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-02T03:40:25.9615509Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-02T03:40:25.9617138Z     effective_fields_test.go:58: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:25.9618937Z         
2026-02-02T03:40:25.9621026Z         Error: Error in create
2026-02-02T03:40:25.9621518Z         
2026-02-02T03:40:25.9622301Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:25.9623654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:25.9624934Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:25.9625632Z         
2026-02-02T03:40:25.9626531Z         cluster=test-acc-tf-c-520942776102848925 didn't reach desired state: IDLE,
2026-02-02T03:40:25.9627495Z         error: context deadline exceeded
2026-02-02T03:40:25.9683349Z   
2026-02-02T03:40:26.0544624Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (10806.10s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8816727Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-02-03T00:42:03.6364267Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-03T00:42:09.8589035Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-03T00:42:09.8590042Z     effective_fields_test.go:58: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.8590850Z         
2026-02-03T00:42:09.8591387Z         Error: Error in create
2026-02-03T00:42:09.8591869Z         
2026-02-03T00:42:09.8592502Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.8593763Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.8594819Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.8595566Z         
2026-02-03T00:42:09.8596417Z         cluster name: test-acc-tf-c-3062040814766718754, API error details:
2026-02-03T00:42:09.8597687Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.8600036Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.8601193Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.8602583Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:10.1856450Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (6.55s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07 PASS 15 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 18 minutes
- 2026-02-19 PASS 25 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 16 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5610632Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-02-24T00:40:00.6209473Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-24T00:56:30.9342166Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-24T00:56:30.9343294Z     effective_fields_test.go:58: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:30.9343728Z         
2026-02-24T00:56:30.9344191Z         Error: error reading Advanced Configuration
2026-02-24T00:56:30.9344508Z         
2026-02-24T00:56:30.9344869Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:56:30.9345599Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:56:30.9346452Z           45: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:56:30.9346775Z         
2026-02-24T00:56:30.9347219Z         cluster name: test-acc-tf-c-2562109235208182520, API error details: (503
2026-02-24T00:56:30.9347886Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:59:45.8978686Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (1185.29s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 12 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
