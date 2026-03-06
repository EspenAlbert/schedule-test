# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1074.07s
[2026-03-02 00:38](#error-2026-03-02t0038520000) |  | dev |  | 954.01s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 29 minutes
- 2026-02-26 PASS 36 minutes
- 2026-02-27 PASS 31 minutes
- 2026-02-28 PASS 29 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 15 minutes

### Error 2026-03-02T00:38:52+00:00
```
2026-03-02T00:38:52.1960442Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-03-02T00:40:20.4885708Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-03-02T00:40:35.4869027Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-03-02T00:40:35.4870168Z     pre_check.go:46: Time before creating cluster: 2026-03-02T00:40:35.486638284Z, ProjectID: 69a4dc1a756ae9983e96b194, Cluster name: test-acc-tf-c-8986801976813501718
2026-03-02T00:56:14.5671794Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-03-02T00:56:14.5672720Z     resource_test.go:221: Step 1/5 error: Error running apply: exit status 1
2026-03-02T00:56:14.5673344Z         
2026-03-02T00:56:14.5673824Z         Error: Error in pause after create
2026-03-02T00:56:14.5674412Z         
2026-03-02T00:56:14.5675013Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T00:56:14.5676277Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T00:56:14.5677432Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T00:56:14.5677976Z         
2026-03-02T00:56:14.5678693Z         cluster name: test-acc-tf-c-8986801976813501718, API error details:
2026-03-02T00:56:14.5680261Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc1a756ae9983e96b194/clusters/test-acc-tf-c-8986801976813501718
2026-03-02T00:56:14.5681417Z         PATCH: HTTP 400 Bad Request (Error code:
2026-03-02T00:56:14.5682373Z         "OPERATION_INVALID_MEMBER_REPLICATION_LAG") Detail: The operation cannot
2026-03-02T00:56:14.5683557Z         begin because monitoring indicates these nodes have too much replication lag:
2026-03-02T00:56:14.5685196Z         atlas-b94oiy-shard-00-01.tez3ea.mongodb-dev.net (20sec). Reason: Bad Request.
2026-03-02T00:56:14.5686354Z         Params: [atlas-b94oiy-shard-00-01.tez3ea.mongodb-dev.net (20sec)],
2026-03-02T00:56:14.5687106Z         BadRequestDetail: 
2026-03-02T00:56:14.6123267Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (954.14s)
```

  - PASS 29 minutes
- 2026-03-03 PASS 37 minutes
- 2026-03-04 PASS 29 minutes
- 2026-03-05 PASS 43 minutes
- 2026-03-06 PASS 34 minutes

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 32 minutes
- 2026-03-02 PASS 22 minutes
- 2026-03-03 PASS 27 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
