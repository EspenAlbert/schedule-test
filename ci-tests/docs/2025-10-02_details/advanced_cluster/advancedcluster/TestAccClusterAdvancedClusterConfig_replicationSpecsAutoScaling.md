# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029240000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68bcd1e28704811492b552f7/clusters | qa | 50.09s
[2025-10-01 00:28](#error-2025-10-01t0028310000) |  | dev | 25.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 45 minutes
- 2025-09-04 PASS 41 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 40 minutes
- 2025-09-07

### Error 2025-09-07T00:29:24+00:00
```
2025-09-07T00:29:24.3759132Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-07T00:30:25.1309007Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-07T00:31:15.1065802Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-07T00:31:15.1067912Z     pre_check.go:40: Time before creating cluster: 2025-09-07T00:31:15.106293967Z, ProjectID: 68bcd1e28704811492b552f7, Cluster name: test-acc-tf-c-4353258513132968799
2025-09-07T00:31:15.9448804Z   
2025-09-07T00:31:15.9449297Z     resource_advanced_cluster_test.go:540: Step 1/5 error: Error running apply: exit status 1
2025-09-07T00:31:15.9449721Z         
2025-09-07T00:31:15.9451836Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1e28704811492b552f7/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-07T00:31:15.9453208Z         
2025-09-07T00:31:15.9453539Z           with mongodbatlas_advanced_cluster.test,
2025-09-07T00:31:15.9454181Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-07T00:31:15.9454763Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-07T00:31:15.9455073Z         
2025-09-07T00:31:15.9880105Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (50.88s)
```

- 2025-09-08
  - PASS 45 minutes
  - PASS 35 minutes
  - PASS 37 minutes
- 2025-09-09 PASS 42 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 28 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 27 minutes
- 2025-09-22 PASS 26 minutes
- 2025-09-23 PASS 27 minutes
- 2025-09-24 PASS 26 minutes
- 2025-09-25 PASS 28 minutes
- 2025-09-26 PASS 26 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 39 minutes
  - PASS 21 minutes
- 2025-09-30
  - PASS 27 minutes
  - PASS 23 minutes
  - PASS 27 minutes
  - PASS 24 minutes
  - PASS 24 minutes
- 2025-10-01
  - FAIL 25 seconds

### Error 2025-10-01T00:28:31+00:00
```
2025-10-01T00:28:31.7122794Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-01T00:30:01.0302081Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-01T00:30:26.0266391Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-01T00:30:26.0268220Z     pre_check.go:32: Time before creating cluster: 2025-10-01T00:30:26.026353051Z, ProjectID: 68dc75ac4c39c348073fbfc1, Cluster name: test-acc-tf-c-4462301416773018234
2025-10-01T00:30:26.6466652Z    test_name=TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling test_terraform_path=/home/runner/work/_temp/8ae01924-27fb-49e9-93af-cb96967eb216/terraform
2025-10-01T00:30:26.6467813Z     resource_test.go:451: Step 1/5 error: Error running apply: exit status 1
2025-10-01T00:30:26.6468243Z         
2025-10-01T00:30:26.6468487Z         Error: Error in create
2025-10-01T00:30:26.6468947Z         
2025-10-01T00:30:26.6469339Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T00:30:26.6470025Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T00:30:26.6470639Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T00:30:26.6470938Z         
2025-10-01T00:30:26.6471346Z         cluster name: test-acc-tf-c-4462301416773018234, API error details:
2025-10-01T00:30:26.6472020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc75ac4c39c348073fbfc1/clusters
2025-10-01T00:30:26.6472534Z         POST: HTTP 403 Forbidden (Error code:
2025-10-01T00:30:26.6473027Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-01T00:30:26.6473610Z         Configuration. Contains selections that are unavailable due to your
2025-10-01T00:30:26.6474184Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-01T00:30:26.6474841Z         BadRequestDetail: 
2025-10-01T00:30:26.6892224Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (25.66s)
```

  - PASS 21 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 43 minutes
  - PASS 24 minutes
  - PASS 42 minutes
  - PASS 23 minutes
- 2025-10-02 PASS 35 minutes