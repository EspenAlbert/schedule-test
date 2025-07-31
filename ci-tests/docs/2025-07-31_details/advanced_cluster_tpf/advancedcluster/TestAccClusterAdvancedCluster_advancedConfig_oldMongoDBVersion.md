# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-31 03:21](#error-2025-07-31t0321450000) | ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/688ac08a85f36921620087e2/clusters | dev | 60.10s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 27 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 14 minutes
- 2025-07-18 PASS 27 minutes
- 2025-07-19 PASS 16 minutes
- 2025-07-20 PASS 15 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 14 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 23 minutes
- 2025-07-24 PASS 15 minutes
- 2025-07-25 PASS 20 minutes
- 2025-07-26 PASS 27 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 15 minutes
- 2025-07-29 PASS 24 minutes
- 2025-07-30 PASS 15 minutes
- 2025-07-31

### Error 2025-07-31T03:21:45+00:00
```
2025-07-31T03:21:45.6127080Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-07-31T03:21:45.6188724Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-07-31T03:21:45.6261057Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-07-31T03:21:45.6261965Z     pre_check.go:40: Time before creating cluster: 2025-07-31T01:05:16.683566518Z, ProjectID: 688ac08a85f36921620087e2, Cluster name: test-acc-tf-c-5825803281376512151
2025-07-31T03:21:45.6279906Z    test_working_directory=/tmp/plugintest1701105995 test_name=TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion test_terraform_path=/home/runner/work/_temp/1755ac59-8f04-48c6-8eaf-11ec6ecf5c3c/terraform
2025-07-31T03:21:45.6281124Z     resource_advanced_cluster_test.go:394: Step 2/3 error: Error running apply: exit status 1
2025-07-31T03:21:45.6281536Z         
2025-07-31T03:21:45.6281777Z         Error: Error in create
2025-07-31T03:21:45.6282013Z         
2025-07-31T03:21:45.6282341Z           with mongodbatlas_advanced_cluster.test,
2025-07-31T03:21:45.6282976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-31T03:21:45.6283549Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-31T03:21:45.6283846Z         
2025-07-31T03:21:45.6284239Z         cluster name: test-acc-tf-c-5825803281376512151, API error details:
2025-07-31T03:21:45.6284889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/688ac08a85f36921620087e2/clusters
2025-07-31T03:21:45.6285537Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED")
2025-07-31T03:21:45.6286164Z         Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params:
2025-07-31T03:21:45.6286594Z         [], BadRequestDetail: 
2025-07-31T03:21:45.6286990Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (60.99s)
```
