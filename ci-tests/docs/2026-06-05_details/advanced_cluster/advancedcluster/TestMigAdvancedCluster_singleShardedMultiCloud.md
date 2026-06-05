# advanced_cluster/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 15) FAIL(x 2)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057050000) |  | dev |  | 164.01s
[2026-06-05 01:05](#error-2026-06-05t0105490000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a2220ed770de8903f1954de/clusters | dev | out_of_capacity | 10.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 33 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 27 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 26 minutes
- 2026-05-14: MISSING
- 2026-05-15

### Error 2026-05-15T00:57:05+00:00
```
2026-05-15T00:57:05.3661108Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-05-15T00:58:37.5858003Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-05-15T01:01:17.6744973Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-05-15T01:01:17.6745570Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-05-15T01:01:17.6746000Z         
2026-05-15T01:01:17.6746263Z         Error: Error in create
2026-05-15T01:01:17.6746519Z         
2026-05-15T01:01:17.6746853Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T01:01:17.6747532Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T01:01:17.6748158Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T01:01:17.6748472Z         
2026-05-15T01:01:17.6749183Z         cluster=test-acc-tf-c-7137850214092390088 didn't reach desired state: IDLE,
2026-05-15T01:01:17.6749592Z         error:
2026-05-15T01:01:17.6750322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f61bf5881c97de639d5/clusters/test-acc-tf-c-7137850214092390088
2026-05-15T01:01:17.6751119Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:01:17.6751559Z         BadRequestDetail: 
2026-05-15T01:01:17.8446973Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (164.10s)
```

- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 50 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 24 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 45 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS 50 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 24 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 31 minutes
- 2026-06-04: MISSING
- 2026-06-05

### Error 2026-06-05T01:05:49+00:00
```
2026-06-05T01:05:49.1262031Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-06-05T01:07:23.6462976Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-06-05T01:07:30.1819597Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-06-05T01:07:30.1821266Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-06-05T01:07:30.1822433Z         
2026-06-05T01:07:30.1822983Z         Error: Error in create
2026-06-05T01:07:30.1823773Z         
2026-06-05T01:07:30.1824673Z           with mongodbatlas_advanced_cluster.test,
2026-06-05T01:07:30.1826274Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-06-05T01:07:30.1828417Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-06-05T01:07:30.1829516Z         
2026-06-05T01:07:30.1830733Z         cluster name: test-acc-tf-c-3681931147216448654, API error details:
2026-06-05T01:07:30.1832498Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220ed770de8903f1954de/clusters
2026-06-05T01:07:30.1834814Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-05T01:07:30.1836799Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-05T01:07:30.1838192Z         Conflict. Params: [], BadRequestDetail: 
2026-06-05T01:07:30.4891073Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10.59s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 30 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 25 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 24 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
