# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10820.06s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10840.06s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 30.08s
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1074.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27 PASS 31 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29 PASS 39 minutes
- 2026-01-30 PASS 44 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4154184Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-31T00:36:56.1506233Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-31T00:37:16.1478348Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-31T00:37:16.1480596Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:16.147642041Z, ProjectID: 697d4e477d00588dcf9f3a06, Cluster name: test-acc-tf-c-7985431109837489123
2026-01-31T03:37:16.7380513Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-31T03:37:16.7381448Z     resource_test.go:222: Step 1/5 error: Error running apply: exit status 1
2026-01-31T03:37:16.7382137Z         
2026-01-31T03:37:16.7382549Z         Error: Error in create
2026-01-31T03:37:16.7382972Z         
2026-01-31T03:37:16.7383318Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:16.7384306Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:16.7385084Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:16.7385432Z         
2026-01-31T03:37:16.7385920Z         cluster=test-acc-tf-c-7985431109837489123 didn't reach desired state: IDLE,
2026-01-31T03:37:16.7386751Z         error: context deadline exceeded
2026-01-31T03:37:16.7900622Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10820.64s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9707208Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-02T00:40:19.9756491Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-02T00:40:59.9197407Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-02T00:40:59.9201054Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:59.919445199Z, ProjectID: 697ff219197cc66080b0f49b, Cluster name: test-acc-tf-c-1369098320737076305
2026-02-02T03:41:00.5210576Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-02T03:41:00.5211274Z     resource_test.go:222: Step 1/5 error: Error running apply: exit status 1
2026-02-02T03:41:00.5211711Z         
2026-02-02T03:41:00.5212260Z         Error: Error in create
2026-02-02T03:41:00.5212551Z         
2026-02-02T03:41:00.5212901Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:00.5213736Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:00.5214521Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:00.5214968Z         
2026-02-02T03:41:00.5215642Z         cluster=test-acc-tf-c-1369098320737076305 didn't reach desired state: IDLE,
2026-02-02T03:41:00.5216420Z         error: context deadline exceeded
2026-02-02T03:41:00.5690454Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10840.63s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6359626Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-03T00:42:03.6200942Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-03T00:42:33.6555207Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-03T00:42:33.6558045Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:33.655122633Z, ProjectID: 698143c2b2e54ee995909f8a, Cluster name: test-acc-tf-c-7770416634343964209
2026-02-03T00:42:34.3453535Z   
2026-02-03T00:42:34.3454113Z     resource_test.go:222: Step 1/5 error: Error running apply: exit status 1
2026-02-03T00:42:34.3454513Z         
2026-02-03T00:42:34.3454927Z         Error: Error in create
2026-02-03T00:42:34.3455197Z         
2026-02-03T00:42:34.3455606Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:34.3456649Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:34.3457661Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:34.3458137Z         
2026-02-03T00:42:34.3458762Z         cluster name: test-acc-tf-c-7770416634343964209, API error details:
2026-02-03T00:42:34.3459895Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:34.3460932Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:34.3462281Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:34.3463156Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:34.4028111Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (30.79s)
```

- 2026-02-04 PASS 39 minutes
- 2026-02-05 PASS 30 minutes
- 2026-02-06 PASS 28 minutes
- 2026-02-07 PASS 30 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 30 minutes
- 2026-02-10 PASS 27 minutes
- 2026-02-11 PASS 29 minutes
- 2026-02-12 PASS 29 minutes
- 2026-02-13 PASS 31 minutes
- 2026-02-14 PASS 31 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 28 minutes
- 2026-02-17 PASS 32 minutes
- 2026-02-18 PASS 33 minutes
- 2026-02-19 PASS 42 minutes
- 2026-02-20 PASS 33 minutes
- 2026-02-21 PASS 29 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 31 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6989642Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-24T00:40:00.5504433Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-24T00:40:25.5540613Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-24T00:40:25.5542174Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:25.553794637Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-8024818389090016102
2026-02-24T00:57:55.1780842Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-02-24T00:57:55.1781521Z     resource_test.go:221: Step 1/5 error: Error running apply: exit status 1
2026-02-24T00:57:55.1782075Z         
2026-02-24T00:57:55.1782696Z         Error: Error in pause after create
2026-02-24T00:57:55.1783047Z         
2026-02-24T00:57:55.1783472Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:55.1784538Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:55.1785331Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:55.1785788Z         
2026-02-24T00:57:55.1786244Z         cluster name: test-acc-tf-c-8024818389090016102, API error details: (503
2026-02-24T00:57:55.1787062Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:55.2230452Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (1074.67s)
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
- 2026-02-01 PASS 30 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 29 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 30 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 33 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 27 minutes
  - PASS 25 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 28 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
