# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-06 00:26](#error-2025-09-06t0026260000) |  | dev | 232.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 6 minutes
- 2025-09-05: MISSING
- 2025-09-06

### Error 2025-09-06T00:26:26+00:00
```
2025-09-06T00:26:26.4231825Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-06T00:27:49.0451804Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-06T00:30:09.1235461Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-06T00:30:09.1237480Z     resource_advanced_cluster_test.go:1467: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-09-06T00:30:09.1238867Z         
2025-09-06T00:30:09.1239297Z           map[string]string{
2025-09-06T00:30:09.1239915Z         - 	"connection_strings.0.standard": "",
2025-09-06T00:30:09.1242802Z         + 	"connection_strings.0.standard": "mongodb://ac-obsfnbc-shard-00-00.9lezem1.mongodb-dev.net:27017,ac-obsfnbc-shard-00-01.9lezem1.mongodb-dev.net:27017,ac-obsfnbc-shard-00-02.9lezem1.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-nyb4va-shard-0",
2025-09-06T00:30:09.1246460Z         - 	"mongo_db_version":              "8.0.13",
2025-09-06T00:30:09.1247023Z         + 	"mongo_db_version":              "8.0.12",
2025-09-06T00:30:09.1247334Z           }
2025-09-06T00:31:41.3251661Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (232.28s)
```

- 2025-09-07 PASS 2 minutes
- 2025-09-08
  - PASS 3 minutes
  - PASS 5 minutes
  - PASS 6 minutes
- 2025-09-09 PASS 7 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 5 seconds
- 2025-09-20 PASS 5 seconds
- 2025-09-21 PASS 5 seconds
- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 4 seconds
- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 5 seconds
- 2025-09-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-09-30
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 5 seconds