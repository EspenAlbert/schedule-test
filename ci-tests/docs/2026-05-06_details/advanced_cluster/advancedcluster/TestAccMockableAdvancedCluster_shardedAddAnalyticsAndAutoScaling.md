# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047110000) |  | dev | timeout | 12084.09s
[2026-04-16 00:53](#error-2026-04-16t0053150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters | dev | out_of_capacity | 6.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:11+00:00
```
2026-04-07T00:47:11.3109368Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-07T00:47:11.3974028Z     resource_test.go:1011: Adding variable groupId=69d4540c425cee31650cd6fc
2026-04-07T00:47:11.3974748Z     resource_test.go:1011: Adding variable clusterName=test-acc-tf-c-3816110610510481100
2026-04-07T00:48:53.7958173Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-07T00:59:06.9264952Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-07T00:59:06.9266011Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-9099965821271709883
2026-04-07T00:59:07.3519157Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6414909710159049758
2026-04-07T00:59:08.2233083Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-19918744920694244
2026-04-07T00:59:08.6681337Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-7539972159956449787
2026-04-07T04:10:18.5560444Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-07T04:10:18.5561585Z     resource_test.go:1011: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:10:18.5562117Z         
2026-04-07T04:10:18.5562378Z         Error: Error in delete
2026-04-07T04:10:18.5562626Z         
2026-04-07T04:10:18.5563056Z         cluster=test-acc-tf-c-3816110610510481100 didn't reach desired state:
2026-04-07T04:10:18.5563709Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:10:18.5564183Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:10:18.6161178Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (12084.92s)
```

- 2026-04-08 PASS 28 minutes
- 2026-04-09 PASS 51 minutes
- 2026-04-10 PASS 45 minutes
- 2026-04-11 PASS 26 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 37 minutes
- 2026-04-14 PASS 25 minutes
- 2026-04-15 PASS 30 minutes
- 2026-04-16

### Error 2026-04-16T00:53:15+00:00
```
2026-04-16T00:53:15.8911193Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-16T00:53:15.9778336Z     resource_test.go:1011: Adding variable groupId=69e032f81ec945fedc73155a
2026-04-16T00:53:15.9779162Z     resource_test.go:1011: Adding variable clusterName=test-acc-tf-c-6083724149053889316
2026-04-16T00:54:54.6389763Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-16T00:54:59.7825278Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-04-16T00:54:59.7826872Z     resource_test.go:1011: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:59.7827978Z         
2026-04-16T00:54:59.7828820Z         Error: Error in create
2026-04-16T00:54:59.7829446Z         
2026-04-16T00:54:59.7830464Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.7832279Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.7833774Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.7834797Z         
2026-04-16T00:54:59.7835978Z         cluster name: test-acc-tf-c-6083724149053889316, API error details:
2026-04-16T00:54:59.7837413Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters
2026-04-16T00:54:59.7839519Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.7840885Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.7842100Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.9549505Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (6.03s)
```

- 2026-04-17 PASS 27 minutes
- 2026-04-18 PASS 42 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 36 minutes
- 2026-04-22 PASS 56 minutes
- 2026-04-23 PASS 49 minutes
- 2026-04-24 PASS 30 minutes
- 2026-04-25 PASS 26 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 33 minutes
- 2026-04-28 PASS 30 minutes
- 2026-04-29 PASS 55 minutes
- 2026-04-30 PASS 47 minutes
- 2026-05-01 PASS 30 minutes
- 2026-05-02 PASS 26 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 32 minutes
- 2026-05-05 PASS 57 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 31 minutes
  - PASS 25 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 29 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 28 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 32 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 31 minutes
- 2026-05-04 PASS 27 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 28 minutes
