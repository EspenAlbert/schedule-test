# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 11)
Success rate: 71.05%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-26 01:58](#error-2025-06-26t0158040000) |  | dev | unknown | 75.03s
[2025-06-28 01:43](#error-2025-06-28t0143330000) |  | dev |  | 75.05s
[2025-06-30 01:50](#error-2025-06-30t0150250000) |  | dev | real_test_failure | 95.07s
[2025-07-01 01:44](#error-2025-07-01t0144170000) |  | dev | real_test_failure | 85.03s
[2025-07-01 03:15](#error-2025-07-01t0315590000) |  | dev | real_test_failure | 84.08s
[2025-07-01 04:49](#error-2025-07-01t0449250000) |  | dev | flaky_check | 75.08s
[2025-07-02 01:46](#error-2025-07-02t0146500000) |  | dev | unclassified | 75.01s
[2025-07-03 01:45](#error-2025-07-03t0145420000) |  | dev | flaky_check | 84.08s
[2025-07-15 01:52](#error-2025-07-15t0152550000) |  | dev |  | 419.09s
[2025-07-23 15:25](#error-2025-07-23t1525380000) |  | dev |  | 299.07s
[2025-07-24 01:53](#error-2025-07-24t0153450000) |  | dev | flaky_400 | 70.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 2 minutes
- 2025-06-26
  - FAIL a minute

### Error 2025-06-26T01:58:04+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-26T01:58:04.801000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='28 days ago')

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
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-30T01:50:25.782000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='24 days ago')

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
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T01:44:17.101000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='23 days ago')

```
2025-07-01T01:44:17.0101351Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T01:44:17.0116981Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T01:44:17.0167221Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T01:44:17.0167919Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-07-01T01:44:17.0199667Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (85.27s)
```

  - FAIL a minute

### Error 2025-07-01T03:15:59+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T03:15:59.257000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='23 days ago')

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
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T04:49:25.863000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='23 days ago')

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
GoTestErrorClassification(error_class='unclassified',author='human',run_id='2025-07-02T01:46:50.653000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='22 days ago')

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
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-03T01:45:42.232000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='21 days ago')

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
- 2025-07-10
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 5 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14: MISSING
- 2025-07-15

### Error 2025-07-15T01:52:55+00:00
```
2025-07-15T01:52:55.3916816Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-15T01:52:55.3960407Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-15T01:52:55.4063561Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-15T01:52:55.4064628Z     resource_advanced_cluster_test.go:1465: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-07-15T01:52:55.4065381Z         
2025-07-15T01:52:55.4066075Z         Â Â map[string]string{
2025-07-15T01:52:55.4066494Z         -Â 	"connection_strings.standard":     "",
2025-07-15T01:52:55.4068403Z         +Â 	"connection_strings.standard":     "mongodb://test-acc-tf-c-274473938-shard-00-00.71kccm.mongodb-dev.net:27017,test-acc-tf-c-274473938-shard-00-01.71kccm.mongodb-dev.net:27017,test-acc-tf-c-274473938-shard-00-02.71kccm.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-z5km6m-"...,
2025-07-15T01:52:55.4069660Z         -Â 	"connection_strings.standard_srv": "",
2025-07-15T01:52:55.4070417Z         +Â 	"connection_strings.standard_srv": "mongodb+srv://test-acc-tf-c-274473938.71kccm.mongodb-dev.net",
2025-07-15T01:52:55.4070923Z         Â Â }
2025-07-15T01:52:55.4071278Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (419.90s)
```

- 2025-07-16 PASS 2 minutes
- 2025-07-17 PASS 5 minutes
- 2025-07-18 PASS 5 minutes
- 2025-07-19 PASS 5 minutes
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS 2 minutes
- 2025-07-22 PASS 2 minutes
- 2025-07-23
  - PASS 4 minutes
  - PASS 2 minutes
  - FAIL 4 minutes

### Error 2025-07-23T15:25:38+00:00
```
2025-07-23T15:25:38.1275206Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-23T15:25:38.1282893Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-23T15:25:38.1376892Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-23T15:25:38.1378018Z     resource_advanced_cluster_test.go:1465: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-07-23T15:25:38.1378760Z         
2025-07-23T15:25:38.1379227Z         Â Â map[string]string{
2025-07-23T15:25:38.1379641Z         -Â 	"connection_strings.standard":     "",
2025-07-23T15:25:38.1381558Z         +Â 	"connection_strings.standard":     "mongodb://test-acc-tf-c-752566556-shard-00-00.gstlfh.mongodb-dev.net:27017,test-acc-tf-c-752566556-shard-00-01.gstlfh.mongodb-dev.net:27017,test-acc-tf-c-752566556-shard-00-02.gstlfh.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-55k0kz-"...,
2025-07-23T15:25:38.1383024Z         -Â 	"connection_strings.standard_srv": "",
2025-07-23T15:25:38.1383802Z         +Â 	"connection_strings.standard_srv": "mongodb+srv://test-acc-tf-c-752566556.gstlfh.mongodb-dev.net",
2025-07-23T15:25:38.1384593Z         Â Â }
2025-07-23T15:25:38.1384954Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (299.68s)
```

  - PASS 2 minutes
- 2025-07-24

### Error 2025-07-24T01:53:45+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-07-24T01:53:45.717000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='55 seconds ago')

```
2025-07-24T01:53:45.0717478Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-24T01:53:45.0723709Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-24T01:53:45.0814746Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-24T01:53:45.0815368Z     resource_advanced_cluster_test.go:1465: Step 2/3 error: Error running apply: exit status 1
2025-07-24T01:53:45.0815776Z         
2025-07-24T01:53:45.0816444Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-8116533979042057861 (project_id=68818506dcee1c67cef5a9ae).
2025-07-24T01:53:45.0816951Z         
2025-07-24T01:53:45.0817264Z           with mongodbatlas_advanced_cluster.test,
2025-07-24T01:53:45.0817895Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-24T01:53:45.0818470Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-24T01:53:45.0818769Z         
2025-07-24T01:53:45.0819293Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68818506dcee1c67cef5a9ae/flexClusters
2025-07-24T01:53:45.0819930Z         POST: HTTP 400 Bad Request (Error code:
2025-07-24T01:53:45.0820435Z         "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error
2025-07-24T01:53:45.0821052Z         occurred. Please try again in a minute or use a different name. Reason: Bad
2025-07-24T01:53:45.0821679Z         Request. Params: [A transient error occurred. Please try again in a minute or
2025-07-24T01:53:45.0822164Z         use a different name.], BadRequestDetail: 
2025-07-24T01:53:45.0822589Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (70.40s)
```
