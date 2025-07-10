# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 68 TestRuns in dev, qa from 2025-05-22 to 2025-07-10 from master branch: 1 unique tests, PASS(x 59) FAIL(x 9)
Success rate: 86.76%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4e0c939f27413251a7f/flexClusters | dev | flaky_500 | 5.06s
[2025-06-26 01:58](#error-2025-06-26t0158040000) |  | dev | unknown | 75.03s
[2025-06-28 01:43](#error-2025-06-28t0143330000) |  | dev |  | 75.05s
[2025-06-30 01:50](#error-2025-06-30t0150250000) |  | dev | real_test_failure | 95.07s
[2025-07-01 01:44](#error-2025-07-01t0144170000) |  | dev | real_test_failure | 85.03s
[2025-07-01 03:15](#error-2025-07-01t0315590000) |  | dev | real_test_failure | 84.08s
[2025-07-01 04:49](#error-2025-07-01t0449250000) |  | dev | flaky_check | 75.08s
[2025-07-02 01:46](#error-2025-07-02t0146500000) |  | dev | unclassified | 75.01s
[2025-07-03 01:45](#error-2025-07-03t0145420000) |  | dev | flaky_check | 84.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12: MISSING
- 2025-04-13: MISSING
- 2025-04-14: MISSING
- 2025-04-15: MISSING
- 2025-04-16: MISSING
- 2025-04-17: MISSING
- 2025-04-18: MISSING
- 2025-04-19: MISSING
- 2025-04-20: MISSING
- 2025-04-21: MISSING
- 2025-04-22: MISSING
- 2025-04-23: MISSING
- 2025-04-24: MISSING
- 2025-04-25: MISSING
- 2025-04-26: MISSING
- 2025-04-27: MISSING
- 2025-04-28: MISSING
- 2025-04-29: MISSING
- 2025-04-30: MISSING
- 2025-05-01: MISSING
- 2025-05-02: MISSING
- 2025-05-03: MISSING
- 2025-05-04: MISSING
- 2025-05-05: MISSING
- 2025-05-06: MISSING
- 2025-05-07: MISSING
- 2025-05-08: MISSING
- 2025-05-09: MISSING
- 2025-05-10: MISSING
- 2025-05-11: MISSING
- 2025-05-12: MISSING
- 2025-05-13: MISSING
- 2025-05-14: MISSING
- 2025-05-15: MISSING
- 2025-05-16: MISSING
- 2025-05-17: MISSING
- 2025-05-18: MISSING
- 2025-05-19: MISSING
- 2025-05-20: MISSING
- 2025-05-21: MISSING
- 2025-05-22 PASS 2 minutes
- 2025-05-23 PASS 2 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 3 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27 PASS 3 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-29 PASS 5 minutes
- 2025-05-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-31 PASS 3 minutes
- 2025-06-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-02
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-03 PASS 3 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5917148Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-05T00:35:38.5942459Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-05T00:35:38.5999931Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-05T00:35:38.6000824Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:38.6001398Z         
2025-06-05T00:35:38.6002073Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-510537360223815338 (project_id=6840e4e0c939f27413251a7f).
2025-06-05T00:35:38.6002586Z         
2025-06-05T00:35:38.6002906Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6003539Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6004129Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6004440Z         
2025-06-05T00:35:38.6004963Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4e0c939f27413251a7f/flexClusters
2025-06-05T00:35:38.6005666Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6006238Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6006621Z         BadRequestDetail: 
2025-06-05T00:35:38.6019866Z    test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform
2025-06-05T00:35:38.6216957Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (5.59s)
```

- 2025-06-06 PASS 5 minutes
- 2025-06-07 PASS 3 minutes
- 2025-06-08 PASS 3 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-12 PASS 4 minutes
- 2025-06-13 PASS 3 minutes
- 2025-06-14 PASS 24 minutes
- 2025-06-15 PASS 3 minutes
- 2025-06-16 PASS 3 minutes
- 2025-06-17 PASS 3 minutes
- 2025-06-18
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-19 PASS 28 minutes
- 2025-06-20 PASS 3 minutes
- 2025-06-21 PASS 3 minutes
- 2025-06-22 PASS 4 minutes
- 2025-06-23 PASS 3 minutes
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 2 minutes
- 2025-06-26
  - FAIL a minute

### Error 2025-06-26T01:58:04+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-26T01:58:04.801000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='14 days ago')

```
2025-06-26T01:58:04.8019529Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-26T01:58:04.8044551Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-26T01:58:04.8093416Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-26T01:58:04.8093991Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-06-26T01:58:04.8124858Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (75.31s)
```

  - PASS 2 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28

### Error 2025-06-28T01:43:33+00:00
```
2025-06-28T01:43:33.8401385Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-28T01:43:33.8409902Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-28T01:43:33.8459820Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-28T01:43:33.8460395Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-06-28T01:43:33.8486571Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (75.53s)
```

- 2025-06-29 PASS 3 minutes
- 2025-06-30

### Error 2025-06-30T01:50:25+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-30T01:50:25.782000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='9 days ago')

```
2025-06-30T01:50:25.7825542Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-30T01:50:25.7846050Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-30T01:50:25.7891065Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-30T01:50:25.7891645Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-06-30T01:50:25.7928014Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (95.72s)
```

- 2025-07-01
  - FAIL a minute

### Error 2025-07-01T01:44:17+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T01:44:17.101000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='8 days ago')

```
2025-07-01T01:44:17.0101351Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T01:44:17.0116981Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T01:44:17.0167221Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T01:44:17.0167919Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-07-01T01:44:17.0199667Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (85.27s)
```

  - FAIL a minute

### Error 2025-07-01T03:15:59+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T03:15:59.257000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='8 days ago')

```
2025-07-01T03:15:59.2577351Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T03:15:59.2584113Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T03:15:59.2672939Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T03:15:59.2673536Z     resource_advanced_cluster_test.go:1465: Step 2/3 error: Error running apply: exit status 1
2025-07-01T03:15:59.2673943Z         
2025-07-01T03:15:59.2674583Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-1182471763667972385 (project_id=686346b4419e527d519a1bc5).
2025-07-01T03:15:59.2675079Z         
2025-07-01T03:15:59.2675383Z           with mongodbatlas_advanced_cluster.test,
2025-07-01T03:15:59.2675993Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-01T03:15:59.2676552Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-01T03:15:59.2676851Z         
2025-07-01T03:15:59.2677351Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686346b4419e527d519a1bc5/flexClusters
2025-07-01T03:15:59.2677869Z         POST: HTTP 400 Bad Request (Error code:
2025-07-01T03:15:59.2678366Z         "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error
2025-07-01T03:15:59.2678966Z         occurred. Please try again in a minute or use a different name. Reason: Bad
2025-07-01T03:15:59.2679584Z         Request. Params: [A transient error occurred. Please try again in a minute or
2025-07-01T03:15:59.2680057Z         use a different name.], BadRequestDetail: 
2025-07-01T03:15:59.2680584Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (84.79s)
```

  - FAIL a minute

### Error 2025-07-01T04:49:25+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T04:49:25.863000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='8 days ago')

```
2025-07-01T04:49:25.8634547Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T04:49:25.8648650Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T04:49:25.8736042Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T04:49:25.8737065Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-07-01T04:49:25.8783849Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (75.81s)
```

  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02
  - FAIL a minute

### Error 2025-07-02T01:46:50+00:00
GoTestErrorClassification(error_class='unclassified',author='human',run_id='2025-07-02T01:46:50.653000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='8 days ago')

```
2025-07-02T01:46:50.6534159Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-02T01:46:50.6553444Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-02T01:46:50.6620727Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-02T01:46:50.6621311Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-07-02T01:46:50.6646779Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (75.14s)
```

  - PASS 3 minutes
- 2025-07-03

### Error 2025-07-03T01:45:42+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-03T01:45:42.232000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='7 days ago')

```
2025-07-03T01:45:42.2329459Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-03T01:45:42.2346805Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-03T01:45:42.2403250Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-03T01:45:42.2404362Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-07-03T01:45:42.2444574Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (84.79s)
```

- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 2 minutes
- 2025-07-07 PASS 5 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 5 minutes
- 2025-07-10 PASS 2 minutes