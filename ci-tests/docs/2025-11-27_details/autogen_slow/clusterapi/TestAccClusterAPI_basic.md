# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3) TIMEOUT
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 05:29](#error-2025-10-30t0529410000) |  | dev | timeout | 17998.00s
[2025-11-08 03:30](#error-2025-11-08t0330530000) |  | dev | timeout | 10804.01s
[2025-11-22 03:43](#error-2025-11-22t0343140000) |  | dev | timeout | 11689.06s
[2025-11-25 03:47](#error-2025-11-25t0347110000) |  | dev | timeout | 11903.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T05:29:41+00:00
```
2025-10-30T05:29:41.7289832Z === RUN   TestAccClusterAPI_basic
2025-10-30T05:29:41.7290838Z     resource_test.go:18: Creating execution project: test-acc-tf-p-6486665098303898396
2025-10-30T05:29:41.7293743Z === CONT  TestAccClusterAPI_basic
2025-10-30T05:29:41.7310428Z === NAME  TestAccClusterAPI_basic
2025-10-30T05:29:41.7311178Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2025-10-30T05:29:41.7311861Z         
2025-10-30T05:29:41.7312443Z         Error: Error waiting for changes in Update
2025-10-30T05:29:41.7312901Z         
2025-10-30T05:29:41.7313234Z           with mongodbatlas_cluster_api.test,
2025-10-30T05:29:41.7313859Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-10-30T05:29:41.7314619Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-10-30T05:29:41.7314957Z         
2025-10-30T05:29:41.7315421Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T05:29:41.7315844Z         timeout: 3h0m0s)
2025-10-30T05:29:41.7316107Z panic: test timed out after 5h0m0s
2025-10-30T05:29:41.7316391Z 	running tests:
2025-10-30T05:29:41.7316107Z panic: test timed out after 5h0m0s
2025-10-30T05:29:41.7316391Z 	running tests:
2025-10-30T05:29:41.7316649Z 		TestAccClusterAPI_basic (4h59m58s)
```

- 2025-10-31 PASS 27 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 25 minutes
- 2025-11-04 PASS 27 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-11-06 PASS 29 minutes
- 2025-11-07 PASS 27 minutes
- 2025-11-08

### Error 2025-11-08T03:30:53+00:00
```
2025-11-08T03:30:53.7114907Z === RUN   TestAccClusterAPI_basic
2025-11-08T03:30:53.7116200Z     resource_test.go:18: Creating execution project: test-acc-tf-p-9135223273685450672
2025-11-08T03:30:53.7119001Z === CONT  TestAccClusterAPI_basic
2025-11-08T03:30:53.7139355Z === NAME  TestAccClusterAPI_basic
2025-11-08T03:30:53.7139927Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2025-11-08T03:30:53.7140307Z         
2025-11-08T03:30:53.7140626Z         Error: Error waiting for changes in Create
2025-11-08T03:30:53.7141235Z         
2025-11-08T03:30:53.7141553Z           with mongodbatlas_cluster_api.test,
2025-11-08T03:30:53.7142171Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-11-08T03:30:53.7142748Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-11-08T03:30:53.7143052Z         
2025-11-08T03:30:53.7143509Z         timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING',
2025-11-08T03:30:53.7143940Z         timeout: 3h0m0s)
2025-11-08T03:30:53.7144433Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-11-08T03:30:53.7145405Z         transient error, wait before retrying to allow resource deletion to finish
2025-11-08T03:30:53.7145840Z --- FAIL: TestAccClusterAPI_basic (10804.06s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 22 minutes
- 2025-11-11 PASS 25 minutes
- 2025-11-12 PASS 28 minutes
- 2025-11-13 PASS 46 minutes
- 2025-11-14 PASS 32 minutes
- 2025-11-15 PASS 26 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 27 minutes
- 2025-11-18 PASS 24 minutes
- 2025-11-19 PASS 28 minutes
- 2025-11-20 PASS 28 minutes
- 2025-11-21 PASS 17 minutes
- 2025-11-22

### Error 2025-11-22T03:43:14+00:00
```
2025-11-22T03:43:14.6830666Z === RUN   TestAccClusterAPI_basic
2025-11-22T03:43:14.6834033Z === CONT  TestAccClusterAPI_basic
2025-11-22T03:43:14.6872508Z === NAME  TestAccClusterAPI_basic
2025-11-22T03:43:14.6873347Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2025-11-22T03:43:14.6874192Z         
2025-11-22T03:43:14.6874752Z         Error: Error waiting for changes in Update
2025-11-22T03:43:14.6875263Z         
2025-11-22T03:43:14.6875809Z           with mongodbatlas_cluster_api.test,
2025-11-22T03:43:14.6877090Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-11-22T03:43:14.6878117Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-11-22T03:43:14.6878657Z         
2025-11-22T03:43:14.6879448Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-11-22T03:43:14.6880174Z         timeout: 3h0m0s)
2025-11-22T03:43:14.6880640Z --- FAIL: TestAccClusterAPI_basic (11689.58s)
```

- 2025-11-23: MISSING
- 2025-11-24 PASS 16 minutes
- 2025-11-25

### Error 2025-11-25T03:47:11+00:00
```
2025-11-25T03:47:11.0360419Z === RUN   TestAccClusterAPI_basic
2025-11-25T03:47:11.0362385Z === CONT  TestAccClusterAPI_basic
2025-11-25T03:47:11.0383845Z === NAME  TestAccClusterAPI_basic
2025-11-25T03:47:11.0384371Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2025-11-25T03:47:11.0384717Z         
2025-11-25T03:47:11.0385014Z         Error: Error waiting for changes in Update
2025-11-25T03:47:11.0385299Z         
2025-11-25T03:47:11.0385591Z           with mongodbatlas_cluster_api.test,
2025-11-25T03:47:11.0386288Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-11-25T03:47:11.0386812Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-11-25T03:47:11.0387102Z         
2025-11-25T03:47:11.0387512Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-11-25T03:47:11.0387903Z         timeout: 3h0m0s)
2025-11-25T03:47:11.0388167Z --- FAIL: TestAccClusterAPI_basic (11903.91s)
```

- 2025-11-26 PASS 15 minutes
- 2025-11-27 PASS 24 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 25 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 25 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 26 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 27 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 27 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
