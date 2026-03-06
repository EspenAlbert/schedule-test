# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1204.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 32 minutes
- 2026-02-06 PASS 34 minutes
- 2026-02-07 PASS 29 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 30 minutes
- 2026-02-10 PASS 30 minutes
- 2026-02-11 PASS 32 minutes
- 2026-02-12 PASS 27 minutes
- 2026-02-13 PASS 29 minutes
- 2026-02-14 PASS 29 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 30 minutes
- 2026-02-17 PASS 30 minutes
- 2026-02-18 PASS 31 minutes
- 2026-02-19 PASS 42 minutes
- 2026-02-20 PASS 31 minutes
- 2026-02-21 PASS 30 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 32 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5620143Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-24T00:40:00.6206611Z === CONT  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-24T00:57:01.7054160Z === NAME  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-24T00:57:01.7054832Z     effective_fields_test.go:171: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:57:01.7055327Z         
2026-02-24T00:57:01.7055843Z         Error: error resolving container IDs
2026-02-24T00:57:01.7056139Z         
2026-02-24T00:57:01.7056517Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:01.7057377Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:01.7058011Z           39: 		data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:01.7058549Z         
2026-02-24T00:57:01.7059007Z         cluster name = test-acc-tf-c-1188194062925392527, error details: (503 Service
2026-02-24T00:57:01.7059643Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:01.7060018Z         
2026-02-24T00:57:01.7060330Z         Error: error reading advanced cluster list
2026-02-24T00:57:01.7060620Z         
2026-02-24T00:57:01.7060969Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:01.7061631Z           on terraform_plugin_test.tf line 47, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:01.7062236Z           47: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:01.7062764Z         
2026-02-24T00:57:01.7063228Z         project ID 699cf2a9ae2412ce6211a607. Error (503 Service Unavailable) failed
2026-02-24T00:57:01.7063773Z         to decode response body: undefined response type
2026-02-24T00:57:07.1034930Z    test_name=TestAccClusterAdvancedCluster_defaultWrite test_terraform_path=/home/runner/work/_temp/5c6ed455-a3dd-498c-9d5a-daa41eb22591/terraform test_working_directory=/tmp/plugintest1638339041 test_step_number=1
2026-02-24T01:00:04.9010781Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (1204.30s)
```

- 2026-02-25 PASS 32 minutes
- 2026-02-26 PASS 37 minutes
- 2026-02-27 PASS 29 minutes
- 2026-02-28 PASS 31 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 30 minutes
  - PASS 31 minutes
- 2026-03-03 PASS 37 minutes
- 2026-03-04 PASS 30 minutes
- 2026-03-05 PASS 40 minutes
- 2026-03-06 PASS 33 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 28 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 33 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 27 minutes
  - PASS 25 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 32 minutes
- 2026-03-02 PASS 25 minutes
- 2026-03-03 PASS 30 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
