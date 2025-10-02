# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2258704811492b56686/limits | qa | flaky_500 | 36.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 27 minutes
- 2025-09-04 PASS 17 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 21 minutes
- 2025-09-07

### Error 2025-09-07T00:29:27+00:00
```
2025-09-07T00:29:27.9825729Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-07T00:30:25.1102572Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-07T00:31:01.8451909Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-07T00:31:01.8452588Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:31:01.8453008Z         
2025-09-07T00:31:01.8453390Z         Error: error when getting project properties after create
2025-09-07T00:31:01.8453718Z         
2025-09-07T00:31:01.8454050Z           with mongodbatlas_project.cluster_project,
2025-09-07T00:31:01.8454705Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T00:31:01.8455308Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T00:31:01.8455629Z         
2025-09-07T00:31:01.8456207Z         error getting project (68bcd2258704811492b56686): error getting project's
2025-09-07T00:31:01.8456763Z         limits (68bcd2258704811492b56686):
2025-09-07T00:31:01.8457528Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2258704811492b56686/limits
2025-09-07T00:31:01.8458191Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:01.8458987Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:01.8459391Z         BadRequestDetail: 
2025-09-07T00:31:01.8932493Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (36.79s)
```

- 2025-09-08
  - PASS 25 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-09-09 PASS 22 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 23 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 21 minutes
- 2025-09-22 PASS 23 minutes
- 2025-09-23 PASS 24 minutes
- 2025-09-24 PASS 23 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 13 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - PASS 23 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 18 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 40 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-10-02 PASS 15 minutes