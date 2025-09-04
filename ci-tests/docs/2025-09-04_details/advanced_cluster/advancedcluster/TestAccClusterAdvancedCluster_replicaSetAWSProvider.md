# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-07 00:31](#error-2025-08-07t0031490000) | API Error ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 68.02s
[2025-08-14 00:29](#error-2025-08-14t0029080000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/689d2dd492412a7721aea69a/clusters | dev |  | 13.04s
[2025-08-26 00:27](#error-2025-08-26t0027410000) |  | dev | timeout | 12255.06s
[2025-09-01 00:30](#error-2025-09-01t0030410000) |  | dev | timeout | 10810.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07

### Error 2025-08-07T00:31:49+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-08-07T00:31:49.252000+00:00-TestAccClusterAdvancedCluster_replicaSetAWSProvider',confidence=1.0,ts_when='28 days ago')
API Error ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-07T00:31:49.2522419Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-07T00:35:02.1558461Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-07T00:36:02.1625520Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-07T00:36:02.1627138Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:36:02.162353889Z, ProjectID: 6893f3f79c9cc040e1930b5b, Cluster name: test-acc-tf-c-5475288103698301948
2025-08-07T00:36:05.7794681Z    test_working_directory=/tmp/plugintest946234193
2025-08-07T00:36:05.7795586Z     resource_advanced_cluster_test.go:187: Step 1/5 error: Error running apply: exit status 1
2025-08-07T00:36:05.7796115Z         
2025-08-07T00:36:05.7798241Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3f79c9cc040e1930b5b/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-07T00:36:05.7799983Z         
2025-08-07T00:36:05.7800357Z           with mongodbatlas_advanced_cluster.test,
2025-08-07T00:36:05.7800968Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-07T00:36:05.7801528Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-07T00:36:05.7801826Z         
2025-08-07T00:36:05.8295850Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (68.22s)
```

- 2025-08-08 PASS an hour
- 2025-08-09 PASS an hour
- 2025-08-10 PASS an hour
- 2025-08-11 PASS 3 hours
- 2025-08-12
  - PASS an hour
  - PASS 59 minutes
- 2025-08-13 PASS an hour
- 2025-08-14

### Error 2025-08-14T00:29:08+00:00
```
2025-08-14T00:29:08.8597936Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-14T00:30:18.4050431Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-14T00:30:28.4053039Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-14T00:30:28.4054900Z     pre_check.go:40: Time before creating cluster: 2025-08-14T00:30:28.405136465Z, ProjectID: 689d2dd492412a7721aea69a, Cluster name: test-acc-tf-c-5669354540669598228
2025-08-14T00:30:29.3066809Z   
2025-08-14T00:30:29.3067702Z     resource_advanced_cluster_test.go:187: Step 1/5 error: Error running apply: exit status 1
2025-08-14T00:30:29.3068492Z         
2025-08-14T00:30:29.3071330Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689d2dd492412a7721aea69a/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-14T00:30:29.3073383Z         
2025-08-14T00:30:29.3073995Z           with mongodbatlas_advanced_cluster.test,
2025-08-14T00:30:29.3075368Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-14T00:30:29.3076505Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-14T00:30:29.3077073Z         
2025-08-14T00:30:29.3748466Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (13.44s)
```

- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 58 minutes
- 2025-08-19 PASS an hour
- 2025-08-20
  - PASS an hour
  - PASS an hour
- 2025-08-21 PASS an hour
- 2025-08-22: MISSING
- 2025-08-23 PASS an hour
- 2025-08-24 PASS 57 minutes
- 2025-08-25 PASS an hour
- 2025-08-26

### Error 2025-08-26T00:27:41+00:00
```
2025-08-26T00:27:41.1804812Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T00:28:49.1702611Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T00:29:59.1644708Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T00:29:59.1646955Z     pre_check.go:40: Time before creating cluster: 2025-08-26T00:29:59.164158039Z, ProjectID: 68acff7b52781c2812d00502, Cluster name: test-acc-tf-c-3249043272208998874
2025-08-26T03:49:33.1643073Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-08-26T03:49:33.1644299Z     resource_advanced_cluster_test.go:188: Step 3/5 error: Error running apply: exit status 1
2025-08-26T03:49:33.1645061Z         
2025-08-26T03:49:33.1646363Z         Error: error updating advanced cluster (test-acc-tf-c-3249043272208998874): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-26T03:49:33.1647201Z         
2025-08-26T03:49:33.1647814Z           with mongodbatlas_advanced_cluster.test,
2025-08-26T03:49:33.1648648Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-26T03:49:33.1649294Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-26T03:49:33.1649603Z         
2025-08-26T03:53:04.7946064Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (12255.63s)
```

- 2025-08-27 PASS an hour
- 2025-08-28 PASS an hour
- 2025-08-29: MISSING
- 2025-08-30 PASS 59 minutes
- 2025-08-31 PASS an hour
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.7231104Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:44.5145794Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:54.5016312Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-09-01T00:30:54.5018642Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:54.501279798Z, ProjectID: 68b4e92e46ef690a79d70c0c, Cluster name: test-acc-tf-c-6542790571556486851
2025-09-01T03:30:55.3548345Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-09-01T03:30:55.3549461Z     resource_advanced_cluster_test.go:188: Step 1/5 error: Error running apply: exit status 1
2025-09-01T03:30:55.3550226Z         
2025-09-01T03:30:55.3551468Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:55.3552125Z         
2025-09-01T03:30:55.3552475Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:30:55.3553519Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:30:55.3554133Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:30:55.3554467Z         
2025-09-01T03:30:55.3995894Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10810.90s)
```

  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS 59 minutes
  - PASS an hour
- 2025-09-02 PASS an hour
- 2025-09-03 PASS an hour
- 2025-09-04 PASS an hour