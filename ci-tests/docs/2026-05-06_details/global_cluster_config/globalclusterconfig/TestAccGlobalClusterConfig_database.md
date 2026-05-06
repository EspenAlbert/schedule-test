# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044410000) |  | dev | timeout | 11797.05s
[2026-04-16 00:50](#error-2026-04-16t0050320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters | dev | out_of_capacity | 6.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:41+00:00
```
2026-04-07T00:44:41.6530295Z === RUN   TestAccGlobalClusterConfig_database
2026-04-07T00:44:46.6545202Z     pre_check.go:46: Time before creating cluster: 2026-04-07T00:44:46.65403464Z, ProjectID: 69d45377c0b364eb740db947, Cluster name: test-acc-tf-c-1809019399435981201
2026-04-07T04:01:19.1009449Z   
2026-04-07T04:01:19.1010510Z     resource_global_cluster_config_test.go:161: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:01:19.1011294Z         
2026-04-07T04:01:19.1011557Z         Error: Error in delete
2026-04-07T04:01:19.1012069Z         
2026-04-07T04:01:19.1012515Z         cluster=test-acc-tf-c-1809019399435981201 didn't reach desired state:
2026-04-07T04:01:19.1013145Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:01:19.1019753Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:01:19.1020215Z --- FAIL: TestAccGlobalClusterConfig_database (11797.45s)
```

- 2026-04-08 PASS 27 minutes
- 2026-04-09 PASS 40 minutes
- 2026-04-10 PASS 35 minutes
- 2026-04-11 PASS 21 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 34 minutes
- 2026-04-14 PASS 25 minutes
- 2026-04-15 PASS 27 minutes
- 2026-04-16

### Error 2026-04-16T00:50:32+00:00
```
2026-04-16T00:50:32.5452514Z === RUN   TestAccGlobalClusterConfig_database
2026-04-16T00:50:37.5468957Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:37.546206977Z, ProjectID: 69e032551ec945fedc7175a5, Cluster name: test-acc-tf-c-4710465181386754445
2026-04-16T00:50:38.6024142Z    test_terraform_path=/home/runner/work/_temp/f944a3aa-b42a-41dd-a40a-7266bd007fad/terraform test_name=TestAccGlobalClusterConfig_database
2026-04-16T00:50:38.6025390Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-04-16T00:50:38.6026321Z         
2026-04-16T00:50:38.6026791Z         Error: Error in create
2026-04-16T00:50:38.6027408Z         
2026-04-16T00:50:38.6028072Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:38.6029315Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:38.6030316Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:38.6030818Z         
2026-04-16T00:50:38.6031450Z         cluster name: test-acc-tf-c-4710465181386754445, API error details:
2026-04-16T00:50:38.6032157Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters
2026-04-16T00:50:38.6033108Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:38.6034017Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:38.6034700Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:38.6503388Z --- FAIL: TestAccGlobalClusterConfig_database (6.10s)
```

- 2026-04-17 PASS 28 minutes
- 2026-04-18 PASS 36 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 22 minutes
- 2026-04-21 PASS 32 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 37 minutes
- 2026-04-24 PASS 29 minutes
- 2026-04-25 PASS 24 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 26 minutes
- 2026-04-28 PASS 27 minutes
- 2026-04-29 PASS 26 minutes
- 2026-04-30 PASS 37 minutes
- 2026-05-01 PASS 26 minutes
- 2026-05-02 PASS 25 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 29 minutes
- 2026-05-05 PASS 41 minutes
- 2026-05-06 PASS 42 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 28 minutes
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
- 2026-04-19 PASS 25 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
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
- 2026-05-03 PASS 28 minutes
- 2026-05-04 PASS 24 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 25 minutes
