# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-21 00:29](#error-2025-09-21t0029400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474cbd1cb41a3e706e1e/limits | qa | flaky_500 | 39.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05: MISSING
- 2025-09-06 PASS 12 seconds
- 2025-09-07 PASS 23 seconds
- 2025-09-08
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 4 seconds
- 2025-09-09 PASS 8 seconds
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 8 seconds
- 2025-09-21

### Error 2025-09-21T00:29:40+00:00
```
2025-09-21T00:29:40.3781908Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-21T00:31:04.3913277Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-21T00:31:43.4325641Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-21T00:31:43.4326444Z     resource_test.go:763: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-21T00:31:43.4327178Z         
2025-09-21T00:31:43.4327573Z         Error: error when getting project properties after create
2025-09-21T00:31:43.4327889Z         
2025-09-21T00:31:43.4328218Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:43.4328859Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:43.4329459Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:43.4329767Z         
2025-09-21T00:31:43.4330202Z         error getting project (68cf474cbd1cb41a3e706e1e): error getting project's
2025-09-21T00:31:43.4330662Z         limits (68cf474cbd1cb41a3e706e1e):
2025-09-21T00:31:43.4331225Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474cbd1cb41a3e706e1e/limits
2025-09-21T00:31:43.4331870Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:43.4332427Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:43.4332803Z         BadRequestDetail: 
2025-09-21T00:31:43.4829539Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (39.09s)
```

- 2025-09-22 PASS 9 seconds
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 7 seconds
- 2025-09-25 PASS 8 seconds
- 2025-09-26 PASS 8 seconds
- 2025-09-27 PASS 8 seconds
- 2025-09-28 PASS 8 seconds
- 2025-09-29
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-30
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-10-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-10-02 PASS 9 seconds