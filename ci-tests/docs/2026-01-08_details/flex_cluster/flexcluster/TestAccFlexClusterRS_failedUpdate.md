# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da930d59b8466ea723fa9/flexClusters | dev | flaky_500 | 15.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 43 seconds
  - PASS a minute
- 2025-12-11 PASS 54 seconds
- 2025-12-12 PASS 56 seconds
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS 56 seconds
- 2025-12-16 PASS 43 seconds
- 2025-12-17 PASS 53 seconds
- 2025-12-18 PASS 43 seconds
- 2025-12-19 PASS 53 seconds
- 2025-12-20 PASS 55 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 55 seconds
- 2025-12-23 PASS 44 seconds
- 2025-12-24 PASS a minute
- 2025-12-25 PASS 37 seconds
- 2025-12-26 PASS 53 seconds
- 2025-12-27 PASS 47 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 49 seconds
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS 55 seconds
- 2026-01-03 PASS 55 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS 44 seconds
- 2026-01-07

### Error 2026-01-07T00:30:44+00:00
```
2026-01-07T00:30:44.5721836Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-01-07T00:30:55.5595515Z   
2026-01-07T00:30:55.5596071Z     resource_test.go:27: Step 1/5 error: Error running apply: exit status 1
2026-01-07T00:30:55.5596458Z         
2026-01-07T00:30:55.5596843Z         Error: error reading plural data source
2026-01-07T00:30:55.5597159Z         
2026-01-07T00:30:55.5597514Z           with data.mongodbatlas_flex_clusters.test,
2026-01-07T00:30:55.5598343Z           on terraform_plugin_test.tf line 31, in data "mongodbatlas_flex_clusters" "test":
2026-01-07T00:30:55.5599218Z           31: 	data "mongodbatlas_flex_clusters" "test" {
2026-01-07T00:30:55.5599528Z         
2026-01-07T00:30:55.5600078Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea723fa9/flexClusters
2026-01-07T00:30:55.5600782Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:30:55.5601366Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:30:55.5601750Z         BadRequestDetail: 
2026-01-07T00:31:00.1373948Z    test_step_number=1 test_working_directory=/tmp/plugintest2785944082 test_terraform_path=/home/runner/work/_temp/d59216d9-447a-4a5b-828e-ee7c9905cf4f/terraform
2026-01-07T00:31:00.1375218Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:31:00.1375940Z         
2026-01-07T00:31:00.1376781Z         Error: error deleting a flex cluster (695da930d59b8466ea723fa9): test-acc-tf-1855280530427068536
2026-01-07T00:31:00.1377536Z         
2026-01-07T00:31:00.1378266Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea723fa9/flexClusters/test-acc-tf-1855280530427068536
2026-01-07T00:31:00.1379323Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:00.1380060Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:00.1380453Z         BadRequestDetail: 
2026-01-07T00:31:00.1380768Z --- FAIL: TestAccFlexClusterRS_failedUpdate (15.56s)
```

- 2026-01-08 PASS 55 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 38 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 45 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 45 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 37 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 42 seconds
