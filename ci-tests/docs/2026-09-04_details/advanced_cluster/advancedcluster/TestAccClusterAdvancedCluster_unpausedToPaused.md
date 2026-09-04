# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-31 00:47](#error-2026-08-31t0047270000) |  | dev | 2059.07s
[2026-09-04 00:41](#error-2026-09-04t0041030000) |  | dev | 2038.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 18 minutes
- 2026-08-08 PASS 20 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 19 minutes
- 2026-08-11 PASS 22 minutes
- 2026-08-12 PASS 20 minutes
- 2026-08-13 PASS 24 minutes
- 2026-08-14 PASS 25 minutes
- 2026-08-15 PASS 20 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 20 minutes
- 2026-08-18 PASS 21 minutes
- 2026-08-19 PASS 20 minutes
- 2026-08-20 PASS 20 minutes
- 2026-08-21 PASS 20 minutes
- 2026-08-22 PASS 20 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 21 minutes
- 2026-08-25 PASS 21 minutes
- 2026-08-26 PASS 20 minutes
- 2026-08-27 PASS 55 minutes
- 2026-08-28 PASS 44 minutes
- 2026-08-29 PASS 21 minutes
- 2026-08-30: MISSING
- 2026-08-31

### Error 2026-08-31T00:47:27+00:00
```
2026-08-31T00:47:27.6827586Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-08-31T00:48:54.2268501Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-08-31T00:50:18.9859965Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-08-31T00:50:18.9861768Z     pre_check.go:46: Time before creating cluster: 2026-08-31T00:50:18.985624968Z, ProjectID: 6a94cf1c0cc71681c0bf64f3, Cluster name: test-acc-tf-c-1435398298453781049
2026-08-31T01:16:40.4274407Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-08-31T01:16:40.4275373Z     resource_test.go:223: Step 2/4 error: Error running apply: exit status 1
2026-08-31T01:16:40.4275899Z         
2026-08-31T01:16:40.4276230Z         Error: Error in pause after update
2026-08-31T01:16:40.4276634Z         
2026-08-31T01:16:40.4277003Z           with mongodbatlas_advanced_cluster.test,
2026-08-31T01:16:40.4277954Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-31T01:16:40.4278755Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-31T01:16:40.4279261Z         
2026-08-31T01:16:40.4279726Z         cluster name: test-acc-tf-c-1435398298453781049, API error details:
2026-08-31T01:16:40.4280661Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a94cf1c0cc71681c0bf64f3/clusters/test-acc-tf-c-1435398298453781049
2026-08-31T01:16:40.4281363Z         PATCH: HTTP 400 Bad Request (Error code:
2026-08-31T01:16:40.4281945Z         "OPERATION_INVALID_MEMBER_REPLICATION_LAG") Detail: The operation cannot
2026-08-31T01:16:40.4282904Z         begin because monitoring indicates these nodes have too much replication lag:
2026-08-31T01:16:40.4283605Z         atlas-zaj3bc-shard-00-03.xhsbq4.mongodb-dev.net (249sec). Reason: Bad
2026-08-31T01:16:40.4284312Z         Request. Params: [atlas-zaj3bc-shard-00-03.xhsbq4.mongodb-dev.net (249sec)],
2026-08-31T01:16:40.4284789Z         BadRequestDetail: 
2026-08-31T01:23:13.7261539Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (2059.72s)
```

- 2026-09-01 PASS 21 minutes
- 2026-09-02 PASS 23 minutes
- 2026-09-03
  - PASS 21 minutes
  - PASS 21 minutes
- 2026-09-04

### Error 2026-09-04T00:41:03+00:00
```
2026-09-04T00:41:03.7654999Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T00:45:24.9613086Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T00:46:48.9415554Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T00:46:48.9417056Z     pre_check.go:46: Time before creating cluster: 2026-09-04T00:46:48.941236494Z, ProjectID: 6a9a139c54d9d7aa8005db86, Cluster name: test-acc-tf-c-7036346800215515619
2026-09-04T01:16:49.7352273Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T01:16:49.7353912Z     resource_test.go:223: Step 2/4 error: Error running apply: exit status 1
2026-09-04T01:16:49.7354699Z         
2026-09-04T01:16:49.7355345Z         Error: Error in pause after update
2026-09-04T01:16:49.7355862Z         
2026-09-04T01:16:49.7356750Z           with mongodbatlas_advanced_cluster.test,
2026-09-04T01:16:49.7358120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-04T01:16:49.7359678Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-04T01:16:49.7360367Z         
2026-09-04T01:16:49.7361208Z         cluster name: test-acc-tf-c-7036346800215515619, API error details:
2026-09-04T01:16:49.7363012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a139c54d9d7aa8005db86/clusters/test-acc-tf-c-7036346800215515619
2026-09-04T01:16:49.7364673Z         PATCH: HTTP 400 Bad Request (Error code:
2026-09-04T01:16:49.7365870Z         "OPERATION_INVALID_MEMBER_REPLICATION_LAG") Detail: The operation cannot
2026-09-04T01:16:49.7367269Z         begin because monitoring indicates these nodes have too much replication lag:
2026-09-04T01:16:49.7368816Z         atlas-anwsto-shard-00-00.deg0ak.mongodb-dev.net (240sec). Reason: Bad
2026-09-04T01:16:49.7370271Z         Request. Params: [atlas-anwsto-shard-00-00.deg0ak.mongodb-dev.net (240sec)],
2026-09-04T01:16:49.7371195Z         BadRequestDetail: 
2026-09-04T01:19:22.4003888Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (2038.50s)
```


## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 21 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 21 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 20 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 20 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 20 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 19 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
