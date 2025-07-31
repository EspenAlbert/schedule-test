# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-31 01:00](#error-2025-07-31t0100580000) | ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/688ac047f642206b2cd987fd/clusters | dev | 16.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 12 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 15 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 15 minutes
- 2025-07-10 PASS 16 minutes
- 2025-07-11 PASS 12 minutes
- 2025-07-12 PASS 19 minutes
- 2025-07-13 PASS 23 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 16 minutes
- 2025-07-16 PASS 13 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 23 minutes
- 2025-07-19 PASS 13 minutes
- 2025-07-20 PASS 16 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 12 minutes
  - PASS 18 minutes
  - PASS 14 minutes
  - PASS 23 minutes
- 2025-07-24 PASS 15 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 16 minutes
- 2025-07-27 PASS 19 minutes
- 2025-07-28 PASS 15 minutes
- 2025-07-29 PASS 31 minutes
- 2025-07-30 PASS 13 minutes
- 2025-07-31

### Error 2025-07-31T01:00:58+00:00
```
2025-07-31T01:00:58.5238516Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-07-31T01:04:13.8045694Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-07-31T01:04:28.8093601Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-07-31T01:04:28.8095224Z     pre_check.go:40: Time before creating cluster: 2025-07-31T01:04:28.809034696Z, ProjectID: 688ac047f642206b2cd987fd, Cluster name: test-acc-tf-c-6930891285615337830
2025-07-31T01:04:30.5413764Z   
2025-07-31T01:04:30.5414429Z     resource_advanced_cluster_test.go:394: Step 2/3 error: Error running apply: exit status 1
2025-07-31T01:04:30.5414994Z         
2025-07-31T01:04:30.5416919Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/688ac047f642206b2cd987fd/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-31T01:04:30.5418205Z         
2025-07-31T01:04:30.5418527Z           with mongodbatlas_advanced_cluster.test,
2025-07-31T01:04:30.5419343Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-31T01:04:30.5419931Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-31T01:04:30.5420257Z         
2025-07-31T01:04:30.5884327Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (16.79s)
```
