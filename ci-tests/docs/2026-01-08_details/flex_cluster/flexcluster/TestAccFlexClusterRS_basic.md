# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da930d59b8466ea723fa9/flexClusters/test-acc-tf-2661558677556339440 | dev | flaky_500 | 4.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11 PASS 52 seconds
- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS 55 seconds
- 2025-12-16 PASS 52 seconds
- 2025-12-17 PASS a minute
- 2025-12-18 PASS 46 seconds
- 2025-12-19 PASS 57 seconds
- 2025-12-20 PASS 53 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS 54 seconds
- 2025-12-24 PASS 54 seconds
- 2025-12-25 PASS a minute
- 2025-12-26 PASS 50 seconds
- 2025-12-27 PASS a minute
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 55 seconds
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute
- 2026-01-03 PASS a minute
- 2026-01-04: MISSING
- 2026-01-05 PASS 55 seconds
- 2026-01-06 PASS 57 seconds
- 2026-01-07

### Error 2026-01-07T00:30:40+00:00
```
2026-01-07T00:30:40.1609855Z === RUN   TestAccFlexClusterRS_basic
2026-01-07T00:30:40.1611570Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-8012366157444022940
2026-01-07T00:30:44.5250954Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/d59216d9-447a-4a5b-828e-ee7c9905cf4f/terraform test_working_directory=/tmp/plugintest3398327266 test_name=TestAccFlexClusterRS_basic
2026-01-07T00:30:44.5252995Z     resource_test.go:22: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:30:44.5253634Z         
2026-01-07T00:30:44.5256695Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea723fa9/flexClusters/test-acc-tf-2661558677556339440 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:30:44.5259067Z         
2026-01-07T00:30:44.5259615Z           with mongodbatlas_flex_cluster.test,
2026-01-07T00:30:44.5260797Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2026-01-07T00:30:44.5261886Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2026-01-07T00:30:44.5262438Z         
2026-01-07T00:30:44.5263274Z         Name: test-acc-tf-2661558677556339440, Project ID: 695da930d59b8466ea723fa9
2026-01-07T00:30:44.5721138Z --- FAIL: TestAccFlexClusterRS_basic (4.41s)
```

- 2026-01-08 PASS 58 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 48 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 50 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 53 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 45 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 50 seconds
