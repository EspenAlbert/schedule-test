# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 34 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-16 00:31](#error-2025-12-16t0031520000) | API Error CLUSTER_NOT_FOUND /api/atlas/v2/groups/{groupId}/clusters | dev | flaky_400 | 1477.08s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04
  - PASS 27 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-12-05 PASS 31 minutes
- 2025-12-06 PASS 23 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 19 minutes
- 2025-12-09 PASS 24 minutes
- 2025-12-10
  - PASS 27 minutes
  - PASS 21 minutes
- 2025-12-11 PASS 26 minutes
- 2025-12-12 PASS 26 minutes
- 2025-12-13 PASS 26 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 21 minutes
- 2025-12-16

### Error 2025-12-16T00:31:52+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-12-16T00:31:52.655000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='17 days ago')
API Error CLUSTER_NOT_FOUND /api/atlas/v2/groups/{groupId}/clusters
```
2025-12-16T00:31:52.6554551Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-12-16T00:31:57.3475538Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-1953545040749267850
2025-12-16T00:31:57.3476644Z     resource_test.go:95: Adding variable groupId=6940a8781235e7e4c4b74b9f
2025-12-16T00:33:47.6928542Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-12-16T00:34:27.6892334Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-12-16T00:34:27.6894079Z     pre_check.go:46: Time before creating cluster: 2025-12-16T00:34:27.688890446Z, ProjectID: 6940a8781235e7e4c4b74b9f, Cluster name: test-acc-tf-c-1953545040749267850
2025-12-16T00:35:00.6569068Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-12-16T00:35:00.6570119Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7928778783429841510
2025-12-16T00:35:01.0435174Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2896960718971134379
2025-12-16T00:35:01.6109200Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4259065165425149213
2025-12-16T00:35:02.0059717Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-5052519829916767346
2025-12-16T00:35:02.3975423Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-4996390561698917326
2025-12-16T00:53:45.8770059Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-12-16T00:53:45.8771001Z     resource_test.go:95: Step 3/3 error running import: exit status 1
2025-12-16T00:53:45.8771360Z         
2025-12-16T00:53:45.8771803Z         Error: error reading advanced cluster list
2025-12-16T00:53:45.8772099Z         
2025-12-16T00:53:45.8772620Z           with data.mongodbatlas_advanced_clusters.test,
2025-12-16T00:53:45.8773706Z           on /tmp/plugintest3293550474/work1287928243/terraform_plugin_test.tf line 38, in data "mongodbatlas_advanced_clusters" "test":
2025-12-16T00:53:45.8774430Z           38: data "mongodbatlas_advanced_clusters" "test" {
2025-12-16T00:53:45.8774726Z         
2025-12-16T00:53:45.8775024Z         project ID 6940a8781235e7e4c4b74b9f. Error
2025-12-16T00:53:45.8775919Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6940a8781235e7e4c4b74b9f/clusters
2025-12-16T00:53:45.8776602Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-12-16T00:53:45.8777137Z         named test-acc-tf-c-7928778783429841510 exists in group
2025-12-16T00:53:45.8777618Z         6940a8781235e7e4c4b74b9f. Reason: Not Found. Params:
2025-12-16T00:53:45.8778115Z         [test-acc-tf-c-7928778783429841510 6940a8781235e7e4c4b74b9f],
2025-12-16T00:53:45.8778494Z         BadRequestDetail: 
2025-12-16T00:53:45.8778727Z         
2025-12-16T00:58:20.8327644Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (1477.83s)
```

- 2025-12-17 PASS 27 minutes
- 2025-12-18 PASS 26 minutes
- 2025-12-19 PASS 29 minutes
- 2025-12-20 PASS 24 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 22 minutes
- 2025-12-24 PASS 28 minutes
- 2025-12-25 PASS 37 minutes
- 2025-12-26 PASS 21 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 21 minutes
- 2025-12-31 PASS 26 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 26 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 18 minutes
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 20 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 18 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 20 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
