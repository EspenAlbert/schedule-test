# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029480000) |  | qa |  | 4.09s
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 11809.06s
[2025-11-02 00:29](#error-2025-11-02t0029430000) |  | qa |  | 5.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS an hour
- 2025-10-05

### Error 2025-10-05T00:29:48+00:00
```
2025-10-05T00:29:48.1384286Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-05T00:31:26.4370502Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-05T00:31:27.8180787Z   diagnostic_detail=
2025-10-05T00:31:27.8188282Z    diagnostic_summary="Missing Configuration for Required Attribute" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_resource_type=mongodbatlas_advanced_cluster diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" diagnostic_severity=ERROR
2025-10-05T00:31:30.8897816Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-05T00:31:30.8898715Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-10-05T00:31:30.8899295Z         
2025-10-05T00:31:30.8899676Z         Error: Error in create
2025-10-05T00:31:30.8900056Z         
2025-10-05T00:31:30.8900565Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.8901626Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.8902603Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.8903171Z         
2025-10-05T00:31:30.8903841Z         cluster name: test-acc-tf-c-7952410108248702892, API error details:
2025-10-05T00:31:30.9016037Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbf9f758b3057a1aec26/clusters
2025-10-05T00:31:30.9016986Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.9017984Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.9019060Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.9020115Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.9020831Z         BadRequestDetail: 
2025-10-05T00:31:31.2816372Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (4.86s)
```

- 2025-10-06 PASS 40 minutes
- 2025-10-07 PASS 37 minutes
- 2025-10-08 PASS 41 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 43 minutes
- 2025-10-11 PASS 43 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 38 minutes
- 2025-10-14 PASS 37 minutes
- 2025-10-15 PASS 36 minutes
- 2025-10-16 PASS 56 minutes
- 2025-10-17 PASS 38 minutes
- 2025-10-18 PASS 35 minutes
- 2025-10-19 PASS 36 minutes
- 2025-10-20
  - PASS an hour
  - PASS 30 minutes
- 2025-10-21 PASS 34 minutes
- 2025-10-22
  - PASS 42 minutes
  - PASS 34 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 55 minutes
- 2025-10-26 PASS 33 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 38 minutes
- 2025-10-29 PASS 45 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3896773Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-30T00:29:52.4849202Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-30T03:46:41.7279738Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-30T03:46:41.7280753Z     resource_test.go:198: Step 2/3 error: Error running apply: exit status 1
2025-10-30T03:46:41.7281437Z         
2025-10-30T03:46:41.7282080Z         Error: Error in delete
2025-10-30T03:46:41.7282483Z         
2025-10-30T03:46:41.7283010Z         cluster=test-acc-tf-c-7618741531177568821 didn't reach desired state:
2025-10-30T03:46:41.7283696Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:46:41.7284290Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:42.0273047Z   
2025-10-30T03:46:42.0273783Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:42.0274226Z         
2025-10-30T03:46:42.0274475Z         Error: Error in delete
2025-10-30T03:46:42.0274718Z         
2025-10-30T03:46:42.0275126Z         cluster name: test-acc-tf-c-7618741531177568821, API error details:
2025-10-30T03:46:42.0275978Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11de2dc7470847b8fef/clusters/test-acc-tf-c-7618741531177568821
2025-10-30T03:46:42.0276625Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T03:46:42.0277090Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T03:46:42.0277822Z         test-acc-tf-c-7618741531177568821 has already been requested for deletion.
2025-10-30T03:46:42.0278418Z         Reason: Bad Request. Params: [test-acc-tf-c-7618741531177568821],
2025-10-30T03:46:42.0278812Z         BadRequestDetail: 
2025-10-30T03:46:42.0279198Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (11809.55s)
```

- 2025-10-31 PASS 44 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:43+00:00
```
2025-11-02T00:29:43.4863465Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-02T00:31:20.5693701Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-02T00:31:25.3370677Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-11-02T00:31:25.3371904Z     resource_test.go:198: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:31:25.3373247Z         
2025-11-02T00:31:25.3373797Z         Error: Error in create
2025-11-02T00:31:25.3374311Z         
2025-11-02T00:31:25.3375170Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.3377177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.3378627Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.3380172Z         
2025-11-02T00:31:25.3380989Z         cluster name: test-acc-tf-c-8694877321979365975, API error details:
2025-11-02T00:31:25.3382192Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5f37d8b3f733a093e23/clusters
2025-11-02T00:31:25.3383073Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.3383963Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.3385028Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.3386084Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.3386807Z         BadRequestDetail: 
2025-11-02T00:31:25.4263203Z   
2025-11-02T00:31:25.7150548Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (5.15s)
```

- 2025-11-03 PASS 38 minutes
- 2025-11-04 PASS 40 minutes
- 2025-11-05
  - PASS 41 minutes
  - PASS 36 minutes
- 2025-11-06 PASS 52 minutes
- 2025-11-07 PASS 44 minutes
- 2025-11-08 PASS an hour
- 2025-11-09 PASS 40 minutes
- 2025-11-10 PASS 40 minutes
- 2025-11-11 PASS 40 minutes
- 2025-11-12 PASS 45 minutes