# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455020000) |  | dev | flaky_500 | 853.00s
[2025-10-05 00:29](#error-2025-10-05t0029480000) |  | qa |  | 4.09s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 54 minutes
- 2025-09-24 PASS 56 minutes
- 2025-09-25 PASS 57 minutes
- 2025-09-26 PASS 55 minutes
- 2025-09-27 PASS 41 minutes
- 2025-09-28 PASS 47 minutes
- 2025-09-29
  - PASS 59 minutes
  - PASS 36 minutes
- 2025-09-30
  - PASS 39 minutes
  - PASS 35 minutes
  - PASS 43 minutes
  - PASS 35 minutes
  - PASS 34 minutes
- 2025-10-01
  - PASS 41 minutes
  - PASS 33 minutes
  - FAIL 14 minutes

### Error 2025-10-01T04:55:02+00:00
```
2025-10-01T04:55:02.4691717Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-01T04:56:43.0209124Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-01T05:10:56.0028035Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-01T05:10:56.0029010Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-10-01T05:10:56.0029625Z         
2025-10-01T05:10:56.0030128Z         Error: error resolving container IDs
2025-10-01T05:10:56.0030580Z         
2025-10-01T05:10:56.0030996Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:56.0031886Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:56.0032525Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:56.0032960Z         
2025-10-01T05:10:56.0033485Z         cluster name = test-acc-tf-c-1379291682237294445, error details: (503 Service
2025-10-01T05:10:56.0034625Z         Unavailable) failed to decode response body: undefined response type
2025-10-01T05:10:56.0509191Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (853.03s)
```

  - PASS 33 minutes
  - PASS 58 minutes
  - PASS 38 minutes
  - PASS an hour
  - PASS 40 minutes
- 2025-10-02 PASS 51 minutes
- 2025-10-03 PASS 35 minutes
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