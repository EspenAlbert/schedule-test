# advanced_cluster/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 20 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 2)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 00:45](#error-2026-04-08t0045100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d5a5164a37287164dff236/clusters | dev | out_of_capacity | 10.04s
[2026-04-24 00:51](#error-2026-04-24t0051250000) |  | dev | flaky_client | 951.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08

### Error 2026-04-08T00:45:10+00:00
```
2026-04-08T00:45:10.5216389Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-04-08T00:46:47.5842358Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-04-08T00:46:53.1599402Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-04-08T00:46:53.1600858Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:46:53.1601788Z         
2026-04-08T00:46:53.1602482Z         Error: Error in create
2026-04-08T00:46:53.1603171Z         
2026-04-08T00:46:53.1603959Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T00:46:53.1605487Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T00:46:53.1606898Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T00:46:53.1608004Z         
2026-04-08T00:46:53.1608969Z         cluster name: test-acc-tf-c-9037270217111278315, API error details:
2026-04-08T00:46:53.1610489Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a5164a37287164dff236/clusters
2026-04-08T00:46:53.1611985Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-08T00:46:53.1613573Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-08T00:46:53.1614693Z         Conflict. Params: [], BadRequestDetail: 
2026-04-08T00:46:53.2804050Z   
2026-04-08T00:46:53.3893881Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10.45s)
```

- 2026-04-09: MISSING
- 2026-04-10 PASS 29 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 27 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 24 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 22 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 33 minutes
- 2026-04-23: MISSING
- 2026-04-24

### Error 2026-04-24T00:51:25+00:00
```
2026-04-24T00:51:25.5419796Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2026-04-24T00:52:54.7372169Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2026-04-24T01:08:43.0585841Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2026-04-24T01:08:43.0586444Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-04-24T01:08:43.0586882Z         
2026-04-24T01:08:43.0587136Z         Error: Error in create
2026-04-24T01:08:43.0587390Z         
2026-04-24T01:08:43.0587719Z           with mongodbatlas_advanced_cluster.test,
2026-04-24T01:08:43.0588411Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-24T01:08:43.0589055Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-24T01:08:43.0589376Z         
2026-04-24T01:08:43.0589841Z         cluster=test-acc-tf-c-6567058213504934073 didn't reach desired state: IDLE,
2026-04-24T01:08:43.0590273Z         error: Get
2026-04-24T01:08:43.0591022Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/69eabe8d90d634ef33c821d2/clusters/test-acc-tf-c-6567058213504934073":
2026-04-24T01:08:43.0591759Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-04-24T01:08:43.2178710Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (951.58s)
```

- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 27 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 24 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 40 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 20 minutes
  - PASS 17 minutes
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
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 22 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 21 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 21 minutes
