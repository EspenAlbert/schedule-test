# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 04:28](#error-2025-07-10t0428210000) |  | dev | timeout | 10875.07s
[2025-07-23 12:32](#error-2025-07-23t1232270000) |  | qa | timeout | 10875.01s
[2025-07-23 17:30](#error-2025-07-23t1730380000) |  | qa | timeout | 10871.02s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 19 minutes
- 2025-06-26
  - PASS 26 minutes
  - PASS 19 minutes
- 2025-06-27 PASS 20 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29 PASS 25 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 20 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 19 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10
  - FAIL 3 hours

### Error 2025-07-10T04:28:21+00:00
```
2025-07-10T04:28:21.9739521Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-10T04:28:21.9741309Z     pre_check.go:40: Time before creating cluster: 2025-07-10T00:29:38.506849219Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-3439852545736574355
2025-07-10T04:28:21.9757425Z    test_working_directory=/tmp/plugintest993467233 test_step_number=2 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/0240f3b0-a8c0-47f9-9b6c-80b34a4178d7/terraform
2025-07-10T04:28:21.9759507Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-10T04:28:21.9760210Z         
2025-07-10T04:28:21.9761116Z         Error: error upgrading to a flex cluster: test-acc-tf-c-3439852545736574355
2025-07-10T04:28:21.9761753Z         
2025-07-10T04:28:21.9762290Z           with mongodbatlas_advanced_cluster.test,
2025-07-10T04:28:21.9763417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-10T04:28:21.9764441Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-10T04:28:21.9764959Z         
2025-07-10T04:28:21.9765711Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-10T04:28:21.9766412Z         timeout: 3h0m0s)
2025-07-10T04:28:21.9767089Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10875.65s)
```

  - PASS 18 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 23 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 19 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 20 minutes
- 2025-07-18 PASS 19 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20 PASS 19 minutes
- 2025-07-21 PASS 18 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS an hour
  - FAIL 3 hours

### Error 2025-07-23T12:32:27+00:00
```
2025-07-23T12:32:27.0212766Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T12:32:27.0213770Z     pre_check.go:40: Time before creating cluster: 2025-07-23T08:15:41.424023695Z, ProjectID: 68809a25dafa37582cece141, Cluster name: test-acc-tf-c-532573453965194529
2025-07-23T12:32:27.0224849Z    test_working_directory=/tmp/plugintest603334770
2025-07-23T12:32:27.0225497Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T12:32:27.0225918Z         
2025-07-23T12:32:27.0226368Z         Error: error upgrading to a flex cluster: test-acc-tf-c-532573453965194529
2025-07-23T12:32:27.0226750Z         
2025-07-23T12:32:27.0227072Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T12:32:27.0227805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T12:32:27.0228396Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T12:32:27.0228708Z         
2025-07-23T12:32:27.0229158Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-23T12:32:27.0229725Z         timeout: 3h0m0s)
2025-07-23T12:32:27.0230134Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10875.10s)
```

  - PASS 26 minutes
  - FAIL 3 hours

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7526677Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T17:30:38.7528249Z     pre_check.go:40: Time before creating cluster: 2025-07-23T13:23:42.253310215Z, ProjectID: 6880e2570afa8a5c60506f03, Cluster name: test-acc-tf-c-7578751464079047683
2025-07-23T17:30:38.7556600Z    test_working_directory=/tmp/plugintest3079804275 test_step_number=2
2025-07-23T17:30:38.7557669Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T17:30:38.7558368Z         
2025-07-23T17:30:38.7559145Z         Error: error upgrading to a flex cluster: test-acc-tf-c-7578751464079047683
2025-07-23T17:30:38.7559934Z         
2025-07-23T17:30:38.7560495Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T17:30:38.7561606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T17:30:38.7562614Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T17:30:38.7563145Z         
2025-07-23T17:30:38.7563905Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-23T17:30:38.7564601Z         timeout: 3h0m0s)
2025-07-23T17:30:38.7565277Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10871.17s)
```

- 2025-07-24 PASS 21 minutes