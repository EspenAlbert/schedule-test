# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028020000) |  | dev | timeout | 11788.02s
[2025-11-08 00:28](#error-2025-11-08t0028480000) |  | dev | timeout | 10805.09s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
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

- 2025-11-09: MISSING
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 21 minutes
- 2025-11-12 PASS 24 minutes
- 2025-11-13 PASS 28 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 22 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 25 minutes
- 2025-11-18 PASS 24 minutes
- 2025-11-19 PASS 22 minutes
- 2025-11-20 PASS 30 minutes
- 2025-11-21 PASS 19 minutes
- 2025-11-22 PASS 21 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 21 minutes
- 2025-11-25 PASS 24 minutes
- 2025-11-26 PASS 19 minutes
- 2025-11-27 PASS 29 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 21 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 21 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 22 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 23 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 25 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
