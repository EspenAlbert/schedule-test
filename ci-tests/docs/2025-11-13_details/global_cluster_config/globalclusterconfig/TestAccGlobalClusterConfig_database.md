# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters | dev | out_of_capacity | 5.08s
[2025-10-30 00:28](#error-2025-10-30t0028020000) |  | dev | timeout | 11788.02s
[2025-11-08 00:28](#error-2025-11-08t0028480000) |  | dev |  | 10805.09s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 23 minutes
- 2025-10-18 PASS 21 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 5 seconds

### Error 2025-10-20T10:26:10+00:00
```
2025-10-20T10:26:10.9504427Z === RUN   TestAccGlobalClusterConfig_database
2025-10-20T10:26:15.9553334Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:26:15.955026489Z, ProjectID: 68f60e41de46041f5668fc73, Cluster name: test-acc-tf-c-8213628140060477104
2025-10-20T10:26:16.7546810Z   
2025-10-20T10:26:16.7547841Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2025-10-20T10:26:16.7548570Z         
2025-10-20T10:26:16.7548980Z         Error: Error in create
2025-10-20T10:26:16.7549397Z         
2025-10-20T10:26:16.7550013Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:26:16.7551236Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:26:16.7552394Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:26:16.7552952Z         
2025-10-20T10:26:16.7553668Z         cluster name: test-acc-tf-c-8213628140060477104, API error details:
2025-10-20T10:26:16.7554781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters
2025-10-20T10:26:16.7556168Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:16.7558021Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:16.7558848Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:16.8018997Z --- FAIL: TestAccGlobalClusterConfig_database (5.85s)
```

- 2025-10-21 PASS 20 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 21 minutes
- 2025-10-23 PASS 34 minutes
- 2025-10-24 PASS 22 minutes
- 2025-10-25 PASS 18 minutes
- 2025-10-26 PASS 20 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 21 minutes
- 2025-10-29 PASS 29 minutes
- 2025-10-30

### Error 2025-10-30T00:28:02+00:00
```
2025-10-30T00:28:02.7688648Z === RUN   TestAccGlobalClusterConfig_database
2025-10-30T00:28:07.7707468Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:07.770126277Z, ProjectID: 6902b110abf4374f32988472, Cluster name: test-acc-tf-c-7256551785764811784
2025-10-30T03:44:30.9827533Z   
2025-10-30T03:44:30.9829638Z     resource_global_cluster_config_test.go:161: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:30.9830375Z         
2025-10-30T03:44:30.9830718Z         Error: Error in delete
2025-10-30T03:44:30.9830984Z         
2025-10-30T03:44:30.9831425Z         cluster=test-acc-tf-c-7256551785764811784 didn't reach desired state:
2025-10-30T03:44:30.9832070Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:44:30.9832542Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:30.9832902Z --- FAIL: TestAccGlobalClusterConfig_database (11788.21s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 21 minutes
- 2025-11-03 PASS 30 minutes
- 2025-11-04 PASS 24 minutes
- 2025-11-05
  - PASS an hour
  - PASS 23 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08

### Error 2025-11-08T00:28:48+00:00
```
2025-11-08T00:28:48.1297834Z === RUN   TestAccGlobalClusterConfig_database
2025-11-08T00:28:53.1348095Z     pre_check.go:46: Time before creating cluster: 2025-11-08T00:28:53.134406668Z, ProjectID: 690e8ebd0887d8385bbc9f23, Cluster name: test-acc-tf-c-851768490291130632
2025-11-08T03:28:53.9843382Z   
2025-11-08T03:28:53.9845850Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2025-11-08T03:28:53.9846576Z         
2025-11-08T03:28:53.9847029Z         Error: Error in create
2025-11-08T03:28:53.9847466Z         
2025-11-08T03:28:53.9848084Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-08T03:28:53.9849578Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-08T03:28:53.9850769Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-08T03:28:53.9851358Z         
2025-11-08T03:28:53.9852198Z         cluster=test-acc-tf-c-851768490291130632 didn't reach desired state: IDLE,
2025-11-08T03:28:53.9853047Z         error: context deadline exceeded
2025-11-08T03:28:54.0293578Z --- FAIL: TestAccGlobalClusterConfig_database (10805.90s)
```

- 2025-11-09 PASS 21 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 21 minutes
- 2025-11-12 PASS 24 minutes
- 2025-11-13
  - PASS 28 minutes
  - PASS 22 minutes