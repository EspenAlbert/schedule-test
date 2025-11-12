# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-04 00:25](#error-2025-10-04t0025530000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68e06991065c07374c392a3f/flexClusters/test-acc-tf-2360067833932784860 | dev | 12.09s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04

### Error 2025-10-04T00:25:53+00:00
```
2025-10-04T00:25:53.2119264Z === RUN   TestAccFlexClusterRS_basic
2025-10-04T00:25:53.2121844Z     resource_test.go:20: Creating execution project: test-acc-tf-p-6577462820319376906
2025-10-04T00:26:05.9005564Z   
2025-10-04T00:26:05.9006930Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-04T00:26:05.9008537Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-04T00:26:05.9009622Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-04T00:26:06.1115535Z    test_working_directory=/tmp/plugintest815938718 test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/16e06637-a467-4b7b-8c19-cfed1eec88de/terraform
2025-10-04T00:26:06.1116802Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-04T00:26:06.1117247Z         
2025-10-04T00:26:06.1117799Z         Error: error deleting a flex cluster (68e06991065c07374c392a3f): test-acc-tf-2360067833932784860
2025-10-04T00:26:06.1118229Z         
2025-10-04T00:26:06.1118929Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e06991065c07374c392a3f/flexClusters/test-acc-tf-2360067833932784860
2025-10-04T00:26:06.1119726Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-04T00:26:06.1120332Z         Reason: Cannot terminate cluster test-acc-tf-2360067833932784860 in group
2025-10-04T00:26:06.1120958Z         68e06991065c07374c392a3f because termination protection is enabled. Disable
2025-10-04T00:26:06.1121894Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-10-04T00:26:06.1122471Z         terminate cluster test-acc-tf-2360067833932784860 in group
2025-10-04T00:26:06.1123060Z         68e06991065c07374c392a3f because termination protection is enabled. Disable
2025-10-04T00:26:06.1123619Z         termination protection and try again.], BadRequestDetail: 
2025-10-04T00:26:06.1123988Z --- FAIL: TestAccFlexClusterRS_basic (12.90s)
```

- 2025-10-05 PASS 49 seconds
- 2025-10-06 PASS 52 seconds
- 2025-10-07 PASS a minute
- 2025-10-08 PASS 2 minutes
- 2025-10-09 PASS 6 minutes
- 2025-10-10 PASS 3 minutes
- 2025-10-11 PASS a minute
- 2025-10-12 PASS 49 seconds
- 2025-10-13 PASS 54 seconds
- 2025-10-14 PASS 52 seconds
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS 49 seconds
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS a minute
- 2025-10-26 PASS 50 seconds
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30 PASS a minute
- 2025-10-31 PASS 55 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 52 seconds
- 2025-11-03 PASS a minute
- 2025-11-04 PASS 46 seconds
- 2025-11-05
  - PASS 48 seconds
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS 55 seconds
- 2025-11-08 PASS 45 seconds
- 2025-11-09 PASS 52 seconds
- 2025-11-10 PASS 58 seconds
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute